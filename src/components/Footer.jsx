import "./Footer.css";
import logo from "../assets/logo-f.png";
import { company } from "../data/content";
import Icon from "./Icons";
import { Link } from "../router";

const socials = ["facebook", "instagram", "linkedin", "youtube"];

const solutionsLinks = [
  { label: "Cloud", path: "/cloud" },
  { label: "AI & Data", path: "/ai-data" },
  { label: "ERP", path: "/erp" },
  { label: "Cyber Security", path: "/cyber-security" },
];

const companyLinks = [
  { label: "About Us", path: "/about" },
  { label: "Talent Solutions", path: "/talent-solutions" },
  { label: "Industries", path: "/industries" },
  { label: "Careers", path: "/careers" },
  { label: "Contact Us", path: "/contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <img src={logo} alt="Mspring Infotech" />
          <p>
            Innovating IT solutions and digital transformation services for business growth,
            brand visibility, and ROI maximization.
          </p>
          <div className="footer__socials">
            {socials.map((s) => (
              <a href="#" key={s} aria-label={s} className="footer__social">
                <Icon name={s} size={18} />
              </a>
            ))}
          </div>
        </div>

        <div className="footer__col">
          <h5>Solutions</h5>
          <ul>
            {solutionsLinks.map((l) => (
              <li key={l.path}>
                <Link to={l.path}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h5>Company</h5>
          <ul>
            {companyLinks.map((l) => (
              <li key={l.path}>
                <Link to={l.path}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h5>Contact</h5>
          <ul>
            <li>{company.phone}</li>
            <li>{company.email}</li>
            <li>{company.hq}</li>
            <li>{company.branch}</li>
          </ul>
        </div>

        <div className="footer__col">
          <h5>Compliance</h5>
          <ul>
            <li>ISO 27001 Certified</li>
            <li>Clear Books Compliant</li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <span>Copyright {year}, {company.name}. All Rights Reserved.</span>
          <div className="footer__legal">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/isms-policy">ISMS Policy</Link>
            <Link to="/cookie-policy">Cookies Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
