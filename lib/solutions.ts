export interface Solution {
  slug: string;
  title: string;
  heroImage: string;
  heroDescription: string;
  heroType?: "default" | "alt"; // New field for hero section type
  ctaText?: string; // New field for hero CTA text
  ctaLink?: string; // New field for hero CTA link
  sections: SolutionSection[];
}

export interface SolutionSection {
  type: 'text' | 'image' | 'features' | 'case-studies' | 'cta' | 'two-column-text' | 'metrics' | 'grid-features' | 'product-offerings'; // Updated types
  heading?: string;
  content?: string;
  imageUrl?: string;
  imageLeft?: boolean; // New field for two-column layout
  features?: { title: string; description: string; icon?: string }[];
  caseStudies?: { title: string; description: string; link: string; image: string }[];
  metrics?: { value: string; description: string }[]; // New field for metrics section
  gridFeatures?: { title: string; description: string; image: string }[]; // New field for grid features
  productOfferings?: { title: string; description: string; link: string; image: string }[]; // New field for product offerings
  ctaText?: string;
  ctaLink?: string;
}


export const solutions: Solution[] = [
  {
    slug: "private-5g",
    title: "Private 5G Solutions",
    heroImage: "/images/5G-hero.jpg", // Placeholder, will need a specific image
    heroDescription: "Empowering enterprises with secure, high-performance Private 5G networks for unparalleled connectivity and innovation.",
    heroType: "alt",
    ctaText: "Get Started with Private 5G",
    ctaLink: "https://share-eu1.hsforms.com/1fZx1K1zdS-iMJJclshb99w2ewkpq",
    sections: [
      {
        type: "text",
        heading: "Unleashing the Power of Private 5G",
        content: "Singular's Private 5G solutions provide dedicated, secure, and ultra-reliable wireless connectivity tailored for mission-critical enterprise operations. Leveraging cutting-edge 5G technology, we enable industries to achieve unprecedented levels of automation, efficiency, and data-driven decision-making.",
      },
      {
        type: "two-column-text",
        heading: "Transforming Industries with Private 5G",
        content: "Private 5G networks offer unparalleled benefits for various industries, from manufacturing to logistics. Experience enhanced security, ultra-low latency, and massive connectivity, enabling new applications and business models. Our solutions are designed to integrate seamlessly with existing infrastructure, providing a robust and future-proof communication backbone.\n\nWith Singular, you can unlock the full potential of Industry 4.0, enabling real-time data processing, autonomous operations, and advanced analytics at the edge. Our expert teams ensure a smooth deployment and continuous optimization of your private network.",
        imageUrl: "/images/5g-solution-example.jpg", // Placeholder
        imageLeft: false,
      },
      {
        type: "metrics",
        heading: "Private 5G Impact in Numbers",
        metrics: [
          { value: "<10ms", description: "Ultra-low latency for critical applications" },
          { value: "99.999%", description: "Reliability for mission-critical operations" },
          { value: "10x", description: "Increased device density compared to Wi-Fi" },
          { value: "20%", description: "Reduction in operational costs for early adopters" },
        ],
      },
      {
        type: "grid-features",
        heading: "Why Choose Singular for Private 5G?",
        gridFeatures: [
          { title: "Tailored Solutions", description: "Custom-designed private 5G networks to meet your specific business needs.", image: "/images/feature-custom.jpg" },
          { title: "Seamless Integration", description: "Expert integration with your existing IT and OT infrastructure.", image: "/images/feature-integration.jpg" },
          { title: "End-to-End Support", description: "From planning and deployment to ongoing management and optimization.", image: "/images/feature-support.jpg" },
        ],
      },
      {
        type: "case-studies",
        heading: "Private 5G Success Stories",
        caseStudies: [
          { title: "Smart Manufacturing with Private 5G", description: "A leading automotive manufacturer achieved 30% efficiency gains with Singular's Private 5G deployment.", link: "#", image: "/images/case-study-manufacturing-5G.jpg" },
          { title: "Automated Port Operations", description: "Enabled real-time communication for autonomous vehicles and equipment in a major port, increasing throughput by 25%.", link: "#", image: "/images/case-study-port-5G.jpg" },
          { title: "Connected Healthcare Campus", description: "Provided secure and reliable connectivity for critical medical devices and telehealth services across a large hospital campus.", link: "#", image: "/images/case-study-healthcare-5G.jpg" },
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
    heroImage: "/images/iot-hero.jpg", // Placeholder
    heroDescription: "Connect and manage your assets with intelligent IoT solutions for real-time visibility and data-driven insights.",
    heroType: "alt",
    ctaText: "Explore IoT Capabilities",
    ctaLink: "https://share-eu1.hsforms.com/1fZx1K1zdS-iMJJclshb99w2ewkpq",
    sections: [
      {
        type: "text",
        heading: "Driving Efficiency with IoT",
        content: "Our IoT solutions enable businesses to connect their physical assets to the digital world, providing real-time data and insights that drive operational efficiency, reduce costs, and create new business opportunities. From smart sensors to advanced analytics platforms, we offer a comprehensive suite of tools to help you harness the power of the Internet of Things.",
      },
      {
        type: "two-column-text",
        heading: "Real-time Asset Intelligence",
        content: "Gain unprecedented visibility into your operations with our IoT asset tracking and monitoring solutions. Understand the location, condition, and performance of your critical assets in real-time, enabling proactive maintenance, optimized logistics, and improved resource utilization.\n\nOur platforms are designed for scalability and flexibility, supporting a wide range of devices and communication protocols. Whether you need to monitor a single facility or a global supply chain, Singular provides the insights you need to make informed decisions.",
        imageUrl: "/images/iot-solution-example.jpg", // Placeholder
        imageLeft: true,
      },
      {
        type: "metrics",
        heading: "IoT Impact in Numbers",
        metrics: [
          { value: "15%", description: "Average reduction in operational costs" },
          { value: "20%", description: "Improvement in asset utilization" },
          { value: "30%", description: "Faster response to critical events" },
          { value: "90%", description: "Accuracy in predictive maintenance" },
        ],
      },
      {
        type: "grid-features",
        heading: "Why Singular for IoT?",
        gridFeatures: [
          { title: "Comprehensive Platform", description: "A unified platform for device management, data ingestion, and analytics.", image: "/images/feature-platform-iot.jpg" },
          { title: "Security First", description: "Robust security measures to protect your IoT data and devices.", image: "/images/feature-security-iot.jpg" },
          { title: "Scalable & Flexible", description: "Solutions that grow with your business, adapting to evolving needs.", image: "/images/feature-scalable-iot.jpg" },
        ],
      },
      {
        type: "case-studies",
        heading: "IoT Success Stories",
        caseStudies: [
          { title: "Optimized Logistics with IoT", description: "A global logistics company reduced fuel consumption by 15% using Singular's IoT asset tracking solution.", link: "#", image: "/images/case-study-logistics.jpg" },
          { title: "Smart Agriculture Monitoring", description: "Enabled a large farm to optimize irrigation and crop health, leading to a 10% increase in yield.", link: "#", image: "/images/case-study-agriculture.jpg" },
          { title: "Predictive Maintenance for Utilities", description: "Reduced equipment downtime by 20% for a utility provider through real-time monitoring and predictive analytics.", link: "#", image: "/images/case-study-utilities.jpg" },
        ],
      },
      {
        type: "cta",
        ctaText: "Unlock the potential of IoT for your business.",
        ctaLink: "https://share-eu1.hsforms.com/1fZx1K1zdS-iMJJclshb99w2ewkpq",
      },
    ],
  },
  {
    slug: "ai-analytics",
    title: "AI & Analytics Solutions",
    heroImage: "/images/ai-hero.jpg", // Placeholder
    heroDescription: "Harness the power of AI and advanced analytics to transform your data into a strategic asset.",
    heroType: "alt",
    ctaText: "Discover AI-Driven Insights",
    ctaLink: "https://share-eu1.hsforms.com/1fZx1K1zdS-iMJJclshb99w2ewkpq",
    sections: [
      {
        type: "text",
        heading: "Intelligent Insights with AI",
        content: "Singular's AI and analytics solutions help businesses uncover hidden patterns, predict future trends, and make more informed decisions. We leverage machine learning and advanced data processing to turn complex data into clear, actionable insights, driving innovation and competitive advantage.",
      },
      {
        type: "two-column-text",
        heading: "From Data to Decisions",
        content: "Our advanced analytics platforms provide comprehensive tools for data ingestion, processing, and visualization. With AI-powered algorithms, we can identify anomalies, forecast outcomes, and automate decision-making processes, empowering your organization to operate more efficiently and effectively.\n\nWhether you're looking to optimize marketing campaigns, improve operational efficiency, or develop new products and services, Singular's AI and analytics solutions provide the intelligence you need to succeed in today's data-driven world.",
        imageUrl: "/images/ai-solution-example.jpg", // Placeholder
        imageLeft: false,
      },
      {
        type: "metrics",
        heading: "AI & Analytics Impact in Numbers",
        metrics: [
          { value: "25%", description: "Increase in decision-making accuracy" },
          { value: "10%", description: "Reduction in operational costs" },
          { value: "3x", description: "Faster identification of market trends" },
          { value: "95%", description: "Accuracy in predictive modeling" },
        ],
      },
      {
        type: "grid-features",
        heading: "Why Singular for AI & Analytics?",
        gridFeatures: [
          { title: "Expert Data Scientists", description: "Our team of AI specialists brings deep expertise in machine learning and data science.", image: "/images/feature-experts-ai.jpg" },
          { title: "Custom AI Models", description: "Develop bespoke AI models tailored to your unique business challenges.", image: "/images/feature-models-ai.jpg" },
          { title: "Ethical AI Practices", description: "Committed to responsible AI development and deployment, ensuring fairness and transparency.", image: "/images/feature-ethical-ai.jpg" },
        ],
      },
      {
        type: "case-studies",
        heading: "AI & Analytics Success Stories",
        caseStudies: [
          { title: "Predictive Maintenance for Manufacturing", description: "Reduced equipment downtime by 20% using AI-powered predictive analytics for a major manufacturer.", link: "#", image: "/images/case-study-manufacturing-ai.jpg" },
          { title: "Customer Churn Prediction", description: "Helped a telecommunications company reduce customer churn by 15% through advanced predictive modeling.", link: "#", image: "/images/case-study-telecom-ai.jpg" },
          { title: "Fraud Detection in Finance", description: "Implemented an AI-driven fraud detection system for a financial institution, reducing fraudulent transactions by 30%.", link: "#", image: "/images/case-study-finance-ai.jpg" },
        ],
      },
      {
        type: "cta",
        ctaText: "Start your AI-driven transformation today.",
        ctaLink: "https://share-eu1.hsforms.com/1fZx1K1zdS-iMJJclshb99w2ewkpq",
      },
    ],
  },
];

// Appending Digital Twins solution
solutions.push({
  slug: "digital-twins",
  title: "Digital Twins Solutions",
  heroImage: "/images/digital-twins-hero.jpg", // Placeholder
  heroDescription: "Create dynamic virtual replicas of your physical assets and processes to optimize performance and predict outcomes.",
  heroType: "alt",
  ctaText: "Explore Digital Twins",
  ctaLink: "https://share-eu1.hsforms.com/1fZx1K1zdS-iMJJclshb99w2ewkpq",
  sections: [
    {
      type: "text",
      heading: "Bridging the Physical and Digital Worlds",
      content: "Singular's Digital Twins solutions enable you to create highly accurate, real-time virtual models of your physical assets, systems, and processes. By integrating IoT data, AI, and advanced analytics, our digital twins provide unparalleled visibility and predictive capabilities, allowing you to simulate scenarios, optimize operations, and drive innovation.",
    },
    {
      type: "two-column-text",
      heading: "Simulate, Optimize, Innovate",
      content: "With a digital twin, you can test changes and predict outcomes in a risk-free virtual environment before implementing them in the real world. This powerful capability allows for continuous optimization of manufacturing processes, predictive maintenance of critical infrastructure, and enhanced product design.\n\nOur solutions are tailored to your specific industry needs, providing a comprehensive view of your operations and empowering you to make data-driven decisions with confidence.",
      imageUrl: "/images/digital-twins-solution-example.jpg", // Placeholder
      imageLeft: true,
    },
    {
      type: "metrics",
      heading: "Digital Twins Impact in Numbers",
      metrics: [
        { value: "20%", description: "Reduction in time-to-market for new products" },
        { value: "15%", description: "Improvement in overall equipment effectiveness (OEE)" },
        { value: "30%", description: "Decrease in maintenance costs" },
        { value: "10%", description: "Increase in energy efficiency" },
      ],
    },
    {
      type: "grid-features",
      heading: "Why Singular for Digital Twins?",
      gridFeatures: [
        { title: "High-Fidelity Modeling", description: "Create accurate and detailed virtual replicas of complex systems.", image: "/images/feature-modeling.jpg" },
        { title: "Real-Time Data Integration", description: "Seamlessly connect your digital twin with live IoT data streams.", image: "/images/feature-data-integration.jpg" },
        { title: "Advanced Simulation", description: "Run complex simulations to predict outcomes and optimize performance.", image: "/images/feature-simulation.jpg" },
      ],
    },
    {
      type: "case-studies",
      heading: "Digital Twins Success Stories",
      caseStudies: [
        { title: "Optimizing Factory Operations", description: "A major manufacturer used a digital twin to optimize their production line, resulting in a 15% increase in throughput.", link: "#", image: "/images/case-study-factory-twin.jpg" },
        { title: "Predictive Maintenance for Wind Farms", description: "Implemented digital twins for wind turbines, reducing maintenance costs by 25% through predictive analytics.", link: "#", image: "/images/case-study-wind-twin.jpg" },
        { title: "Smart City Planning", description: "Developed a digital twin of a city district to simulate traffic flow and optimize urban planning initiatives.", link: "#", image: "/images/case-study-city-twin.jpg" },
      ],
    },
    {
      type: "cta",
      ctaText: "Ready to build your digital twin?",
      ctaLink: "https://share-eu1.hsforms.com/1fZx1K1zdS-iMJJclshb99w2ewkpq",
    },
  ],
});


solutions.push({
  slug: "edge-computing",
  title: "Edge Computing Solutions",
  heroImage: "/images/edge-computing-hero.jpg", // Placeholder
  heroDescription: "Bring computation and data storage closer to the sources of data, improving response times and saving bandwidth.",
  heroType: "alt",
  ctaText: "Explore Edge Computing",
  ctaLink: "https://share-eu1.hsforms.com/1fZx1K1zdS-iMJJclshb99w2ewkpq",
  sections: [
    {
      type: "text",
      heading: "Unlocking the Power of the Edge",
      content: "Singular's Edge Computing solutions enable businesses to process data closer to where it's generated, reducing latency, conserving bandwidth, and enhancing real-time decision-making. This distributed computing paradigm is crucial for applications requiring immediate responses, such as autonomous vehicles, industrial automation, and augmented reality.",
    },
    {
      type: "two-column-text",
      heading: "Faster Insights, Greater Efficiency",
      content: "By moving computation to the edge, you can minimize the reliance on centralized cloud infrastructure, leading to significant improvements in operational efficiency and data security. Our solutions are designed to integrate seamlessly with your existing IoT devices and cloud platforms, providing a robust and scalable edge infrastructure.\n\nWhether you're looking to optimize factory floors, manage smart cities, or deploy intelligent retail environments, Singular's Edge Computing expertise delivers the performance and reliability you need to stay ahead.",
      imageUrl: "/images/edge-computing-solution-example.jpg", // Placeholder
      imageLeft: false,
    },
    {
      type: "metrics",
      heading: "Edge Computing Impact in Numbers",
      metrics: [
        { value: "<5ms", description: "Ultra-low latency for critical applications" },
        { value: "50%", description: "Reduction in data transmission costs" },
        { value: "2x", description: "Faster real-time decision-making" },
        { value: "99.99%", description: "Enhanced system reliability" },
      ],
    },
    {
      type: "grid-features",
      heading: "Why Singular for Edge Computing?",
      gridFeatures: [
        { title: "Optimized Performance", description: "Achieve lightning-fast response times for latency-sensitive applications.", image: "/images/feature-performance.jpg" },
        { title: "Enhanced Security", description: "Process sensitive data locally, reducing exposure and improving compliance.", image: "/images/feature-security-edge.jpg" },
        { title: "Scalable Infrastructure", description: "Deploy and manage edge resources efficiently across diverse environments.", image: "/images/feature-scalable-edge.jpg" },
      ],
    },
    {
      type: "case-studies",
      heading: "Edge Computing Success Stories",
      caseStudies: [
        { title: "Autonomous Vehicle Fleet Management", description: "Enabled real-time decision-making for a fleet of autonomous vehicles, improving safety and efficiency.", link: "#", image: "/images/case-study-autonomous.jpg" },
        { title: "Smart Factory Automation", description: "Deployed edge computing to optimize production lines, resulting in a 20% increase in throughput and reduced downtime.", link: "#", image: "/images/case-study-factory-edge.jpg" },
        { title: "Retail Experience Personalization", description: "Utilized edge analytics to deliver personalized customer experiences in real-time, boosting sales by 15%.", link: "#", image: "/images/case-study-retail-edge.jpg" },
      ],
    },
    {
      type: "cta",
      ctaText: "Ready to bring intelligence to the edge?",
      ctaLink: "https://share-eu1.hsforms.com/1fZx1K1zdS-iMJJclshb99w2ewkpq",
    },
  ],
});