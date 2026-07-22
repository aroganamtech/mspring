import ContactSection from "../components/Contact";
import PageHeader from "../components/PageHeader";
import { usePageTitle } from "../router";
import imgcon from "../assets/imgcon.jpeg";

export default function ContactPage() {
  usePageTitle("Contact Us");

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="We look forward to partnering with you"
        description="Whether you need to scale your technology or your team, reach out and we'll help you find the right fit."
        image={imgcon}
        imageAlt="Mspring Infotech"
      />
      <ContactSection />
      
      
    </>
    
  );
}
