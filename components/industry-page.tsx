"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  Gauge,
  HardHat,
  Gem,
  Signal,
  Activity,
  Shield,
  Radio,
  DollarSign,
  Layers,
  Wrench, // Changed from Tool to Wrench
  Factory,
  Share2,
  Lightbulb,
  TrafficCone,
  Trash2,
  Leaf,
  Cloud,
  HeartPulse,
  Stethoscope,
  Thermometer,
  Hospital,
  Zap,
  ArrowRight
} from "lucide-react"
import { Industry, IndustrySection } from "@/lib/industries"

interface IndustryPageProps {
  industry: Industry
}

const iconMap: { [key: string]: React.ReactNode } = {
  "Real-time Equipment Monitoring": <Gauge className="h-6 w-6" />,
  "Enhanced Worker Safety": <HardHat className="h-6 w-6" />,
  "Optimized Resource Management": <Gem className="h-6 w-6" />,
  "Secure Private 5G Connectivity": <Signal className="h-6 w-6" />,
  "Intelligent Network Monitoring": <Activity className="h-6 w-6" />,
  "Automated Cell Site Security": <Shield className="h-6 w-6" />,
  "Private 5G Deployment": <Radio className="h-6 w-6" />,
  "Operational Cost Reduction": <DollarSign className="h-6 w-6" />,
  "Digital Twin Technology": <Layers className="h-6 w-6" />,
  "Predictive Fault Detection": <Wrench className="h-6 w-6" />, // Changed from Tool to Wrench
  "Smart Workflow Optimization": <Factory className="h-6 w-6" />,
  "Connected Systems": <Share2 className="h-6 w-6" />,
  "Adaptive Smart Lighting": <Lightbulb className="h-6 w-6" />,
  "AI-Assisted Traffic Management": <TrafficCone className="h-6 w-6" />,
  "Real-time Public Safety Monitoring": <Shield className="h-6 w-6" />,
  "Intelligent Waste Management": <Trash2 className="h-6 w-6" />,
  "Real-time Power Grid Monitoring": <Gem className="h-6 w-6" />,
  "Energy Consumption Optimization": <Leaf className="h-6 w-6" />,
  "Remote Infrastructure Management": <Cloud className="h-6 w-6" />,
  "Real-time Remote Patient Monitoring": <HeartPulse className="h-6 w-6" />,
  "Predictive Diagnostics": <Stethoscope className="h-6 w-6" />,
  "Connected Medical Devices": <Thermometer className="h-6 w-6" />,
  "Streamlined Hospital Operations": <Hospital className="h-6 w-6" />,
  "Proactive Fault Detection": <Zap className="h-6 w-6" />,
  "Cost-Effective Operations": <DollarSign className="h-6 w-6" />,
}

export default function IndustryPage({ industry }: IndustryPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      {industry.heroType === "alt" ? (
        <section className="relative w-full py-20 md:py-32 bg-gradient-to-r from-[#0050A0] to-[#003d80] text-white overflow-hidden">
          <div className="container mx-auto px-6 relative z-20">
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-4xl md:text-6xl font-bold leading-tight tracking-tight mb-6"
            >
              {industry.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
              className="text-lg md:text-xl max-w-3xl mb-10 leading-relaxed opacity-90"
            >
              {industry.heroDescription}
            </motion.p>
            {industry.ctaLink && industry.ctaText && (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.28, ease: "easeOut" }}
              >
                <a
                  href={industry.ctaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-3.5 text-base font-semibold text-[#0050A0] bg-white hover:bg-slate-100 transition-colors"
                >
                  {industry.ctaText}
                </a>
              </motion.div>
            )}
          </div>
          {industry.heroImage && (
            <div className="absolute inset-0 opacity-70">
              <img
                src={industry.heroImage}
                alt={industry.title}
                className="w-full h-full object-cover object-center"
              />
            </div>
          )}
        </section>
      ) : (
        <section className="relative w-full h-screen min-h-[600px] max-h-[900px] overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src={industry.heroImage}
              alt={industry.title}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/30" />
          </div>

          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-white font-bold leading-tight tracking-tight mb-6"
              style={{ fontSize: "clamp(2.4rem, 5.5vw, 4.5rem)" }}
            >
              {industry.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
              className="text-white/80 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed"
            >
              {industry.heroDescription}
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
      )}

      {/* Content Sections */}
      <main className="py-20">
        <div className="container mx-auto px-4">
          {industry.sections.map((section, index) => (
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

              {/* Two Column Text and Image Section */}
              {section.type === "two-column-text-image" && section.content && section.imageUrl && (
                <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                  <div className={section.imageLeft ? "order-2" : "order-1"}>
                    {section.heading && (
                      <h2 className="text-3xl md:text-4xl font-bold mb-6">{section.heading}</h2>
                    )}
                    <p className="text-lg text-slate-600 leading-relaxed mb-6">{section.content}</p>
                    {section.ctaLink && section.ctaText && (
                      <a
                        href={section.ctaLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 text-base font-semibold text-white bg-[#0050A0] hover:bg-[#003d80] transition-colors"
                      >
                        {section.ctaText} <ArrowRight className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                  <div className={section.imageLeft ? "order-1" : "order-2"}>
                    <img
                      src={section.imageUrl}
                      alt={section.heading}
                      className="w-full rounded-lg shadow-lg"
                    />
                  </div>
                </div>
              )}

              {/* Highlights Grid */}
              {section.type === "highlights" && section.highlights && (
                <div>
                  {section.heading && (
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">{section.heading}</h2>
                  )}
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {section.highlights.map((highlight, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        className="bg-white rounded-lg border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow"
                      >
                        <div className="mb-4 text-[#0050A0]">
                          {iconMap[highlight.title] || <Lightbulb className="h-6 w-6" />}
                        </div>
                        <h3 className="text-xl font-semibold mb-3">{highlight.title}</h3>
                        <p className="text-slate-600">{highlight.description}</p>
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

              {/* Case Studies Grid Section */}
              {section.type === "case-studies-grid" && section.caseStudies && (
                <div>
                  {section.heading && (
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">{section.heading}</h2>
                  )}
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {section.caseStudies.map((caseStudy, idx) => (
                      <motion.a
                        key={idx}
                        href={caseStudy.link}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        className="bg-white rounded-lg overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-shadow cursor-pointer group"
                      >
                        <img
                          src={caseStudy.image}
                          alt={caseStudy.title}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="p-6">
                          <h3 className="text-xl font-semibold mb-2 group-hover:text-[#0050A0] transition-colors">{caseStudy.title}</h3>
                          <p className="text-slate-600 text-sm">{caseStudy.description}</p>
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
                      {section.ctaText}
                    </a>
                  )}
                </div>
              )}

              {/* Contact Section */}
              {section.type === "contact-section" && (
                <div className="bg-white rounded-lg border border-slate-200 p-8 text-center shadow-sm max-w-2xl mx-auto">
                  {section.heading && (
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">{section.heading}</h2>
                  )}
                  {section.content && (
                    <p className="text-lg text-slate-600 leading-relaxed mb-6">{section.content}</p>
                  )}
                  {section.ctaLink && section.ctaText && (
                    <a
                      href={section.ctaLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-8 py-3.5 text-base font-semibold text-white bg-[#0050A0] hover:bg-[#003d80] transition-colors"
                    >
                      {section.ctaText}
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