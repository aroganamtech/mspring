import "./Leadership.css";
import { leadershipTeam } from "../data/content";
import teamFounder from "../assets/WhatsApp Image 2026-07-21 at 10.23.20 AM.jpeg";

const photos = {
  "team-founder": teamFounder,
};

export default function Leadership() {
  return (
    <section className="section leadership">
      <div className="container">
        <div className="section-head">
          <span className="section-eyebrow">Leadership</span>
          <h2>The people behind Mspring Infotech</h2>
          <p className="section-lede">
            A leadership team built on hands-on delivery experience across IT solutions and
            enterprise staffing — not just management from a distance.
          </p>
        </div>

        <div className="leadership__grid">
          {leadershipTeam.map((person) => (
            <div
              className={`leadership-card leadership-card--${person.slug}`}
              key={person.title}
            >
              <div className={`leadership-card__photo leadership-card__photo--${person.slug}`}>
                <img src={photos[person.photo]} alt={person.name || person.title} />
              </div>
              <div className={`leadership-card__body leadership-card__body--${person.slug}`}>
                {person.name && <strong>{person.name}</strong>}
                <span>{person.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
