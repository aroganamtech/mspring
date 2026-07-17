import "../components/PolicyPage.css";
import CTASection from "../components/CTASection";
import PageHeader from "../components/PageHeader";
import { usePageTitle } from "../router";

export default function PrivacyPolicyPage() {
  usePageTitle("Privacy Policy");

  return (
    <>
      <PageHeader
        title="Privacy Policy"
        description="How Mspring Infotech India Pvt Ltd handles your personal information."
        ctaLabel="Contact Us"
        ctaPath="/contact"
      />

      <section className="section scam-alert">
        <div className="container scam-alert__container policy-page__container">
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

          <h2 className="scam-alert__heading">Cookies and Other Tracking Technologies</h2>
          <p>
            'Mspring Infotech India Pvt Ltd' uses cookies and other technologies to ensure everyone
            who uses our website has the best possible experience. By continuing to use our
            services, you are agreeing to the use of cookies and similar technologies for the
            purposes we describe in this policy.
          </p>

          <h2 className="scam-alert__heading">Third Party Services</h2>
          <p>
            Third parties may need to contact you / reach you for providing you career opportunities
            that may be suitable to your profile.
          </p>
          <p>
            Third parties provide certain services available on www.mspringinfotech.com, 'Mspring
            Infotech India Pvt Ltd' may provide required information to third-party service
            providers to help us deliver our services & products. 'Mspring Infotech India Pvt Ltd
            will take reasonable steps to ensure that these third-party service providers are
            obligated to protect Personal Information on Mspring Infotech India Pvt Ltd behalf.
          </p>
          <p>
            Mspring Infotech India Pvt Ltd does not intend to transfer Personal Information without
            your consent to third parties who are not bound to act on Mspring Infotech India Pvt
            Ltd behalf unless such transfer is legally required. Similarly, it is against Mspring
            Infotech India Pvt Ltd policy to sell/ rent Personal Information collected online
            without consent.
          </p>

          <h2 className="scam-alert__heading">Your Consent</h2>
          <p>
            By using this Web site, you consent to the terms of our Online Privacy Policy and to
            Mspring Infotech India Pvt Ltd processing of Personal Information for the purposes
            given above as well as those explained where 'Mspring Infotech India Pvt Ltd collects
            Personal Information on the Web.
          </p>

          <h2 className="scam-alert__heading">Information Security</h2>
          <p>
            We take appropriate security measures to protect against unauthorized access to or
            unauthorized alteration, disclosure or destruction of data. We restrict access to your
            personally identifying information to employees who need to know that information in
            order to operate, develop or improve our services.
          </p>

          <h2 className="scam-alert__heading">Updating Your Information</h2>
          <p>
            We provide mechanisms for updating and correcting your personally identifying
            information for many of our services.
          </p>

          <h2 className="scam-alert__heading">Information Sharing and Disclosure</h2>
          <p>
            'Mspring Infotech India Pvt Ltd' does not rent, sell, or share personal information
            about you with other people without your consent or to non-affiliated companies except
            to provide products or services you've requested, when we have your permission, or
            unless required by law. 'Mspring Infotech India Pvt Ltd' may display targeted
            advertisements based on personal information. Advertisers (including ad serving
            companies) may assume that people who interact with, view, or click on targeted ads meet
            the targeting criteria.
          </p>

          <h2 className="scam-alert__heading">Confidentiality and Security</h2>
          <p>
            We limit access to personal information about you to employees who we believe
            reasonably need to come into contact with that information to provide products or
            services to you or in order to do their jobs.
          </p>

          <h2 className="scam-alert__heading">Changes to this Privacy Policy</h2>
          <p>
            'Mspring Infotech India Pvt Ltd' reserves the right to update, change or modify this
            policy at any time. The policy shall come to effect from the date of such update, change
            or modification.
          </p>

          <h2 className="scam-alert__heading">Disclaimer</h2>
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
        </div>
      </section>

      <CTASection />
    </>
  );
}
