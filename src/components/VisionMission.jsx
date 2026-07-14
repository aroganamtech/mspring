import { mission, vision } from "../data/content";
import Icon from "./Icons";

export default function VisionMission() {
  return (
    <section className="section vision-mission">
      <div className="container">
        <div className="vm-grid">
          <div className="vm-card vm-card--vision">
            <span className="section-eyebrow section-eyebrow--light">{vision.title}</span>
            <h3>{vision.strapline}</h3>
            <p>{vision.description}</p>
            <ul className="vm-list">
              {vision.points.map((p) => (
                <li key={p}>
                  <Icon name="checkCircle" size={18} />
                  {p}
                </li>
              ))}
            </ul>
          </div>

          <div className="vm-card vm-card--mission">
            <span className="section-eyebrow">{mission.title}</span>
            <h3>{mission.strapline}</h3>
            <p>{mission.description}</p>
            <div className="vm-pillars">
              {mission.pillars.map((pillar) => (
                <div className="vm-pillar" key={pillar.title}>
                  <Icon name="checkCircle" size={18} />
                  <div>
                    <strong>{pillar.title}</strong>
                    <p>{pillar.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
