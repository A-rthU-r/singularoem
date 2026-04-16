export interface Partner {
  name: string;
  logo: string;
  description: string;
  category: 'Innovate' | 'Go-to-market' | 'Build';
  link: string;
}

export const partners: Partner[] = [
  // Example Partner Data - will be populated later
  {
    name: "Example Partner 1",
    logo: "/images/partners/partner1.png",
    description: "Collaborating on cutting-edge research and development.",
    category: "Innovate",
    link: "#",
  },
  {
    name: "Example Partner 2",
    logo: "/images/partners/partner2.png",
    description: "Jointly bringing innovative solutions to market.",
    category: "Go-to-market",
    link: "#",
  },
];

export interface PartnerNews {
  title: string;
  description: string;
  link: string;
  image?: string;
}

export const partnerNews: PartnerNews[] = [
  // Example Partner News Data - will be populated later
  {
    title: "Singular and Partner X Announce Strategic Alliance",
    description: "A new collaboration to accelerate digital transformation in the manufacturing sector.",
    link: "#",
    image: "/images/news/partner-alliance.jpg",
  },
];
