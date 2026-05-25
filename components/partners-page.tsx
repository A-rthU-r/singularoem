"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

interface PartnerCategory {
  name: "Innovate" | "Go-to-market" | "Build"
  description: string
  benefits: string[]
}

interface PartnerItem {
  name: string
  logo: string
  description: string
  category: "Innovate" | "Go-to-market" | "Build"
}

interface PartnerNews {
  title: string
  description: string
  link: string
  image?: string
}

interface PartnersPageProps {
  partners?: PartnerItem[]
  partnerNews?: PartnerNews[]
}

const partnerCategories: { [key: string]: PartnerCategory } = {
  Innovate: {
    name: "Innovate",
    description: "Co-create the future of technology by collaborating on research, innovation, and industry-shaping initiatives.",
    benefits: [
      "Joint R&D programs",
      "Technology innovation labs",
      "Industry thought leadership",
      "Ecosystem development",
    ],
  },
  "Go-to-market": {
    name: "Go-to-market",
    description: "Jointly bring innovative solutions to market, expanding reach and accelerating growth together.",
    benefits: [
      "Market expansion",
      "Channel partnerships",
      "Co-marketing initiatives",
      "Sales enablement",
    ],
  },
  Build: {
    name: "Build",
    description: "Build integrated solutions that combine our strengths to deliver superior value to customers.",
    benefits: [
      "Solution integration",
      "API partnerships",
      "Technology integration",
      "Customer success",
    ],
  },
}

const defaultPartners: PartnerItem[] = [
  {
    name: "Hewlett Packard Enterprise",
    logo: "/placeholder-logo.svg",
    description: "Enterprise infrastructure and edge computing solutions",
    category: "Build",
  },
  {
    name: "Intel",
    logo: "/placeholder-logo.svg",
    description: "Advanced semiconductor and processing technologies",
    category: "Innovate",
  },
  {
    name: "Dell",
    logo: "/placeholder-logo.svg",
    description: "Enterprise IT solutions and infrastructure",
    category: "Build",
  },
  {
    name: "VMware",
    logo: "/placeholder-logo.svg",
    description: "Virtualization and cloud infrastructure",
    category: "Build",
  },
  {
    name: "Red Hat",
    logo: "/placeholder-logo.svg",
    description: "Open-source enterprise solutions",
    category: "Build",
  },
  {
    name: "AWS",
    logo: "/placeholder-logo.svg",
    description: "Cloud computing and AI services",
    category: "Go-to-market",
  },
]

const defaultPartnerNews: PartnerNews[] = [
  {
    title: "Singular and Intel Collaborate for AI-Native Solutions",
    description: "Announcing a strategic partnership to accelerate AI innovation across enterprise networks.",
    link: "#",
    image: "/placeholder.jpg",
  },
  {
    title: "Singular Partners with HPE for Edge Computing",
    description: "Joint initiative to deliver advanced edge computing solutions for manufacturing and utilities.",
    link: "# ",
    image: "/placeholder.jpg",
  },
  {
    title: "Singular and AWS Expand Cloud Integration",
    description: "Enhanced integration bringing Private 5G and IoT capabilities to AWS customers globally.",
    link: "#",
    image: "/placeholder.jpg",
  },
]

export default function PartnersPage({ 
  partners = defaultPartners, 
  partnerNews = defaultPartnerNews 
}: PartnersPageProps) {
  const [activeCategory, setActiveCategory] = useState<"Innovate" | "Go-to-market" | "Build">("Innovate")

  const filteredPartners = partners.filter((p) => p.category === activeCategory)

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative w-full h-screen min-h-[600px] max-h-[900px] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/partner-hero-bg.jpg"
            alt="Partners"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-white font-bold leading-tight tracking-tight mb-6"
            style={{ fontSize: "clamp(2.4rem, 5.5vw, 4.5rem)" }}
          >
            Step into a New Business Logic
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="text-white/80 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed"
          >
            Together, we build a fully connected world through strategic partnerships and ecosystem collaboration.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.28, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 items-center"
          >
            <a
              href="https://share-eu1.hsforms.com/1fZx1K1zdS-iMJJclshb99w2ewkpq"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-3.5 text-base font-semibold text-white border border-white/70 hover:bg-white hover:text-black transition-all duration-200"
            >
              Become a Partner
            </a>

            <a
              href="https://youtu.be/1VhO4yGAjyo?si=coEKao1KmzAWmU-k"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-4 py-3.5 text-base font-semibold text-white/75 hover:text-white transition-colors duration-200"
            >
              <span className="w-5 h-5 rounded-full border border-white/60 flex items-center justify-center flex-shrink-0">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor">
                  <path d="M3 2l5 3-5 3V2z" />
                </svg>
              </span>
              Watch Video
            </a>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/20 to-transparent z-10 pointer-events-none" />
      </section>

      {/* Main Content */}
      <main className="py-20">
        <div className="container mx-auto px-4">
          {/* Ecosystem Collaboration Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-20"
          >
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Ecosystem Collaboration is Key to Our Strategy</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Singular works closely with a wide variety of partners around the world to maximize customer value and ensure delivery of the full value of connectivity to customers large and small. Together with our partners, we make game-changing technology easy to use, adopt and scale.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Our partnership strategy plays a pivotal role in our mission to connect the world and drive the future of communication technology. For example, together with several of our partners, we are currently co-creating, designing and testing consumer industry solutions at 5G-connected innovation centers such as the D-15 lab in Silicon Valley and the Industry 4.0 Center of Excellence in Europe.
              </p>
            </div>
          </motion.section>

          {/* Latest Partner News */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-20"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Latest Partner News</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {partnerNews.map((news, idx) => (
                <motion.a
                  key={idx}
                  href={news.link}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-white rounded-lg overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                >
                  {news.image && (
                    <img
                      src={news.image}
                      alt={news.title}
                      className="w-full h-48 object-cover"
                    />
                  )}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{news.title}</h3>
                    <p className="text-slate-600">{news.description}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.section>

          {/* Partnership Categories */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-20"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Partnership Categories</h2>

            {/* Category Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {(["Innovate", "Go-to-market", "Build"] as const).map((category) => (
                <Button
                  key={category}
                  variant={activeCategory === category ? "default" : "outline"}
                  className={`px-6 py-2 ${
                    activeCategory === category
                      ? "bg-[#0050A0] hover:bg-[#003d80]"
                      : "border-slate-300"
                  }`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>

            {/* Active Category Details */}
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl border border-slate-200 p-12 shadow-lg"
            >
              <div className="max-w-4xl mx-auto">
                <h3 className="text-2xl font-bold mb-4">{partnerCategories[activeCategory].name}</h3>
                <p className="text-lg text-slate-600 mb-8">{partnerCategories[activeCategory].description}</p>

                <h4 className="font-semibold text-lg mb-4">Key Benefits:</h4>
                <ul className="space-y-3 mb-8">
                  {partnerCategories[activeCategory].benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="mr-3 mt-1 text-[#0050A0]">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M13.3334 4L6.00008 11.3333L2.66675 8"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <span className="text-slate-600">{benefit}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="https://share-eu1.hsforms.com/1fZx1K1zdS-iMJJclshb99w2ewkpq"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-2.5 text-sm font-semibold text-white bg-[#0050A0] hover:bg-[#003d80] transition-colors"
                >
                  Explore {activeCategory}
                </a>
              </div>
            </motion.div>
          </motion.section>

          {/* Partners Grid */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-20"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Partners</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPartners.map((partner, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-white rounded-lg border border-slate-200 p-8 shadow-sm hover:shadow-md transition-shadow text-center"
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="h-16 mx-auto mb-4 object-contain"
                  />
                  <h3 className="text-xl font-semibold mb-2">{partner.name}</h3>
                  <p className="text-slate-600">{partner.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* CTA Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-r from-[#0050A0] to-[#003d80] rounded-lg p-12 text-center text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Partner with Singular?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Join our ecosystem of innovative partners and together, let's shape the future of digital transformation.
            </p>
            <a
              href="https://share-eu1.hsforms.com/1fZx1K1zdS-iMJJclshb99w2ewkpq"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-3.5 text-base font-semibold bg-white text-[#0050A0] hover:bg-slate-100 transition-colors"
            >
              Start a Collaboration
            </a>
          </motion.section>
        </div>
      </main>
    </div>
  )
}
