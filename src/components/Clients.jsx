import { clientsRowOne, clientsRowTwo } from "../data/content";

function MarqueeRow({ items, reverse }) {
  const doubled = [...items, ...items];
  return (
    <div className="marquee">
      <div className={`marquee__track ${reverse ? "marquee__track--reverse" : ""}`}>
        {doubled.map((name, i) => (
          <span className="marquee__item" key={`${name}-${i}`}>
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Clients() {
  return (
    <section className="section clients">
      <div className="container">
        <div className="section-head">
          <span className="section-eyebrow">Our Clientele</span>
          <h2>Trusted by global brands &amp; industry leaders</h2>
          <p className="section-lede">
            From Fortune-listed enterprises to fast-growing tech leaders — 100+ happy customers
            have partnered with Mspring Infotech.
          </p>
        </div>
      </div>
      <MarqueeRow items={clientsRowOne} />
      <MarqueeRow items={clientsRowTwo} reverse />
    </section>
  );
}
