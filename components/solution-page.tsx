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
  Globe,
  ArrowRight,
  CheckCircle2,
  Eye
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
  "Bandwidth Optimization": <Zap className="h-6 w-6" />,
  "Enhanced Data Security": <ShieldCheck className="h-6 w-6" />,
  "Offline Capabilities": <WifiOff className="h-6 w-6" />,
  "Asset Tracking": <MapPin className="h-6 w-6" />,
  "Environmental Monitoring": <Lightbulb className="h-6 w-6" />,
  "Data Analytics": <BarChart className="h-6 w-6" />,
  "Predictive Modeling": <TrendingUp className="h-6 w-6" />,
  "Anomaly Detection": <Zap className="h-6 w-6" />,
  "Natural Language Processing": <Feather className="h-6 w-6" />,
  "Computer Vision": <Eye className="h-6 w-6" />,
  "Tailored Solutions": <CheckCircle2 className="h-6 w-6" />,
  "Seamless Integration": <CheckCircle2 className="h-6 w-6" />,
  "End-to-End Support": <CheckCircle2 className="h-6 w-6" />,
  "Comprehensive Platform": <CheckCircle2 className="h-6 w-6" />,
  "Security First": <ShieldCheck className="h-6 w-6" />,
  "Scalable & Flexible": <Scale className="h-6 w-6" />,
  "Expert Data Scientists": <Cpu className="h-6 w-6" />,
  "Custom AI Models": <Target className="h-6 w-6" />,
  "Ethical AI Practices": <Globe className="h-6 w-6" />,
};

export default function SolutionPage({ solution }: SolutionPageProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative w-full py-20 md:py-32 bg-[#001126] text-white overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl relative z-20">
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-4xl md:text-6xl font-bold leading-tight tracking-tight mb-6"
            >
              {solution.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
              className="text-lg md:text-xl mb-10 leading-relaxed text-slate-300"
            >
              {solution.heroDescription}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.28, ease: "easeOut" }}
            >
              {solution.ctaText && solution.ctaLink && (
                <Button className="bg-[#0050A0] hover:bg-[#003d80] text-white px-8 py-6 text-lg rounded-none">
                  {solution.ctaText}
                </Button>
              )}
            </motion.div>
          </div>
        </div>
        {solution.heroImage && (
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-[#001126] via-[#001126]/80 to-transparent" />
            <img
              src={solution.heroImage}
              alt={solution.title}
              className="w-full h-full object-cover opacity-70"
            />
          </div>
        )}
      </section>

      {/* Content Sections */}
      <main>
        {solution.sections.map((section, index) => (
          <section key={index} className="py-20 border-b border-slate-100">
            <div className="container mx-auto px-6">
              {section.type === "text" && (
                <div className="max-w-4xl">
                  {section.heading && (
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#001126]">{section.heading}</h2>
                  )}
                  <div className="text-lg text-slate-600 leading-relaxed space-y-6">
                    {section.content}
                  </div>
                </div>
              )}

              {section.type === "two-column-text" && (
                <div className={`grid lg:grid-cols-2 gap-12 items-center ${section.imageLeft ? "lg:grid-flow-col-dense" : ""}`}>
                  <div className={`${section.imageLeft ? "lg:col-start-2" : ""}`}>
                    {section.heading && (
                      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#001126]">{section.heading}</h2>
                    )}
                    <div className="text-lg text-slate-600 leading-relaxed space-y-6">
                      {section.content}
                    </div>
                  </div>
                  {section.imageUrl && (
                    <div className="relative aspect-video overflow-hidden">
                      <img
                        src={section.imageUrl}
                        alt={section.heading || "Solution image"}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                </div>
              )}

              {section.type === "features" && (
                <div>
                  {section.heading && (
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-[#001126]">{section.heading}</h2>
                  )}
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {section.features?.map((feature, idx) => (
                      <div key={idx} className="p-6 bg-slate-50 rounded-none border-t-4 border-[#0050A0]">
                        <div className="mb-4 text-[#0050A0]">
                          {iconMap[feature.title] || <CheckCircle2 className="h-6 w-6" />}
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-[#001126]">{feature.title}</h3>
                        <p className="text-slate-600">{feature.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {section.type === "metrics" && (
                <div>
                  {section.heading && (
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-[#001126] text-center">{section.heading}</h2>
                  )}
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                    {section.metrics?.map((metric, idx) => (
                      <div key={idx} className="p-6 bg-slate-50 rounded-none border-t-4 border-[#0050A0]">
                        <p className="text-5xl font-bold text-[#0050A0] mb-3">{metric.value}</p>
                        <p className="text-lg text-slate-600">{metric.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {section.type === "grid-features" && (
                <div>
                  {section.heading && (
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-[#001126]">{section.heading}</h2>
                  )}
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {section.gridFeatures?.map((feature, idx) => (
                      <div key={idx} className="group block">
                        <div className="relative aspect-video overflow-hidden mb-6">
                          <img
                            src={feature.image}
                            alt={feature.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>
                        <h3 className="text-2xl font-bold mb-3 text-[#001126] group-hover:text-[#0050A0] transition-colors">
                          {feature.title}
                        </h3>
                        <p className="text-slate-600">{feature.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {section.type === "image" && (
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div>
                    {section.heading && (
                      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#001126]">{section.heading}</h2>
                    )}
                    <p className="text-lg text-slate-600 leading-relaxed mb-8">
                      {section.content}
                    </p>
                  </div>
                  {section.imageUrl && (
                    <div className="relative aspect-video overflow-hidden">
                      <img
                        src={section.imageUrl}
                        alt={section.heading || "Solution image"}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                </div>
              )}

              {section.type === "case-studies" && (
                <div>
                  {section.heading && (
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-[#001126]">{section.heading}</h2>
                  )}
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {section.caseStudies?.map((study, idx) => (
                      <a key={idx} href={study.link} className="group block">
                        <div className="relative aspect-video overflow-hidden mb-6">
                          <img
                            src={study.image}
                            alt={study.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>
                        <h3 className="text-2xl font-bold mb-3 text-[#001126] group-hover:text-[#0050A0] transition-colors">
                          {study.title}
                        </h3>
                        <p className="text-slate-600 mb-4">{study.description}</p>
                        <span className="inline-flex items-center text-[#0050A0] font-bold">
                          Read more <ArrowRight className="ml-2 h-4 w-4" />
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {section.type === "product-offerings" && (
                <div>
                  {section.heading && (
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-[#001126]">{section.heading}</h2>
                  )}
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {section.productOfferings?.map((offering, idx) => (
                      <a key={idx} href={offering.link} className="group block p-6 bg-slate-50 rounded-none border-t-4 border-[#0050A0]">
                        <div className="relative aspect-video overflow-hidden mb-6">
                          <img
                            src={offering.image}
                            alt={offering.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>
                        <h3 className="text-2xl font-bold mb-3 text-[#001126] group-hover:text-[#0050A0] transition-colors">
                          {offering.title}
                        </h3>
                        <p className="text-slate-600 mb-4">{offering.description}</p>
                        <span className="inline-flex items-center text-[#0050A0] font-bold">
                          Learn more <ArrowRight className="ml-2 h-4 w-4" />
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {section.type === "cta" && (
                <div className="bg-[#0050A0] p-12 text-white text-center">
                  <h2 className="text-3xl md:text-4xl font-bold mb-8">
                    {section.ctaText || "Ready to get started?"}
                  </h2>
                  <Button className="bg-white text-[#0050A0] hover:bg-slate-100 px-10 py-6 text-lg rounded-none font-bold">
                    {section.ctaText ? "Contact us" : "Get in Touch"}
                  </Button>
                </div>
              )}
            </div>
          </section>
        ))}
      </main>
    </div>
  )
}