import "./WhyUs.css";
import { advantages, awards } from "../data/content";
import Icon from "./Icons";
import leaderAward from "../assets/clients/leader.jpeg";

export default function WhyUs() {
  return (
    <section id="why-us" className="section why-us">
      <div className="container">
        <div className="section-head">
          <span className="section-eyebrow">Mspring's Advantage</span>
          <h2>Why organizations choose to partner with us</h2>
        </div>

        <div className="advantages">
          {advantages.map((a) => (
            <div className="advantage-card" key={a.title}>
              <Icon name={a.icon} size={22} />
              <span>{a.title}</span>
            </div>
          ))}
        </div>

        <div className="awards">
          <div className="awards__inner">
            <div className="awards__photo">
              <img src={leaderAward} alt="Mspring Infotech receiving the Most Promising Company of the Year 2023 award at the Business Mint Nation Wide Awards" />
            </div>
            <div className="awards__content">
              <div className="section-head section-head--compact">
                <span className="section-eyebrow">Compliance &amp; Recognition</span>
                <h3>Certified, compliant, and recognized by industry leaders</h3>
              </div>
              <div className="awards__grid">
                {awards.map((a) => (
                  <div className="award-card" key={a.title}>
                    <Icon name="fileCheck" size={24} />
                    <h4>{a.title}</h4>
                    <p>{a.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
  );
}
