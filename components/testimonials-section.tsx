"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { motion } from "framer-motion"

const ITEMS = [
  {
    date: "Mar 10, 2025",
    label: "Case study",
    title: "Deploying Private 5G Across a Multi-Site Mining Operation in South Africa",
    description:
      "Discover how The Singular designed and deployed a private 5G network across three mine sites, enabling real-time equipment telemetry and reducing unplanned downtime by 34%.",
    image: "/images/mining.jpg",
  },
  {
    date: "Jan 22, 2025",
    label: "Case study",
    title: "IoT-Driven Smart City Infrastructure for a Rapidly Growing African Metropolis",
    description:
      "Explore how our SI team integrated OEM sensor networks, adaptive traffic management, and environmental monitoring across 200km² of urban infrastructure.",
    image: "/images/smart-cities.jpg",
  },
  {
    date: "Nov 14, 2024",
    label: "Case study",
    title: "Transforming Telecom Cell Site Security with Intelligent IoT Monitoring",
    description:
      "How we partnered with a leading African telco to automate cell site access control, reducing unauthorized entry incidents by 91% across 1,200 sites.",
    image: "/images/telecom.jpg",
  },
  {
    date: "Sep 05, 2024",
    label: "Case study",
    title: "Digital Twin Implementation in a High-Volume Manufacturing Facility",
    description:
      "A global manufacturer reduced production line stoppages by 28% after The Singular deployed a live digital twin platform integrated with their existing OEM automation stack.",
    image: "/images/manufacturing.jpg",
  },
  {
    date: "Jul 18, 2024",
    label: "Case study",
    title: "Remote Patient Monitoring at Scale Across Rural Healthcare Clinics",
    description:
      "Our IoT and private 5G platform enabled real-time vital sign monitoring for over 4,000 patients across 60 rural clinics, improving early intervention rates significantly.",
    image: "/images/healthcare.jpg",
  },
]

const N = ITEMS.length
const CARD_WIDTH = 44   // % of container per card
const SIDE_GAP = (100 - CARD_WIDTH) / 2  // centres the active card

export default function CaseStudiesSection() {
  // We keep a "real" index that grows/shrinks freely — no bounds
  // The visual position is just index * CARD_WIDTH
  const [index, setIndex] = useState(N)
  const [animated, setAnimated] = useState(true)
  const [progress, setProgress] = useState(0)
  const progressRef = useRef(0)
  const rafRef = useRef<number | null>(null)
  const trackRef = useRef<HTMLDivElement>(null)

  // Logical index (0..N-1) for dots
  const logical = ((index % N) + N) % N

  // Slide in a direction — always works, no guard
  const slide = useCallback((dir: 1 | -1) => {
    setAnimated(true)
    setIndex(i => i + dir)
    setProgress(0)
    progressRef.current = 0
  }, [])

  // After CSS transition ends, silently snap if we've drifted far from 0
  // This prevents translateX growing indefinitely
  const handleTransitionEnd = useCallback(() => {
    setAnimated(false)
    setIndex(i => {
      // Keep within the middle copy (N to 2N-1) so left/right cards always exist
      let snapped = i
      while (snapped < N)       snapped += N
      while (snapped >= N * 2)  snapped -= N
      return snapped
    })
    requestAnimationFrame(() => setAnimated(true))
  }, [])

  // Auto-advance timer — completely independent from slide animation
  useEffect(() => {
    progressRef.current = 0
    setProgress(0)
    const start = performance.now()

    const tick = (now: number) => {
      const pct = Math.min(((now - start) / 5000) * 100, 100)
      progressRef.current = pct
      setProgress(pct)
      if (pct < 100) {
        rafRef.current = requestAnimationFrame(tick)
      } else {
        slide(1)
      }
    }

    rafRef.current = requestAnimationFrame(tick)
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current) }
  }, [index, slide])

  const translateX = `calc(-${index * CARD_WIDTH}% + ${SIDE_GAP}%)`

  return (
    <section id="case-studies" className="py-20 bg-white">
      <div className="container mx-auto px-4">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Case studies</h2>
        </motion.div>

        {/* Carousel viewport */}
        <div className="overflow-hidden">
          <div
            ref={trackRef}
            className="flex"
            style={{
              transform: `translateX(${translateX})`,
              transition: animated ? "transform 0.55s cubic-bezier(0.4,0,0.2,1)" : "none",
            }}
            onTransitionEnd={handleTransitionEnd}
          >
            {[...ITEMS, ...ITEMS, ...ITEMS].map((item, i) => {
              const isCenter = i === index
              const isLeft   = i === index - 1
              const isRight  = i === index + 1
              const isSide   = isLeft || isRight

              return (
                <div
                  key={i}
                  className="flex-shrink-0 px-2"
                  style={{ width: `${CARD_WIDTH}%` }}
                >
                  {/* Image wrapper */}
                  <div
                    className={`relative overflow-hidden cursor-pointer ${isSide ? "group" : ""}`}
                    onClick={() => {
                      if (isLeft)  slide(-1)
                      if (isRight) slide(1)
                    }}
                  >
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      className={`w-full object-cover transition-opacity duration-400 ${
                        isCenter ? "opacity-100" : "opacity-50 group-hover:opacity-70"
                      }`}
                      style={{ aspectRatio: "16/9" }}
                    />

                    {/* ← arrow always visible on left side card */}
                    {isLeft && (
                      <button
                        onClick={(e) => { e.stopPropagation(); slide(-1) }}
                        className="absolute top-1/2 left-4 -translate-y-1/2 w-11 h-11 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-slate-50 transition-colors z-10"
                        aria-label="Previous"
                      >
                        <ChevronLeft size={20} className="text-slate-700" />
                      </button>
                    )}

                    {/* → arrow always visible on right side card */}
                    {isRight && (
                      <button
                        onClick={(e) => { e.stopPropagation(); slide(1) }}
                        className="absolute top-1/2 right-4 -translate-y-1/2 w-11 h-11 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-slate-50 transition-colors z-10"
                        aria-label="Next"
                        >
                        <ChevronRight size={20} className="text-slate-700" />
                      </button>
                    )}
                  </div>

                  {/* Text — only show on center and immediate neighbours */}
                  {(isCenter || isSide) && (
                    <div className="pt-4">
                      <p className="text-xs text-slate-400 mb-1.5">
                        {item.date}&nbsp;&nbsp;|&nbsp;&nbsp;{item.label}
                      </p>
                      <h3
                        className={`font-semibold leading-snug ${
                          isCenter
                            ? "text-slate-900 text-base"
                            : "text-slate-400 text-sm line-clamp-2"
                        }`}
                      >
                        {item.title}
                      </h3>
                      {isCenter && (
                        <p className="text-slate-500 text-sm leading-relaxed mt-2 line-clamp-3">
                          {item.description}
                        </p>
                      )}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* Timer progress dots */}
        <div className="flex items-center justify-center gap-2 mt-10">
          {ITEMS.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                const diff = i - logical
                setAnimated(true)
                setIndex(idx => {
                  // Keep result in middle copy range
                  const next = idx + diff
                  return next
                })
                setProgress(0)
                progressRef.current = 0
              }}
              aria-label={`Go to case study ${i + 1}`}
              className="relative h-1.5 rounded-full overflow-hidden bg-slate-300 transition-all duration-300"
              style={{ width: i === logical ? "48px" : "12px" }}
            >
              {i === logical && (
                <span
                  className="absolute inset-y-0 left-0 bg-slate-700 rounded-full"
                  style={{ width: `${progress}%` }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Mobile nav buttons */}
        <div className="flex lg:hidden justify-center gap-4 mt-6">
          <button
            onClick={() => slide(-1)}
            className="p-2 rounded-full bg-white border border-slate-300 text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft size={22} />
          </button>
          <button
            onClick={() => slide(1)}
            className="p-2 rounded-full bg-white border border-slate-300 text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="Next"
          >
            <ChevronRight size={22} />
          </button>
        </div>

      </div>
    </section>
  )
}