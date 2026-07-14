import AboutSection from "../components/About";
import CTASection from "../components/CTASection";
import Journey from "../components/Journey";
import Leadership from "../components/Leadership";
import PageHeader from "../components/PageHeader";
import VisionMission from "../components/VisionMission";
import WhyUs from "../components/WhyUs";
import { usePageTitle } from "../router";

export default function AboutPage() {
  usePageTitle("About Us");

  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title="Changing levels in technology & talent, since 2012"
        description="A forward-thinking software, digital transformation and IT staffing company built on domain expertise, trust and long-term partnerships."
      />
      <AboutSection />
      <VisionMission />
      <Journey />
      <Leadership />
      <WhyUs />
      <CTASection />
    </>
  );
}
