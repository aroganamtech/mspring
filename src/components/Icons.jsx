// Lightweight hand-authored inline SVG icon set (no external icon library needed).
// Each icon accepts standard SVG props like className / size.

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  viewBox: "0 0 24 24",
};

export function Icon({ name, className = "", size = 22 }) {
  const props = { ...base, width: size, height: size, className };
  switch (name) {
    case "compass":
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="9" />
          <path d="M15.5 8.5 13 13l-4.5 2.5L11 11z" />
        </svg>
      );
    case "layers":
      return (
        <svg {...props}>
          <path d="M12 3 3 8l9 5 9-5-9-5Z" />
          <path d="M3 13.5 12 18.5 21 13.5" />
          <path d="M3 18 12 23l9-5" />
        </svg>
      );
    case "cloud":
      return (
        <svg {...props}>
          <path d="M7 18a4.5 4.5 0 0 1-.5-8.97A5.5 5.5 0 0 1 17.2 8.06 4 4 0 0 1 17 18H7Z" />
        </svg>
      );
    case "shield":
      return (
        <svg {...props}>
          <path d="M12 3 5 6v6c0 4.5 3 7.5 7 9 4-1.5 7-4.5 7-9V6l-7-3Z" />
          <path d="m9.5 12 1.8 1.8L14.8 10" />
        </svg>
      );
    case "code":
      return (
        <svg {...props}>
          <path d="m9 8-4 4 4 4" />
          <path d="m15 8 4 4-4 4" />
        </svg>
      );
    case "users":
      return (
  <svg {...props}>
    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);
    case "userCheck":
      return (
        <svg {...props}>
          <circle cx="10" cy="8" r="3.2" />
          <path d="M4 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
          <path d="m16 12 2 2 3.5-3.5" />
        </svg>
      );
    case "briefcase":
      return (
        <svg {...props}>
          <rect x="3" y="8" width="18" height="12" rx="2" />
          <path d="M8 8V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
          <path d="M3 13h18" />
        </svg>
      );
    case "handshake":
      return (
        <svg {...props}>
          <path d="m2 12 5-4 4 3 3-3 5 4" />
          <path d="M6 12v6l4 3 3-2" />
          <path d="M18 12v6l-3 2" />
        </svg>
      );
    case "target":
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="8.5" />
          <circle cx="12" cy="12" r="4.5" />
          <circle cx="12" cy="12" r="0.8" fill="currentColor" />
        </svg>
      );
    case "globe":
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18" />
          <path d="M12 3c2.8 2.6 4.2 5.7 4.2 9s-1.4 6.4-4.2 9c-2.8-2.6-4.2-5.7-4.2-9s1.4-6.4 4.2-9Z" />
        </svg>
      );
    case "settings":
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="3.2" />
          <path d="M19.4 13.8a7.8 7.8 0 0 0 0-3.6l2-1.5-2-3.4-2.3.9a7.7 7.7 0 0 0-3.1-1.8L13.6 2h-3.2l-.4 2.4a7.7 7.7 0 0 0-3.1 1.8l-2.3-.9-2 3.4 2 1.5a7.8 7.8 0 0 0 0 3.6l-2 1.5 2 3.4 2.3-.9a7.7 7.7 0 0 0 3.1 1.8l.4 2.4h3.2l.4-2.4a7.7 7.7 0 0 0 3.1-1.8l2.3.9 2-3.4-2-1.5Z" />
        </svg>
      );
    case "search":
      return (
        <svg {...props}>
          <circle cx="10.5" cy="10.5" r="6.5" />
          <path d="m20 20-4.3-4.3" />
        </svg>
      );
    case "lock":
      return (
        <svg {...props}>
          <rect x="4.5" y="10.5" width="15" height="10" rx="2" />
          <path d="M8 10.5V7a4 4 0 0 1 8 0v3.5" />
        </svg>
      );
    case "clock":
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5.5l3.5 2" />
        </svg>
      );
    case "fileCheck":
      return (
        <svg {...props}>
          <path d="M7 3h7l4 4v14H7z" />
          <path d="M14 3v4h4" />
          <path d="m9.5 14 2 2 3.5-3.5" />
        </svg>
      );
    case "phone":
      return (
        <svg {...props}>
          <path d="M5 4h3.5l1.5 4-2 1.5a12 12 0 0 0 5.5 5.5L15 13l4 1.5V18a2 2 0 0 1-2 2C9.5 20 4 14.5 4 7a2 2 0 0 1 1-3Z" />
        </svg>
      );
    case "mail":
      return (
        <svg {...props}>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m4 6.5 8 6 8-6" />
        </svg>
      );
    case "mapPin":
      return (
        <svg {...props}>
          <path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21Z" />
          <circle cx="12" cy="9.5" r="2.3" />
        </svg>
      );
    case "arrowRight":
      return (
        <svg {...props}>
          <path d="M4 12h16" />
          <path d="m13 5 7 7-7 7" />
        </svg>
      );
    case "chevronDown":
      return (
        <svg {...props}>
          <path d="m6 9 6 6 6-6" />
        </svg>
      );
    case "menu":
      return (
        <svg {...props}>
          <path d="M3 6h18" />
          <path d="M3 12h18" />
          <path d="M3 18h18" />
        </svg>
      );
    case "x":
      return (
        <svg {...props}>
          <path d="m5 5 14 14" />
          <path d="m19 5-14 14" />
        </svg>
      );
    case "linkedin":
      return (
        <svg {...props}>
          <rect x="3.5" y="3.5" width="17" height="17" rx="3.5" />
          <path d="M7.3 10.2V17" />
          <circle cx="7.3" cy="7.2" r="0.55" fill="currentColor" stroke="none" />
          <path d="M11 17v-4.3c0-1.6 1-2.7 2.5-2.7s2.5 1.1 2.5 2.7V17" />
          <path d="M11 10.2V17" />
        </svg>
      );
    case "facebook":
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="8.5" />
          <path d="M13.6 20.5v-6.2h2l.3-2.5h-2.3V10c0-.7.2-1.2 1.2-1.2h1.3V6.5c-.2 0-1-.1-1.9-.1-1.9 0-3.1 1.1-3.1 3.2v1.8H9v2.5h2.1v6.2" />
        </svg>
      );
    case "instagram":
      return (
        <svg {...props}>
          <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="16.8" cy="7.2" r="0.9" fill="currentColor" stroke="none" />
        </svg>
      );
    case "youtube":
      return (
        <svg {...props}>
          <rect x="2.5" y="6" width="19" height="12" rx="3.5" />
          <path d="m10.5 9.5 5 2.5-5 2.5Z" fill="currentColor" />
        </svg>
      );
    case "checkCircle":
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="9" />
          <path d="m8.2 12.2 2.5 2.5 5.1-5.4" />
        </svg>
      );
    case "sparkle":
      return (
        <svg {...props}>
          <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18" />
        </svg>
      );
    case "brain":
      return (
        <svg {...props}>
          <path d="M9 4.5a2.5 2.5 0 0 0-2.5 2.5v.3A2.7 2.7 0 0 0 5 9.7v1a2.7 2.7 0 0 0 1 2.1v1.2a3 3 0 0 0 3 3h.5" />
          <path d="M15 4.5a2.5 2.5 0 0 1 2.5 2.5v.3A2.7 2.7 0 0 1 19 9.7v1a2.7 2.7 0 0 1-1 2.1v1.2a3 3 0 0 1-3 3h-.5" />
          <path d="M9 4.5V18a2 2 0 0 0 4 0V6.8" />
          <circle cx="7" cy="10" r="0.6" fill="currentColor" stroke="none" />
          <circle cx="17" cy="10" r="0.6" fill="currentColor" stroke="none" />
        </svg>
      );
    case "chart":
      return (
        <svg {...props}>
          <path d="M4 20V4" />
          <path d="M4 20h16" />
          <rect x="7" y="13" width="2.6" height="7" />
          <rect x="12" y="9" width="2.6" height="11" />
          <rect x="17" y="5.5" width="2.6" height="14.5" />
        </svg>
      );
    case "database":
      return (
        <svg {...props}>
          <ellipse cx="12" cy="6" rx="7" ry="3" />
          <path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6" />
          <path d="M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" />
        </svg>
      );
    case "bot":
      return (
        <svg {...props}>
          <rect x="5" y="9" width="14" height="10" rx="3" />
          <path d="M12 9V5.5" />
          <circle cx="12" cy="4" r="1.1" fill="currentColor" stroke="none" />
          <circle cx="9.5" cy="14" r="1" fill="currentColor" stroke="none" />
          <circle cx="14.5" cy="14" r="1" fill="currentColor" stroke="none" />
          <path d="M3.5 12.5v3M20.5 12.5v3" />
        </svg>
      );
    case "eye":
      return (
        <svg {...props}>
          <path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Z" />
          <circle cx="12" cy="12" r="3.2" />
        </svg>
      );
    case "cube":
      return (
        <svg {...props}>
          <path d="M12 3 20 7.5v9L12 21 4 16.5v-9Z" />
          <path d="M4 7.5 12 12l8-4.5" />
          <path d="M12 12v9" />
        </svg>
      );
    case "grid":
      return (
        <svg {...props}>
          <rect x="3.5" y="3.5" width="7" height="7" rx="1.5" />
          <rect x="13.5" y="3.5" width="7" height="7" rx="1.5" />
          <rect x="3.5" y="13.5" width="7" height="7" rx="1.5" />
          <rect x="13.5" y="13.5" width="7" height="7" rx="1.5" />
        </svg>
      );
    case "alertTriangle":
      return (
        <svg {...props}>
          <path d="M12 3.5 21.5 20h-19L12 3.5Z" />
          <path d="M12 9.75v4.5" />
          <path d="M12 17.25h.01" />
        </svg>
      );
    default:
      return null;
  }
}

export default Icon;
