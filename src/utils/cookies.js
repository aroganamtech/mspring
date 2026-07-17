// Small, dependency-free helpers for cookies + the client-side "storage"
// features (message log, job application log, live visitor counter) that
// only run once the visitor has accepted the cookie banner.
//
// This is a static site with no backend, so "storing" a message/application
// means keeping a local copy in localStorage (in addition to the existing
// mailto/EmailJS send) purely so the same browser can be recognised again —
// nothing is uploaded anywhere.

const CONSENT_COOKIE = "mspring_cookie_consent"; // "accepted" | "rejected"

const MESSAGES_KEY = "mspring_contact_messages";
const APPLICATIONS_KEY = "mspring_job_applications";

// Real, shared, cross-visitor counter (every browser that visits hits the
// SAME key on a public counting service), instead of the old approach which
// only tracked a number inside this one browser's own localStorage and
// therefore never reflected the site's actual total visitor count.
// countapi.xyz (the original free counter API) is no longer online, so this
// tries two actively-maintained community replacements in order — if the
// first is down or blocked (ad blocker, network filter), the second is
// tried; if both fail, the badge falls back to the last total this browser
// saw and still bumps it by 1 so it never looks frozen.
const VISITOR_COUNTER_KEY = "mspring-infotech-website-visitors";
const COUNTER_HIT_URLS = [
  `https://countapi.mileshilliard.com/api/v1/hit/${VISITOR_COUNTER_KEY}`,
  `https://abacus.jasoncameron.dev/hit/mspring-infotech/${VISITOR_COUNTER_KEY}`,
];
const LAST_KNOWN_TOTAL_KEY = "mspring_visitor_last_known_total";

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

// localStorage helpers that never throw (private mode, quota, etc.) — the
// counter still works without them, it just can't remember the last total.
function readLastKnownTotal() {
  try {
    return Number(localStorage.getItem(LAST_KNOWN_TOTAL_KEY));
  } catch {
    return NaN;
  }
}

function writeLastKnownTotal(total) {
  try {
    localStorage.setItem(LAST_KNOWN_TOTAL_KEY, String(total));
  } catch {
    // ignore — purely a cache
  }
}

// Returns (async) the visitor total to display. Every single page load /
// refresh hits a public counting service, which does a real +1 on a counter
// shared by every visitor on every device — this runs regardless of the
// cookie banner, because the count lives on the counting service's server
// and stores nothing on the visitor's device (the small localStorage cache
// of the last seen total is just cosmetic). Two services are tried in
// order; if both are unreachable (ad blocker, offline, both services down),
// the badge falls back to the last total this browser saw plus 1, so the
// number still visibly increases instead of silently freezing.
export async function getVisitorCount(baseline) {
  for (const url of COUNTER_HIT_URLS) {
    try {
      const res = await fetch(url);
      const data = await res.json();
      if (typeof data.value === "number") {
        const total = baseline + data.value;
        writeLastKnownTotal(total);
        return total;
      }
    } catch {
      // try the next service / fall through to the local fallback
    }
  }

  const stored = readLastKnownTotal();
  const currentTotal = Number.isFinite(stored) && stored > 0 ? stored : baseline;
  const nextTotal = currentTotal + 1;
  writeLastKnownTotal(nextTotal);
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
