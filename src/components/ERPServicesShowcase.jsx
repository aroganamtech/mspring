import "./ERPServicesShowcase.css";
import Icon from "./Icons";
import { Link } from "../router";

import imgAdvisory from "../assets/staffing-meeting.jpg";
import imgFinance from "../assets/erp-services/finance-accounting.jpg";
import imgNetsuite from "../assets/case-netsuite.jpg";
import imgSap from "../assets/erp-services/sap-services.jpg";
import imgOracle from "../assets/erp-services/oracle-services.jpg";
import imgDynamics from "../assets/erp-services/dynamics-365.jpg";

// Photo-card service grid for the /erp hub page only. Distinct visual
// treatment from the /cloud and /ai-data dark abstract-card showcases —
// real/photo imagery, a highlighted title chip, and a purple accent-circle
// decoration, per the "Your Partner in ERP Excellence" reference layout.
const erpServices = [
  {
    icon: "handshake",
    title: "ERP Advisory and Consulting",
    text: "Independent advisory to shape the right ERP roadmap, from platform selection through change management.",
    path: "/erp/advisory",
    img: imgAdvisory,
  },
  {
    icon: "chart",
    title: "Finance and Accounting Process Optimization",
    text: "Streamlined finance workflows, controls and reporting that close the books faster and cleaner.",
    path: "/erp/finance-accounting",
    img: imgFinance,
  },
  {
    icon: "layers",
    title: "NetSuite Solutions",
    text: "End-to-end NetSuite implementation, customization and managed support for growing businesses.",
    path: "/erp/netsuite",
    img: imgNetsuite,
  },
  {
    icon: "cube",
    title: "SAP Services",
    text: "SAP implementation, customization and support across technical and functional modules.",
    path: "/erp/sap",
    img: imgSap,
  },
  {
    icon: "database",
    title: "Oracle Services",
    text: "Oracle Applications and database expertise across implementation, administration and support.",
    path: "/erp/oracle",
    img: imgOracle,
  },
  {
    icon: "grid",
    title: "Microsoft Dynamics 365",
    text: "Dynamics 365 implementation and support across CRM and business-application modules.",
    path: "/erp/dynamics-365",
    img: imgDynamics,
  },
];

export default function ERPServicesShowcase() {
  return (
    <section className="erp-photo-showcase">
      <div className="container">
        <div className="section-head erp-photo-showcase__head">
          <span className="section-eyebrow">ERP</span>
          <h2>Your Partner in ERP Excellence</h2>
          <p className="section-lede">
            Implementation, optimization and support across the enterprise platforms that run
            your business — advisory, finance, NetSuite, SAP, Oracle and Microsoft Dynamics 365.
          </p>
        </div>

        <div className="erp-photo-showcase__grid">
          {erpServices.map((s) => (
            <Link to={s.path} className="erp-photo-card" key={s.title}>
              <div className="erp-photo-card__media" style={{ backgroundImage: `url("${s.img}")` }}>
                <span className="erp-photo-card__accent" aria-hidden="true" />
              </div>
              <div className="erp-photo-card__icon">
                <Icon name={s.icon} size={20} />
              </div>
              <div className="erp-photo-card__body">
                <span className="erp-photo-card__title-chip">{s.title}</span>
                <p className="erp-photo-card__text">{s.text}</p>
                <span className="erp-photo-card__link">
                  Learn more <Icon name="arrowRight" size={14} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
