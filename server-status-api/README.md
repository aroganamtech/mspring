# Mspring — Server Status endpoint

A tiny serverless function that lets you turn the website on/off remotely and
run a day-by-day countdown, without ever exposing your MongoDB credentials to
the browser.

The website (`mspring`) shows a ~1 second loading screen on each visit while it
calls this endpoint, then either shows the site or a maintenance screen. The
endpoint only ever returns `{ "down": true }` or `{ "down": false }` — the
MongoDB connection string stays here on the server, in an environment variable.

---

## 1. Deploy to Vercel (free)

1. Create a free account at https://vercel.com
2. Install the CLI: `npm i -g vercel`
3. From **inside this `server-status-api` folder**, run:
   ```
   vercel
   ```
   Accept the defaults. When it finishes it prints a URL like
   `https://mspring-server-status.vercel.app`.
4. Add your MongoDB connection string as an environment variable named
   **`MONGODB_URI`** (Vercel dashboard → your project → Settings → Environment
   Variables), then redeploy with `vercel --prod`.

   > ⚠️ Use a **freshly rotated** password. The one shared earlier should be
   > changed in Atlas → Database Access.

5. Your live endpoint is:
   `https://<your-project>.vercel.app/api/server-status`

## 2. Allow Vercel to reach Atlas

In MongoDB Atlas → **Network Access**, add `0.0.0.0/0` (allow from anywhere).
Serverless functions use changing IPs; your password is what protects the DB.

## 3. Point the website at the endpoint

In the website project, add this line to `.env` (root) and rebuild/redeploy:
```
VITE_SERVER_STATUS_URL=https://<your-project>.vercel.app/api/server-status
```
If this variable is **not** set, the website simply behaves normally (no loading
screen, kill-switch off), so nothing breaks before you wire it up.

---

## The database

- **Database:** `mspring`
- **Collection:** `serverdown`
- **Document:** one document with `key: "status"`. It is created automatically
  the first time the endpoint runs, with `count: 20` and today's date.

Example document:
```json
{
  "key": "status",
  "serverdown": false,
  "count": 20,
  "currentDate": "2026-07-24"
}
```

## How the countdown works

- `currentDate` holds the last date (YYYY-MM-DD) the count was updated.
- Each time the endpoint is hit, it compares `currentDate` to **today's** date.
  - **Same day** → the count is left unchanged.
  - **Date changed** → the count is decreased by the number of days that passed,
    and `currentDate` is set to today.
- When `count` reaches **0**, visitors see the maintenance screen.

## How to manage it (edit the document in Atlas)

| You want to…                        | Set these fields                                            |
|-------------------------------------|------------------------------------------------------------|
| **Always show the website**         | `serverdown: true`  (overrides the countdown completely)   |
| **Run / restart the countdown**     | `serverdown: false`, `count: 20` (or 30…), `currentDate: <today, e.g. "2026-07-24">` |
| **Change the number of days**       | set `count` to the new number (e.g. `30`) — counts down from there |
| **Force the site down right now**   | `serverdown: false`, `count: 0`                            |

Notes:
- `serverdown: true` always wins — the site stays online regardless of `count`.
- When you (re)start the countdown, set `currentDate` to today's date so it
  begins counting from the new number cleanly.
