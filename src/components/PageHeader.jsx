import "./PageHeader.css";
import Icon from "./Icons";
import { Link } from "../router";

export default function PageHeader({
  title,
  description,
  ctaLabel = "Learn More",
  ctaPath = "/contact",
  // Optional image rendered directly under the description text — only
  // used by pages that pass it in (currently just /contact), so pages
  // that don't pass `image` render exactly as before.
  image,
  imageAlt,
}) {
  return (
    <section className={`page-header ${image ? "page-header--has-image" : ""}`}>
      <div className="container page-header__inner">
        <h1>{title}</h1>

        <div className="page-header__arrows" aria-hidden="true">
          <svg viewBox="0 0 120 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 4c10 0 22 5 22 18S14 40 4 40c8-8 10-12 10-18S12 12 4 4Z" fill="#a4b048" />
            <path d="M40 4c10 0 22 5 22 18S50 40 40 40c8-8 10-12 10-18S48 12 40 4Z" fill="#a4b048" />
            <path d="M78 6l30 16-30 16V6Z" fill="#a4b048" />
          </svg>
        </div>

        <div className="page-header__footer">
          {description && <p>{description}</p>}
          {!image && (
            <Link to={ctaPath} className="page-header__btn">
              {ctaLabel} <Icon name="arrowRight" size={18} />
            </Link>
          )}
        </div>

        {image && (
          <>
            <img className="page-header__image" src={image} alt={imageAlt || ""} />
            <div className="page-header__btn-row">
              <Link to={ctaPath} className="page-header__btn">
                {ctaLabel} <Icon name="arrowRight" size={18} />
              </Link>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
