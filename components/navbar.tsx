"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown, Menu, X, Search } from "lucide-react"

const NAV_LINKS = [
  {
    label: "Our Solutions",
    href: "#",
    children: [
      { label: "IoT Connectivity",  href: "/solutions/iot-connectivity" },
      { label: "Private 5G",        href: "/solutions/private-5g" },
      { label: "AI Analytics",      href: "/solutions/ai-analytics" },
      { label: "Digital Twins",     href: "/solutions/digital-twins" },
      { label: "Edge Computing",    href: "/solutions/edge-computing" },
    ],
  },
  {
    label: "Industries",
    href: "#",
    children: [
      { label: "Mining",             href: "/industries/mining" },
      { label: "Telecommunications", href: "/industries/telecommunications" },
      { label: "Manufacturing",      href: "/industries/manufacturing" },
      { label: "Smart Cities",       href: "/industries/smart-cities" },
      { label: "Utilities & Energy", href: "/industries/utilities-energy" },
      { label: "Healthcare",         href: "/industries/healthcare" },
    ],
  },
  {
    label: "Insights",
    href: "#insights",
    children: null,
  },
  {
    label: "About Us",
    href: "#about",
    children: null,
  },
  {
    label: "Contact",
    href: "#contact",
    children: null,
  },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  return (
    <nav className="sticky top-0 z-50 w-full bg-white border-b border-slate-200">

      {/* ── Desktop bar ── */}
      <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between h-16">

        {/* Logo */}
        <Link href="/" className="flex items-center flex-shrink-0 mr-10">
          <img
            src="/images/logo.png"
            alt="The Singular"
            className="h-10 w-auto object-contain"
          />
        </Link>

        {/* Desktop nav links */}
        <div className="hidden lg:flex items-center justify-center h-full flex-1">
          {NAV_LINKS.map((link) => (
            <div
              key={link.label}
              className="relative h-full flex items-center"
              onMouseEnter={() => link.children && setActiveDropdown(link.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href={link.href}
                className="flex items-center gap-1 h-full px-4 text-sm font-medium text-slate-700 hover:text-[#0050A0] transition-colors whitespace-nowrap border-b-2 border-transparent hover:border-[#0050A0]"
              >
                {link.label}
                {link.children && (
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-200 ${activeDropdown === link.label ? "rotate-180" : ""}`}
                  />
                )}
              </Link>

              {/* Dropdown */}
              {link.children && activeDropdown === link.label && (
                <div className="absolute top-full left-0 w-52 bg-white border border-slate-200 shadow-lg py-2 z-50">
                  {link.children.map((child) => (
                    <Link
                      key={child.label}
                      href={child.href}
                      className="block px-5 py-2.5 text-sm text-slate-700 hover:bg-slate-50 hover:text-[#0050A0] transition-colors"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right-side utilities */}
        <div className="hidden lg:flex items-center gap-1 ml-4">
          <button
            aria-label="Search"
            className="p-2.5 text-slate-600 hover:text-[#0050A0] transition-colors"
          >
            <Search size={18} />
          </button>

          <div className="w-px h-5 bg-slate-200 mx-1" />

          <a
            href="https://share-eu1.hsforms.com/1fZx1K1zdS-iMJJclshb99w2ewkpq"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 px-5 py-2 text-sm font-semibold text-white bg-[#0050A0] hover:bg-[#003d80] transition-colors"
          >
            Get In Touch
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2 text-slate-700"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* ── Mobile menu ── */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200">
          <div className="max-w-[1400px] mx-auto px-6 py-4 flex flex-col divide-y divide-slate-100">
            {NAV_LINKS.map((link) => (
              <div key={link.label}>
                <Link
                  href={link.href}
                  className="flex items-center justify-between py-3.5 text-sm font-medium text-slate-700 hover:text-[#0050A0] transition-colors"
                  onClick={() => !link.children && setMobileOpen(false)}
                >
                  {link.label}
                  {link.children && <ChevronDown size={14} className="text-slate-400" />}
                </Link>
                {link.children && (
                  <div className="pl-4 pb-2 flex flex-col gap-1">
                    {link.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="py-2 text-sm text-slate-500 hover:text-[#0050A0] transition-colors"
                        onClick={() => setMobileOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <div className="pt-4">
              <a
                href="https://share-eu1.hsforms.com/1fZx1K1zdS-iMJJclshb99w2ewkpq"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-5 py-3 text-sm font-semibold text-white bg-[#0050A0] hover:bg-[#003d80] transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}