"use client"

import { motion } from "framer-motion"

const PARTNERS = [
  // South Africa
  { name: "Vodacom", category: "Telecommunications" },
  { name: "Eskom", category: "Energy" },
  { name: "Anglo American", category: "Mining" },
  { name: "Transnet", category: "Logistics" },
  { name: "Hytera", category: "Communications" },
  { name: "Impala Platinum", category: "Mining" },
  { name: "IoT.nxt", category: "IoT Platform" },
  // Zimbabwe
  { name: "Econet Wireless", category: "Telecommunications" },
  { name: "Zimplats", category: "Mining" },
  { name: "ZESA Holdings", category: "Energy" },
  { name: "Hwange Colliery", category: "Mining" },
  // Namibia
  { name: "MTC Namibia", category: "Telecommunications" },
]

const CREDENTIALS = [
  { label: "DSI Recognised", sub: "Dept. of Science & Innovation — SA" },
  { label: "IEEE Member", sub: "Institute of Electrical & Electronics Engineers" },
  { label: "Proprietary 5G IP", sub: "In-House R&D & Patents" },
  { label: "3GPP Compliant", sub: "International 5G Standards Body" },
  { label: "B-BBEE Level 1", sub: "South Africa" },
]

const STATS = [
  { value: "20+", label: "Technology Partners" },
  { value: "10+", label: "Years R&D Experience" },
  { value: "20+", label: "Countries of Operation" },
  { value: "15+", label: "Years SI Experience" },
]

export default function PricingSection() {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs font-semibold text-[#0050A0] tracking-widest uppercase mb-3">
              Technology & R&D
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Proprietary Technology Built from the Ground Up
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              The Singular operates its own R&D division — designing and manufacturing our own 5G stack 
              from PCB to radio, and integrating best-in-class technology partners to deliver complete, 
              end-to-end solutions worldwide.
            </p>
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-px bg-slate-200 border border-slate-200 mb-16"
        >
          {STATS.map((stat, i) => (
            <div key={i} className="bg-white px-8 py-8 text-center">
              <p className="text-4xl font-bold text-[#0050A0] mb-1">{stat.value}</p>
              <p className="text-sm text-slate-500">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Partner grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16"
        >
          <p className="text-xs font-semibold text-slate-400 tracking-widest uppercase mb-8 text-center">
            Technology Partners
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-px bg-slate-100 border border-slate-100">
            {PARTNERS.map((partner, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
                className="bg-white px-4 py-6 flex flex-col items-center justify-center text-center group hover:bg-slate-50 transition-colors"
              >
                {/* Replace with <img src={partner.logo} className="h-8 object-contain" /> */}
                <div className="h-8 flex items-center justify-center mb-2">
                  <span className="text-sm font-bold text-slate-600 group-hover:text-[#0050A0] transition-colors">
                    {partner.name}
                  </span>
                </div>
                <span className="text-[10px] text-slate-400 tracking-wide">{partner.category}</span>
              </motion.div>
            ))}
          </div>
          <p className="text-xs text-slate-400 text-center mt-4">
            Full partner list available on request.
          </p>
        </motion.div>

        {/* Regulatory & Memberships */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-16"
        >
          <p className="text-xs font-semibold text-slate-400 tracking-widest uppercase mb-8 text-center">
            Regulatory Approvals & Memberships
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {CREDENTIALS.map((cert, i) => (
              <div
                key={i}
                className="flex items-center gap-3 border border-slate-200 px-6 py-4 bg-white hover:border-[#0050A0] transition-colors"
              >
                <div className="w-2 h-2 rounded-full bg-[#0050A0] flex-shrink-0" />
                <div>
                  <p className="text-sm font-bold text-slate-800">{cert.label}</p>
                  <p className="text-xs text-slate-400">{cert.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}