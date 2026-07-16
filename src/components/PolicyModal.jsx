import { useEffect, useState } from "react";

// Generic "footer link that opens a modal" primitive. Renders the trigger
// button (styled to match the other footer__legal links) plus an overlay
// modal that only mounts once the button is clicked. Kept self-contained so
// swapping a footer <a href="#"> for one of these below is a one-line change
// with no other footer markup touched.
function PolicyLink({ label, title, children }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button type="button" className="footer__legal-btn" onClick={() => setOpen(true)}>
        {label}
      </button>

      {open && (
        <div
          className="policy-modal__overlay"
          role="dialog"
          aria-modal="true"
          aria-label={title}
          onClick={() => setOpen(false)}
        >
          <div className="policy-modal" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="policy-modal__close"
              aria-label="Close"
              onClick={() => setOpen(false)}
            >
              &times;
            </button>
            <div className="policy-modal__content">
              <h2>{title}</h2>
              {children}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export function PrivacyPolicyLink() {
  return (
    <PolicyLink label="Privacy Policy" title="Privacy Policy">
      <p>
        Mspring Infotech India Pvt Ltd respects your online privacy and recognize your need for
        appropriate protection of any "Personal Information" you share with us. "Personal
        Information" means any information that may be used to identify an individual, including,
        but not limited to, a first and last name, a home or other physical address and an email
        address or other contact information.
      </p>
      <p>
        You can visit Mspring Infotech India Pvt Ltd Web pages without telling us who you are or
        revealing any Personal Information about yourself.
      </p>
      <p>
        You will need share your "Personal Information" only to register at our website and to
        facilitate our clients to reach you for providing you career opportunities that may be
        suitable to your profile.
      </p>

      <h3>Cookies and Other Tracking Technologies</h3>
      <p>
        'Mspring Infotech India Pvt Ltd' uses cookies and other technologies to ensure everyone who
        uses our website has the best possible experience. By continuing to use our services, you
        are agreeing to the use of cookies and similar technologies for the purposes we describe in
        this policy.
      </p>

      <h3>Third Party Services</h3>
      <p>
        Third parties may need to contact you / reach you for providing you career opportunities
        that may be suitable to your profile.
      </p>
      <p>
        Third parties provide certain services available on www.mspringinfotech.com, 'Mspring
        Infotech India Pvt Ltd' may provide required information to third-party service providers
        to help us deliver our services & products. 'Mspring Infotech India Pvt Ltd will take
        reasonable steps to ensure that these third-party service providers are obligated to
        protect Personal Information on Mspring Infotech India Pvt Ltd behalf.
      </p>
      <p>
        Mspring Infotech India Pvt Ltd does not intend to transfer Personal Information without
        your consent to third parties who are not bound to act on Mspring Infotech India Pvt Ltd
        behalf unless such transfer is legally required. Similarly, it is against Mspring Infotech
        India Pvt Ltd policy to sell/ rent Personal Information collected online without consent.
      </p>

      <h3>Your Consent</h3>
      <p>
        By using this Web site, you consent to the terms of our Online Privacy Policy and to
        Mspring Infotech India Pvt Ltd processing of Personal Information for the purposes given
        above as well as those explained where 'Mspring Infotech India Pvt Ltd collects Personal
        Information on the Web.
      </p>

      <h3>Information security</h3>
      <p>
        We take appropriate security measures to protect against unauthorized access to or
        unauthorized alteration, disclosure or destruction of data. We restrict access to your
        personally identifying information to employees who need to know that information in order
        to operate, develop or improve our services.
      </p>

      <h3>Updating your information</h3>
      <p>
        We provide mechanisms for updating and correcting your personally identifying information
        for many of our services.
      </p>

      <h3>Information Sharing and Disclosure</h3>
      <p>
        'Mspring Infotech India Pvt Ltd' does not rent, sell, or share personal information about
        you with other people without your consent or to non-affiliated companies except to
        provide products or services you've requested, when we have your permission, or unless
        required by law. 'Mspring Infotech India Pvt Ltd' may display targeted advertisements based
        on personal information. Advertisers (including ad serving companies) may assume that
        people who interact with, view, or click on targeted ads meet the targeting criteria.
      </p>

      <h3>Confidentiality and Security</h3>
      <p>
        We limit access to personal information about you to employees who we believe reasonably
        need to come into contact with that information to provide products or services to you or
        in order to do their jobs.
      </p>

      <h3>Changes to this Privacy Policy</h3>
      <p>
        'Mspring Infotech India Pvt Ltd' reserves the right to update, change or modify this policy
        at any time. The policy shall come to effect from the date of such update, change or
        modification.
      </p>

      <h3>Disclaimer</h3>
      <p>
        'Mspring Infotech India Pvt Ltd' shall not be liable for any loss or damage sustained by
        reason of any disclosure (inadvertent or otherwise) of any information concerning the
        user's account. Contact Information Should there be any concerns about contravention of
        this Privacy Policy, 'Mspring Infotech India Pvt Ltd' will employ all commercially
        reasonable efforts to address the same.
      </p>
      <p>
        Note : The terms in this agreement may be changed by 'Mspring Infotech India Pvt Ltd' at
        any time. 'Mspring Infotech India Pvt Ltd' is free to offer its services to any
        client/prospective client without restriction.
      </p>
    </PolicyLink>
  );
}

export function IsmsPolicyLink() {
  return (
    <PolicyLink label="ISMS Policy" title="MSPRING – Information Security Policy">
      <p>
        Mspring team (Based on the staffing industry) is committed towards securing information by
        ensuring confidentiality, integrity and availability (CIA Triad) to achieve the
        organization's goals, creating confidence in both internal and external customers
        (Vendors, clients and staffs / inhouse and on-board staff), and maintaining business
        continuity. This is reflected in all its processes by
      </p>
      <ul>
        <li>
          Safeguarding confidential information related to its employees, clients, services and
          business associates (Vendors, clients and staffs / inhouse and on-board staff).
        </li>
        <li>Implementing safety & security measures for personnel and physical environment.</li>
        <li>Abiding with applicable federal, statutory and regulatory requirements in operating zones.</li>
        <li>Ensuring organization-wide awareness and education of information security requirements</li>
      </ul>

      <h3>Information Security Objectives</h3>
      <ul>
        <li>
          To Protect the Confidentiality, Integrity and Availability of business and customer
          information (Vendors, clients and staffs / inhouse and on-board staff).
        </li>
        <li>To protect the organisation's information assets from theft, abuse, misuse and any form of damage.</li>
        <li>To establish responsibility and accountability for information security in the organization.</li>
        <li>
          To ensure that the organisation is able to continue its commercial activities in the
          event of significant information security incidents
        </li>
      </ul>

      <h3>ISMS Objectives</h3>
      <ul>
        <li>
          To protect the integrity, availability and confidentiality of business and customer
          information (Vendors, clients and staffs / inhouse and on-board staff).
        </li>
        <li>To protect the organisation's information assets from theft, abuse, miscue and any form of damage.</li>
        <li>To establish responsibility and accountability for information security in the organisation.</li>
        <li>
          To ensure that the organisation is able to continue its commercial activities in the
          event of significant information security incidents.
        </li>
      </ul>

      <h3>ISMS Measurement</h3>
      <ul>
        <li>The number of security incidents relating to the loss of data or breaches of confidentiality.</li>
        <li>The number of security incidents relating to the loss / theft of equipment.</li>
        <li>Instances of non-compliance with policies and procedures.</li>
        <li>Staff awareness activities.</li>
        <li>Internal audit ensuring staff awareness and compliance.</li>
        <li>Number of incidents relating to service availability.</li>
        <li>Success of business continuity testing.</li>
      </ul>
    </PolicyLink>
  );
}
