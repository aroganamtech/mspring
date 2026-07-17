import "./About.css";
import { aboutFacts, company } from "../data/content";
import Icon from "./Icons";

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container about__inner">
        <div className="about__copy">
          <span className="section-eyebrow">Our Story</span>
          <h2>
            A trusted partner for <span className="text-gradient">IT solutions</span> and{" "}
            <span className="text-gradient">talent acquisition</span>
          </h2>
          <p>
            Founded in {company.founded} and officially established in {company.established} under
            the visionary leadership of <strong>{company.founder}</strong>, {company.name} is a
            forward-thinking software and application development company committed to
            transforming the recruitment landscape.
          </p>
          <p>
            Driven by a clear vision to revolutionize the hiring process, we leverage cutting-edge
            technologies combined with deep domain expertise in digital transformation and talent
            acquisition. Our holistic, end-to-end recruitment solutions are designed to help
            organizations attract, engage, and retain top talent in a competitive market.
          </p>
          <p>
            Through strategic partnerships with leading multinational corporations, we continue to
            expand our global footprint — delivering innovative IT solutions that empower business
            growth and operational excellence. Over <strong>100+ happy customers</strong> have used
            our services to date.
          </p>

          <div className="about__facts">
            {aboutFacts.map((f) => (
              <div className="about__fact" key={f.label}>
                <Icon name="checkCircle" />
                <div>
                  <span className="about__fact-label">{f.label}</span>
                  <strong>{f.value}</strong>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="about__visual" aria-hidden="true">
          <div className="about__ring-block">
            <span className="ring-block__ring ring-block__ring--1" />
            <span className="ring-block__ring ring-block__ring--2" />
            <span className="ring-block__ring ring-block__ring--3" />
            <div className="about__ring-core">
              <Icon name="sparkle" size={30} />
              <p>12+ Years</p>
              <span>of Digital Excellence</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
