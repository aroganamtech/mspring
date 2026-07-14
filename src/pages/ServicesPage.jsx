import CTASection from "../components/CTASection";
import PageHeader from "../components/PageHeader";
import ServicesSection from "../components/Services";
import { usePageTitle } from "../router";

export default function ServicesPage() {
  usePageTitle("IT Services & Solutions");

  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="IT Solutions & Consulting"
        description="Strategic guidance and end-to-end IT services tailored to accelerate digital transformation across industries — from cloud and AI to cybersecurity and custom development."
      />
      <ServicesSection />
      <CTASection />
    </>
  );
}
