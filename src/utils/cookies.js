// Small, dependency-free helpers for cookies + the client-side "storage"
// features (message log, job application log, returning-visitor id) that
// only run once the visitor has accepted the cookie banner.
//
// This is a static site with no backend, so "storing" a message/application
// means keeping a local copy in localStorage (in addition to the existing
// mailto/EmailJS send) purely so the same browser can be recognised again —
// nothing is uploaded anywhere.

const CONSENT_COOKIE = "mspring_cookie_consent"; // "accepted" | "rejected"
const VISITOR_ID_COOKIE = "mspring_visitor_id";
const VISITED_COUNTED_COOKIE = "mspring_visitor_counted";

const MESSAGES_KEY = "mspring_contact_messages";
const APPLICATIONS_KEY = "mspring_job_applications";
const VISITOR_TOTAL_KEY = "mspring_visitor_total";

/* ---------------- low-level cookie helpers ---------------- */

export function setCookie(name, value, days = 365) {
  const maxAge = days * 24 * 60 * 60;
  document.cookie = `${name}=${encodeURIComponent(value)};max-age=${maxAge};path=/;SameSite=Lax`;
}

export function getCookie(name) {
  const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : null;
}

/* ---------------- consent ---------------- */

export function getConsent() {
  return getCookie(CONSENT_COOKIE); // "accepted" | "rejected" | null (not decided yet)
}

export function setConsent(value) {
  setCookie(CONSENT_COOKIE, value, 365);
}

export function hasAcceptedCookies() {
  return getConsent() === "accepted";
}

/* ---------------- returning-visitor id + count ----------------
   Only ever created/read once cookies are accepted. Used so the visitor
   badge's displayed count increases once per unique visitor, not on every
   page load / repeat visit from the same browser. */

function getOrCreateVisitorId() {
  let id = getCookie(VISITOR_ID_COOKIE);
  if (!id) {
    id =
      typeof crypto !== "undefined" && crypto.randomUUID
        ? crypto.randomUUID()
        : `visitor-${Date.now()}-${Math.random().toString(16).slice(2)}`;
    setCookie(VISITOR_ID_COOKIE, id, 365);
  }
  return id;
}

// Returns the visitor total to display, incrementing the stored baseline
// exactly once for a never-seen-before browser. Safe to call on every
// render — it only writes on the first call for a given visitor.
export function getVisitorCount(baseline) {
  if (!hasAcceptedCookies()) {
    return baseline;
  }

  getOrCreateVisitorId();

  const stored = Number(localStorage.getItem(VISITOR_TOTAL_KEY));
  const currentTotal = Number.isFinite(stored) && stored > 0 ? stored : baseline;
  const alreadyCounted = getCookie(VISITED_COUNTED_COOKIE) === "1";

  if (alreadyCounted) {
    return currentTotal;
  }

  const nextTotal = currentTotal + 1;
  localStorage.setItem(VISITOR_TOTAL_KEY, String(nextTotal));
  setCookie(VISITED_COUNTED_COOKIE, "1", 365);
  return nextTotal;
}

/* ---------------- message / application log ----------------
   Both are no-ops unless the visitor has accepted cookies. */

function appendToLocalList(key, entry) {
  if (!hasAcceptedCookies()) return;
  try {
    const existing = JSON.parse(localStorage.getItem(key) || "[]");
    existing.push({ ...entry, savedAt: new Date().toISOString() });
    localStorage.setItem(key, JSON.stringify(existing));
  } catch {
    // localStorage unavailable (private mode, quota, etc.) — fail silently,
    // the actual mailto/EmailJS send still goes through regardless.
  }
}

export function saveContactMessage(entry) {
  appendToLocalList(MESSAGES_KEY, entry);
}

export function saveJobApplication(entry) {
  appendToLocalList(APPLICATIONS_KEY, entry);
}
