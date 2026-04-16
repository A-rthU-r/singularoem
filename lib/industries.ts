export interface Industry {
  slug: string;
  title: string;
  heroImage: string;
  heroDescription: string;
  sections: IndustrySection[];
}

export interface IndustrySection {
  type: 'text' | 'image' | 'highlights' | 'case-studies' | 'cta';
  heading?: string;
  content?: string;
  imageUrl?: string;
  highlights?: { title: string; description: string; icon?: string }[];
  caseStudies?: { title: string; description: string; link: string; image: string }[];
  ctaText?: string;
  ctaLink?: string;
}

export const industries: Industry[] = [
  {
    slug: "mining",
    title: "Mining",
    heroImage: "/images/mining.jpg",
    heroDescription: "Optimise operations with IoT-driven automation and AI analytics. Our SI teams deploy OEM-certified hardware and private 5G infrastructure to give you real-time insights into equipment health, worker safety, and resource management.",
    sections: [
      {
        type: "text",
        heading: "Transforming Mining Operations with Digital Innovation",
        content: "Singular provides advanced digital transformation solutions for the mining sector, enabling companies to enhance safety, improve operational efficiency, and optimize resource extraction. We integrate cutting-edge IoT, AI, and Private 5G technologies to create intelligent, connected mining environments.",
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
        type: "image",
        heading: "Smart Mining in Action",
        imageUrl: "/images/mining-solution-example.jpg", // Placeholder
        content: "See how our solutions create safer and more productive mining environments.",
      },
      {
        type: "case-studies",
        heading: "Mining Success Stories",
        caseStudies: [
          { title: "Automated Mine Operations", description: "A major mining corporation achieved 25% efficiency increase with Singular's integrated solutions.", link: "#", image: "/images/case-study-mining.jpg" },
        ],
      },
      {
        type: "cta",
        ctaText: "Discover how Singular can transform your mining operations.",
        ctaLink: "https://share-eu1.hsforms.com/1fZx1K1zdS-iMJJclshb99w2ewkpq",
      },
    ],
  },
  {
    slug: "telecom",
    title: "Telecommunications",
    heroImage: "/images/telecom.jpg",
    heroDescription: "Enhance network reliability and security with intelligent monitoring and automation. We partner with global OEMs to reduce operational costs, secure cell sites, and deploy private 5G networks built for always-on performance.",
    sections: [
      {
        type: "text",
        heading: "Revolutionizing Telecom Infrastructure",
        content: "Singular empowers telecommunications providers to build resilient, secure, and high-performance networks. Our solutions leverage AI, IoT, and Private 5G to optimize network operations, reduce costs, and deliver superior connectivity for the digital age.",
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
        type: "cta",
        ctaText: "Build the future of telecommunications with Singular.",
        ctaLink: "https://share-eu1.hsforms.com/1fZx1K1zdS-iMJJclshb99w2ewkpq",
      },
    ],
  },
  {
    slug: "manufacturing",
    title: "Manufacturing",
    heroImage: "/images/manufacturing.jpg",
    heroDescription: "Streamline production with digital twins and smart automation. Our SI teams integrate OEM hardware and AI analytics to detect machinery issues before failures occur and optimise workflows in real time.",
    sections: [
      {
        type: "text",
        heading: "Smart Manufacturing for Industry 4.0",
        content: "Singular drives the evolution of manufacturing with solutions that integrate digital twins, AI analytics, and smart automation. We help manufacturers achieve higher efficiency, reduce downtime, and create agile production environments ready for Industry 4.0.",
      },
      {
        type: "highlights",
        heading: "Key Benefits for Manufacturing",
        highlights: [
          { title: "Digital Twin Technology", description: "Real-time simulation and optimization of production processes.", icon: "Layers" },
          { title: "Predictive Fault Detection", description: "Minimize machinery failures and optimize maintenance schedules.", icon: "Tool" },
          { title: "Smart Workflow Optimization", description: "AI-driven insights to balance production lines and improve throughput.", icon: "Factory" },
          { title: "Connected Systems", description: "Seamless integration of operational technology for enhanced visibility.", icon: "Share2" },
        ],
      },
      {
        type: "cta",
        ctaText: "Innovate your production with Singular's manufacturing solutions.",
        ctaLink: "https://share-eu1.hsforms.com/1fZx1K1zdS-iMJJclshb99w2ewkpq",
      },
    ],
  },
  {
    slug: "smart-cities",
    title: "Smart Cities",
    heroImage: "/images/smart-cities.jpg",
    heroDescription: "Create smarter, more sustainable urban environments with intelligent infrastructure. As a global SI, we integrate OEM hardware, private 5G mesh networks, and AI analytics to build city ecosystems that work at any scale.",
    sections: [
      {
        type: "text",
        heading: "Building the Urban Future with Smart City Solutions",
        content: "Singular designs and implements intelligent infrastructure for smart cities, focusing on sustainability, efficiency, and enhanced quality of life for citizens. Our integrated solutions leverage IoT, Private 5G, and AI to create responsive and adaptive urban environments.",
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
        type: "cta",
        ctaText: "Partner with Singular to build smarter, more sustainable cities.",
        ctaLink: "https://share-eu1.hsforms.com/1fZx1K1zdS-iMJJclshb99w2ewkpq",
      },
    ],
  },
  {
    slug: "utilities",
    title: "Utilities & Energy",
    heroImage: "/images/utilities.jpg",
    heroDescription: "Modernise energy distribution with advanced IoT and private 5G networks. Monitor power grids, reduce energy waste, and detect faults in real time for seamless and cost-effective utility management.",
    sections: [
      {
        type: "text",
        heading: "Modernizing Utilities for a Sustainable Future",
        content: "Singular provides advanced digital solutions for the utilities and energy sector, focusing on grid modernization, energy efficiency, and reliable service delivery. We integrate IoT, Private 5G, and AI to enable intelligent monitoring, predictive maintenance, and optimized resource management.",
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
        type: "cta",
        ctaText: "Transform your utility operations with Singular's innovative solutions.",
        ctaLink: "https://share-eu1.hsforms.com/1fZx1K1zdS-iMJJclshb99w2ewkpq",
      },
    ],
  },
  {
    slug: "healthcare",
    title: "Healthcare",
    heroImage: "/images/healthcare.jpg",
    heroDescription: "Revolutionise patient care with real-time health monitoring, predictive analytics, and connected medical devices. Enable hospitals and clinics to improve diagnostics, streamline operations, and enhance patient outcomes.",
    sections: [
      {
        type: "text",
        heading: "Innovating Healthcare with Digital Solutions",
        content: "Singular delivers transformative digital solutions for the healthcare sector, enhancing patient care, streamlining operations, and improving clinical outcomes. We leverage IoT, AI, and secure connectivity to create intelligent healthcare ecosystems.",
      },
      {
        type: "highlights",
        heading: "Key Benefits for Healthcare",
        highlights: [
          { title: "Real-time Remote Patient Monitoring", description: "AI-powered alerts for early intervention and improved patient safety.", icon: "HeartPulse" },
          { title: "Predictive Diagnostics", description: "Advanced analytics for more accurate and timely clinical decisions.", icon: "Stethoscope" },
          { title: "Connected Medical Devices", description: "Seamless integration of devices for comprehensive patient data.", icon: "Thermometer" },
          { title: "Streamlined Hospital Operations", description: "Intelligent resource planning and workflow optimization.", icon: "Hospital" },
        ],
      },
      {
        type: "cta",
        ctaText: "Advance patient care with Singular's healthcare innovations.",
        ctaLink: "https://share-eu1.hsforms.com/1fZx1K1zdS-iMJJclshb99w2ewkpq",
      },
    ],
  },
];
