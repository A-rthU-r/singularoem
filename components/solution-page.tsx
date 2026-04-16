"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { 
  BarChart, 
  Clock, 
  Wifi, 
  MapPin, 
  TrendingUp, 
  Cpu, 
  Target, 
  Scale,
  Zap,
  CloudOff,
  ShieldCheck,
  WifiOff,
  Lock,
  Monitor,
  Lightbulb,
  Feather,
  Globe
} from "lucide-react"
import { Solution } from "@/lib/solutions"

interface SolutionPageProps {
  solution: Solution
}

const iconMap: { [key: string]: React.ReactNode } = {
  "Enhanced Security": <Lock className="h-6 w-6" />,
  "Ultra-Low Latency": <Clock className="h-6 w-6" />,
  "Massive Connectivity": <Wifi className="h-6 w-6" />,
  "Customized Coverage": <MapPin className="h-6 w-6" />,
  "Data-Driven Insights": <BarChart className="h-6 w-6" />,
  "Operational Efficiency": <TrendingUp className="h-6 w-6" />,
  "Predictive Maintenance": <Monitor className="h-6 w-6" />,
  "Enhanced Safety": <ShieldCheck className="h-6 w-6" />,
  "Predictive Insights": <TrendingUp className="h-6 w-6" />,
  "Automated Decision-Making": <Cpu className="h-6 w-6" />,
  "Optimized Performance": <Target className="h-6 w-6" />,
  "Scalable Solutions": <Scale className="h-6 w-6" />,
  "Real-time Monitoring": <Monitor className="h-6 w-6" />,
  "Predictive Optimization": <Lightbulb className="h-6 w-6" />,
  "Enhanced Design & Prototyping": <Feather className="h-6 w-6" />,
  "Remote Management": <Globe className="h-6 w-6" />,
  "Bandwidth Optimization": <CloudOff className="h-6 w-6" />,
  "Enhanced Data Security": <ShieldCheck className="h-6 w-6" />,
  "Offline Capabilities": <WifiOff className="h-6 w-6" />,
}

export default function SolutionPage({ solution }: SolutionPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative w-full h-screen min-h-[600px] max-h-[900px] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={solution.heroImage}
            alt={solution.title}
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
            {solution.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="text-white/80 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed"
          >
            {solution.heroDescription}
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
              Get In Touch
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

      {/* Content Sections */}
      <main className="py-20">
        <div className="container mx-auto px-4">
          {solution.sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-20"
            >
              {/* Text Section */}
              {section.type === "text" && (
                <div className="max-w-4xl mx-auto">
                  {section.heading && (
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">{section.heading}</h2>
                  )}
                  {section.content && (
                    <p className="text-lg text-slate-600 leading-relaxed">{section.content}</p>
                  )}
                </div>
              )}

              {/* Features/Highlights Grid */}
              {section.type === "features" && section.features && (
                <div>
                  {section.heading && (
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">{section.heading}</h2>
                  )}
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {section.features.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        className="bg-white rounded-lg border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow"
                      >
                        <div className="mb-4 text-[#0050A0]">
                          {iconMap[feature.title] || <Lightbulb className="h-6 w-6" />}
                        </div>
                        <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                        <p className="text-slate-600">{feature.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {/* Image Section */}
              {section.type === "image" && section.imageUrl && (
                <div className="max-w-4xl mx-auto">
                  {section.heading && (
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">{section.heading}</h2>
                  )}
                  <img
                    src={section.imageUrl}
                    alt={section.heading}
                    className="w-full rounded-lg shadow-lg mb-6"
                  />
                  {section.content && (
                    <p className="text-lg text-slate-600 leading-relaxed">{section.content}</p>
                  )}
                </div>
              )}

              {/* Case Studies Section */}
              {section.type === "case-studies" && section.caseStudies && (
                <div>
                  {section.heading && (
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">{section.heading}</h2>
                  )}
                  <div className="grid md:grid-cols-2 gap-8">
                    {section.caseStudies.map((caseStudy, idx) => (
                      <motion.a
                        key={idx}
                        href={caseStudy.link}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        className="bg-white rounded-lg overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                      >
                        <img
                          src={caseStudy.image}
                          alt={caseStudy.title}
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-6">
                          <h3 className="text-xl font-semibold mb-2">{caseStudy.title}</h3>
                          <p className="text-slate-600">{caseStudy.description}</p>
                        </div>
                      </motion.a>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA Section */}
              {section.type === "cta" && (
                <div className="bg-gradient-to-r from-[#0050A0] to-[#003d80] rounded-lg p-12 text-center text-white">
                  {section.ctaText && (
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">{section.ctaText}</h2>
                  )}
                  {section.ctaLink && (
                    <a
                      href={section.ctaLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-8 py-3.5 text-base font-semibold bg-white text-[#0050A0] hover:bg-slate-100 transition-colors"
                    >
                      Get In Touch
                    </a>
                  )}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  )
}
