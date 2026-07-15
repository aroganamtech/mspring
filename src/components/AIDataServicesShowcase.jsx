import Icon from "./Icons";
import { Link } from "../router";

import bgMachineLearning from "../assets/ai-data-services/ai-machine-learning.svg";
import bgDataScience from "../assets/ai-data-services/data-science-analytics.svg";
import bgDataEngineering from "../assets/ai-data-services/data-engineering.svg";
import bgAutomation from "../assets/ai-data-services/chatbots-automation.svg";

// Photo-card service grid for the /ai-data hub page only — mirrors the
// /cloud page's CloudServicesShowcase treatment. Not a shared/generic
// component, intentionally scoped so it never renders on the other hub
// pages, which keep using the plain HubPage text-link grid.
const aiDataServices = [
  {
    icon: "brain",
    title: "AI & Machine Learning",
    text: "Custom machine learning models and AI-powered features built for real business problems.",
    path: "/ai-data/ai-ml",
    bg: bgMachineLearning,
  },
  {
    icon: "chart",
    title: "Data Science & Analytics",
    text: "Turning raw, scattered data into dashboards and insights your teams can actually act on.",
    path: "/ai-data/data-science",
    bg: bgDataScience,
  },
  {
    icon: "database",
    title: "Data Engineering",
    text: "Reliable data pipelines and architecture that feed your analytics and AI initiatives.",
    path: "/ai-data/data-engineering",
    bg: bgDataEngineering,
  },
  {
    icon: "bot",
    title: "Chatbots & Intelligent Automation",
    text: "Conversational AI and process automation that reduce manual work and improve response times.",
    path: "/ai-data/automation",
    bg: bgAutomation,
  },
];

export default function AIDataServicesShowcase() {
  return (
    <section className="cloud-showcase ai-showcase">
      <div className="container">
        <div className="section-head cloud-showcase__head">
          <span className="section-eyebrow section-eyebrow--light">AI &amp; Data</span>
          <h2>Pioneering AI/ML brilliance - Our Offerings</h2>
          <p className="section-lede">
            Our comprehensive AI / ML solutions helps businesses of all sizes to operationalize
            and manage their AI / ML models.
          </p>
        </div>

        <div className="cloud-showcase__grid ai-showcase__grid">
          {aiDataServices.map((s) => (
            <Link
              to={s.path}
              className="cloud-showcase-card"
              key={s.title}
              style={{ backgroundImage: `url(${s.bg})` }}
            >
              <span className="cloud-showcase-card__overlay" aria-hidden="true" />
              <div className="cloud-showcase-card__icon">
                <Icon name={s.icon} size={24} />
              </div>
              <div className="cloud-showcase-card__body">
                <h3>{s.title}</h3>
                <p className="cloud-showcase-card__text">{s.text}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
