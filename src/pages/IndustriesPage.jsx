import CTASection from "../components/CTASection";
import IndustriesSection from "../components/Industries";
import PageHeader from "../components/PageHeader";
import { usePageTitle } from "../router";

export default function IndustriesPage() {
  usePageTitle("Industries We Serve");

  return (
    <>
      <PageHeader
        eyebrow="Industries"
        title="Industries We Serve"
        description="From telecom to healthcare, we bring domain-specific expertise and a deep talent bench to every industry we serve."
      />
      <IndustriesSection />
      <CTASection />
    </>
  );
}
