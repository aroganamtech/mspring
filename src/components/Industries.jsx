import { clientSectors, industries, roleCategories } from "../data/content";
import Icon from "./Icons";
import { Link } from "../router";

export default function Industries() {
  return (
    <section id="industries" className="section industries">
      <div className="container">
        <div className="section-head">
          <span className="section-eyebrow">Industry Portfolio</span>
          <h2>Delivering tailored technology solutions across sectors</h2>
        </div>

        <div className="industries__grid">
          {industries.map((ind) => (
            <Link to={ind.path} className="industry-card" key={ind.title}>
              <h4>{ind.title}</h4>
              <p>{ind.description}</p>
              <span className="industry-card__link">
                Learn more <Icon name="arrowRight" size={14} />
              </span>
            </Link>
          ))}
        </div>

        <div className="client-sectors">
          <span className="client-sectors__label">Our clients also span:</span>
          <div className="client-sectors__tags">
            {clientSectors.map((sector) => (
              <span className="chip chip--outline" key={sector}>
                {sector}
              </span>
            ))}
          </div>
        </div>

        <div className="roles">
          <div className="section-head section-head--compact">
            <span className="section-eyebrow">Roles We Staff</span>
            <h3>Deep bench strength across technology &amp; business functions</h3>
          </div>
          <div className="roles__grid">
            {roleCategories.map((cat) => (
              <div className="role-card" key={cat.title}>
                <div className="role-card__head">
                  <Icon name="users" size={20} />
                  <h4>{cat.title}</h4>
                </div>
                <div className="role-card__chips">
                  {cat.roles.map((role) => (
                    <span className="chip" key={role}>
                      {role}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
