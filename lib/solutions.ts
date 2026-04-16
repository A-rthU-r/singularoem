export interface Solution {
  slug: string;
  title: string;
  heroImage: string;
  heroDescription: string;
  sections: SolutionSection[];
}

export interface SolutionSection {
  type: 'text' | 'image' | 'features' | 'case-studies' | 'cta';
  heading?: string;
  content?: string;
  imageUrl?: string;
  features?: { title: string; description: string; icon?: string }[];
  caseStudies?: { title: string; description: string; link: string; image: string }[];
  ctaText?: string;
  ctaLink?: string;
}

export const solutions: Solution[] = [
  {
    slug: "private-5g",
    title: "Private 5G Solutions",
    heroImage: "/images/hero-bg.jpg", // Placeholder, will need a specific image
    heroDescription: "Empowering enterprises with secure, high-performance Private 5G networks for unparalleled connectivity and innovation.",
    sections: [
      {
        type: "text",
        heading: "Unleashing the Power of Private 5G",
        content: "Singular's Private 5G solutions provide dedicated, secure, and ultra-reliable wireless connectivity tailored for mission-critical enterprise operations. Leveraging cutting-edge 5G technology, we enable industries to achieve unprecedented levels of automation, efficiency, and data-driven decision-making.",
      },
      {
        type: "features",
        heading: "Key Benefits of Singular Private 5G",
        features: [
          { title: "Enhanced Security", description: "Dedicated network infrastructure ensures superior data privacy and protection.", icon: "Lock" },
          { title: "Ultra-Low Latency", description: "Real-time communication for critical applications like autonomous systems and robotics.", icon: "Clock" },
          { title: "Massive Connectivity", description: "Support for a vast number of IoT devices within a defined geographical area.", icon: "Wifi" },
          { title: "Customized Coverage", description: "Tailored network deployment to meet specific operational and geographical requirements.", icon: "MapPin" },
        ],
      },
      {
        type: "image",
        heading: "Private 5G in Action",
        imageUrl: "/images/5g-solution-example.jpg", // Placeholder
        content: "See how Private 5G transforms industrial operations, enabling smart factories and connected campuses.",
      },
      {
        type: "case-studies",
        heading: "Success Stories",
        caseStudies: [
          { title: "Smart Manufacturing with Private 5G", description: "A leading automotive manufacturer achieved 30% efficiency gains with Singular's Private 5G deployment.", link: "#", image: "/images/case-study-manufacturing.jpg" },
        ],
      },
      {
        type: "cta",
        ctaText: "Ready to transform your operations with Private 5G?",
        ctaLink: "https://share-eu1.hsforms.com/1fZx1K1zdS-iMJJclshb99w2ewkpq",
      },
    ],
  },
  {
    slug: "iot",
    title: "IoT Solutions",
    heroImage: "/images/hero-bg.jpg", // Placeholder
    heroDescription: "Connecting the physical and digital worlds with intelligent IoT ecosystems for real-time insights and operational excellence.",
    sections: [
      {
        type: "text",
        heading: "Intelligent IoT Ecosystems",
        content: "Singular designs and deploys comprehensive IoT solutions that integrate sensors, devices, and platforms to collect, analyze, and act on real-time data. Our end-to-end approach ensures seamless connectivity and actionable intelligence across diverse environments.",
      },
      {
        type: "features",
        heading: "Benefits of Singular IoT",
        features: [
          { title: "Data-Driven Insights", description: "Transform raw data into actionable intelligence for informed decision-making.", icon: "BarChart" },
          { title: "Operational Efficiency", description: "Automate processes and optimize resource utilization across your enterprise.", icon: "Settings" },
          { title: "Predictive Maintenance", description: "Monitor asset health and predict failures to minimize downtime and costs.", icon: "Tool" },
          { title: "Enhanced Safety", description: "Real-time monitoring and alerts to ensure a safer working environment.", icon: "Shield" },
        ],
      },
      {
        type: "cta",
        ctaText: "Discover the potential of connected intelligence.",
        ctaLink: "https://share-eu1.hsforms.com/1fZx1K1zdS-iMJJclshb99w2ewkpq",
      },
    ],
  },
  {
    slug: "ai-analytics",
    title: "AI Analytics",
    heroImage: "/images/hero-bg.jpg", // Placeholder
    heroDescription: "Leveraging advanced AI and machine learning to unlock deep insights from your data, driving smarter decisions and competitive advantage.",
    sections: [
      {
        type: "text",
        heading: "Transforming Data into Intelligence",
        content: "Singular's AI Analytics solutions empower organizations to harness the full potential of their data. We develop and deploy custom AI models and platforms that provide predictive insights, automate complex analysis, and support strategic decision-making across all business functions.",
      },
      {
        type: "features",
        heading: "Advantages of Singular AI Analytics",
        features: [
          { title: "Predictive Insights", description: "Anticipate market trends, customer behavior, and operational challenges.", icon: "TrendingUp" },
          { title: "Automated Decision-Making", description: "Streamline processes with intelligent automation and real-time recommendations.", icon: "Cpu" },
          { title: "Optimized Performance", description: "Identify inefficiencies and opportunities for improvement across your operations.", icon: "Target" },
          { title: "Scalable Solutions", description: "AI platforms designed to grow with your data and business needs.", icon: "Scale" },
        ],
      },
      {
        type: "cta",
        ctaText: "Unlock the power of your data with AI Analytics.",
        ctaLink: "https://share-eu1.hsforms.com/1fZx1K1zdS-iMJJclshb99w2ewkpq",
      },
    ],
  },
  {
    slug: "digital-twins",
    title: "Digital Twins",
    heroImage: "/images/hero-bg.jpg", // Placeholder
    heroDescription: "Creating dynamic virtual replicas of physical assets and systems to simulate, analyze, and optimize performance in real-time.",
    sections: [
      {
        type: "text",
        heading: "Revolutionizing Operations with Digital Twins",
        content: "Singular's Digital Twin solutions provide a virtual counterpart for your physical assets, processes, or systems. This enables real-time monitoring, predictive analysis, and scenario simulation, leading to optimized performance, reduced risks, and accelerated innovation across various industries.",
      },
      {
        type: "features",
        heading: "Benefits of Singular Digital Twins",
        features: [
          { title: "Real-time Monitoring", description: "Gain immediate visibility into the status and performance of physical assets.", icon: "Monitor" },
          { title: "Predictive Optimization", description: "Simulate 'what-if' scenarios to optimize operations and prevent failures.", icon: "Lightbulb" },
          { title: "Enhanced Design & Prototyping", description: "Accelerate product development and testing in a virtual environment.", icon: "Feather" },
          { title: "Remote Management", description: "Control and manage complex systems from anywhere, anytime.", icon: "Globe" },
        ],
      },
      {
        type: "cta",
        ctaText: "Explore the future of operational intelligence with Digital Twins.",
        ctaLink: "https://share-eu1.hsforms.com/1fZx1K1zdS-iMJJclshb99w2ewkpq",
      },
    ],
  },
  {
    slug: "edge-computing",
    title: "Edge Computing",
    heroImage: "/images/hero-bg.jpg", // Placeholder
    heroDescription: "Bringing computation and data storage closer to the sources of data, enabling real-time processing and ultra-low latency applications.",
    sections: [
      {
        type: "text",
        heading: "Powering Real-time Decisions at the Edge",
        content: "Singular's Edge Computing solutions decentralize data processing, moving it away from centralized clouds to the network's edge. This approach minimizes latency, conserves bandwidth, and enhances data security, making it ideal for applications requiring immediate responses and local data analysis.",
      },
      {
        type: "features",
        heading: "Advantages of Singular Edge Computing",
        features: [
          { title: "Ultra-Low Latency", description: "Enable instantaneous responses for critical applications and autonomous systems.", icon: "Zap" },
          { title: "Bandwidth Optimization", description: "Reduce the volume of data transmitted to the cloud, saving costs and improving efficiency.", icon: "CloudOff" },
          { title: "Enhanced Data Security", description: "Process sensitive data locally, reducing exposure and improving compliance.", icon: "ShieldCheck" },
          { title: "Offline Capabilities", description: "Maintain operational continuity even with intermittent or no cloud connectivity.", icon: "WifiOff" },
        ],
      },
      {
        type: "cta",
        ctaText: "Optimize your operations with intelligent Edge Computing.",
        ctaLink: "https://share-eu1.hsforms.com/1fZx1K1zdS-iMJJclshb99w2ewkpq",
      },
    ],
  },
];
