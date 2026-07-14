import { useEffect, useState } from "react";

// A tiny, dependency-free hash router (no react-router-dom needed).
// Uses "#/about", "#/services" etc. so the site works on any static host
// without server-side rewrite rules.

function normalize(hash) {
  const path = hash.replace(/^#/, "") || "/";
  return path.startsWith("/") ? path : `/${path}`;
}

export function useHashPath() {
  const [path, setPath] = useState(() => normalize(window.location.hash));

  useEffect(() => {
    const onHashChange = () => setPath(normalize(window.location.hash));
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return path;
}

export function navigate(path) {
  window.location.hash = path;
}

export function Link({ to, className, children, onClick, ...rest }) {
  const handleClick = (e) => {
    onClick?.(e);
  };
  return (
    <a href={`#${to}`} className={className} onClick={handleClick} {...rest}>
      {children}
    </a>
  );
}

export function usePageTitle(title) {
  useEffect(() => {
    const prev = document.title;
    document.title = title
      ? `${title} | Mspring Infotech`
      : "Mspring Infotech | IT Solutions, Digital Transformation & IT Staffing";
    return () => {
      document.title = prev;
    };
  }, [title]);
}
