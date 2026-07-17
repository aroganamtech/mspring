// Content for every hub (dropdown parent) and detail (dropdown child) page.
// Hub pages render an intro + cards linking to their children (pulled from menu.js).
// Detail pages render an intro + highlight bullets + optional technology tags.

import securityBadges from "../assets/security-badges.jpg";
import complianceBadges from "../assets/compliance-badges.png";
import dnbBadge from "../assets/dun-and-bradstreet-badge.png";
import aiHumanCollaboration from "../assets/ai-human-collaboration.jpg";
import teamOfficeWindow from "../assets/team-office-window.jpg";
import officeTeamCulture from "../assets/office-team-culture.jpg";
import leadershipArrowYellow from "../assets/leadership-arrow-yellow.jpg";
import leadershipArrowBlue from "../assets/leadership-arrow-blue.jpg";
import aiBrainNetwork from "../assets/ai-brain-network.jpg";
import teamworkLightbulbs from "../assets/teamwork-lightbulbs.jpg";
import cloudAbstractSphere from "../assets/cloud-abstract-sphere.jpg";

export const pageContent = {
  /* ---------------- Cloud ---------------- */
  "/cloud": {
    type: "hub",
    eyebrow: "Cloud",
    title: "Cloud Infrastructure & Integration Services",
    description:
      "Cloud-native architecture, migration, and managed services that deliver agility, scalability, and cost-efficiency across AWS, Azure and Google Cloud.",
    intro:
      "Mspring Infotech helps enterprises modernize their infrastructure and move workloads to the cloud with confidence. From first consultation to day-two operations, our team designs, migrates, automates and manages cloud environments so your business can scale without friction.",
    ctaPath: "/cloud-solutions",
  },
  "/cloud/consulting": {
    type: "detail",
    eyebrow: "Cloud",
    title: "Cloud Consulting",
    description:
      "Strategic guidance to help you choose the right cloud model, architecture, and roadmap for your business.",
    body: [
      "Every cloud journey starts with the right strategy. Our consultants assess your existing infrastructure, workloads and business goals to recommend the most cost-effective and scalable path — whether that's a single cloud, multi-cloud, or hybrid approach.",
      "We work alongside your team to build a practical roadmap, covering architecture design, cost modeling, security posture and a phased migration plan that minimizes disruption to live systems.",
    ],
    highlights: [
      "Cloud readiness & workload assessment",
      "Multi-cloud and hybrid architecture design",
      "Cost optimization and TCO modeling",
      "Migration roadmap & risk planning",
    ],
    tags: ["AWS", "Microsoft Azure", "Google Cloud", "Well-Architected Reviews"],
    badgeImage: leadershipArrowYellow,
    badgeImageAlt: "One path breaking away from the crowd, representing a clear cloud strategy",
  },
  "/cloud/migration": {
    type: "detail",
    eyebrow: "Cloud",
    title: "Cloud Migration & Infrastructure",
    description:
      "End-to-end migration of applications, data and infrastructure to the cloud with minimal downtime.",
    body: [
      "We plan and execute migrations for everything from individual applications to full data-center exits — rehosting, replatforming or refactoring workloads depending on what delivers the best long-term value.",
      "Post-migration, we help stand up resilient, right-sized infrastructure using infrastructure-as-code so environments stay consistent, auditable and easy to scale.",
    ],
    highlights: [
      "Application & database migration (rehost, replatform, refactor)",
      "Infrastructure-as-code with Terraform & Ansible",
      "Landing zone and network architecture setup",
      "Post-migration performance tuning & validation",
    ],
    tags: ["AWS (EC2, S3, Lambda, RDS)", "Terraform", "Ansible", "Azure", "Google Cloud"],
    badgeImage: cloudAbstractSphere,
    badgeImageAlt: "Abstract flowing cloud infrastructure visual",
  },
  "/cloud/devops": {
    type: "detail",
    eyebrow: "Cloud",
    title: "DevOps & Automation",
    description:
      "CI/CD pipelines, containerization and automation that help engineering teams ship faster and more reliably.",
    body: [
      "We build CI/CD pipelines and containerized deployment workflows that shorten release cycles without compromising stability — from source control through automated testing to production rollout.",
      "Our DevOps engineers also implement observability, alerting and infrastructure automation so teams spend less time firefighting and more time building.",
    ],
    highlights: [
      "CI/CD pipeline design (Jenkins, GitHub Actions)",
      "Containerization with Docker & Kubernetes",
      "Infrastructure automation & configuration management",
      "Monitoring, logging and alerting setup",
    ],
    tags: ["Docker", "Kubernetes", "Jenkins", "GitHub Actions", "Terraform"],
    badgeImage: leadershipArrowBlue,
    badgeImageAlt: "A gold paper plane leading the way, representing pioneering DevOps practices",
  },
  "/cloud/managed-services": {
    type: "detail",
    eyebrow: "Cloud",
    title: "Managed Cloud Services",
    description:
      "Ongoing monitoring, optimization and support so your cloud environment stays secure, performant and cost-efficient.",
    body: [
      "Once you're in the cloud, keeping it healthy is a full-time job. Our managed services team handles day-to-day operations — patching, scaling, backup, cost monitoring and incident response — so your engineers can focus on the product.",
      "We provide regular reporting and optimization reviews to make sure spend stays aligned with actual usage as your environment evolves.",
    ],
    highlights: [
      "24x7 infrastructure monitoring & incident response",
      "Cost governance and continuous right-sizing",
      "Patch management and security hardening",
      "Backup, disaster recovery and SLA-backed support",
    ],
    tags: ["AWS", "Azure", "Google Cloud", "Kubernetes"],
  },

  /* ---------------- AI & Data ---------------- */
  "/ai-data": {
    type: "hub",
    eyebrow: "AI & Data",
    title: "AI, Data Science & Intelligent Automation",
    description:
      "Harness AI & machine learning for smarter operations, data science for actionable insights, and automation for measurable efficiency gains.",
    intro:
      "Data is only as valuable as the decisions it enables. We help organizations build the pipelines, models and intelligent applications that turn raw data into a genuine competitive advantage — from predictive analytics to production-grade AI features.",
    ctaLabel: "Learn More",
    ctaPath: "/ai-data/learn-more",
  },
  "/ai-data/learn-more": {
    type: "detail",
    eyebrow: "AI & Data",
    title: "Drive Efficiency and Innovation with AI and ML Solutions",
    description:
      "Our tailored AI and ML solutions are designed to integrate seamlessly into your operations, enhancing efficiency and fostering innovation to drive long-term success.",
    body: [
      "Our tailored AI and ML solutions are designed to integrate seamlessly into your operations, enhancing efficiency and fostering innovation to drive long-term success.",
    ],
    badgeImage: aiHumanCollaboration,
    badgeImageAlt: "A humanoid robot and a professional walking side by side",
  },
  "/ai-data/ai-ml": {
    type: "detail",
    eyebrow: "AI & Data",
    title: "AI & Machine Learning",
    description:
      "Custom machine learning models and AI-powered features built for real business problems.",
    body: [
      "We design and deploy machine learning models for use cases like demand forecasting, recommendation, fraud detection and computer vision — grounded in your actual data rather than generic templates.",
      "Where a foundation model is the better fit, we integrate OpenAI/GPT-class models into your products through carefully engineered prompts, retrieval pipelines and guardrails.",
    ],
    highlights: [
      "Predictive analytics & forecasting models",
      "Computer vision & NLP applications",
      "OpenAI / GPT integration into existing products",
      "Model deployment, monitoring & retraining pipelines",
    ],
    tags: ["Python (scikit-learn)", "TensorFlow", "PyTorch", "NLP", "Computer Vision", "OpenAI / GPT"],
    badgeImage: aiBrainNetwork,
    badgeImageAlt: "A digital brain wrapped in orbiting data rings, representing AI and machine learning",
  },
  "/ai-data/data-science": {
    type: "detail",
    eyebrow: "AI & Data",
    title: "Data Science & Analytics",
    description:
      "Turning raw, scattered data into dashboards and insights your teams can actually act on.",
    body: [
      "Our data scientists work with your existing data sources — however messy — to build clean, reliable analytics layers, from exploratory analysis through to production dashboards and reporting.",
      "We focus on insights tied to business outcomes: churn, conversion, operational efficiency, and revenue — not vanity metrics.",
    ],
    highlights: [
      "Exploratory data analysis & statistical modeling",
      "Business intelligence dashboards & reporting",
      "Data modeling & visualization",
      "A/B testing and experimentation frameworks",
    ],
    tags: ["Python", "PySpark", "Data Modeling", "Predictive Analytics"],
  },
  "/ai-data/data-engineering": {
    type: "detail",
    eyebrow: "AI & Data",
    title: "Data Engineering",
    description:
      "Reliable data pipelines and architecture that feed your analytics and AI initiatives.",
    body: [
      "Good analytics and AI depend on good data plumbing. We design and build ETL/ELT pipelines, data lakes and warehouses that consolidate data from disparate systems into a single, trustworthy source of truth.",
      "Pipelines are built to scale — with monitoring, data quality checks, and clear ownership so data stays reliable as your organization grows.",
    ],
    highlights: [
      "ETL / ELT pipeline design & orchestration",
      "Data lake & warehouse architecture",
      "Data quality monitoring & governance",
      "Real-time and batch processing pipelines",
    ],
    tags: ["PySpark", "Cloud Data Warehouses", "Machine Learning Pipelines"],
  },
  "/ai-data/automation": {
    type: "detail",
    eyebrow: "AI & Data",
    title: "Chatbots & Intelligent Automation",
    description:
      "Conversational AI and process automation that reduce manual work and improve response times.",
    body: [
      "We build chatbots and virtual assistants for customer support and internal operations, integrated with your existing systems so they can actually resolve requests — not just answer FAQs.",
      "For repetitive back-office processes, we implement RPA workflows that free up your team's time for higher-value work.",
    ],
    highlights: [
      "Chatbot design & deployment (Dialogflow, Rasa)",
      "Robotic Process Automation (RPA) for back-office workflows",
      "Integration with CRM, ERP and support systems",
      "Conversation analytics & continuous improvement",
    ],
    tags: ["Chatbots", "Dialogflow", "Rasa", "RPA", "NLP"],
    badgeImage: teamworkLightbulbs,
    badgeImageAlt: "Two lightbulbs coming together, representing collaborative automation ideas",
  },

  /* ---------------- ERP ---------------- */
  "/erp": {
    type: "hub",
    eyebrow: "ERP",
    title: "ERP, CRM & Business Applications",
    description:
      "Implementation, customization and support across the enterprise platforms that run your business — SAP, Oracle, Salesforce and Microsoft Dynamics 365.",
    intro:
      "Enterprise systems are the backbone of daily operations. Our ERP and CRM practice helps you implement, customize, integrate and support the platforms your teams rely on — reducing manual work and giving leadership a single, accurate view of the business.",
  },
  "/erp/advisory": {
    type: "detail",
    eyebrow: "ERP",
    title: "ERP Advisory and Consulting",
    description:
      "Independent advisory to shape the right ERP roadmap, from platform selection through change management.",
    body: [
      "Choosing and rolling out an ERP platform is a multi-year commitment. Our advisory practice helps leadership teams make that decision with confidence — evaluating platforms against your processes, budget and growth plans before a single line of configuration is written.",
      "Once a direction is set, we stay involved through implementation governance, program management and change management, so the rollout lands on time and the organization actually adopts it.",
    ],
    highlights: [
      "ERP platform evaluation & selection",
      "Implementation roadmap & program governance",
      "Business process re-engineering",
      "Change management & user adoption planning",
    ],
    tags: ["ERP Advisory", "Digital Transformation", "Change Management"],
  },
  "/erp/finance-accounting": {
    type: "detail",
    eyebrow: "ERP",
    title: "Finance and Accounting Process Optimization",
    description:
      "Streamlined finance workflows, controls and reporting that close the books faster and cleaner.",
    body: [
      "We help finance teams simplify and automate the processes running inside their ERP — accounts payable and receivable, reconciliations, month-end close and financial reporting — so fewer hours go into manual work and more go into analysis.",
      "That includes tightening internal controls and audit trails alongside the process changes, so speed doesn't come at the cost of accuracy or compliance.",
    ],
    highlights: [
      "Accounts payable / receivable automation",
      "Month-end close acceleration",
      "Financial reporting & controls redesign",
      "Audit-ready process documentation",
    ],
    tags: ["Finance Transformation", "Process Optimization", "Financial Controls"],
  },
  "/erp/netsuite": {
    type: "detail",
    eyebrow: "ERP",
    title: "NetSuite Solutions",
    description:
      "End-to-end NetSuite implementation, customization and managed support for growing businesses.",
    body: [
      "We implement and configure NetSuite across finance, inventory, order management and CRM modules, tailoring the platform to how fast-growing businesses actually operate rather than forcing a generic template.",
      "Beyond go-live, our managed support keeps NetSuite current — new modules, integrations and customizations — as the business scales.",
    ],
    highlights: [
      "NetSuite implementation & module configuration",
      "Custom SuiteScript development & integrations",
      "Data migration from legacy systems",
      "Ongoing managed support & optimization",
    ],
    tags: ["NetSuite", "SuiteScript", "Cloud ERP"],
  },
  "/erp/sap": {
    type: "detail",
    eyebrow: "ERP",
    title: "SAP Services",
    description:
      "SAP implementation, customization and support across technical and functional modules.",
    body: [
      "We support SAP environments end-to-end — from implementation and module configuration to custom development and ongoing production support — helping finance, supply chain and operations teams run on a stable, well-integrated platform.",
      "Our consultants work across both technical (ABAP, integrations) and functional (process configuration) tracks, so implementations reflect how your business actually operates.",
    ],
    highlights: [
      "SAP implementation & module configuration",
      "Technical (ABAP) and functional consulting",
      "System integration with third-party applications",
      "Production support & performance tuning",
    ],
    tags: ["SAP", "ERP Integration", "Business Applications"],
  },
  "/erp/oracle": {
    type: "detail",
    eyebrow: "ERP",
    title: "Oracle Services",
    description:
      "Oracle Applications and database expertise across implementation, administration and support.",
    body: [
      "Our team supports Oracle Applications and databases across the full lifecycle — implementation, customization, administration and performance tuning — helping enterprises keep mission-critical systems reliable.",
      "We also support Oracle CRM implementations, aligning sales and service processes with the rest of your technology stack.",
    ],
    highlights: [
      "Oracle Apps implementation & administration",
      "Oracle CRM configuration & customization",
      "Database performance tuning & DBA support",
      "Oracle-to-cloud migration planning",
    ],
    tags: ["Oracle", "Oracle CRM", "Database Administration"],
  },
  "/erp/salesforce": {
    type: "detail",
    eyebrow: "ERP",
    title: "Salesforce CRM",
    description:
      "Salesforce implementation and customization to help sales, service and marketing teams work from one source of truth.",
    body: [
      "We implement and customize Salesforce to match your sales and service processes — from lead management and pipeline configuration to service cloud workflows and CPQ.",
      "Where Salesforce needs to talk to other systems in your stack, we build the integrations that keep data consistent across the business.",
    ],
    highlights: [
      "Salesforce implementation & customization",
      "Salesforce CPQ (Configure, Price, Quote) setup",
      "Third-party integrations & data migration",
      "Ongoing admin support & user training",
    ],
    tags: ["Salesforce", "Salesforce CPQ", "CRM Integration"],
  },
  "/erp/dynamics-365": {
    type: "detail",
    eyebrow: "ERP",
    title: "Microsoft Dynamics 365",
    description:
      "Dynamics 365 implementation and support across CRM and business-application modules.",
    body: [
      "We help organizations implement and configure Microsoft Dynamics 365 across sales, customer service and operations modules, tailoring workflows to match existing business processes.",
      "Our team also handles integration with other Microsoft and third-party tools, so Dynamics 365 becomes a connected part of your broader technology environment rather than a silo.",
    ],
    highlights: [
      "Dynamics 365 implementation & configuration",
      "Workflow customization across modules",
      "Integration with Microsoft & third-party systems",
      "User adoption support & training",
    ],
    tags: ["Microsoft Dynamics 365", "CRM", "Business Applications"],
  },

  /* ---------------- Cyber Security ---------------- */
  "/cyber-security": {
    type: "detail",
    eyebrow: "Cyber Security",
    title: "Cyber Security",
    description:
      "Cybersecurity for uncompromising protection — from identity and access management to penetration testing and continuous monitoring.",
    body: [
      "As an ISO 27001 certified organization, security isn't an add-on for us — it's built into how we work. We help clients protect their systems and data with a mix of preventive controls, active testing and continuous monitoring.",
      "Our security engineers work across identity management, encryption, vulnerability testing and SIEM operations, tailored to your risk profile and compliance requirements.",
    ],
    highlights: [
      "Identity & Access Management (OAuth2, SAML)",
      "Penetration testing & vulnerability scanning",
      "Encryption standards (AES, RSA) implementation",
      "SIEM monitoring & incident response (Splunk, IBM QRadar)",
    ],
    tags: ["IAM", "Penetration Testing", "SIEM", "Encryption (AES/RSA)"],
    badgeImage: securityBadges,
    complianceBadge: complianceBadges,
    complianceBadgeAlt: "HIPAA Compliant and GDPR Compliant certification badges",
    verificationBadge: dnbBadge,
    verificationBadgeUrl:
      "https://www.dnb.com/business-directory/company-profiles.mspring_info_tech_india_private_limited.cd70563af56042d581bab312bb053ee5.html",
    verificationBadgeAlt: "View Mspring Infotech's verified Dun & Bradstreet company profile",
  },

  /* ---------------- Careers ---------------- */
  "/careers": {
    type: "hub",
    eyebrow: "Careers",
    title: "Build Your Career at Mspring Infotech",
    description:
      "12+ years of growth, a 60+ person team, and a culture built around domain expertise, ownership, and long-term client relationships.",
    intro:
      "We're a technology and staffing company that grows by investing in its own people first. Whether you're an engineer, recruiter, or consultant, Mspring Infotech offers the kind of hands-on exposure across cloud, AI, ERP and enterprise staffing that's hard to find elsewhere.",
  },
  "/careers/openings": {
    type: "detail",
    eyebrow: "Careers",
    title: "Current Openings",
    description: "We're growing across engineering, delivery and staffing functions.",
    body: [
      "We don't always have every open role listed here — hiring needs shift with client demand across cloud, AI/data, ERP, cybersecurity and staffing delivery. If you don't see a specific listing, that doesn't mean we're not hiring for it.",
      "The fastest way to be considered is to send us your CV directly. We review every application against current and upcoming client requirements and will reach out when there's a fit.",
    ],
    highlights: [
      "Cloud, DevOps & Data roles (DevOps Engineer, Cloud Architect, Data Engineer)",
      "Software & Engineering roles (Full-Stack, Front-End, API Engineer)",
      "AI, Data & Automation roles (Data Scientist, ML Engineer, RPA Developer)",
      "Recruitment, Account Management & Corporate roles",
    ],
    ctaLabel: "Submit Your CV",
    ctaPath: "/careers/submit-cv",
  },
  "/careers/life-at-mspring": {
    type: "detail",
    eyebrow: "Careers",
    title: "Life at Mspring",
    description: "A close-knit, delivery-focused team spanning Bangalore and Chennai.",
    body: [
      "Mspring Infotech was built by people who came up through IT staffing and delivery themselves — that shows in how the company is run. Teams are small enough that your work is visible, and structured enough that you're supported by experienced consultants and account managers.",
      "With a 50-seat training facility in Bangalore and an offshore delivery center in Tamil Nadu, we invest directly in upskilling — particularly in cloud, AI and multi-cloud data engineering as those practices continue to grow.",
    ],
    highlights: [
      "Direct exposure to enterprise clients across telecom, BFSI, retail & manufacturing",
      "Structured onboarding & continuous upskilling programs",
      "Flat, delivery-focused team culture",
      "ISO 27001-certified processes and clear ways of working",
    ],
    badgeImage: teamOfficeWindow,
    badgeImageAlt: "A Mspring Infotech professional overlooking the city skyline",
  },
  "/careers/submit-cv": {
    type: "form",
    eyebrow: "Careers",
    title: "Submit Your CV",
    description:
      "Tell us a little about yourself and the roles you're interested in — our recruitment team reviews every submission.",
  },

  /* ---------------- Talent Solutions detail children ---------------- */
  "/talent-solutions/general-staffing": {
    type: "detail",
    eyebrow: "Talent Solutions",
    title: "General Staffing",
    description: "Reliable workforce solutions across functions, delivered at the pace your business demands.",
    body: [
      "From front-office and back-office roles to operations, support and administrative positions, our general staffing practice supplies dependable, pre-screened talent across a wide range of functions and industries.",
      "Whether you need temporary cover, project-based staff or long-term contract resources, we tailor the engagement model to your requirement and manage the entire process end to end.",
    ],
    highlights: [
      "Pre-screened candidates across functions & industries",
      "Temporary, contract & long-term staffing models",
      "Rapid turnaround on high-volume requirements",
      "End-to-end payroll & compliance management",
    ],
  },
  "/talent-solutions/general-staffing/sourcing-and-recruitment": {
    type: "detail",
    eyebrow: "General Staffing",
    title: "Sourcing and Recruitment",
    description: "Multi-channel sourcing and structured recruitment that keeps your talent pipeline full.",
    body: [
      "Our sourcing engine combines headhunting, job portals, social channels, referral networks and our own talent database to reach both active and passive candidates across locations and experience levels.",
      "Every candidate is taken through structured screening — skills validation, background alignment and interest confirmation — before being presented, so your hiring managers spend time only on genuinely suitable profiles.",
    ],
    table: {
      columns: ["Channel", "Description", "Best For"],
      rows: [
        ["Internal Database", "10+ lacs pre-screened candidates", "Quick turnaround requirements"],
        ["Campus Recruitment", "100+ college partnerships", "Entry-level and fresher hiring"],
        ["Job Fairs", "Large-scale hiring events", "Volume recruitment"],
        ["Newspaper Ads", "Traditional media outreach", "Diverse demographic reach"],
        ["Digital Portals", "Online job listings and applications", "Tech-savvy candidates"],
        ["Field Recruitment", "Local market sourcing", "Location-specific hiring"],
        ["Industry Networks", "Professional associations and groups", "Specialized skill sets"],
        ["Education Camps", "Training center partnerships", "Skilled trade recruitment"],
      ],
    },
    highlights: [
      "Multi-channel sourcing: portals, social, referrals & database",
      "Structured screening & skills validation before submission",
      "Coverage across locations, functions and experience levels",
      "Consistent pipeline reporting throughout the engagement",
    ],
  },
  "/talent-solutions/general-staffing/apprenticeship-program": {
    type: "detail",
    eyebrow: "General Staffing",
    title: "Apprenticeship Program",
    description: "Structured apprenticeships that build job-ready talent while meeting your compliance goals.",
    about: {
      eyebrow: "About This Service",
      heading: "Future-ready workforce, developed through apprenticeship programs.",
      image: officeTeamCulture,
      imageAlt: "A team of professionals in conversation at a modern office",
      paragraphs: [
        "Mspring Infotech helps organizations build a steady pipeline of skilled talent through government-aligned apprenticeship programs. Employers benefit from cost-effective, work-ready talent, while apprentices gain paid, hands-on experience that enhances their career prospects.",
        "With a focus on compliance and efficiency, we ensure seamless management of apprenticeship programs, empowering both employers and apprentices to succeed in today's dynamic workforce landscape.",
      ],
    },
    why: {
      eyebrow: "Why Apprenticeships Matter",
      heading:
        "Create a steady pipeline of skilled talent while giving apprentices real-world experience and long-term career opportunities.",
      featuresLabel: "Key Features",
      features: [
        "Nationwide reach across India's key sectors",
        "Digital-first onboarding, payroll, and training on secure platforms",
        "Smart compliance support on Acts, PF/ESI exemptions, and incentives",
      ],
      valueColumns: [
        {
          title: "Value for Employers",
          items: [
            "Reduce hiring and training costs",
            "Build future-ready teams in manufacturing, retail, logistics, BFSI, and more",
            "Simplified apprentice lifecycle management from sourcing to certification",
          ],
        },
        {
          title: "Value for Apprentices",
          items: [
            "Earn while you learn with paid, hands-on experience",
            "Gain skills and credentials recognized by employers",
            "Open pathways to jobs or further education",
          ],
        },
      ],
    },
    body: [
      "Our apprenticeship program helps organizations engage fresh talent through structured, on-the-job training engagements — building a pipeline of job-ready professionals while managing enrolment, stipends and statutory compliance end to end.",
      "Apprentices are sourced, screened and matched to your requirements, and we handle the program administration throughout, giving you a low-risk way to develop and evaluate future permanent hires.",
    ],
    highlights: [
      "End-to-end apprenticeship enrolment & administration",
      "Sourcing & screening matched to your requirements",
      "Stipend management & statutory compliance handled",
      "A low-risk pathway to future permanent hires",
    ],
  },
  "/talent-solutions/it-solutions": {
    type: "detail",
    eyebrow: "Talent Solutions",
    title: "IT Solutions",
    description: "Specialized technology talent and delivery capability for your critical IT initiatives.",
    body: [
      "We connect you with experienced IT professionals — developers, cloud engineers, data specialists, ERP consultants and more — matched precisely to your technology stack and project needs.",
      "Beyond individual placements, we can stand up complete delivery teams that integrate with your organization, bringing both the skills and the accountability your initiatives require.",
    ],
    highlights: [
      "Technical talent across cloud, data, ERP & engineering",
      "Individual specialists or fully-formed delivery teams",
      "Rigorous technical screening before every submission",
      "Flexible engagement models scaled to project needs",
    ],
  },
  "/talent-solutions/it-solutions/digital-engineering-rd": {
    type: "detail",
    eyebrow: "IT Solutions",
    title: "Digital Engineering and R&D Solutions",
    description:
      "Product engineering and R&D talent that accelerates your innovation roadmap.",
    body: [
      "From concept to launch, our digital engineering practice supplies the specialized talent and delivery capability behind modern product development — software engineering, embedded systems, data platforms, QA automation and DevOps.",
      "Whether you're modernizing a legacy platform or building something entirely new, we assemble engineering pods that plug into your R&D organization and deliver against your roadmap with full accountability.",
    ],
    highlights: [
      "Product & platform engineering across the full stack",
      "Embedded, IoT & device engineering capability",
      "QA automation, DevOps & SRE built into delivery",
      "Dedicated engineering pods aligned to your roadmap",
    ],
  },
  "/talent-solutions/it-solutions/managed-services": {
    type: "detail",
    eyebrow: "IT Solutions",
    title: "Managed Services",
    description:
      "Outcome-driven management of your IT functions, so your team can focus on the core business.",
    body: [
      "We take end-to-end ownership of defined IT functions — application support, infrastructure operations, service desk, monitoring and more — delivering them against agreed SLAs with transparent reporting.",
      "Our managed services model converts unpredictable staffing overhead into a reliable, outcome-based engagement, with continuous improvement built into every review cycle.",
    ],
    highlights: [
      "SLA-backed ownership of defined IT functions",
      "Application support, infra ops & service desk coverage",
      "Transparent reporting & governance cadence",
      "Continuous improvement baked into the engagement",
    ],
  },
  "/talent-solutions/it-solutions/managed-service-provider": {
    type: "detail",
    eyebrow: "IT Solutions",
    title: "Managed Solutions Provider (MSP)",
    description:
      "A single accountable partner to manage your entire contingent workforce program.",
    body: [
      "As your Managed Solutions Provider, we run the complete contingent workforce program — vendor management, requisition-to-onboarding workflows, compliance, rate governance and consolidated reporting — through a single point of accountability.",
      "The result is faster fulfilment, consistent quality across suppliers, and full visibility into the cost and performance of your extended workforce.",
    ],
    highlights: [
      "Single point of accountability for contingent hiring",
      "Vendor management & rate governance",
      "Compliance and onboarding workflows handled end to end",
      "Consolidated reporting across your entire program",
    ],
  },
  "/talent-solutions/it-solutions/hire-train-deploy": {
    type: "detail",
    eyebrow: "IT Solutions",
    title: "Hire-Train-Deploy | Hire-Deploy-Train",
    description:
      "Custom-skilled talent pipelines — trained on your stack before (or right after) they join your team.",
    body: [
      "Our Hire-Train-Deploy model sources high-potential candidates, puts them through an intensive training program built around your technology stack and ways of working, and deploys them ready to contribute from day one.",
      "Prefer speed? The Hire-Deploy-Train variant places candidates immediately and runs structured upskilling on the job — either way, you get a predictable pipeline of talent shaped precisely to your requirements.",
    ],
    highlights: [
      "Training curriculum built around your technology stack",
      "Job-ready talent from day one of deployment",
      "Flexible HTD or HDT sequencing to match your timelines",
      "A predictable, scalable pipeline of custom-skilled talent",
    ],
  },
  "/talent-solutions/recruitment-services": {
    type: "detail",
    eyebrow: "Talent Solutions",
    title: "Recruitment Services",
    description: "End-to-end recruitment that finds, screens and secures the right people for your team.",
    body: [
      "Our recruitment services cover the complete hiring lifecycle — sourcing through headhunting, job portals and social channels, first-level screening, interview coordination, offer management and post-joining follow-up.",
      "You only meet candidates who are genuinely qualified and interested, and we stay involved after the offer to make sure every placement sticks.",
    ],
    highlights: [
      "Headhunting, job portal & social sourcing",
      "Rigorous first-level screening before client interviews",
      "Offer negotiation & resignation follow-up support",
      "Post-joining check-ins to confirm a strong fit",
    ],
  },
  "/talent-solutions/staff-augmentation": {
    type: "detail",
    eyebrow: "Talent Solutions",
    title: "Staff Augmentation",
    description: "Pre-vetted, highly skilled professionals to scale your team quickly and flexibly.",
    body: [
      "When you need specialized skills fast — without the overhead of a full hiring cycle — staff augmentation lets you plug experienced professionals directly into your existing teams.",
      "Every candidate goes through our rigorous screening process before being presented, so you're evaluating people who are genuinely ready to contribute from day one.",
    ],
    highlights: [
      "Access to pre-screened technical & functional talent",
      "Flexible engagement lengths, scaled to project needs",
      "Faster time-to-fill than traditional hiring",
      "Dedicated account manager throughout the engagement",
    ],
  },
  "/talent-solutions/full-time-placements": {
    type: "detail",
    eyebrow: "Talent Solutions",
    title: "Full-Time Placements",
    description: "End-to-end recruitment for permanent hires who fit your team long-term.",
    body: [
      "For roles you're hiring permanently, we run our full recruitment process — sourcing, screening, interview coordination and offer management — so you only meet candidates who are genuinely qualified and interested.",
      "We stay involved through onboarding and beyond, following up to make sure the placement is working for both sides.",
    ],
    highlights: [
      "Headhunting, job portal & social sourcing",
      "Rigorous first-level screening before client interviews",
      "Offer negotiation & resignation follow-up support",
      "Post-joining check-ins to confirm a strong fit",
    ],
    badgeImage: officeTeamCulture,
    badgeImageAlt: "A team collaborating in a modern office setting",
  },
  "/talent-solutions/contract-to-hire": {
    type: "detail",
    eyebrow: "Talent Solutions",
    title: "Contract to Hire",
    description: "Evaluate talent on the job before making a permanent commitment.",
    body: [
      "Contract-to-hire lets you bring a candidate on board on a fixed-term basis, see how they perform against real work, and convert to a permanent offer once you're confident in the fit — reducing hiring risk on both sides.",
      "We manage the contractual and administrative details throughout, so you can focus on evaluating performance rather than paperwork.",
    ],
    highlights: [
      "Lower-risk way to evaluate before committing long-term",
      "Flexible contract terms tailored to the role",
      "Smooth conversion process to permanent employment",
      "Case-by-case commercial terms based on role & duration",
    ],
  },
  "/talent-solutions/volume-hiring": {
    type: "detail",
    eyebrow: "Talent Solutions",
    title: "Volume Hiring",
    description: "Structured hiring at scale for large, time-bound recruitment drives.",
    body: [
      "When you need to hire in bulk — for a new project, office launch, or seasonal ramp-up — we stand up a dedicated recruitment pod to run sourcing, screening and interviews at speed without cutting corners on quality.",
      "Our PAN India delivery footprint means we can source across multiple locations simultaneously, and our reporting keeps you informed of pipeline health throughout the drive.",
    ],
    highlights: [
      "Dedicated recruitment pod for large, time-bound drives",
      "PAN India sourcing across multiple locations",
      "Regular pipeline reporting & review meetings",
      "Commercial terms aligned to client hiring standards",
    ],
  },

  /* ---------------- Industries detail children ---------------- */
  "/industries/telecom": {
    type: "detail",
    eyebrow: "Industries",
    title: "Telecommunications, Media & Entertainment",
    description:
      "Scalable IT infrastructure, AI-driven solutions, and cloud-first strategies for connectivity and digital content delivery.",
    body: [
      "We've supported telecom operators since our earliest years — starting with Airtel IT staffing and telecom services in 2012 — and have since delivered infrastructure, staffing and cloud projects for operators across multiple geographies.",
      "Our work spans network operations support, customer experience platforms, and the cloud and data infrastructure that content and connectivity businesses depend on.",
    ],
    highlights: [
      "Network operations & IT infrastructure support",
      "Cloud migration for telecom & media platforms",
      "Customer experience & billing system integration",
      "IT staff augmentation for telecom delivery teams",
    ],
    clients: ["SaskTel", "Charter Communications", "MTN", "StarHub", "Telia Company", "Airtel"],
  },
  "/industries/bfsi": {
    type: "detail",
    eyebrow: "Industries",
    title: "Banking & Financial Services",
    description: "Secure, data-driven, and AI-powered solutions for banks, fintechs and insurers.",
    body: [
      "Financial services organizations need technology partners who take security and compliance as seriously as they do. Our ISO 27001-certified processes and encryption/IAM expertise are built for exactly this kind of environment.",
      "We support BFSI clients and Big 4 consulting firms with staff augmentation, application development and data infrastructure that meets the sector's demands for accuracy and auditability.",
    ],
    highlights: [
      "Secure application development & data infrastructure",
      "Compliance-aligned delivery (ISO 27001 certified)",
      "AI-powered fraud detection & analytics",
      "Staff augmentation for banking & fintech delivery teams",
    ],
    clients: ["Big 4 Consulting Companies", "Banking & Financial Institutions", "BDO"],
  },
  "/industries/healthcare": {
    type: "detail",
    eyebrow: "Industries",
    title: "Healthcare & Life Sciences",
    description: "Accelerating innovation in patient care, medical research, and digital health systems.",
    body: [
      "We work with healthcare and life sciences organizations to build the digital systems that support patient care, research operations and supply chain — with the data confidentiality and security controls the sector requires.",
      "This includes both project delivery and staff augmentation for specialized healthcare IT roles.",
    ],
    highlights: [
      "Digital health platform development",
      "Data confidentiality & security-first delivery",
      "Healthcare marketplace & supply chain systems",
      "Specialized staff augmentation for life sciences IT",
    ],
    clients: ["Viatris", "Medikabazaar"],
  },
  "/industries/retail": {
    type: "detail",
    eyebrow: "Industries",
    title: "Retail & E-Commerce",
    description: "Driving customer engagement, inventory intelligence, and seamless digital experiences.",
    body: [
      "Retail and e-commerce businesses need systems that keep up with customer expectations and inventory complexity. We help build the web, mobile and data platforms that power modern retail operations.",
      "Our e-commerce competency — launched as part of our 2021–2022 expansion — covers everything from storefront development to backend inventory and fulfillment integration.",
    ],
    highlights: [
      "E-commerce platform development & integration",
      "Inventory intelligence & fulfillment systems",
      "Customer engagement & personalization features",
      "Mobile app development for retail experiences",
    ],
    clients: ["Lowe's"],
  },
  "/industries/manufacturing": {
    type: "detail",
    eyebrow: "Industries",
    title: "Manufacturing",
    description: "Digitizing operations with smart factory solutions, ERP integrations, and real-time data visibility.",
    body: [
      "Manufacturing clients rely on us for ERP implementation and integration work that connects shop-floor operations with business systems, plus staff augmentation for specialized engineering roles.",
      "We bring the same SAP, Oracle and data engineering expertise used across our ERP practice to help manufacturers get real-time visibility into their operations.",
    ],
    highlights: [
      "ERP integration for shop-floor & business systems",
      "Real-time data visibility & reporting",
      "Smart factory & IoT-enabled solutions",
      "Engineering staff augmentation",
    ],
    clients: ["Tata Advanced Systems", "Blue Star", "Pidilite"],
  },
  "/industries/public-sector": {
    type: "detail",
    eyebrow: "Industries",
    title: "Public Sector & Government",
    description: "Enabling efficient, transparent, and citizen-centric digital governance.",
    body: [
      "Public sector projects demand rigorous compliance and security standards. Our ISO 27001-certified delivery processes and cybersecurity practice are built to meet exactly those requirements.",
      "We support digital governance initiatives with application development, cloud infrastructure and secure data handling practices.",
    ],
    highlights: [
      "Citizen-centric digital service development",
      "Compliance-aligned, security-first delivery",
      "Cloud infrastructure for public sector systems",
      "Data privacy & confidentiality controls",
    ],
  },
  "/industries/automotive": {
    type: "detail",
    eyebrow: "Industries",
    title: "Automotive",
    description: "Supporting digital transformation in mobility, manufacturing, and autonomous technology.",
    body: [
      "We support automotive manufacturers and mobility companies with engineering staff augmentation, ERP integration, and the data and cloud infrastructure behind connected and autonomous vehicle initiatives.",
      "Our aviation and automotive engineering staffing bench includes CAD/CAM design, mechanical and structural engineering talent alongside our core software teams.",
    ],
    highlights: [
      "Engineering staff augmentation (CAD/CAM, mechanical, structural)",
      "ERP & manufacturing systems integration",
      "Data infrastructure for connected vehicle platforms",
      "Cloud & DevOps support for automotive software teams",
    ],
    clients: ["Tata Motors", "Volvo"],
  },
  "/industries/oil-gas-energy": {
    type: "detail",
    eyebrow: "Industries",
    title: "Oil, Gas & Energy",
    description: "Supporting sustainable operations with IoT, predictive analytics, and cloud-based energy solutions.",
    body: [
      "Energy sector clients work with us on cloud infrastructure, predictive analytics and IoT-enabled monitoring that support more efficient, sustainable operations.",
      "We also provide specialized staff augmentation for engineering and technical roles in this sector.",
    ],
    highlights: [
      "IoT-enabled monitoring & predictive analytics",
      "Cloud-based infrastructure for energy operations",
      "Data engineering for sustainability reporting",
      "Specialized engineering staff augmentation",
    ],
    clients: ["SLB", "STC"],
  },
};

export function getPageContent(path) {
  return pageContent[path];
}
