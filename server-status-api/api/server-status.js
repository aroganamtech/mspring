// Serverless status endpoint (Vercel).
//
// This is the ONLY place the MongoDB connection string lives. It is read from
// the MONGODB_URI environment variable (set in the Vercel dashboard), never
// committed to the repo and never sent to the browser. The website calls this
// endpoint and receives only { down: true|false } — never any credentials.
//
// Behaviour:
//   • serverdown === true  -> site is ALWAYS shown (online). Manual override.
//   • otherwise            -> a countdown applies. The document stores the
//                             current date; when the calendar date changes, the
//                             count is decreased (by the number of days passed)
//                             and the stored date is updated to today. If the
//                             date has NOT changed, the count is left alone.
//                             When it reaches 0 the site returns down:true.
//
// DB:   mspring        Collection: serverdown        Document key: "status"

import { MongoClient } from "mongodb";

const DB_NAME = "mspring";
const COLLECTION = "serverdown";
const DEFAULT_COUNT = 20;

// Reuse the connection across warm invocations instead of reconnecting each call.
let clientPromise;
function getClient() {
  if (!clientPromise) {
    const uri = process.env.MONGODB_URI;
    if (!uri) throw new Error("MONGODB_URI environment variable is not set");
    clientPromise = new MongoClient(uri).connect();
  }
  return clientPromise;
}

// Today's date as a plain "YYYY-MM-DD" string (UTC).
function todayUTC() {
  return new Date().toISOString().slice(0, 10);
}

// Whole days between two "YYYY-MM-DD" strings (never negative).
function daysBetween(fromYMD, toYMD) {
  const a = Date.parse(`${fromYMD}T00:00:00Z`);
  const b = Date.parse(`${toYMD}T00:00:00Z`);
  if (Number.isNaN(a) || Number.isNaN(b)) return 0;
  return Math.max(0, Math.floor((b - a) / 86400000));
}

export default async function handler(req, res) {
  // Allow the website (any origin) to read the status.
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Cache-Control", "no-store");
  if (req.method === "OPTIONS") return res.status(204).end();

  try {
    const client = await getClient();
    const col = client.db(DB_NAME).collection(COLLECTION);
    const today = todayUTC();

    // Single status document. Created automatically on first run with count 20
    // and today's date.
    let doc = await col.findOne({ key: "status" });
    if (!doc) {
      doc = { key: "status", serverdown: false, count: DEFAULT_COUNT, currentDate: today };
      await col.insertOne(doc);
    }

    // Manual override: serverdown === true keeps the site online no matter what.
    if (doc.serverdown === true) {
      return res.status(200).json({ down: false, count: doc.count ?? null, override: true });
    }

    let count = typeof doc.count === "number" ? doc.count : DEFAULT_COUNT;
    const storedDate = doc.currentDate || today;

    // Only touch the count when the stored date differs from today's date.
    // Decrease by the number of days that have passed, then store today's date.
    if (storedDate !== today) {
      const daysPassed = daysBetween(storedDate, today);
      if (daysPassed > 0 && count > 0) {
        count = Math.max(0, count - daysPassed);
      }
      await col.updateOne({ key: "status" }, { $set: { count, currentDate: today } });
    }

    return res.status(200).json({ down: count <= 0, count });
  } catch (err) {
    // On any backend/DB error, report the site as UP so a transient glitch never
    // takes the live site down for real visitors. To fail closed instead, change
    // `down` to true below.
    return res.status(200).json({ down: false, count: null, error: "status-unavailable" });
  }
}
