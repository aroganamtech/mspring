import "./VisitorBadge.css";
import { useEffect, useState } from "react";
import Icon from "./Icons";
import { getVisitorCount } from "../utils/cookies";

// Fixed badge shown on every page (bottom-right corner) displaying a
// visitor/member count. BASELINE is the starting number on top of which
// getVisitorCount() adds a REAL, shared count of visits from every browser
// site-wide (fetched from a public counting service), not just this one
// browser — so the number actually grows as new people visit the site.
const BASELINE = 1043528;

export default function VisitorBadge() {
  // null until the live total arrives — the badge stays hidden instead of
  // first flashing the static baseline number and then jumping to the real
  // count a moment later.
  const [count, setCount] = useState(null);

  useEffect(() => {
    let cancelled = false;
    getVisitorCount(BASELINE).then((total) => {
      if (!cancelled) setCount(total);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  if (count === null) {
    return null;
  }

  return (
    <div className="visitor-badge" role="status" aria-label={`${count} members`}>
      <div className="visitor-badge__inner">
        <span className="visitor-badge__count">{count}</span>
        <Icon name="users" size={18} className="visitor-badge__icon" />
      </div>
    </div>
  );
}
