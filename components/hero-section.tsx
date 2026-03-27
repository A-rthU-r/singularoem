"use client"

import { useState } from "react"
import { motion } from "framer-motion"

export default function HeroSection() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section className="relative w-full h-screen min-h-[600px] max-h-[900px] overflow-hidden">

      {/* ── Background image — swap src for your own photo ── */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-bg.jpg"
          alt=""
          className="w-full h-full object-cover object-center"
        />
        {/* Dark overlay so text stays legible */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* ── Centered content ── */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-white font-bold leading-tight tracking-tight mb-6"
          style={{ fontSize: "clamp(2.4rem, 5.5vw, 4.5rem)" }}
        >
          Empowering Global Progress through
          <br />
          Advanced Digital Transformation
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className="text-white/80 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed"
        >
          Singular is a global technology powerhouse specializing in the orchestration of end-to-end IoT, Private 5G, and AI-driven ecosystems. 
          We architect the digital infrastructure that scales industries and defines the future of enterprise technology worldwide
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.28, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 items-center"
        >
          {/* Primary — Ericsson uses a bordered button that fills white on hover */}
          <a
            href="https://share-eu1.hsforms.com/1fZx1K1zdS-iMJJclshb99w2ewkpq"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="inline-flex items-center px-8 py-3.5 text-base font-semibold text-white border border-white/70 hover:bg-white hover:text-black transition-all duration-200"
          >
            Get In Touch
          </a>

          {/* Secondary — ghost text link with a play icon */}
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

      {/* ── Subtle bottom fade into page body ── */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/20 to-transparent z-10 pointer-events-none" />
    </section>
  )
}