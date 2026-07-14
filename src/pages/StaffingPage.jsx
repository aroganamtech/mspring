import CTASection from "../components/CTASection";
import PageHeader from "../components/PageHeader";
import StaffingSection from "../components/Staffing";
import { usePageTitle } from "../router";

export default function StaffingPage() {
  usePageTitle("Talent Solutions");

  return (
    <>
      <PageHeader
        eyebrow="Talent Solutions"
        title="IT Staffing & Recruitment Services"
        description="A progressive, agile technology staffing and HR solutions practice delivering high-impact, customized talent solutions for the digital economy."
      />
      <StaffingSection />
      <CTASection />
    </>
  );
}
