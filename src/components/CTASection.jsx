import "./CTASection.css";
import Icon from "./Icons";
import { Link } from "../router";

export default function CTASection() {
  return (
    <section className="cta">
      <div className="container cta__inner">
        <div>
          <h2>Ready to build your team or transform your technology?</h2>
          <p>Let's find the perfect solution — every time.</p>
        </div>
        <Link to="/contact" className="btn btn--light">
          Contact Us <Icon name="arrowRight" size={18} />
        </Link>
      </div>
    </section>
  );
}
