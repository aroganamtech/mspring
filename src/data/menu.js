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
      {
        label: "General Staffing",
        path: "/talent-solutions/general-staffing",
        children: [
          { label: "Overview", path: "/talent-solutions/general-staffing" },
          {
            label: "Sourcing and Recruitment",
            path: "/talent-solutions/general-staffing/sourcing-and-recruitment",
          },
          {
            label: "Apprenticeship Program",
            path: "/talent-solutions/general-staffing/apprenticeship-program",
          },
        ],
      },
      {
        label: "IT Solutions",
        path: "/talent-solutions/it-solutions",
        children: [
          {
            label: "Digital Engineering and R&D Solutions",
            path: "/talent-solutions/it-solutions/digital-engineering-rd",
          },
          {
            label: "Managed Services",
            path: "/talent-solutions/it-solutions/managed-services",
          },
          {
            label: "Managed Solutions Provider (MSP)",
            path: "/talent-solutions/it-solutions/managed-service-provider",
          },
          {
            label: "Hire-Train-Deploy | Hire-Deploy-Train",
            path: "/talent-solutions/it-solutions/hire-train-deploy",
          },
        ],
      },
      { label: "Recruitment Services", path: "/talent-solutions/recruitment-services" },
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

// Flat lookup: path -> { label, parent } for breadcrumbs. Walks the tree to
// any depth; if two entries share a path (e.g. an "Overview" child that
// points back at its parent's page), the first one registered wins.
export const menuIndex = (() => {
  const index = {};
  const add = (item, parent) => {
    if (!index[item.path]) {
      index[item.path] = parent ? { label: item.label, parent } : { label: item.label };
    }
    (item.children || []).forEach((child) => add(child, item));
  };
  menu.forEach((item) => add(item, null));
  return index;
})();

export function findMenuItem(path) {
  return menuIndex[path];
}
