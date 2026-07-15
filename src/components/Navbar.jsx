import { useEffect, useRef, useState } from "react";
import logo from "../assets/logo.png";
import { menu } from "../data/menu";
import Icon from "./Icons";
import { Link, navigate, useHashPath } from "../router";

const searchIndex = menu.flatMap((item) => [
  item,
  ...(item.children || []),
]);

// TODO: replace with the real employee portal URL (e.g. an HRMS/intranet login).
const EMPLOYEE_LOGIN_URL = "#";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState({});
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const searchInputRef = useRef(null);
  const path = useHashPath();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  useEffect(() => {
    setOpen(false);
    setMobileExpanded({});
    setSearchOpen(false);
    setQuery("");
  }, [path]);

  useEffect(() => {
    if (searchOpen) searchInputRef.current?.focus();
  }, [searchOpen]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const q = query.trim().toLowerCase();
    if (!q) return;
    const match = searchIndex.find((item) => item.label.toLowerCase().includes(q));
    if (match) navigate(match.path);
  };

  const isActive = (item) => {
    if (item.path === "/") return path === "/";
    if (path === item.path) return true;
    if (item.children) return item.children.some((c) => c.path === path);
    return false;
  };

  const toggleMobile = (itemPath) => {
    setMobileExpanded((prev) => ({ ...prev, [itemPath]: !prev[itemPath] }));
  };

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__inner container">
        <Link to="/" className="navbar__brand">
          <img src={logo} alt="Mspring Infotech" />
        </Link>

        <nav className={`navbar__links ${open ? "navbar__links--open" : ""}`}>
          {menu.map((item) => (
            <div key={item.path} className={`nav-item ${item.children ? "nav-item--dropdown" : ""}`}>
              <div className="nav-item__row">
                <Link to={item.path} className={isActive(item) ? "navbar__link--active" : ""}>
                  {item.label}
                </Link>
                {item.children && (
                  <>
                    <Icon name="chevronDown" size={12} className="nav-item__chevron" />
                    <button
                      type="button"
                      className="nav-item__mobile-toggle"
                      aria-label={`Toggle ${item.label} submenu`}
                      onClick={() => toggleMobile(item.path)}
                    >
                      <Icon
                        name="chevronDown"
                        size={16}
                        className={mobileExpanded[item.path] ? "is-open" : ""}
                      />
                    </button>
                  </>
                )}
              </div>

              {item.children && (
                <div className={`nav-dropdown ${mobileExpanded[item.path] ? "nav-dropdown--mobile-open" : ""}`}>
                  {item.children.map((child) => (
                    <Link
                      key={child.path}
                      to={child.path}
                      className={path === child.path ? "nav-dropdown__link--active" : ""}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="navbar__utility">
          <Link to="/careers/apply" className="navbar__cta">
            Apply Job
          </Link>

          <a
            href={EMPLOYEE_LOGIN_URL}
            className="navbar__employee-login"
            target="_blank"
            rel="noopener noreferrer"
          >
            Employee Login
          </a>

          <div className={`navbar__search ${searchOpen ? "navbar__search--open" : ""}`}>
            <form onSubmit={handleSearchSubmit} className="navbar__search-form">
              <input
                ref={searchInputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search the site…"
                aria-label="Search"
              />
            </form>
            <button
              type="button"
              className="navbar__search-btn"
              aria-label={searchOpen ? "Close search" : "Open search"}
              onClick={() => setSearchOpen((v) => !v)}
            >
              <Icon name={searchOpen ? "x" : "search"} size={18} />
            </button>
          </div>

          <button
            type="button"
            className="navbar__toggle"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <Icon name={open ? "x" : "menu"} />
          </button>
        </div>
      </div>
    </header>
  );
}
