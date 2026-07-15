import Icon from "./Icons";

// Fixed badge shown on every page (bottom-right corner) displaying a
// visitor/member count. Currently a static number — swap VISITOR_COUNT
// for a live value once real tracking (e.g. GA4 + a Cloud Function) is
// wired up.
const VISITOR_COUNT = 1043528;

export default function VisitorBadge() {
  return (
    <div className="visitor-badge" role="status" aria-label={`${VISITOR_COUNT.toLocaleString()} members`}>
      <div className="visitor-badge__inner">
        <span className="visitor-badge__count">{VISITOR_COUNT.toLocaleString()}</span>
        <Icon name="users" size={18} className="visitor-badge__icon" />
      </div>
    </div>
  );
}
