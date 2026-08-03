import { useEffect, useState } from "react";

// Minimum time the loading screen stays visible, so every visitor sees a smooth
// ~1 second loading beat while the status is checked (rather than a flicker).
const MIN_LOADING_MS = 1000;

// Reads the site's status from the endpoint in VITE_SERVER_STATUS_URL.
// Returns "checking" | "up" | "down".
//   • While checking, the app shows the 1-second loading screen.
//   • "down"  -> the endpoint reported { down: true } (maintenance screen).
//   • "up"    -> normal site.
// If VITE_SERVER_STATUS_URL isn't set, returns "up" immediately (feature off,
// no loading screen) so the site works normally before it's wired up.
// Fails OPEN: on any error or timeout it resolves to "up" so a glitch can never
// block real visitors.
export function useServerStatus() {
  const url = import.meta.env.VITE_SERVER_STATUS_URL;
  const [status, setStatus] = useState(url ? "checking" : "up");

  useEffect(() => {
    if (!url) return;

    let cancelled = false;
    const startedAt = Date.now();
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 5000);

    // Resolve, but keep the loading screen up for at least MIN_LOADING_MS.
    const resolve = (next) => {
      const wait = Math.max(0, MIN_LOADING_MS - (Date.now() - startedAt));
      setTimeout(() => {
        if (!cancelled) setStatus(next);
      }, wait);
    };

    fetch(url, { signal: controller.signal, cache: "no-store" })
      .then((r) => r.json())
      .then((data) => resolve(data && data.down === true ? "down" : "up"))
      .catch(() => resolve("up")) // fail open
      .finally(() => clearTimeout(timer));

    return () => {
      cancelled = true;
      clearTimeout(timer);
      controller.abort();
    };
  }, [url]);

  return status;
}
