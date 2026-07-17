import "./Journey.css";
import { journey } from "../data/content";

export default function Journey() {
  return (
    <section id="journey" className="section journey">
      <div className="container">
        <div className="section-head">
          <span className="section-eyebrow">Our Journey</span>
          <h2>Over a decade of sustained, fast-paced growth</h2>
        </div>

        <div className="timeline">
          {journey.map((item, idx) => (
            <div className={`timeline-item ${idx % 2 === 0 ? "timeline-item--left" : "timeline-item--right"}`} key={item.period}>
              <div className="timeline-item__dot" />
              <div className="timeline-item__card">
                <span className="timeline-item__period">{item.period}</span>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
