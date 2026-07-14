// Navigation tree — mirrors the structure of the live Mspring Infotech site
// (Home / About Us / Cloud / AI & Data / ERP / Talent Solutions / Industries /
// Cyber Security / Careers). Drives the Navbar dropdowns, breadcrumbs, and the
// hub pages that list each dropdown's children.

export const menu = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  {
    label: "Cloud",
    path: "/cloud",
    children: [
      { label: "Cloud Consulting", path: "/cloud/consulting" },
      { label: "Cloud Migration & Infrastructure", path: "/cloud/migration" },
      { label: "DevOps & Automation", path: "/cloud/devops" },
      { label: "Managed Cloud Services", path: "/cloud/managed-services" },
    ],
  },
  {
    label: "AI & Data",
    path: "/ai-data",
    children: [
      { label: "AI & Machine Learning", path: "/ai-data/ai-ml" },
      { label: "Data Science & Analytics", path: "/ai-data/data-science" },
      { label: "Data Engineering", path: "/ai-data/data-engineering" },
      { label: "Chatbots & Intelligent Automation", path: "/ai-data/automation" },
    ],
  },
  {
    label: "ERP",
    path: "/erp",
    children: [
      { label: "SAP Services", path: "/erp/sap" },
      { label: "Oracle Services", path: "/erp/oracle" },
      { label: "Salesforce CRM", path: "/erp/salesforce" },
      { label: "Microsoft Dynamics 365", path: "/erp/dynamics-365" },
    ],
  },
  {
    label: "Talent Solutions",
    path: "/talent-solutions",
    children: [
      { label: "Staff Augmentation", path: "/talent-solutions/staff-augmentation" },
      { label: "Full-Time Placements", path: "/talent-solutions/full-time-placements" },
      { label: "Contract to Hire", path: "/talent-solutions/contract-to-hire" },
      { label: "Volume Hiring", path: "/talent-solutions/volume-hiring" },
    ],
  },
  {
    label: "Industries",
    path: "/industries",
    children: [
      { label: "Telecommunications, Media & Entertainment", path: "/industries/telecom" },
      { label: "Banking & Financial Services", path: "/industries/bfsi" },
      { label: "Healthcare & Life Sciences", path: "/industries/healthcare" },
      { label: "Retail & E-Commerce", path: "/industries/retail" },
      { label: "Manufacturing", path: "/industries/manufacturing" },
      { label: "Public Sector & Government", path: "/industries/public-sector" },
      { label: "Automotive", path: "/industries/automotive" },
      { label: "Oil, Gas & Energy", path: "/industries/oil-gas-energy" },
    ],
  },
  { label: "Cyber Security", path: "/cyber-security" },
  {
    label: "Careers",
    path: "/careers",
    children: [
      { label: "Current Openings", path: "/careers/openings" },
      { label: "Life at Mspring", path: "/careers/life-at-mspring" },
      { label: "Submit Your CV", path: "/careers/submit-cv" },
    ],
  },
];

// Flat lookup: path -> { label, parent } for breadcrumbs.
export const menuIndex = (() => {
  const index = {};
  menu.forEach((item) => {
    index[item.path] = { label: item.label };
    (item.children || []).forEach((child) => {
      index[child.path] = { label: child.label, parent: item };
    });
  });
  return index;
})();

export function findMenuItem(path) {
  return menuIndex[path];
}
