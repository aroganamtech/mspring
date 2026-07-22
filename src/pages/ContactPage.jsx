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
      />
      <div style={{ display: "flex", justifyContent: "center", padding: "0px 20px" ,backgroundColor:"#0d1226"}}>
        <img
          src={imgcon}
          alt="Mspring Infotech"
          style={{
            width: "100%",
            maxWidth: "580px",
            height: "auto",
            borderRadius: "var(--radius-lg)",
            boxShadow: "var(--shadow-lg)",

          }}
        />
      </div>
      <ContactSection />
      
      
    </>
    
  );
}
