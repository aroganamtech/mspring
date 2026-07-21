import "./Staffing.css";
import {
  accountManagement,
  aiOutcomes,
  aiOutcomesIntro,
  aiProcessSteps,
  recruitmentProcess,
  staffingIntro,
  staffingServices,
} from "../data/content";
import staffingMeeting from "../assets/staffing-meeting.jpg";
import recruitmentProcessGraphic from "../assets/recruitment-process.jpg";
import Icon from "./Icons";
import { Link } from "../router";

export default function Staffing() {
  return (
    <section id="staffing" className="section staffing">
      <div className="container">
        <div className="section-head">
          <span className="section-eyebrow">IT Staffing &amp; Recruitment</span>
          <h2>Building teams that move your business forward</h2>
          <p className="section-lede">{staffingIntro}</p>
        </div>

        <div className="staffing__services">
          {staffingServices.map((s) => (
            <Link to={s.path} className="staffing-service" key={s.title}>
              <Icon name={s.icon} size={24} />
              <span>{s.title}</span>
              <Icon name="arrowRight" size={16} className="staffing-service__arrow" />
            </Link>
          ))}
        </div>

        <div className="staffing__spotlight">
          <div className="staffing__spotlight-photo">
            <img src={staffingMeeting} alt="Mspring Infotech consultant presenting to a client team" />
          </div>
          <div className="staffing__spotlight-copy">
            <span className="section-eyebrow">Consultative, Not Transactional</span>
            <h3>We sit at the table with hiring teams, not behind a job board</h3>
            <p>
              Every engagement starts with understanding the role, the team and the culture it
              needs to fit into — not just a keyword match on a résumé. Our consultants brief
              directly with client stakeholders before a single candidate is sourced.
            </p>
          </div>
        </div>

        <div className="process">
          <div className="section-head section-head--compact">
            <span className="section-eyebrow">Our Process</span>
            <h3>How we find, place &amp; support the right talent</h3>
          </div>
          <div className="process__grid">
            {recruitmentProcess.map((step) => (
              <div className="process-step" key={step.step}>
                <span className="process-step__num">{step.step}</span>
                <h4>{step.title}</h4>
                <p>{step.description}</p>
              </div>
            ))}
          </div>

          <div className="process__visual">
            <img src={recruitmentProcessGraphic} alt="Mspring Infotech recruitment process steps: Brief, Strategy & Search, Screening & Interview, Presentation & First Interview, Second Interview, Selection" />
          </div>
        </div>

        <div className="ai-outcomes">
          <div className="section-head section-head--compact">
            <span className="section-eyebrow">AI, Built Around Your Outcomes</span>
            <h3>We Deliver AI Outcomes.</h3>
            {aiOutcomesIntro.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
          <div className="ai-outcomes__grid">
            {aiOutcomes.map((item) => (
              <div className="ai-outcomes-card" key={item.title}>
                <Icon name={item.icon} size={26} />
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="ai-process">
          <h3>How We Build AI That Actually Gets Used</h3>
          <div className="ai-process__grid">
            {aiProcessSteps.map((step) => (
              <div className="ai-process-step" key={step.title}>
                <div className="ai-process-step__icon">
                  <Icon name={step.icon} size={30} />
                </div>
                <h4>{step.title}</h4>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="account-mgmt">
          <div className="account-mgmt__copy">
            <span className="section-eyebrow section-eyebrow--light">Account Management</span>
            <h3>Dedicated support, from day one to every hire after</h3>
            <p>
              Every client is backed by a dedicated account representative and a reporting
              cadence built to keep hiring on track.
            </p>
          </div>
          <ul className="account-mgmt__list">
            {accountManagement.map((item) => (
              <li key={item}>
                <Icon name="checkCircle" size={18} />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
