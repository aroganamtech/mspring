import { Link } from "../router";

// Fixed badge shown on every page (bottom-left corner) warning visitors about
// fraudulent job offers made in Mspring Infotech's name. Links through to
// "/job-scam-alert" for the full notice and how to verify a genuine offer.
export default function JobScamAlert() {
  return (
    <Link to="/job-scam-alert" className="job-scam-alert" role="alert">
      <svg
        className="job-scam-alert__icon"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M12 2.6 23 21H1L12 2.6Z" fill="#ffb300" />
        <rect x="11.05" y="8.4" width="1.9" height="6.2" rx="0.95" fill="#1c2942" />
        <rect x="11.05" y="16.1" width="1.9" height="1.9" rx="0.95" fill="#1c2942" />
      </svg>
      <span className="job-scam-alert__text">Job Scam Alert</span>
    </Link>
  );
}
