import { useEffect, useState } from "react";
import Icon from "./Icons";
import { getVisitorCount } from "../utils/cookies";

// Fixed badge shown on every page (bottom-right corner) displaying a
// visitor/member count. BASELINE is the starting number; if the visitor has
// accepted cookies, getVisitorCount() bumps it by one the first time this
// browser is ever seen (via a cookie) and remembers that from then on, so
// the same returning visitor doesn't increase the count on every visit. If
// cookies are rejected (or not yet decided), it just shows the baseline.
const BASELINE = 1043528;

export default function VisitorBadge() {
  const [count, setCount] = useState(BASELINE);

  useEffect(() => {
    setCount(getVisitorCount(BASELINE));
  }, []);

  return (
    <div className="visitor-badge" role="status" aria-label={`${count.toLocaleString()} members`}>
      <div className="visitor-badge__inner">
        <span className="visitor-badge__count">{count.toLocaleString()}</span>
        <Icon name="users" size={18} className="visitor-badge__icon" />
      </div>
    </div>
  );
}
