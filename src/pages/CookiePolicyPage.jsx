import CTASection from "../components/CTASection";
import Icon from "../components/Icons";
import PageHeader from "../components/PageHeader";
import { usePageTitle } from "../router";

export default function CookiePolicyPage() {
  usePageTitle("Cookie Policy");

  return (
    <>
      <PageHeader
        title="Cookie Policy"
        description="What we store in your browser, and why."
        ctaLabel="Contact Us"
        ctaPath="/contact"
      />

      <section className="section scam-alert">
        <div className="container scam-alert__container policy-page__container">
          <p>
            This website uses cookies and your browser's local storage to remember a few things
            between visits. We show a cookie banner the first time you visit so you can choose
            whether these are switched on. You can change your mind at any time by clearing your
            browser's cookies for this site, which will bring the banner back.
          </p>

          <h2 className="scam-alert__heading">What we store, if you accept</h2>
          <ul className="scam-alert__checklist policy-page__list">
            <li>
              <Icon name="checkCircle" size={18} />
              <span>
                <strong>A returning-visitor cookie</strong> — a random id with no personal
                information in it, used only so our visitor counter doesn't count the same
                browser twice.
              </span>
            </li>
            <li>
              <Icon name="checkCircle" size={18} />
              <span>
                <strong>A local copy of messages you send us</strong> through the contact form —
                kept in this browser's local storage alongside the email that's actually sent to
                our team.
              </span>
            </li>
            <li>
              <Icon name="checkCircle" size={18} />
              <span>
                <strong>A local copy of job applications you submit</strong> — kept the same way,
                alongside the application that's actually sent to our recruitment team.
              </span>
            </li>
          </ul>

          <h2 className="scam-alert__heading">If you reject cookies</h2>
          <p>
            The site works exactly the same way — you can still browse, send messages, and submit
            job applications. We simply won't remember your browser between visits, and nothing is
            kept in local storage on your device.
          </p>

          <h2 className="scam-alert__heading">What we don't do</h2>
          <p>
            None of this data is shared with third parties or used for advertising. It stays in
            your own browser's storage; we don't operate a server-side database that collects it.
          </p>
        </div>
      </section>

      <CTASection />
    </>
  );
}
