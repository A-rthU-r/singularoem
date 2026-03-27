"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Pickaxe, Radio, Factory, Building2, Zap, HeartPulse } from "lucide-react"

export default function UseCasesSection() {
  const [activeTab, setActiveTab] = useState("mining")

  const useCases = {
    mining: {
      icon: <Pickaxe className="h-5 w-5" />,
      title: "Mining",
      description:
        "Optimise operations with IoT-driven automation and AI analytics. Our SI teams deploy OEM-certified hardware and private 5G infrastructure to give you real-time insights into equipment health, worker safety, and resource management.",
      benefits: [
        "Real-time equipment health monitoring and predictive maintenance",
        "Worker safety tracking and automated hazard alerts",
        "Centralised operational dashboard for full site visibility",
        "Reduced downtime and improved extraction efficiency",
      ],
      image: "/images/mining.jpg",
    },
    telecom: {
      icon: <Radio className="h-5 w-5" />,
      title: "Telecommunications",
      description:
        "Enhance network reliability and security with intelligent monitoring and automation. We partner with global OEMs to reduce operational costs, secure cell sites, and deploy private 5G networks built for always-on performance.",
      benefits: [
        "Intelligent network monitoring and automated fault detection",
        "OEM-integrated private 5G with smart traffic management",
        "Automated cell site security and access control",
        "Operational cost reduction through AI-assisted network management",
      ],
      image: "/images/telecom.jpg",
    },
    manufacturing: {
      icon: <Factory className="h-5 w-5" />,
      title: "Manufacturing",
      description:
        "Streamline production with digital twins and smart automation. Our SI teams integrate OEM hardware and AI analytics to detect machinery issues before failures occur and optimise workflows in real time.",
      benefits: [
        "Digital twin technology for real-time production simulation",
        "Predictive fault detection before machinery failure",
        "Smart workflow optimisation and dynamic line balancing",
        "Connected systems that eliminate costly inefficiencies",
      ],
      image: "/images/manufacturing.jpg",
    },
    "smart-cities": {
      icon: <Building2 className="h-5 w-5" />,
      title: "Smart Cities",
      description:
        "Create smarter, more sustainable urban environments with intelligent infrastructure. As a global SI, we integrate OEM hardware, private 5G mesh networks, and AI analytics to build city ecosystems that work at any scale.",
      benefits: [
        "Adaptive smart lighting and AI-assisted traffic management",
        "Real-time public safety monitoring and emergency response",
        "Intelligent waste management and environmental monitoring",
        "Sustainable urban infrastructure for growing populations",
      ],
      image: "/images/smart-cities.jpg",
    },
    utilities: {
      icon: <Zap className="h-5 w-5" />,
      title: "Utilities & Energy",
      description:
        "Modernise energy distribution with advanced IoT and private 5G networks. Monitor power grids, reduce energy waste, and detect faults in real time for seamless and cost-effective utility management.",
      benefits: [
        "Real-time power grid monitoring and AI-assisted fault detection",
        "Energy consumption optimisation and waste reduction",
        "OEM-integrated private 5G for remote infrastructure management",
        "Cost-effective and reliable utility operations at any scale",
      ],
      image: "/images/utilities.jpg",
    },
    healthcare: {
      icon: <HeartPulse className="h-5 w-5" />,
      title: "Healthcare",
      description:
        "Revolutionise patient care with real-time health monitoring, predictive analytics, and connected medical devices. Enable hospitals and clinics to improve diagnostics, streamline operations, and enhance patient outcomes.",
      benefits: [
        "Real-time remote patient monitoring with AI-powered early-warning alerts",
        "Predictive analytics for improved diagnostics and clinical decisions",
        "Connected medical device integration via OEM-certified gateways",
        "Streamlined hospital operations and intelligent resource planning",
      ],
      image: "/images/healthcare.jpg",
    },
  }

  return (
    <section id="use-cases" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Industries We Serve</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              As an international Systems Integrator and global OEM partner, we deliver IoT, AI,
              and private 5G solutions for the industries that run the world.
            </p>
          </motion.div>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {Object.entries(useCases).map(([key, useCase]) => (
            <Button
              key={key}
              variant={activeTab === key ? "default" : "outline"}
              className={`flex items-center gap-2 ${
                activeTab === key
                  ? "bg-[#0050A0] hover:bg-[#003d80]"
                  : "border-slate-300"
              }`}
              onClick={() => setActiveTab(key)}
            >
              <span className={activeTab === key ? "text-white" : "text-slate-700"}>
                {useCase.icon}
              </span>
              <span>{useCase.title}</span>
            </Button>
          ))}
        </div>

        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-lg"
        >
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-8 lg:p-12">
              <h3 className="text-2xl font-bold mb-4">{useCases[activeTab].title}</h3>
              <p className="text-slate-600 mb-6">{useCases[activeTab].description}</p>

              <h4 className="font-semibold text-lg mb-3">Key Benefits:</h4>
              <ul className="space-y-2 mb-8">
                {useCases[activeTab].benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <div className="mr-2 mt-1 text-[#0050A0]">
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
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>

              <a
                href="https://share-eu1.hsforms.com/1fZx1K1zdS-iMJJclshb99w2ewkpq"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-2.5 text-sm font-semibold text-white bg-[#0050A0] hover:bg-[#003d80] transition-colors"
              >
                Get In Touch
              </a>
            </div>
            <div className="lg:w-1/2 bg-slate-100 flex items-center justify-center p-8">
              <img
                src={useCases[activeTab].image || "/placeholder.svg"}
                alt={`${useCases[activeTab].title} illustration`}
                className="rounded-lg shadow-md max-w-full h-auto"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}