export interface Industry {
  slug: string;
  title: string;
  heroImage: string;
  heroDescription: string;
  heroType?: "default" | "alt"; // New field for hero section type
  ctaText?: string; // New field for hero CTA text
  ctaLink?: string; // New field for hero CTA link
  sections: IndustrySection[];
}

export interface IndustrySection {
  type: 'text' | 'image' | 'highlights' | 'case-studies-grid' | 'cta' | 'two-column-text-image' | 'contact-section'; // Updated types
  heading?: string;
  content?: string;
  imageUrl?: string;
  imageLeft?: boolean; // New field for two-column layout
  highlights?: { title: string; description: string; icon?: string }[];
  caseStudies?: { title: string; description: string; link: string; image: string }[];
  ctaText?: string;
  ctaLink?: string;
}

export const industries: Industry[] = [
  {
    slug: "mining",
    title: "Mining",
    heroImage: "/images/mining-hero.jpg",
    heroDescription: "Optimise operations with IoT-driven automation and AI analytics. Our SI teams deploy OEM-certified hardware and private 5G infrastructure to give you real-time insights into equipment health, worker safety, and resource management.",
    heroType: "alt",
    ctaText: "Explore Mining Solutions",
    ctaLink: "https://share-eu1.hsforms.com/1fZx1K1zdS-iMJJclshb99w2ewkpq",
    sections: [
      {
        type: "text",
        heading: "Digital Transformation in Mining",
        content: "The mining industry is undergoing a significant transformation, driven by the need for increased efficiency, enhanced safety, and sustainable practices. Singular provides advanced digital solutions that leverage IoT, AI, and Private 5G to create intelligent, connected mining environments.",
      },
      {
        type: "two-column-text-image",
        heading: "Smart Mining Operations",
        content: "Our solutions enable real-time monitoring of equipment, predictive maintenance, and optimized resource management. By integrating OEM-certified hardware and AI analytics, we help mining companies minimize downtime, reduce operational costs, and improve overall productivity.\n\nFrom automated drilling to autonomous haulage systems, Singular's technology ensures a safer and more efficient mining operation. We provide the infrastructure for secure and reliable communication across vast mining sites, even in the most challenging environments.",
        imageUrl: "/images/mining-solution-example.jpg",
        imageLeft: false,
        ctaText: "Learn More About Our Mining Solutions",
        ctaLink: "https://share-eu1.hsforms.com/1fZx1K1zdS-iMJJclshb99w2ewkpq",
      },
      {
        type: "highlights",
        heading: "Key Benefits for the Mining Industry",
        highlights: [
          { title: "Real-time Equipment Monitoring", description: "Predictive maintenance and operational insights to minimize downtime.", icon: "Gauge" },
          { title: "Enhanced Worker Safety", description: "Automated hazard detection and real-time tracking for personnel safety.", icon: "HardHat" },
          { title: "Optimized Resource Management", description: "AI-driven analytics for efficient extraction and reduced waste.", icon: "Gem" },
          { title: "Secure Private 5G Connectivity", description: "Reliable and secure communication across vast mining sites.", icon: "Signal" },
        ],
      },
      {
        type: "case-studies-grid",
        heading: "Mining Success Stories",
        caseStudies: [
          { title: "Automated Mine Operations", description: "A major mining corporation achieved 25% efficiency increase with Singular's integrated solutions.", link: "#", image: "/images/case-study-mining.jpg" },
          { title: "Predictive Maintenance Implementation", description: "Reduced equipment failures by 30% for a leading iron ore producer.", link: "#", image: "/images/case-study-mining-2.jpg" },
          { title: "Remote Operations Control", description: "Enabled remote control of heavy machinery, improving safety and efficiency.", link: "#", image: "/images/case-study-mining-3.jpg" },
        ],
      },
      {
        type: "contact-section",
        heading: "Connect with Our Mining Experts",
        content: "Discover how Singular can help you achieve operational excellence and safety in your mining operations. Our specialists are ready to discuss tailored solutions for your specific needs.",
        ctaText: "Schedule a Consultation",
        ctaLink: "https://share-eu1.hsforms.com/1fZx1K1zdS-iMJJclshb99w2ewkpq",
      },
      {
        type: "cta",
        ctaText: "Download Our Mining Solutions Brochure",
        ctaLink: "https://share-eu1.hsforms.com/1fZx1K1zdS-iMJJclshb99w2ewkpq",
      },
    ],
  },
  {
    slug: "telecom",
    title: "Telecommunications",
    heroImage: "/images/telecom-hero.jpg",
    heroDescription: "Enhance network reliability and security with intelligent monitoring and automation. We partner with global OEMs to reduce operational costs, secure cell sites, and deploy private 5G networks built for always-on performance.",
    heroType: "alt",
    ctaText: "Discover Telecom Solutions",
    ctaLink: "https://share-eu1.hsforms.com/1fZx1K1zdS-iMJJclshb99w2ewkpq",
    sections: [
      {
        type: "text",
        heading: "Revolutionizing Telecom Infrastructure",
        content: "Singular empowers telecommunications providers to build resilient, secure, and high-performance networks. Our solutions leverage AI, IoT, and Private 5G to optimize network operations, reduce costs, and deliver superior connectivity for the digital age.",
      },
      {
        type: "two-column-text-image",
        heading: "Next-Generation Network Connectivity",
        content: "We provide solutions for intelligent network monitoring, automated cell site security, and seamless private 5G deployment. Our partnerships with global OEMs ensure that our networks are built for always-on performance, meeting the demands of modern communication.\n\nFrom enhancing urban connectivity to enabling remote communication, Singular's telecom solutions are designed to deliver unparalleled reliability and efficiency. We help you stay ahead in a rapidly evolving digital landscape.",
        imageUrl: "/images/telecom-solution-example.jpg",
        imageLeft: true,
        ctaText: "Explore Network Optimization",
        ctaLink: "https://share-eu1.hsforms.com/1fZx1K1zdS-iMJJclshb99w2ewkpq",
      },
      {
        type: "highlights",
        heading: "Key Benefits for Telecommunications",
        highlights: [
          { title: "Intelligent Network Monitoring", description: "Proactive fault detection and performance optimization.", icon: "Activity" },
          { title: "Automated Cell Site Security", description: "Advanced security measures for critical infrastructure.", icon: "Shield" },
          { title: "Private 5G Deployment", description: "Tailored private networks for enterprise clients and critical services.", icon: "Radio" },
          { title: "Operational Cost Reduction", description: "AI-assisted management to streamline network operations.", icon: "DollarSign" },
        ],
      },
      {
        type: "case-studies-grid",
        heading: "Telecom Success Stories",
        caseStudies: [
          { title: "5G Network Rollout Optimization", description: "Assisted a major carrier in optimizing their 5G rollout, reducing deployment time by 20%.", link: "#", image: "/images/case-study-telecom.jpg" },
          { title: "Secure Communication for Critical Infrastructure", description: "Implemented robust security solutions for a national telecom provider.", link: "#", image: "/images/case-study-telecom-2.jpg" },
          { title: "Edge Computing Integration", description: "Deployed edge computing solutions to reduce latency and improve service delivery.", link: "#", image: "/images/case-study-telecom-3.jpg" },
        ],
      },
      {
        type: "contact-section",
        heading: "Partner with Our Telecom Experts",
        content: "Ready to enhance your network's performance and security? Our team is here to provide insights and solutions tailored to the unique challenges of the telecommunications sector.",
        ctaText: "Get in Touch",
        ctaLink: "https://share-eu1.hsforms.com/1fZx1K1zdS-iMJJclshb99w2ewkpq",
      },
      {
        type: "cta",
        ctaText: "View Our Telecom Case Studies",
        ctaLink: "https://share-eu1.hsforms.com/1fZx1K1zdS-iMJJclshb99w2ewkpq",
      },
    ],
  },
  {
    slug: "manufacturing",
    title: "Manufacturing",
    heroImage: "/images/manufacturing-hero.jpg",
    heroDescription: "Streamline production with digital twins and smart automation. Our SI teams integrate OEM hardware and AI analytics to detect machinery issues before failures occur and optimise workflows in real time.",
    heroType: "alt",
    ctaText: "Innovate Your Production",
    ctaLink: "https://share-eu1.hsforms.com/1fZx1K1zdS-iMJJclshb99w2ewkpq",
    sections: [
      {
        type: "text",
        heading: "Smart Manufacturing for Industry 4.0",
        content: "Singular drives the evolution of manufacturing with solutions that integrate digital twins, AI analytics, and smart automation. We help manufacturers achieve higher efficiency, reduce downtime, and create agile production environments ready for Industry 4.0.",
      },
      {
        type: "two-column-text-image",
        heading: "Optimizing Production Workflows",
        content: "Our solutions provide predictive fault detection for machinery, minimizing failures and optimizing maintenance schedules. With AI-driven insights, we balance production lines and improve throughput, ensuring seamless integration of operational technology for enhanced visibility.\n\nFrom automated assembly lines to intelligent quality control, Singular's manufacturing solutions are designed to boost productivity and reduce operational costs. Embrace the future of manufacturing with our cutting-edge technology.",
        imageUrl: "/images/manufacturing-solution-example.jpg",
        imageLeft: false,
        ctaText: "Discover Manufacturing Efficiency",
        ctaLink: "https://share-eu1.hsforms.com/1fZx1K1zdS-iMJJclshb99w2ewkpq",
      },
      {
        type: "highlights",
        heading: "Key Benefits for Manufacturing",
        highlights: [
          { title: "Digital Twin Technology", description: "Real-time simulation and optimization of production processes.", icon: "Layers" },
          { title: "Predictive Fault Detection", description: "Minimize machinery failures and optimize maintenance schedules.", icon: "Wrench" },
          { title: "Smart Workflow Optimization", description: "AI-driven insights to balance production lines and improve throughput.", icon: "Factory" },
          { title: "Connected Systems", description: "Seamless integration of operational technology for enhanced visibility.", icon: "Share2" },
        ],
      },
      {
        type: "case-studies-grid",
        heading: "Manufacturing Success Stories",
        caseStudies: [
          { title: "Automated Assembly Line", description: "Improved production speed by 15% for an automotive manufacturer.", link: "#", image: "/images/case-study-manufacturing.jpg" },
          { title: "Quality Control with AI", description: "Reduced defect rates by 20% using AI-powered inspection systems.", link: "#", image: "/images/case-study-manufacturing-2.jpg" },
          { title: "Supply Chain Optimization", description: "Enhanced supply chain visibility and efficiency with integrated IoT solutions.", link: "#", image: "/images/case-study-manufacturing-3.jpg" },
        ],
      },
      {
        type: "contact-section",
        heading: "Consult Our Manufacturing Specialists",
        content: "Ready to transform your production processes? Our experts are here to help you implement smart manufacturing solutions that drive efficiency and innovation.",
        ctaText: "Request a Demo",
        ctaLink: "https://share-eu1.hsforms.com/1fZx1K1zdS-iMJJclshb99w2ewkpq",
      },
      {
        type: "cta",
        ctaText: "Read Our Manufacturing Whitepaper",
        ctaLink: "https://share-eu1.hsforms.com/1fZx1K1zdS-iMJJclshb99w2ewkpq",
      },
    ],
  },
  {
    slug: "smart-cities",
    title: "Smart Cities",
    heroImage: "/images/smart-cities-hero.jpg",
    heroDescription: "Create smarter, more sustainable urban environments with intelligent infrastructure. As a global SI, we integrate OEM hardware, private 5G mesh networks, and AI analytics to build city ecosystems that work at any scale.",
    heroType: "alt",
    ctaText: "Build Smarter Cities",
    ctaLink: "https://share-eu1.hsforms.com/1fZx1K1zdS-iMJJclshb99w2ewkpq",
    sections: [
      {
        type: "text",
        heading: "Building the Urban Future with Smart City Solutions",
        content: "Singular designs and implements intelligent infrastructure for smart cities, focusing on sustainability, efficiency, and enhanced quality of life for citizens. Our integrated solutions leverage IoT, Private 5G, and AI to create responsive and adaptive urban environments.",
      },
      {
        type: "two-column-text-image",
        heading: "Intelligent Urban Infrastructure",
        content: "Our solutions include adaptive smart lighting, AI-assisted traffic management, and real-time public safety monitoring. We integrate OEM hardware and private 5G mesh networks to build city ecosystems that work at any scale, ensuring seamless connectivity and data flow.\n\nFrom optimizing waste management to enhancing emergency response, Singular's smart city solutions contribute to a more sustainable and livable urban future. Join us in creating the cities of tomorrow.",
        imageUrl: "/images/smart-cities-solution-example.jpg",
        imageLeft: true,
        ctaText: "Explore Urban Innovation",
        ctaLink: "https://share-eu1.hsforms.com/1fZx1K1zdS-iMJJclshb99w2ewkpq",
      },
      {
        type: "highlights",
        heading: "Key Benefits for Smart Cities",
        highlights: [
          { title: "Adaptive Smart Lighting", description: "Energy-efficient lighting systems with dynamic control.", icon: "Lightbulb" },
          { title: "AI-Assisted Traffic Management", description: "Optimize traffic flow and reduce congestion.", icon: "TrafficCone" },
          { title: "Real-time Public Safety Monitoring", description: "Enhanced emergency response and citizen security.", icon: "Shield" },
          { title: "Intelligent Waste Management", description: "Optimized collection routes and reduced environmental impact.", icon: "Trash2" },
        ],
      },
      {
        type: "case-studies-grid",
        heading: "Smart City Success Stories",
        caseStudies: [
          { title: "Integrated Traffic Management System", description: "Reduced traffic congestion by 25% in a major metropolitan area.", link: "#", image: "/images/case-study-smart-city.jpg" },
          { title: "Public Safety Enhancement", description: "Improved emergency response times by 15% with real-time monitoring.", link: "#", image: "/images/case-study-smart-city-2.jpg" },
          { title: "Sustainable Urban Planning", description: "Developed data-driven strategies for greener and more efficient urban spaces.", link: "#", image: "/images/case-study-smart-city-3.jpg" },
        ],
      },
      {
        type: "contact-section",
        heading: "Partner for a Smarter Urban Future",
        content: "Ready to implement innovative solutions for your city? Our experts are here to help you design and deploy smart city infrastructure that makes a real difference.",
        ctaText: "Contact Our Smart City Team",
        ctaLink: "https://share-eu1.hsforms.com/1fZx1K1zdS-iMJJclshb99w2ewkpq",
      },
      {
        type: "cta",
        ctaText: "Discover Our Smart City Portfolio",
        ctaLink: "https://share-eu1.hsforms.com/1fZx1K1zdS-iMJJclshb99w2ewkpq",
      },
    ],
  },
  {
    slug: "utilities",
    title: "Utilities & Energy",
    heroImage: "/images/utilities-hero.jpg",
    heroDescription: "Modernise energy distribution with advanced IoT and private 5G networks. Monitor power grids, reduce energy waste, and detect faults in real time for seamless and cost-effective utility management.",
    heroType: "alt",
    ctaText: "Transform Utility Operations",
    ctaLink: "https://share-eu1.hsforms.com/1fZx1K1zdS-iMJJclshb99w2ewkpq",
    sections: [
      {
        type: "text",
        heading: "Modernizing Utilities for a Sustainable Future",
        content: "Singular provides advanced digital solutions for the utilities and energy sector, focusing on grid modernization, energy efficiency, and reliable service delivery. We integrate IoT, Private 5G, and AI to enable intelligent monitoring, predictive maintenance, and optimized resource management.",
      },
      {
        type: "two-column-text-image",
        heading: "Intelligent Energy Management",
        content: "Our solutions enable real-time power grid monitoring, proactive fault detection, and rapid response for grid stability. With AI-driven insights, we help reduce energy waste and improve efficiency, ensuring secure Private 5G for managing distributed assets.\n\nFrom smart grids to renewable energy integration, Singular's utility solutions are designed to create a more resilient and sustainable energy infrastructure. Optimize your operations and contribute to a greener future.",
        imageUrl: "/images/utilities-solution-example.jpg",
        imageLeft: false,
        ctaText: "Explore Energy Solutions",
        ctaLink: "https://share-eu1.hsforms.com/1fZx1K1zdS-iMJJclshb99w2ewkpq",
      },
      {
        type: "highlights",
        heading: "Key Benefits for Utilities & Energy",
        highlights: [
          { title: "Real-time Power Grid Monitoring", description: "Proactive fault detection and rapid response for grid stability.", icon: "Zap" },
          { title: "Energy Consumption Optimization", description: "AI-driven insights to reduce waste and improve efficiency.", icon: "Leaf" },
          { title: "Remote Infrastructure Management", description: "Secure Private 5G for managing distributed assets.", icon: "Cloud" },
          { title: "Cost-Effective Operations", description: "Streamlined processes and predictive analytics for operational savings.", icon: "DollarSign" },
        ],
      },
      {
        type: "case-studies-grid",
        heading: "Utilities & Energy Success Stories",
        caseStudies: [
          { title: "Smart Grid Implementation", description: "Improved grid stability and reduced outages by 20% for a regional utility provider.", link: "#", image: "/images/case-study-utilities-pg.jpg" },
          { title: "Renewable Energy Integration", description: "Optimized integration of solar and wind energy into existing grids.", link: "#", image: "/images/case-study-utilities-2.jpg" },
          { title: "Predictive Maintenance for Infrastructure", description: "Reduced maintenance costs by 15% through predictive analytics on critical infrastructure.", link: "#", image: "/images/case-study-utilities-3.jpg" },
        ],
      },
      {
        type: "contact-section",
        heading: "Speak with Our Energy Experts",
        content: "Ready to modernize your energy distribution and achieve sustainability goals? Our specialists are here to provide tailored solutions for the utilities and energy sector.",
        ctaText: "Schedule a Consultation",
        ctaLink: "https://share-eu1.hsforms.com/1fZx1K1zdS-iMJJclshb99w2ewkpq",
      },
      {
        type: "cta",
        ctaText: "Discover Our Utility Solutions",
        ctaLink: "https://share-eu1.hsforms.com/1fZx1K1zdS-iMJJclshb99w2ewkpq",
      },
    ],
  },
  {
    slug: "healthcare",
    title: "Healthcare",
    heroImage: "/images/healthcare-hero.jpg",
    heroDescription: "Revolutionise patient care with real-time health monitoring, predictive analytics, and connected medical devices. Enable hospitals and clinics to improve diagnostics, streamline operations, and enhance patient outcomes.",
    heroType: "alt", // Using the alternative hero type for healthcare
    ctaText: "Schedule a free consultation", // CTA for the alternative hero
    ctaLink: "https://share-eu1.hsforms.com/1fZx1K1zdS-iMJJclshb99w2ewkpq", // CTA link for the alternative hero
    sections: [
      {
        type: "text",
        heading: "Seamless 5G connectivity for smarter healthcare",
        content: "Deliver reliable, secure and efficient healthcare and telehealth services.",
      },
      {
        type: "two-column-text-image",
        heading: "Healthcare connectivity",
        content: "Digital care, mobile workflows, and smart devices are transforming healthcare delivery. To meet these demands, hospitals rely on connectivity that is reliable, high capacity, and secure — across every part of the care environment.\n\nEricsson supports hospitals by strengthening clinical mobility, improving coverage and performance in areas where Wi-Fi can struggle, eliminating the need for tethered ethernet connections, and enabling the secure exchange of data for AI supported diagnostics, mobile EHR, telehealth, imaging, and IoMT devices.\n\nFrom bedside to back of house, modern care workflows depend on resilient wireless connectivity. With Ericsson, healthcare organizations can enhance staff communication, protect patient information, and support new care models with confidence.",
        imageUrl: "/images/healthcare-connectivity.jpg", // Placeholder image
        imageLeft: false,
      },
      {
        type: "highlights",
        heading: "Clinical mobility",
        highlights: [
          { title: "Clinical mobility", description: "Enable reliable, secure mobility for clinicians and staff with connectivity that supports mobile EHR, secure messaging, imaging review, and point‑of‑care applications—even in areas where traditional wireless can struggle.", icon: "HeartPulse" },
          { title: "AI and data security", description: "Support emerging AI-driven diagnostics and operational insights with high‑performance, that protects patient information and ensures consistent performance for imaging, telehealth, and IoMT devices.", icon: "Shield" },
          { title: "Differentiated care models", description: "Powering evolving care models—from remote monitoring to hybrid outpatient and in‑hospital workflows—with dependable connectivity for staff communications, sensors, RTLS, and telehealth across diverse care environments.", icon: "Hospital" },
        ],
      },
      {
        type: "text",
        heading: "Connectivity built for modern clinical care",
        content: "Healthcare organizations require secure, reliable connectivity to support clinical mobility, patient care delivery, and digital innovation across hospitals and medical campuses—without adding unnecessary complexity for IT teams.\n\nThis solution brief provides a practical blueprint for modern healthcare connectivity, outlining how an integrated 5G approach supports indoor clinical environments, improves network performance, and enables mission‑critical applications—from clinician communications to connected medical devices and data‑driven care.",
      },
      {
        type: "case-studies-grid",
        heading: "Featured cases",
        caseStudies: [
          { title: "Enhancing perioperative training with VR and Private 5G", description: "NUHS is advancing perioperative training and surgical planning using immersive VR experiences, powered by high‑performance Private 5G connectivity that supports real‑time rendering and collaboration.", link: "#", image: "/images/case-study-vr.jpg" },
          { title: "Rapid telehealth deployment using 5G connectivity", description: "Discover how Turning Point addressed an immediate demand for health services by quickly connecting locations with Ericsson Cradlepoint 5G routers.", link: "#", image: "/images/case-study-telehealth.jpg" },
          { title: "Remote Patient Monitoring", description: "Implemented a remote patient monitoring system, reducing hospital readmissions by 10%.", link: "#", image: "/images/case-study-remote-monitoring.jpg" },
        ],
      },
      {
        type: "contact-section",
        heading: "Speak with our healthcare experts",
        content: "Explore how to improve coverage, fortify security posture, modernize mobility, or align your wireless strategy to future clinical and operational needs. Our specialists can walk you through Private 5G, Neutral Host indoor coverage, Wireless WAN, and communication API options tailored for healthcare.",
        ctaText: "Schedule a free consultation",
        ctaLink: "https://share-eu1.hsforms.com/1fZx1K1zdS-iMJJclshb99w2ewkpq",
      },
      {
        type: "cta",
        ctaText: "Join the Ericsson partner ecosystem",
        ctaLink: "https://share-eu1.hsforms.com/1fZx1K1zdS-iMJJclshb99w2ewkpq",
      },
    ],
  },
];