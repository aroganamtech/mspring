import { CLIENTS } from "../data/clients";

/* "Our Clienteles" logo wall — 6 × 4 grid matching the reference design.
   Drop logo files into src/assets/clients/ (named by slug, any image
   extension) and they appear automatically; missing logos fall back to
   the client's name as text. */

function ClientLogo({ client }) {
  return (
    <div className="client-logo-item" title={client.name}>
      {client.logo ? (
        <img src={client.logo} alt={client.name} className="client-logo-img" />
      ) : (
        <span className="client-logo-fallback client-logo-fallback--visible">
          {client.name}
        </span>
      )}
    </div>
  );
}

export default function Clients() {
  return (
    <section className="section clients">
      <div className="container">
        <div className="section-head">
          <h2>Our Clienteles</h2>
          <p className="section-lede">
            From Fortune-listed enterprises to fast-growing tech leaders — 100+ happy customers
            have partnered with Mspring Infotech.
          </p>
        </div>
      </div>

      <div className="container">
        <div className="clients-grid">
          {CLIENTS.map((client) => (
            <ClientLogo key={client.slug} client={client} />
          ))}
        </div>
      </div>
    </section>
  );
}
