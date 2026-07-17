import "./JobScamAlert.css";
import { Link } from "../router";

// Floating pill button, fixed to the top-right corner on every page and
// every screen size (position: fixed in CSS, not part of the normal
// document flow), linking to the recruitment-fraud advisory page.
export default function JobScamAlert() {
  return (
    <Link to="/job-scam-alert" className="job-scam-alert" role="alert">
      <span className="job-scam-alert__text">Job Scam Alert</span>
    </Link>
  );
}
