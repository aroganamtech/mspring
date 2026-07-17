import "../components/PolicyPage.css";
import CTASection from "../components/CTASection";
import Icon from "../components/Icons";
import PageHeader from "../components/PageHeader";
import { usePageTitle } from "../router";

export default function IsmsPolicyPage() {
  usePageTitle("ISMS Policy");

  return (
    <>
      <PageHeader
        title="ISMS Policy"
        description="MSPRING — Information Security Policy"
        ctaLabel="Contact Us"
        ctaPath="/contact"
      />

      <section className="section scam-alert">
        <div className="container scam-alert__container policy-page__container">
          <p>
            Mspring team (Based on the staffing industry) is committed towards securing information
            by ensuring confidentiality, integrity and availability (CIA Triad) to achieve the
            organization's goals, creating confidence in both internal and external customers
            (Vendors, clients and staffs / inhouse and on-board staff), and maintaining business
            continuity. This is reflected in all its processes by
          </p>
          <ul className="scam-alert__checklist policy-page__list">
            <li>
              <Icon name="checkCircle" size={18} />
              <span>
                Safeguarding confidential information related to its employees, clients, services
                and business associates (Vendors, clients and staffs / inhouse and on-board staff).
              </span>
            </li>
            <li>
              <Icon name="checkCircle" size={18} />
              <span>Implementing safety & security measures for personnel and physical environment.</span>
            </li>
            <li>
              <Icon name="checkCircle" size={18} />
              <span>
                Abiding with applicable federal, statutory and regulatory requirements in operating
                zones.
              </span>
            </li>
            <li>
              <Icon name="checkCircle" size={18} />
              <span>Ensuring organization-wide awareness and education of information security requirements</span>
            </li>
          </ul>

          <h2 className="scam-alert__heading">Information Security Objectives</h2>
          <ul className="scam-alert__checklist policy-page__list">
            <li>
              <Icon name="checkCircle" size={18} />
              <span>
                To Protect the Confidentiality, Integrity and Availability of business and customer
                information (Vendors, clients and staffs / inhouse and on-board staff).
              </span>
            </li>
            <li>
              <Icon name="checkCircle" size={18} />
              <span>
                To protect the organisation's information assets from theft, abuse, misuse and any
                form of damage.
              </span>
            </li>
            <li>
              <Icon name="checkCircle" size={18} />
              <span>
                To establish responsibility and accountability for information security in the
                organization.
              </span>
            </li>
            <li>
              <Icon name="checkCircle" size={18} />
              <span>
                To ensure that the organisation is able to continue its commercial activities in the
                event of significant information security incidents
              </span>
            </li>
          </ul>

          <h2 className="scam-alert__heading">ISMS Objectives</h2>
          <ul className="scam-alert__checklist policy-page__list">
            <li>
              <Icon name="checkCircle" size={18} />
              <span>
                To protect the integrity, availability and confidentiality of business and customer
                information (Vendors, clients and staffs / inhouse and on-board staff).
              </span>
            </li>
            <li>
              <Icon name="checkCircle" size={18} />
              <span>
                To protect the organisation's information assets from theft, abuse, miscue and any
                form of damage.
              </span>
            </li>
            <li>
              <Icon name="checkCircle" size={18} />
              <span>
                To establish responsibility and accountability for information security in the
                organisation.
              </span>
            </li>
            <li>
              <Icon name="checkCircle" size={18} />
              <span>
                To ensure that the organisation is able to continue its commercial activities in the
                event of significant information security incidents.
              </span>
            </li>
          </ul>

          <h2 className="scam-alert__heading">ISMS Measurement</h2>
          <ul className="scam-alert__checklist policy-page__list">
            <li>
              <Icon name="checkCircle" size={18} />
              <span>The number of security incidents relating to the loss of data or breaches of confidentiality.</span>
            </li>
            <li>
              <Icon name="checkCircle" size={18} />
              <span>The number of security incidents relating to the loss / theft of equipment.</span>
            </li>
            <li>
              <Icon name="checkCircle" size={18} />
              <span>Instances of non-compliance with policies and procedures.</span>
            </li>
            <li>
              <Icon name="checkCircle" size={18} />
              <span>Staff awareness activities.</span>
            </li>
            <li>
              <Icon name="checkCircle" size={18} />
              <span>Internal audit ensuring staff awareness and compliance.</span>
            </li>
            <li>
              <Icon name="checkCircle" size={18} />
              <span>Number of incidents relating to service availability.</span>
            </li>
            <li>
              <Icon name="checkCircle" size={18} />
              <span>Success of business continuity testing.</span>
            </li>
          </ul>
        </div>
      </section>

      <CTASection />
    </>
  );
}
