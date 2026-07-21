import "./CookieConsent.css";
import { useEffect, useState } from "react";
import { getConsent, setConsent } from "../utils/cookies";
import { Link } from "../router";

// Cookie consent banner shown on every page until the visitor makes a
// choice. Accepting turns on the local (client-side only) storage features
// — the returning-visitor id used by the visitor-count badge, and saving a
// copy of submitted messages/job applications in this browser. Rejecting
// keeps the site fully working, just without any of that local storage.
export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(getConsent() === null);
  }, []);

  if (!visible) return null;

  const decide = (value) => {
    setConsent(value);
    setVisible(false);
  };

  return (
    <div className="cookie-consent" role="dialog" aria-label="Cookie consent">
      <div className="cookie-consent__inner">
        <p>
          We use cookies and local storage to remember returning visitors and to keep a local
          copy of messages or job applications you submit on this site. See our{" "}
          <Link to="/cookie-policy">Cookie Policy</Link> for details.
        </p>
        <div className="cookie-consent__actions">
          <button type="button" className="btn btn--ghost" onClick={() => decide("rejected")}>
            Reject
          </button>
          <button type="button" className="btn btn--primary" onClick={() => decide("accepted")}>
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
