import "../components/PolicyPage.css";
import CTASection from "../components/CTASection";
import Icon from "../components/Icons";
import PageHeader from "../components/PageHeader";
import { usePageTitle } from "../router";

const advisories = [
  {
    title: "Mspring Infotech does not ask for money at any stage of hiring",
    body: [
      "Mspring Infotech does not charge candidates any fee, deposit, security amount, registration charge, training fee, documentation fee, laptop fee, background verification fee, medical fee, or any other payment as part of the recruitment process.",
      "Any request for money in exchange for a job opportunity, interview, offer letter, onboarding, training, faster selection, or any recruitment-related benefit should be treated as fraudulent.",
    ],
  },
  {
    title: "Beware of unofficial communication channels",
    body: [
      "Candidates should be cautious of job offers, interview calls, digital communication, interview links, or online assessments received through unofficial email IDs, personal phone numbers, messaging platforms, social media pages, or online groups that are not verified Mspring Infotech channels.",
      "Fraudsters may use names, logos, employee references, forged documents, or similar-looking email IDs to make their communication appear genuine. Always verify that recruitment communication originates from an official Mspring Infotech channel, preferably an authorised info@mspringinfotech.com domain, before responding or sharing any information.",
    ],
  },
  {
    title: "Verify all employment-related documents issued in the name of Mspring Infotech",
    body: [
      "All employment-related documents issued by Mspring Infotech include a verification mechanism such as a verification code, scanner, authentication ID, dynamic QR code, or similar validation feature. Candidates receiving any offer letter, appointment letter, joining letter, onboarding document, or employment-related communication in the name of Mspring Infotech must verify its authenticity before taking any action.",
      "Do not rely only on the document's appearance, logo, signature, stamp, or email trail. Fraudulent documents can look official. Use the verification code, QR code, scanner, or authentication ID provided on the document, where applicable, and confirm directly through official Mspring Infotech channels.",
      "If the verification does not work, redirects to an unknown page, appears suspicious, or does not match the candidate's details, treat the document as suspicious and report it immediately.",
    ],
  },
  {
    title: "Do not share sensitive personal information without verification",
    body: [
      "Do not share copies of Aadhaar, PAN, bank details, educational certificates, salary slips, photographs, passwords, OTPs, or other sensitive information with unknown recruiters, unofficial agencies, or unverified online contacts.",
      "Mspring Infotech will never ask candidates to share confidential information through unsafe or informal channels.",
    ],
  },
  {
    title: "Check opportunities through official Mspring Infotech channels",
    body: [
      "Candidates are advised to apply for jobs only through official Mspring Infotech career platforms, verified job postings, authorised recruitment teams, or recognised Mspring Infotech communication channels. Before responding to any job opportunity, please confirm that the source is authentic.",
    ],
  },
];

const fraudMethods = [
  {
    title: "Fake recruitment agencies",
    body: "Unauthorised agencies or individuals may promise Mspring Infotech jobs, interviews, training, faster shortlisting, or direct joining in exchange for a fee. Mspring Infotech does not authorise such claims.",
  },
  {
    title: "Social media job scams",
    body: "Fraudsters may use fake profiles, pages, groups, or ads with the Mspring Infotech name or logo, and may refer to real employees or public company information to appear credible.",
  },
  {
    title: "Fake job postings on portals",
    body: "Some job portals may carry fake listings posted by unauthorised parties. Always verify the source before sharing details or attending an interview.",
  },
  {
    title: "Online test or training fee scams",
    body: "Scammers may ask for payment for assessments, online tests, training, software access, onboarding kits, or certificates, falsely claiming these are required for Mspring Infotech selection.",
  },
  {
    title: "Email and message-based scams",
    body: "Fake job offers may be sent through email, SMS, WhatsApp, Telegram, or other platforms, often with forged letters, links, payment requests, or forms seeking personal information.",
  },
  {
    title: "Fake offer letters and appointment letters",
    body: "Fraudsters may share forged offer letters, appointment letters, joining forms, or onboarding instructions. Always verify such documents using the unique authentication ID or QR validation provided on genuine Mspring Infotech documents.",
  },
];

const phishingSteps = [
  "Check if it came through an official info@mspringinfotech.com email domain.",
  "Look for a verification code, authentication ID, scanner, or dynamic QR code.",
  "Use the verification mechanism provided on the document, where applicable.",
  "Contact Mspring Infotech through official channels to confirm authenticity.",
  "Do not make payments or share sensitive information until the offer is verified.",
  "If you are unable to verify the document, or if you suspect that the offer may be fraudulent, please do not proceed further.",
];

const candidateReminders = [
  "Do not ask candidates to pay charges or fees for jobs, screening, interviews, training, or onboarding.",
  "Do not guarantee employment through third-party agents in exchange for payment.",
  "Do not authorise individuals to collect fees on their behalf.",
  "Do not ask candidates to share OTPs, passwords, bank details, or confidential financial information through unsafe or unofficial channels.",
  "Issue employment-related documents with verification features wherever applicable.",
  "Encourage candidates to verify all offers directly through official Mspring Infotech channels.",
];

export default function JobScamAlertPage() {
  usePageTitle("Job Scam Alert");

  return (
    <>
      <PageHeader
        title="Mspring Infotech Recruitment Fraud Alert"
        description="Stay Alert. Verify Before You Act."
        ctaLabel="Contact Us"
        ctaPath="/contact"
      />

      <section className="section scam-alert">
        <div className="container scam-alert__container">
          <p>
            Mspring Infotech has become aware of instances where unauthorised individuals,
            recruitment agencies, social media accounts, and online groups may falsely claim to
            represent Mspring Infotech. These fraudulent parties may offer jobs, interviews,
            training opportunities, internships, appointment letters, or employment-related
            documents in exchange for money or personal information.
          </p>
          <p>
            This page is intended to help candidates identify suspicious recruitment activities
            and protect themselves from fraud. Mspring Infotech follows a structured and
            transparent hiring process. Candidates are advised to remain cautious, verify all
            communication, and avoid responding to any request that appears unusual, unofficial,
            or financially motivated.
          </p>

          <h2 className="scam-alert__heading">Important Recruitment Advisory</h2>
          <p>
            Please note the following before engaging with any recruiter, agency, or individual
            claiming to represent Mspring Infotech:
          </p>

          <div className="scam-alert__items">
            {advisories.map((item, i) => (
              <div className="scam-alert__item" key={item.title}>
                <span className="scam-alert__num">{i + 1}</span>
                <div>
                  <h3>{item.title}</h3>
                  {item.body.map((p, j) => (
                    <p key={j}>{p}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <h2 className="scam-alert__heading">Common Recruitment Fraud Methods</h2>
          <p>
            Fraudulent hiring activity can take many forms. Candidates are encouraged to be
            alert to the following:
          </p>

          <div className="scam-alert__items">
            {fraudMethods.map((item, i) => (
              <div className="scam-alert__item" key={item.title}>
                <span className="scam-alert__num">{i + 1}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="scam-alert__heading">Candidate Notification: Stay Vigilant Against Phishing</h2>
          <p>Before acting on any offer letter or employment-related document, please follow these steps:</p>

          <ol className="scam-alert__steps">
            {phishingSteps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>

          <h2 className="scam-alert__heading">What Candidates Should Remember</h2>
          <p>Mspring Infotech, its clients, partners, and recruiters:</p>

          <ul className="scam-alert__checklist">
            {candidateReminders.map((r) => (
              <li key={r}>
                <Icon name="checkCircle" size={18} />
                <span>{r}</span>
              </li>
            ))}
          </ul>

          <h2 className="scam-alert__heading">Employee Notification: Our Collective Responsibility</h2>
          <h3>Protecting Our Shared Ecosystem</h3>
          <p>
            As a Mspring Infotech employee, if you notice unauthorised social media groups,
            suspicious job postings, or individuals falsely using our brand name, templates, or
            documents, please report them immediately to{" "}
            <a href="mailto:info@mspringinfotech.com">info@mspringinfotech.com</a>.
          </p>
          <p>
            Protecting job seekers and preserving our brand integrity is a vital compliance
            responsibility for every member of our organisation.
          </p>

          <div className="scam-alert__report">
            <h2>Report Suspicious Activity</h2>
            <p>
              If you receive any suspicious recruitment-related communication claiming to be
              from Mspring Infotech, report it immediately through our official channels.
            </p>
            <a href="mailto:info@mspringinfotech.com" className="btn btn--primary">
              <Icon name="arrowRight" size={18} />
              Email: info@mspringinfotech.com
            </a>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
