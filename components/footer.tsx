import Link from "next/link"
import { Linkedin, Youtube } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#0a0f1e] text-slate-400">

      {/* ── Become a Partner band ── */}
      <div className="border-b border-slate-800">
        <div className="max-w-[1400px] mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-white font-semibold text-lg mb-1">Become a Partner</p>
            <p className="text-sm text-slate-400 max-w-md">
              Join our global network of technology and channel partners. Together we deliver
              world-class IoT, AI, and private 5G solutions to enterprises worldwide.
            </p>
          </div>
          <a
            href="https://share-eu1.hsforms.com/1fZx1K1zdS-iMJJclshb99w2ewkpq"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 px-7 py-3 text-sm font-semibold text-white border border-white/40 hover:bg-white hover:text-[#0a0f1e] transition-all duration-200 whitespace-nowrap"
          >
            Partner With Us
          </a>
        </div>
      </div>

      {/* ── Main link columns ── */}
      <div className="max-w-[1400px] mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <img
                src="/images/logo.png"
                alt="The Singular"
                className="h-10 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-sm leading-relaxed max-w-sm mb-8">
              Global technology partner delivering end-to-end IoT, AI, and private 5G
              solutions — optimising operations and transforming industries worldwide.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" aria-label="LinkedIn" className="text-slate-500 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a
                href="https://youtu.be/1VhO4yGAjyo?si=coEKao1KmzAWmU-k"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="text-slate-500 hover:text-white transition-colors"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-xs mb-5 tracking-widest uppercase">Get In Touch</h3>
            <ul className="space-y-3 text-sm">
              <li className="leading-relaxed">
                105 Metropolis On Park<br />
                118 Pretoria Avenue, Sandton<br />
                Johannesburg, South Africa
              </li>
              <li className="pt-1">
                <a href="tel:+27832838471" className="hover:text-white transition-colors">+27 83 283 8471</a>
              </li>
              <li>
                <a href="mailto:info@theesingular.com" className="hover:text-white transition-colors">info@theesingular.com</a>
              </li>
              <li className="pt-2">
                <a
                  href="https://form.typeform.com/to/BwHCXFdK"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[#4da6ff] hover:text-white transition-colors font-medium"
                >
                  Send us a message →
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="border-t border-slate-800 mt-14 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>&copy; {currentYear} The Singular. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-6">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Use</Link>
            <Link href="#" className="hover:text-white transition-colors">Cookie Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}