import CTASection from "../components/CTASection";
import Icon from "../components/Icons";
import PageHeader from "../components/PageHeader";
import { usePageTitle } from "../router";

// Inline styles only — this page intentionally adds no new rules to App.css.
const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
  gap: "24px",
};
const card = {
  background: "#fff",
  border: "1px solid var(--border)",
  borderRadius: "18px",
  padding: "32px 28px",
  boxShadow: "var(--shadow-sm)",
};
const cardIcon = { color: "var(--olive-dark)", marginBottom: "16px" };
const cardTitle = { fontSize: "20px", marginBottom: "10px" };
const cardText = { margin: 0 };

const benefits = [
  {
    icon: "sparkle",
    title: "Accelerate Innovation",
    text: "Adopt modern, scalable cloud platforms so your teams can build, experiment and ship faster.",
  },
  {
    icon: "target",
    title: "Optimize Costs",
    text: "Right-size your infrastructure and pay only for what you use — cutting waste without losing performance.",
  },
  {
    icon: "shield",
    title: "Ensure Robust Security",
    text: "Protect your data and workloads with encryption, access controls and continuous monitoring by design.",
  },
];

export default function CloudSolutionsPage() {
  usePageTitle("Cloud Solutions");

  return (
    <>
      <PageHeader
        title="Accelerate Your Business with Cutting-Edge Cloud Solutions"
        description="Transform your IT infrastructure with expert cloud services designed to accelerate innovation, optimize costs, and ensure robust security."
        ctaLabel="Talk to Us"
        ctaPath="/contact"
      />

      <section className="section">
        <div className="container">
          <div style={grid}>
            {benefits.map((b) => (
              <div key={b.title} style={card}>
                <div style={cardIcon}>
                  <Icon name={b.icon} size={32} />
                </div>
                <h3 style={cardTitle}>{b.title}</h3>
                <p style={cardText}>{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
