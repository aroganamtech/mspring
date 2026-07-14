import Icon from "./Icons";

// Dark, hover-reveal service grid for the /cloud hub page only.
// Not a shared/generic component — intentionally scoped so it never
// renders on the other hub pages (/ai-data, /erp, /talent-solutions,
// /industries, /careers), which keep using the plain HubPage grid.
const cloudServices = [
  {
    icon: "compass",
    title: "Cloud Consulting",
    text: "Strategic guidance to help you choose the right cloud model, architecture, and roadmap for your business.",
  },
  {
    icon: "layers",
    title: "Cloud Migration & Infrastructure",
    text: "End-to-end migration of applications, data and infrastructure to the cloud with minimal downtime.",
  },
  {
    icon: "settings",
    title: "DevOps & Automation",
    text: "CI/CD pipelines, containerization and automation that help engineering teams ship faster and more reliably.",
  },
  {
    icon: "clock",
    title: "Managed Cloud Services",
    text: "Ongoing monitoring, optimization and support so your cloud environment stays secure, performant and cost-efficient.",
  },
  {
    icon: "code",
    title: "Cloud Native Development",
    text: "Scalable, resilient applications built with cloud-native architecture, microservices and container orchestration.",
  },
  {
    icon: "shield",
    title: "Cloud Security & Compliance",
    text: "Vulnerability assessment, penetration testing (VAPT) and compliance reviews that keep your environment audit-ready.",
  },
];

export default function CloudServicesShowcase() {
  return (
    <section className="cloud-showcase">
      <div className="container">
        <div className="section-head cloud-showcase__head">
          <span className="section-eyebrow section-eyebrow--light">Cloud</span>
          <h2>Our Cloud Services</h2>
          <p className="section-lede">
            Our tailored cloud solutions that unlock innovation, drive scalability, and reduce
            costs, empowering your business to thrive in the digital era.
          </p>
        </div>

        <div className="cloud-showcase__grid">
          {cloudServices.map((s) => (
            <div className="cloud-showcase-card" key={s.title}>
              <div className="cloud-showcase-card__icon">
                <Icon name={s.icon} size={26} />
              </div>
              <h3>{s.title}</h3>
              <p className="cloud-showcase-card__text">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
