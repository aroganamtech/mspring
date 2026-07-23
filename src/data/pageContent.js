// Content for every hub (dropdown parent) and detail (dropdown child) page.
// Hub pages render an intro + cards linking to their children (pulled from menu.js).
// Detail pages render an intro + highlight bullets + optional technology tags.

import aiHumanCollaboration from "../assets/ai-human-collaboration.jpg";
import teamOfficeWindow from "../assets/team-office-window.jpg";
import officeTeamCulture from "../assets/office-team-culture.jpg";
import leadershipArrowYellow from "../assets/leadership-arrow-yellow.jpg";
import leadershipArrowBlue from "../assets/leadership-arrow-blue.jpg";
import aiBrainNetwork from "../assets/ai-brain-network.jpg";
import teamworkLightbulbs from "../assets/teamwork-lightbulbs.jpg";
import staffingMeeting from "../assets/staffing-meeting.jpg";
import ctaConnect from "../assets/cta-connect.jpg";
import cloudAbstractSphere from "../assets/cloud-abstract-sphere.jpg";
import complianceBadgesBanner from "../assets/compliance-badges-banner.svg";
import integrationServices from "../assets/integration-services.svg";
import aiNetworkCubes from "../assets/ai-network-cubes.svg";
import aiDataHero from "../assets/WhatsApp Image 2026-07-21 at 4.25.33 PM.jpeg";
import aiInnovationHand from "../assets/WhatsApp Image 2026-07-21 at 4.25.34 PM.jpeg";
import aiIdeasBrain from "../assets/WhatsApp Image 2026-07-21 at 4.35.07 PM.jpeg";
import lifeAtMspringCare from "../assets/WhatsApp Image 2026-07-21 at 4.35.05 PM.jpeg";
import dataScienceSpheres from "../assets/WhatsApp Image 2026-07-21 at 4.35.06 PM.jpeg";
import gccGlobalReach from "../assets/WhatsApp Image 2026-07-21 at 4.35.06 PM (1).jpeg";
import permanentRecruitmentFocus from "../assets/WhatsApp Image 2026-07-21 at 4.25.34 PM (2).jpeg";
import dataEngineeringOrbit from "../assets/WhatsApp Image 2026-07-21 at 4.25.33 PM (1).jpeg";
import aiRobotHumanCorridor from "../assets/WhatsApp Image 2026-07-16 at 1.13.30 PM (1).jpeg";
import lifeThumbsUp from "../assets/WhatsApp Image 2026-07-15 at 12.17.18 PM.jpeg";
import lifeOfficeTeam from "../assets/WhatsApp Image 2026-07-16 at 1.13.30 PM (3).jpeg";
import lifeRooftopUnwind from "../assets/WhatsApp Image 2026-07-16 at 1.13.30 PM (2).jpeg";
import lifeTeamPortrait from "../assets/WhatsApp Image 2026-07-13 at 1.38.59 PM (1).jpeg";
import recruitmentProcessSteps from "../assets/image.png";
import docCloudMigration1 from "../assets/doc-cloud-migration-1.jpeg";
import docCloudConsulting1 from "../assets/doc-cloud-consulting-1.jpeg";
import docCloudConsulting2 from "../assets/doc-cloud-consulting-2.jpeg";
import docDevopsAutomation from "../assets/doc-devops-automation.gif";
import docCloudManagedServices from "../assets/doc-cloud-managed-services.jpeg";
import docDataScience from "../assets/doc-data-science.jpeg";
import docDataEngineering from "../assets/doc-data-engineering.jpeg";
import docOracleOssBss from "../assets/doc-oracle-oss-bss.jpeg";
import docSiebelCrm1 from "../assets/doc-siebel-crm-1.png";
import docSiebelCrm2 from "../assets/doc-siebel-crm-2.jpeg";
import docSalesforceCrmCpq1 from "../assets/doc-salesforce-crm-cpq-1.png";
import docSalesforceCrmCpq2 from "../assets/doc-salesforce-crm-cpq-2.jpeg";
import docSalesforceCrmCpq3 from "../assets/doc-salesforce-crm-cpq-3.jpeg";
import docSalesforceCpq from "../assets/doc-salesforce-cpq.jpeg";

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
    heroImage: integrationServices,
    heroImageAlt: "Integration Services diagram showing a cloud connected to Infrastructure, Data, Platform, Email, SaaS and Parallels",
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
    bodyImages: [
      { image: docCloudConsulting1, alt: "An abstract flowing swirl of blue and teal lines" },
      { image: docCloudConsulting2, alt: "Two consultants discussing cloud strategy beside a laptop with a cloud icon" },
    ],
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
    bodyImage: docCloudMigration1,
    bodyImageAlt: "A glowing cloud network connected to rows of data center servers",
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
    bodyImage: docDevopsAutomation,
    bodyImageAlt:
      "An infographic showing DevOps automation pillars: Cloud Native Development, Observability, Cloud Automation, DevSecOps, DevOps Services, and SRE & Chaos Engineering",
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
    gallery: [
      { image: docCloudManagedServices, alt: "A hand presenting cloud service icons above an open laptop" },
    ],
  },
  "/cloud/native-development": {
    type: "detail",
    eyebrow: "Cloud",
    title: "Cloud Native Development",
    description:
      "Scalable, resilient applications built with cloud-native architecture, microservices and container orchestration.",
    body: [
      "We design and build applications the cloud-native way from the outset — decomposed into independently deployable microservices, packaged in containers, and orchestrated for elastic scale.",
      "Our engineers apply twelve-factor principles, API-first design and automated testing so the systems we ship stay resilient, observable and easy to extend as your product grows.",
    ],
    highlights: [
      "Microservices architecture & API design",
      "Containerized workloads with Docker & Kubernetes",
      "Event-driven and serverless application patterns",
      "Automated testing, CI/CD and observability built in",
    ],
    tags: ["Kubernetes", "Docker", "Microservices", "Serverless", "API Gateway"],
  },
  "/cloud/security-compliance": {
    type: "detail",
    eyebrow: "Cloud",
    title: "Cloud Security & Compliance",
    description:
      "Vulnerability assessment, penetration testing (VAPT) and compliance reviews that keep your environment audit-ready.",
    body: [
      "Security and compliance are built into every cloud engagement, not bolted on afterward. We assess your environment for misconfigurations, exposed data and access-control gaps, then remediate against recognized frameworks.",
      "From vulnerability assessments and penetration testing to ongoing compliance monitoring, our team helps you stay audit-ready across the standards your business and customers expect.",
    ],
    highlights: [
      "Vulnerability assessment & penetration testing (VAPT)",
      "Identity, access management & least-privilege review",
      "Compliance mapping (ISO 27001, SOC 2, GDPR, HIPAA)",
      "Continuous security monitoring & incident readiness",
    ],
    tags: ["VAPT", "IAM", "ISO 27001", "SOC 2", "Cloud Security Posture Management"],
  },

  /* ---------------- AI & Data ---------------- */
  "/ai-data": {
    type: "hub",
    eyebrow: "AI & Data",
    title: "AI, Data Science & Intelligent Automation",
    description:
      "Harness AI & machine learning for smarter operations, data science for actionable insights, and automation for measurable efficiency gains.",
    heroImage: aiDataHero,
    heroImageAlt: "An abstract, colorful wireframe rendering of an open hand, representing AI and data intelligence",
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
    bodyImage: aiBrainNetwork,
    bodyImageAlt: "A digital brain wrapped in orbiting data rings, representing AI and machine learning",
    features: [
      {
        titleBold: "Empowering Innovation.",
        titleLight: "Elevating Possibilities.",
        text: "We build AI systems designed to push past proof-of-concept — engineered for the accuracy, scale and reliability that production business use cases demand.",
        image: aiInnovationHand,
        imageAlt: "A robotic hand reaching toward a glowing, textured artifact, representing AI-driven innovation",
      },
      {
        titleBold: "Turning Data",
        titleLight: "Into Ideas",
        text: "Behind every model is a clear question worth answering. Our team pairs data science with product thinking so machine learning translates into features people actually use.",
        image: aiIdeasBrain,
        imageAlt: "A colorful illustration of a human head made of fractured shapes with a glowing lightbulb, representing ideas generated from data",
      },
      {
        titleBold: "Human Expertise,",
        titleLight: "AI Powered",
        text: "We build AI to work alongside your teams, not replace their judgment — pairing automation with the human oversight that keeps outcomes accurate, accountable and aligned with your business.",
        image: aiRobotHumanCorridor,
        imageAlt: "A humanoid robot and a businessman walking side by side down a bright corridor, representing AI working alongside people",
      },
    ],
    highlights: [
      "Predictive analytics & forecasting models",
      "Computer vision & NLP applications",
      "OpenAI / GPT integration into existing products",
      "Model deployment, monitoring & retraining pipelines",
    ],
    tags: ["Python (scikit-learn)", "TensorFlow", "PyTorch", "NLP", "Computer Vision", "OpenAI / GPT"],
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
    bodyImages: [
      { image: dataScienceSpheres, alt: "An abstract illustration of connected spheres representing linked data points and analytics" },
      { image: docDataScience, alt: "A laptop and phones displaying colorful analytics dashboards and charts" },
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
    bodyImage: docDataEngineering,
    bodyImageAlt: "Isometric blue data cubes connected along a pipeline",
    highlights: [
      "ETL / ELT pipeline design & orchestration",
      "Data lake & warehouse architecture",
      "Data quality monitoring & governance",
      "Real-time and batch processing pipelines",
    ],
    tags: ["PySpark", "Cloud Data Warehouses", "Machine Learning Pipelines"],
    badgeImage: dataEngineeringOrbit,
    badgeImageAlt: "An abstract illustration of orbiting spheres connected by elliptical rings, representing interconnected data systems",
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
    bodyImage: aiNetworkCubes,
    bodyImageAlt: "A brain made of light cubes connected to a network of dark isometric cubes on a blue background, representing AI-driven automation",
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
    title: "Oracle Communication OSS/BSS",
    description:
      "What if you could get access to OSS/BSS solutions that enhance your core business value by uplifting enterprise service levels? Yes, Oracle OSS/BSS does that and much more by minimizing cost, improving focus on communication affiliates, extending the focus on communication affiliates, exploring the scope and depth of Mspring's solution architecture, and much more.",
    headerCtaLabel: "Lets Talk",
    gallery: [
      { image: docOracleOssBss, alt: "A cube labeled OSS and BSS surrounded by a cloud icon, server rack and analytics dashboard" },
    ],
    serviceCards: {
      heading: "OSS/BSS Services",
      text: "Oracle OSS can also help you simplify industrial design, technical implementations, and test the complexity of business use cases. Besides, you can stay miles ahead of our competitors and improve customer experience by bracing yourself for the 5G era and taking your Telecom expertise to a whole new level.",
      cards: [
        { title: "Service Provisioning & Order Management" },
        { title: "Billing and Revenue Management" },
        { title: "Network and Service Management" },
      ],
    },
    bands: {
      heading: "Oracle OSS/BSS Services In Action",
      text: "With skill development, consulting, and systems integration expertise, we are enabling communication service providers to become more agile and cost-efficient.",
      items: [
        {
          title: "System Design And Architecture",
          text: "Designing scalable, robust, and high-performance solutions using Oracle Communications OSS/BSS products like Oracle Communications Billing and Revenue Management (BRM), Oracle Communications Order and Service Management (OSM), and Oracle Communications Network Inventory (ONI).",
        },
        {
          title: "Customization And Development",
          text: "Implementing automation, scripting, and complex logic to streamline processes such as service ordering, billing, customer management, and network management.",
        },
        {
          title: "Configuration And Integration",
          text: "Integrating OSS/BSS applications with legacy systems, third-party applications, and network elements. Ensuring effective data synchronization and troubleshooting any integration issues.",
        },
        {
          title: "Performance Optimization",
          text: "Tuning the OSS/BSS applications for optimal performance, reliability, and scalability. Analyzing bottlenecks and implementing solutions to ensure smooth operations.",
        },
        {
          title: "Testing And Quality Assurance",
          text: "Ensuring the OSS/BSS systems are bug-free and comply with both functional and technical requirements. Performing regression testing and conducting system integration tests after updates or patches.",
        },
      ],
    },
    partner: {
      align: "left",
      heading: "How Can Mspring Infotech Helps In OSS/BSS?",
      text: "Mspring Infotech has completed 20+ Oracle OSS/BSS Solutions implementations worldwide and has top-notch project management capabilities to implement complex projects in both the offshore and onshore models.",
      cards: [
        {
          title: "Automated Workflows",
          text: "Mspring Infotech can implement advanced automation in your OSS/BSS processes, helping to reduce manual intervention and errors. This includes automating service provisioning, order management and routine operational tasks end to end.",
        },
        {
          title: "AI & Machine Learning",
          text: "Leveraging AI and ML technologies, Mspring Infotech can optimize decision-making in OSS/BSS, such as predictive maintenance, automated issue detection, and customer experience personalization.",
        },
        {
          title: "Collaboration With Stakeholders",
          text: "Working with cross-functional teams (network engineers, product managers, and business units) to ensure the OSS/BSS solution aligns with both technical and business goals.",
        },
      ],
    },
  },
  "/erp/oracle/oss": {
    type: "detail",
    eyebrow: "Oracle Services",
    title: "OSS",
    description:
      "Operations Support Systems that keep your network services running — from provisioning to assurance.",
    body: [
      "Operations Support Systems (OSS) are the backbone of a communication service provider's network operations — covering service provisioning, order management, network inventory, fault management and performance monitoring.",
      "Our Oracle OSS expertise spans Oracle Communications Order and Service Management (OSM) and Oracle Communications Network Inventory (ONI) — designing, implementing and integrating the systems that let you launch services faster and operate them reliably at scale.",
    ],
    highlights: [
      "Service provisioning & order management (OSM)",
      "Network inventory & resource management (ONI)",
      "Fault management & service assurance workflows",
      "Integration with legacy and third-party systems",
    ],
    tags: ["Oracle OSM", "Oracle ONI", "Service Assurance"],
  },
  "/erp/oracle/bss": {
    type: "detail",
    eyebrow: "Oracle Services",
    title: "BSS",
    description:
      "Business Support Systems that power your revenue — billing, charging, and customer management.",
    body: [
      "Business Support Systems (BSS) handle the commercial side of a communication service provider — billing and revenue management, charging, product catalogs and customer management.",
      "Our Oracle BSS expertise centers on Oracle Communications Billing and Revenue Management (BRM) — implementing, customizing and optimizing the systems that turn network usage into accurate, timely revenue while keeping the customer experience smooth.",
    ],
    highlights: [
      "Billing & Revenue Management (BRM) implementation",
      "Online & offline charging configuration",
      "Product catalog & pricing management",
      "Revenue assurance & billing accuracy audits",
    ],
    tags: ["Oracle BRM", "Billing", "Revenue Management"],
  },
  "/erp/oracle/siebel": {
    type: "detail",
    eyebrow: "Oracle Services",
    title: "Siebel CRM",
    description:
      "Siebel CRM consulting, implementation, customization and support that make the most of your CRM investment.",
    features: [
      {
        titleBold: "Siebel",
        titleLight: "Consulting",
        text: "Our Siebel Consulting services provide expert guidance at every stage of your CRM journey, helping businesses align their CRM strategy with their overall business goals. Our team assists in defining the roadmap for Siebel CRM integration, ensuring optimal utilization of the platform's capabilities to drive business growth.",
        image: docSiebelCrm1,
        imageAlt: "Unlock the full potential of Siebel CRM banner with a server rack illustration",
      },
      {
        titleBold: "Siebel",
        titleLight: "Implementation",
        text: "Our Siebel Implementation services focus on setting up and configuring the Siebel CRM system according to your business needs. We guide you through the entire implementation process, from planning and designing to deployment, ensuring a smooth and efficient transition.",
        image: docSiebelCrm2,
        imageAlt: "Siebel CRM 25.9 New Features banner with a DNA helix illustration",
      },
      {
        titleBold: "Siebel",
        titleLight: "Customization",
        text: "We understand that each business has unique needs. Our Customization and Migration services cater to this uniqueness, tailoring Siebel CRM to suit your specific requirements. We facilitate a smooth transition from your existing CRM to Siebel, managing the complex process of data migration while ensuring complete data security.",
        image: aiHumanCollaboration,
        imageAlt: "Hands typing on a laptop with digital service icons",
      },
      {
        titleBold: "Siebel Support and",
        titleLight: "Maintenance",
        text: "Our Siebel Support and Maintenance services ensure that your Siebel CRM system remains updated and continues to perform at its best. We provide proactive maintenance, troubleshoot issues, and offer continuous support to keep your system running smoothly and efficiently.",
        image: teamOfficeWindow,
        imageAlt: "A professional working on a laptop in a bright office",
      },
    ],
    partner: {
      heading: "Partner with Mspring Infotech for Siebel CRM Services",
      text: "Partnering with Mspring Infotech for Siebel CRM consulting services ensures you are working with a team that blends deep technical expertise with strategic insights. We understand the critical role that Siebel CRM plays in your business. Our unique approach to consulting, implementation, customization, and support ensures your CRM solution is tailored to your needs, enhancing productivity and driving business growth. Choose Mspring Infotech, and make the most of your Siebel CRM investment.",
      cards: [
        {
          icon: "code",
          title: "Experienced Developers",
          text: "We have a team of experienced professionals to fulfil your niche requirements and deliver on every engagement.",
        },
        {
          icon: "handshake",
          title: "Collaborative Approach",
          text: "We follow a very open and collaborative way of working with clients, keeping you involved at every stage.",
        },
        {
          icon: "shield",
          title: "Decade long experience",
          text: "A decade long experience in delivering top-grade solutions across industries and technologies.",
        },
      ],
    },
  },
  "/erp/salesforce": {
    type: "detail",
    eyebrow: "ERP",
    title: "Salesforce CRM",
    description:
      "Salesforce CRM consulting, implementation, customization and support that make the most of your CRM investment.",
    features: [
      {
        titleBold: "Salesforce",
        titleLight: "Consulting",
        text: "Our Salesforce Consulting services provide expert guidance at every stage of your CRM journey, helping businesses align their CRM strategy with their overall business goals. Our team assists in defining the roadmap for Salesforce CRM integration, ensuring optimal utilization of the platform's capabilities to drive business growth.",
        image: docSalesforceCrmCpq1,
        imageAlt: "Icons representing Salesforce CRM capabilities arranged around the Salesforce logo",
      },
      {
        titleBold: "Salesforce",
        titleLight: "Implementation",
        text: "Our Salesforce Implementation services focus on setting up and configuring the Salesforce CRM system according to your business needs. We guide you through the entire implementation process, from planning and designing to deployment, ensuring a smooth and efficient transition.",
        image: docSalesforceCrmCpq2,
        imageAlt: "Key Features of CRM Managed Salesforce Services infographic",
      },
      {
        titleBold: "Salesforce",
        titleLight: "Customization",
        text: "We understand that each business has unique needs. Our Customization and Migration services cater to this uniqueness, tailoring Salesforce to suit your specific requirements. We facilitate a smooth transition from your existing CRM to Salesforce, managing the complex process of data migration while ensuring complete data security.",
        image: docSalesforceCrmCpq3,
        imageAlt: "Salesforce product cloud icons including Sales Cloud, Service Cloud, Marketing Cloud and Salesforce CPQ",
      },
      {
        titleBold: "Salesforce Support and",
        titleLight: "Maintenance",
        text: "Our Salesforce Support and Maintenance services ensure that your Salesforce CRM system remains updated and continues to perform at its best. We provide proactive maintenance, troubleshoot issues, and offer continuous support to keep your system running smoothly and efficiently.",
        image: docSalesforceCpq,
        imageAlt: "Salesforce CPQ wheel diagram showing product selection, quote, configuration, proposal, approval and bundling steps",
      },
    ],
    partner: {
      heading: "Partner with Mspring Infotech for Salesforce CRM Services",
      text: "Partnering with Mspring Infotech for Salesforce CRM consulting services ensures you are working with a team that blends deep technical expertise with strategic insights. We understand the critical role that Salesforce CRM plays in your business. Our unique approach to consulting, implementation, customization, and support ensures your CRM solution is tailored to your needs, enhancing productivity and driving business growth. Choose Mspring Infotech, and make the most of your Salesforce CRM investment.",
      cards: [
        {
          icon: "code",
          title: "Experienced Developers",
          text: "We have a team of experienced professionals to fulfil your niche requirements and deliver on every engagement.",
        },
        {
          icon: "handshake",
          title: "Collaborative Approach",
          text: "We follow a very open and collaborative way of working with clients, keeping you involved at every stage.",
        },
        {
          icon: "shield",
          title: "Decade long experience",
          text: "A decade long experience in delivering top-grade solutions across industries and technologies.",
        },
      ],
    },
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
    bodyImage: complianceBadgesBanner,
    bodyImageAlt:
      "HIPAA compliant, GDPR compliant, AES 256-bit SSL secured, ISO 27001 certified, and Dun & Bradstreet sealed badges",
    highlights: [
      "Identity & Access Management (OAuth2, SAML)",
      "Penetration testing & vulnerability scanning",
      "Encryption standards (AES, RSA) implementation",
      "SIEM monitoring & incident response (Splunk, IBM QRadar)",
    ],
    tags: ["IAM", "Penetration Testing", "SIEM", "Encryption (AES/RSA)"],
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
    showOpenings: true,
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
    features: [
      {
        titleBold: "Support That",
        titleLight: "Covers You",
        text: "We look out for our people the way we look out for our clients — with steady support, clear structure, and room to focus on the work instead of worrying about what isn't covered.",
        image: lifeAtMspringCare,
        imageAlt: "An illustration of a person working at a desk sheltered under an umbrella, protected from falling rain",
      },
      {
        titleBold: "Team Spirit,",
        titleLight: "Built In",
        text: "Good work rarely happens alone. Our culture is built on people showing up for each other — celebrating wins together and backing one another through the tough deliveries.",
        image: lifeThumbsUp,
        imageAlt: "A row of arms and hands giving thumbs up, representing team spirit and collaboration",
      },
      {
        titleBold: "A Workplace",
        titleLight: "Built to Grow In",
        text: "From collaborative open floors to focused project rooms, our offices are designed for the way modern delivery teams actually work — together, in the open, and close to the people they support.",
        image: lifeOfficeTeam,
        imageAlt: "A professional standing in a modern open-plan office with a team collaborating in the background",
      },
      {
        titleBold: "Work That Respects",
        titleLight: "Your Time",
        text: "We believe good delivery work and a good life outside of it aren't in competition. Flexible schedules and a genuine respect for downtime mean our people can switch off and recharge.",
        image: lifeRooftopUnwind,
        imageAlt: "A professional relaxing on a rooftop lounge with a city skyline in the background",
      },
      {
        titleBold: "Real People,",
        titleLight: "Real Careers",
        text: "Behind every project is a person building a career, not just clocking hours. We invest in our team's growth so the people who join us today become the leaders of tomorrow.",
        image: lifeTeamPortrait,
        imageAlt: "A professional portrait of a smiling Mspring Infotech team member",
      },
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
    subSections: [
      {
        eyebrow: "General Staffing",
        title: "Sourcing and Recruitment",
        path: "/talent-solutions/general-staffing/sourcing-and-recruitment",
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
      {
        eyebrow: "General Staffing",
        title: "Apprenticeship Program",
        path: "/talent-solutions/general-staffing/apprenticeship-program",
        description: "Structured apprenticeships that build job-ready talent while meeting your compliance goals.",
        about: {
          heading: "Future-ready workforce, developed through apprenticeship programs.",
          image: officeTeamCulture,
          imageAlt: "A team of professionals in conversation at a modern office",
          paragraphs: [
            "Mspring Infotech helps organizations build a steady pipeline of skilled talent through government-aligned apprenticeship programs. Employers benefit from cost-effective, work-ready talent, while apprentices gain paid, hands-on experience that enhances their career prospects.",
            "With a focus on compliance and efficiency, we ensure seamless management of apprenticeship programs, empowering both employers and apprentices to succeed in today's dynamic workforce landscape.",
          ],
        },
        why: {
          heading:
            "Create a steady pipeline of skilled talent while giving apprentices real-world experience and long-term career opportunities.",
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
    title: "Innovation-led Digital Engineering and R&D",
    headerCtaLabel: "Talk to our experts",
    heroImage: aiHumanCollaboration,
    heroImageAlt: "Hands working on a laptop with digital document icons overlaid",
    about: {
      eyebrow: "About This Service",
      heading: "Engineering the next generation of products with the right talent.",
      image: aiBrainNetwork,
      imageAlt: "A profile silhouette overlaid with a glowing digital network",
      paragraphs: [
        "As products become increasingly intelligent, engineering organizations face growing pressure to innovate faster while maintaining compliance and cost efficiency. Product development today requires deep engineering expertise, digital technologies, and the ability to scale specialized talent quickly.",
        "Digital Engineering and R&D staffing solutions help organizations design, build, and evolve next-generation products through specialized, flexible engineering talent. Mspring Infotech brings together engineering expertise to support innovation across the product lifecycle.",
      ],
    },
    deliver: {
      eyebrow: "What We Deliver Through Digital Engineering Solutions",
      heading:
        "Mspring Infotech's Digital Engineering and R&D Solutions support complex product development programs through integrated engineering services and scalable execution.",
      image: teamOfficeWindow,
      imageAlt: "A professional consulting a tablet in a bright office",
      items: [
        {
          title: "End-to-End Engineering Solutions",
          intro:
            "Complete engineering services covering the full product development lifecycle.",
          bullets: [
            "Concept-to-launch product engineering across software and hardware",
            "Design, simulation, validation and testing under one delivery umbrella",
            "Scalable execution that grows with your program's needs",
          ],
        },
        {
          title: "Engineering Talent and Delivery Integration",
          intro:
            "Access to specialized engineering talent, integrated seamlessly into delivery programs.",
          bullets: [
            "Pre-vetted engineers across mechanical, electrical, electronics, and embedded systems",
            "Agile engineering teams supporting product development, prototyping, and manufacturing workflows",
            "Collaborative delivery models that integrate with internal engineering and R&D teams",
          ],
          outro:
            "This enables organizations to scale engineering capacity without long hiring cycles or operational disruption.",
        },
      ],
    },
  },
  "/talent-solutions/it-solutions/managed-services": {
    type: "detail",
    eyebrow: "IT Solutions",
    title: "Managed Services",
    headerCtaLabel: "Talk to our experts",
    about: {
      eyebrow: "About This Service",
      heading:
        "Empowering your technology transformation with flexible, outcome-driven managed services.",
      image: teamworkLightbulbs,
      imageAlt: "Colleagues collaborating around a table in a modern office",
      paragraphs: [
        "As enterprises navigate digital transformation, over 40% of their workforce now comprises contingent or project-based talent. This shift makes managed staffing services essential for maintaining agility, controlling costs, and ensuring compliance across geographies.",
        "Mspring Infotech's Managed Services model tackles this complexity through structured governance, predictable service delivery, and transparent performance management. Our approach supports milestone-based and outcome-based execution, ensuring accountability at every stage.",
        "With flexible engagement models, from co-owned deliverables to 100% Mspring-owned execution, clients can align solutions to their strategic needs. Services are delivered either on-site or through Mspring Offshore Development Centres (ODCs), enabling scalability and consistent service quality globally.",
      ],
    },
    deliver: {
      eyebrow: "What We Deliver Through Managed Services",
      heading: "Flexible and comprehensive technology transformation to meet your business goals.",
      image: cloudAbstractSphere,
      imageAlt: "An abstract digital illustration of business figures shaking hands",
      defaultOpen: 0,
      items: [
        {
          title: "Project Delivery and Engagement Models",
          intro:
            "Flexible delivery structures that align with business needs and ensure clear accountability and ownership.",
          bullets: [
            "Milestone and outcome-based delivery aligned to KPIs",
            "Co-owned delivery models for shared responsibility among internal teams",
            "Delivery flexibility across client locations or Mspring delivery centres",
          ],
        },
        {
          title: "Integrated Staffing and Consulting",
          intro:
            "Staffing and consulting expertise combined into a single, accountable engagement.",
          bullets: [
            "Specialized technology talent embedded within managed delivery programs",
            "Consulting-led solutioning to shape the right team and approach",
            "Seamless scaling of capacity as program needs evolve",
          ],
        },
        {
          title: "Delivery Governance and Enablement",
          intro:
            "Structured governance that keeps every engagement transparent and on track.",
          bullets: [
            "Defined SLAs, KPIs and review cadences for every engagement",
            "Transparent performance reporting and continuous improvement",
            "Tooling, processes and enablement that mature your delivery organization",
          ],
        },
      ],
    },
  },
  "/talent-solutions/it-solutions/managed-service-provider": {
    type: "detail",
    eyebrow: "IT Solutions",
    title: "Managed Service Provider (MSP) – Enterprise Workforce Solutions",
    headerCtaLabel: "Talk to our experts",
    about: {
      eyebrow: "About This Service",
      heading: "Centralized workforce, supplier, and technology governance.",
      image: teamOfficeWindow,
      imageAlt: "A professional working on a laptop by a bright office window",
      paragraphs: [
        "As enterprises scale and diversify their workforce models, a Managed Service Provider (MSP) approach becomes essential. Managing multiple staffing partners, technology platforms, and workforce operations in isolation leads to fragmentation, inefficiency, and limited visibility.",
        "A Managed Solutions Provider (MSP) model brings these elements together under a single, governed framework. Mspring Infotech's MSP offering centralizes supplier management, technology enablement, and workforce operations, providing enterprises with consistency, transparency, and control across their workforce ecosystem.",
      ],
    },
    deliver: {
      eyebrow: "What We Deliver Through MSP",
      heading:
        "Mspring Infotech's Managed Service Provider (MSP) services help enterprises manage scale, complexity, and compliance through an integrated operating model.",
      image: officeTeamCulture,
      imageAlt: "A professional consulting a tablet in a bright office",
      defaultOpen: 0,
      items: [
        {
          title: "Supplier Management",
          intro:
            "Centralized governance of staffing partners and vendors to ensure consistency, performance, and compliance across multi-supplier environments.",
          bullets: [
            "Empanelment and structured onboarding of suppliers",
            "Contract creation, governance frameworks, and SLA management",
            "Training and capability development for vendor partners",
            "Commercial negotiations, pricing governance, and vendor payments",
            "Performance appraisals and ongoing supplier governance",
          ],
          outro:
            "This reduces fragmentation and drives consistent outcomes across large, diverse supplier networks. Our Managed Service Provider approach to supplier management delivers consistent governance across your entire vendor ecosystem.",
        },
        {
          title: "Technology Enablement",
          intro:
            "A unified technology backbone for your entire contingent workforce program.",
          bullets: [
            "VMS platform selection, configuration and administration",
            "Integrated workflows from requisition through onboarding",
            "Real-time dashboards and analytics across the program",
          ],
        },
        {
          title: "Workforce Operations",
          intro:
            "Day-to-day operational management that keeps your extended workforce running smoothly.",
          bullets: [
            "End-to-end requisition, fulfilment and onboarding operations",
            "Compliance, documentation and audit-readiness management",
            "Consolidated reporting, billing and program governance",
          ],
        },
      ],
    },
  },
  "/talent-solutions/it-solutions/hire-train-deploy": {
    type: "detail",
    eyebrow: "IT Solutions",
    title: "Hire Train Deploy Model for IT Talent",
    headerCtaLabel: "Talk to our experts",
    about: {
      eyebrow: "About This Service",
      heading:
        "Deployment-ready talent for immediate technology delivery through structured skilling programs.",
      image: staffingMeeting,
      imageAlt: "A team meeting around a table in a modern office",
      paragraphs: [
        "Enterprises today face a persistent challenge in bridging the gap between available talent and project-ready skills. Fresh graduates and lateral hires often require targeted upskilling before they can contribute effectively to technology programs, creating delays in onboarding and delivery.",
        "Hire–Train–Deploy and Hire–Deploy–Train are outcome-focused workforce models designed to address this gap. Mspring Infotech combines recruitment, structured skilling, and deployment readiness to ensure talent is prepared for staff augmentation and project execution from day one.",
      ],
    },
    deliver: {
      eyebrow: "What We Deliver Through Hire–Train–Deploy",
      heading:
        "Hire–Train–Deploy and Hire–Deploy–Train programs are designed to prepare talent for real-world technology environments through integrated recruitment and skilling.",
      image: ctaConnect,
      imageAlt: "Two professionals shaking hands",
      defaultOpen: 0,
      items: [
        {
          title: "Outcome-Based IT Skilling Programs",
          intro:
            "Structured training programs focused on deployment readiness rather than generic learning.",
          bullets: [
            "6–8 week upskilling and reskilling programs for freshers and lateral hires",
            "Outcome-based training delivered through on-site, virtual, or hybrid models",
            "Virtual lab environments for hands-on, practical learning",
            "Pre-deployment skilling aligned to staff augmentation and project requirements",
          ],
          outro: "This ensures candidates are prepared to contribute effectively upon deployment.",
        },
        {
          title: "Integrated Recruitment and Skilling",
          intro:
            "Recruitment and training combined into one accountable pipeline, from sourcing to deployment.",
          bullets: [
            "High-potential candidates sourced and screened against your requirements",
            "Training curriculum built around your technology stack and ways of working",
            "Flexible HTD or HDT sequencing — train before deployment, or upskill on the job",
          ],
        },
      ],
    },
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
    bodyImage: recruitmentProcessSteps,
    bodyImageAlt: "An infographic showing the Mspring Infotech recruitment process steps — brief, strategy & search, AI screening & social media checks, presentation & initial interview, second interview & deep-dive checks, and selection",
    highlights: [
      "Headhunting, job portal & social sourcing",
      "Rigorous first-level screening before client interviews",
      "Offer negotiation & resignation follow-up support",
      "Post-joining check-ins to confirm a strong fit",
    ],
  },
  "/talent-solutions/recruitment-services/rpo": {
    type: "detail",
    eyebrow: "Recruitment Services",
    title: "RPO",
    headerCtaLabel: "Talk to our experts",
    about: {
      eyebrow: "About Recruitment Process Outsourcing",
      heading:
        "Governed recruitment solutions built around your workforce plans and business demand for scalable outcomes.",
      image: cloudAbstractSphere,
      imageAlt: "A hand touching a glowing world map connected by people icons",
      paragraphs: [
        "Scale recruitment with a forecast-led operational program, supported by 200+ dedicated Recruitment Process Outsourcing (RPO) recruiters, leveraging experience across multiple engagements to provide governance-driven hiring solutions that meet the needs of the workforce with visibility and discipline.",
        "Hiring demand today is shaped by expansion cycles, GCC setups, and business transformation, creating uneven, time-bound needs. Mspring Recruitment Services' RPO model manages delivery through SLAs, ensuring process discipline across locations. With 200+ dedicated recruiters and extensive experience, Mspring delivers scalable, governance-led recruitment solutions aligned to workforce priorities.",
      ],
    },
    deliver: {
      eyebrow: "RPO Services",
      heading:
        "RPO delivery meets workforce demand, role complexity, and hiring velocity by emphasizing continuity, visibility, and structured execution, for long-term recruitment that aligns with business growth and priorities.",
      image: leadershipArrowYellow,
      imageAlt: "A magnifying glass highlighting a candidate among silhouettes",
      defaultOpen: 0,
      items: [
        {
          title: "Program-Based Recruitment Delivery",
          intro:
            "RPO is delivered as an ongoing program aligned to hiring plans, not as isolated mandates. This creates continuity and institutional understanding of business needs.",
          bullets: [
            "Dedicated recruiters mapped to business units or skills",
            "Hiring plans translated into recruitment roadmaps",
            "Defined ownership across the recruitment lifecycle",
            "Stable delivery teams to reduce restart cycles",
          ],
          outro:
            "RPO is delivered as an ongoing program aligned with hiring plans, creating continuity and understanding of business needs. Dedicated recruiters are mapped to business units or skills, with hiring plans translated into roadmaps. Ownership is defined throughout the recruitment lifecycle to ensure stable delivery.",
        },
        {
          title: "Governance and Performance Management",
          intro:
            "SLA-driven governance that keeps recruitment delivery disciplined, measurable and transparent.",
          bullets: [
            "Defined SLAs and KPIs for every stage of the funnel",
            "Regular governance reviews with pipeline and performance reporting",
            "Process discipline maintained consistently across locations",
          ],
        },
        {
          title: "Scalable Capacity Models",
          intro:
            "Recruitment capacity that flexes with your hiring cycles instead of straining your internal team.",
          bullets: [
            "Ramp recruiter capacity up or down with demand",
            "Forecast-led planning for expansion cycles and GCC setups",
            "Surge support for time-bound, high-volume hiring drives",
          ],
        },
      ],
    },
  },
  "/talent-solutions/recruitment-services/permanent-recruitment": {
    type: "detail",
    eyebrow: "Recruitment Services",
    title: "Permanent Recruitment",
    headerCtaLabel: "Talk to our experts",
    about: {
      eyebrow: "About Permanent Hiring",
      heading:
        "Hiring for permanent roles builds institutional knowledge and stability, and as organizations grow, each hire shapes long-term performance and culture.",
      image: leadershipArrowBlue,
      imageAlt: "Executives in a boardroom facing a bright presentation screen",
      paragraphs: [
        "Effective recruitment for permanent positions requires structured evaluation, market insight, and alignment with business goals. It's not just about filling a position but strengthening teams for sustainable growth. With over 15+ years of experience across 250+ organizations, Mspring Recruitment Services ensures relevance, thorough evaluation, and reliable delivery.",
      ],
    },
    features: [
      {
        titleBold: "Finding the",
        titleLight: "Right Fit",
        text: "Permanent hiring isn't about filling a pipeline — it's about identifying the one candidate who fits the role, the team and the business context. Our search process is built around that distinction from the start.",
        image: permanentRecruitmentFocus,
        imageAlt: "A magnifying glass highlighting one golden candidate silhouette among several gray ones, representing focused candidate selection",
      },
    ],
    deliver: {
      eyebrow: "Permanent Recruitment Services",
      heading:
        "Through a structured search, rigorous evaluation, and demand-aligned execution, Mspring delivers permanent recruitment to businesses. The approach prioritizes finding the right fit, ensuring consistency and practical hiring outcomes rather than focusing on volume-led sourcing.",
      image: teamworkLightbulbs,
      imageAlt: "A softly blurred view of a team meeting in a glass-walled office",
      defaultOpen: 0,
      items: [
        {
          title: "Structured Talent Identification",
          intro:
            "Search efforts are aligned to role requirements and business context to ensure relevant talent discovery.",
          bullets: [
            "Multi-channel sourcing across databases and networks",
            "Access to active and passive talent pools",
            "Role-specific sourcing strategies",
            "Focus on skill and contextual fit",
          ],
          outro:
            "Identify the right talent by aligning search efforts with role requirements and business context. The Mspring permanent staffing approach leverages access to active and passive talent pools and candidate networks, uses role-specific sourcing strategies, and focuses on skill and contextual fit to ensure comprehensive talent coverage for full-time positions.",
        },
        {
          title: "Evaluation and Screening Discipline",
          intro:
            "Rigorous, consistent evaluation so every shortlisted candidate is genuinely ready for the role.",
          bullets: [
            "Structured screening against role and culture criteria",
            "Skills validation and background alignment before shortlisting",
            "Consistent evaluation standards across every mandate",
          ],
        },
        {
          title: "Demand-Aligned Execution",
          intro:
            "Delivery that follows your hiring priorities and timelines instead of volume-led sourcing.",
          bullets: [
            "Priorities and timelines agreed up front for every role",
            "Interview coordination and offer management handled end to end",
            "Post-offer follow-through to make sure every joiner lands well",
          ],
        },
      ],
    },
  },
  "/talent-solutions/recruitment-services/global-capability-center": {
    type: "detail",
    eyebrow: "Recruitment Services",
    title: "Global Capability Center",
    headerCtaLabel: "Talk to our experts",
    about: {
      eyebrow: "About Mspring GCC Services",
      heading:
        "Grow your business with Mspring, your go-to partner for seamless global expansion and optimization.",
      image: aiHumanCollaboration,
      imageAlt: "Hands holding a tablet surrounded by a glowing digital network",
      paragraphs: [
        "Mspring GCC Services is a dedicated Global Capability Center platform built to help enterprises set up, run, and scale high-impact GCCs. It brings together strategy, talent, infrastructure, technology, compliance, and operations under one integrated model. Mspring's GCC services platform enables companies to scale and optimize their global capability centers in India through integrated talent, workspace, and operational support services delivered through a single partner.",
        "Backed by experience of supporting 350+ GCCs across 8 countries, Mspring offers a structured, low-risk path from entry to scale. Whether you are launching your first GCC or expanding an existing one, you move forward with proven playbooks and execution support.",
        "The GCC model is now a strategic growth lever globally. There are 3,200+ GCCs operating worldwide, and 55% of enterprise tech products are built in GCCs. India alone hosts 1,700+ GCCs, with 120 new centers added in 2024. Mspring helps you tap this momentum with a model designed for speed, compliance, and long-term value.",
      ],
    },
    features: [
      {
        titleBold: "Global Reach,",
        titleLight: "Built Locally",
        text: "A GCC is your business operating without borders — the same standards, systems and accountability wherever the work happens. Mspring builds that foundation so your center runs as one extension of global operations, not a separate outpost.",
        image: gccGlobalReach,
        imageAlt: "An illustration of a glossy globe melting and dripping over the edge of a wall, representing borderless global operations",
      },
    ],
    deliver: [
      {
        eyebrow: "GCC Offerings",
        heading:
          "A complete ecosystem for building, managing, and scaling your global business with talent, workspace, and operations support.",
        image: officeTeamCulture,
        imageAlt: "A team gathered around a laptop in a bright office",
        defaultOpen: 0,
        items: [
          {
            title: "Talent Solutions",
            intro:
              "Build high-quality, scalable teams across technology, digital, analytics, shared services, and domain roles. Services span workforce planning, sourcing, onboarding, skilling, and compliance. With access to one of the largest talent engines in India, Mspring helps you hire faster, reduce risk, and improve retention.",
            outro:
              "Mspring's GCC talent services include workforce planning, talent sourcing and acquisition, competency mapping, campus partnerships, skill assessment centers, onboarding programs, L&D frameworks, retention strategies, and employer branding. We provide access to specialized talent pools across software engineering, data science, AI/ML, cloud, cybersecurity, analytics, finance, and shared services functions with typical time-to-hire of 15-30 days for technology roles.",
            ctaLabel: "Know more",
            ctaPath: "/contact",
          },
          {
            title: "Workplace Solutions",
            intro:
              "Ready-to-operate workspaces designed around your GCC's needs — from location strategy and fit-out to facilities and day-to-day workplace operations, delivered through a single partner.",
            ctaLabel: "Know more",
            ctaPath: "/contact",
          },
          {
            title: "Business Operations",
            intro:
              "Operational support that keeps your center running smoothly — payroll, compliance, vendor and facilities management, and back-office operations, so your teams stay focused on the work that matters.",
            ctaLabel: "Know more",
            ctaPath: "/contact",
          },
        ],
      },
      {
        eyebrow: "Why Mspring",
        heading:
          "Mspring simplifies your global expansion with its deep expertise, integrated services, and proven scalability.",
        defaultOpen: 0,
        items: [
          {
            title: "One Integrated Partner",
            intro:
              "A single partner across advisory, setup, talent, infrastructure, and managed operations. This reduces handoffs, simplifies governance, and speeds up execution.",
          },
          {
            title: "Deep GCC Experience at Scale",
            intro:
              "Proven playbooks built from supporting hundreds of capability centers — so your center benefits from what already works.",
          },
          {
            title: "Built for Scale from Day One",
            intro:
              "Entry models designed to grow — from a first small team to a full-scale center — without re-platforming along the way.",
          },
          {
            title: "Outcome-led Delivery",
            intro:
              "Engagements measured on outcomes — speed to launch, quality of talent, cost and compliance — with transparent reporting throughout.",
          },
        ],
      },
    ],
  },
  "/talent-solutions/recruitment-services/global-mobility-service": {
    type: "detail",
    eyebrow: "Recruitment Services",
    title: "Global Mobility Service",
    headerCtaLabel: "Talk to our experts",
    about: {
      eyebrow: "About This Service",
      heading:
        "Connecting global employers with skilled Indian talent through efficient, compliant, and seamless cross-border workforce solutions.",
      image: ctaConnect,
      imageAlt: "Two professionals shaking hands in a bright office",
      paragraphs: [
        "Mspring Global Mobility Services, a specialized vertical of Mspring Infotech, connects global employers with India's skilled workforce through efficient, ethical, and compliant solutions. The vertical acts as a structured link between international employers and qualified Indian professionals, providing end-to-end staffing support from sourcing to deployment.",
        "With cross-border experience and a custom-built talent marketplace, Mspring Global Mobility Services streamlines international hiring, aligning job-ready candidates with relevant overseas opportunities in a secure, timely manner, supporting global talent needs and international career pathways.",
      ],
    },
    markets: {
      heading: "Supporting global workforce mobility across key global markets.",
      countries: ["Saudi Arabia", "United Arab Emirates", "Qatar", "Japan", "Germany", "Italy"],
    },
    deliver: {
      eyebrow: "Our Services",
      heading:
        "Mspring drives growth by scaling cross-border workforce deployment, offering fast, compliant, and reliable solutions to meet the hiring needs of businesses.",
      image: aiBrainNetwork,
      imageAlt: "A hand with a pen over a glowing world map of connected talent",
      defaultOpen: 0,
      items: [
        {
          title: "Access to Large, Job-Ready Talent Pool",
          intro:
            "We are one of India's widest sourcing networks, backed by Mspring Infotech's offices and workforce across the country. Direct access to talent across regions and industries allows us to fulfill higher volumes of specialized hiring needs.",
        },
        {
          title: "Licensed and Compliant Hiring",
          intro:
            "Recruitment conducted through licensed, ethical channels — with documentation, emigration formalities and destination-country regulations handled correctly at every step.",
        },
        {
          title: "Cross-Border Recruitment Expertise",
          intro:
            "Experience across key corridors — the Gulf, Japan and Europe — with an understanding of each market's skill demands, regulations and cultural expectations.",
        },
        {
          title: "Operational Flexibility",
          intro:
            "Engagement models that flex with your hiring plans — from single specialized roles to large deployment programs — without compromising speed or compliance.",
        },
        {
          title: "Specialized Recruiters and Assessors",
          intro:
            "Dedicated recruiters and technical assessors who screen for skills, experience and readiness, so only genuinely deployment-ready candidates reach you.",
        },
        {
          title: "End-to-End Support",
          intro:
            "From sourcing and screening through visas, travel and onboarding — one accountable partner supporting both employer and candidate until deployment is complete.",
        },
      ],
    },
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
