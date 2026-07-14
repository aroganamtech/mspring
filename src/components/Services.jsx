import { services, techGroups } from "../data/content";
import Icon from "./Icons";

export default function Services() {
  return (
    <section id="services" className="section services">
      <div className="container">
        <div className="section-head">
          <span className="section-eyebrow">Our Services</span>
          <h2>Driving innovation. Enabling growth. Securing the future.</h2>
          <p className="section-lede">
            Strategic guidance and end-to-end IT services tailored to accelerate digital
            transformation across industries.
          </p>
        </div>

        <div className="services__grid">
          {services.map((s) => (
            <div className="service-card" key={s.title}>
              <div className="service-card__icon">
                <Icon name={s.icon} size={26} />
              </div>
              <h3>{s.title}</h3>
              <p>{s.description}</p>
            </div>
          ))}
        </div>

        <div className="tech-block">
          <div className="section-head section-head--compact">
            <span className="section-eyebrow">Technology Stack</span>
            <h3>Full-spectrum expertise, from front-end to infrastructure</h3>
          </div>
          <div className="tech-block__grid">
            {techGroups.map((group) => (
              <div className="tech-group" key={group.title}>
                <h4>{group.title}</h4>
                <div className="tech-group__chips">
                  {group.items.map((item) => (
                    <span className="chip" key={item}>
                      {item}
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
