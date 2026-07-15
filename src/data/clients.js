/* Single source of truth for the "Our Clienteles" logo wall.
   Used by the home Clients section and the Apply Job page.

   Logo files live in src/assets/clients/ — any extension works
   (png / svg / jpg / webp). The file's base name must match the
   `slug` below, e.g. src/assets/clients/airtel.png            */

// Grab every image in src/assets/clients/ at build time.
const logoFiles = import.meta.glob("../assets/clients/*.{png,svg,jpg,jpeg,webp}", {
  eager: true,
  import: "default",
});

// Map "airtel" -> resolved asset URL, regardless of extension.
const logoBySlug = {};
for (const [path, url] of Object.entries(logoFiles)) {
  const base = path.split("/").pop().replace(/\.(png|svg|jpg|jpeg|webp)$/i, "");
  logoBySlug[base] = url;
}

/* The 24 clients, in the exact order of the reference design. */
export const CLIENTS = [
  // Row 1
  { name: "Airtel", slug: "airtel" },
  { name: "Pidilite", slug: "pidilite" },
  { name: "3i Infotech", slug: "3i-infotech" },
  { name: "ITC Infotech", slug: "itc-infotech" },
  { name: "Quess", slug: "quess" },
  { name: "Medikabazaar", slug: "medikabazaar" },

  // Row 2
  { name: "Tech Mahindra", slug: "tech-mahindra" },
  { name: "NTT Data", slug: "ntt-data" },
  { name: "Capgemini", slug: "capgemini" },
  { name: "LTIMindtree", slug: "ltimindtree" },
  { name: "LitmusWorld", slug: "litmusworld" },
  { name: "Parker Meggitt", slug: "parker-meggitt" },

  // Row 3
  { name: "BGD Tech Private Limited", slug: "bgd" },
  { name: "Accenture", slug: "accenture" },
  { name: "BDO", slug: "bdo" },
  { name: "Adobe", slug: "adobe" },
  { name: "UST", slug: "ust" },
  { name: "Tata Advanced Systems", slug: "tata-advanced-systems" },

  // Row 4
  { name: "FIS", slug: "fis" },
  { name: "Happiest Minds", slug: "happiest-minds" },
  { name: "ZenSar Technologies", slug: "zensar" },
  { name: "Zeta", slug: "zeta" },
  { name: "Dentsu", slug: "dentsu" },
  { name: "Blue Star", slug: "blue-star" },
].map((c) => ({ ...c, logo: logoBySlug[c.slug] || null }));
