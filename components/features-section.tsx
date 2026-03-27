"use client"
import { motion } from "framer-motion"
import { Globe, Layers, BarChart3, Radio, Wifi, Shield } from "lucide-react"

export default function FeaturesSection() {
  const features = [
    {
      icon: <Globe className="h-6 w-6 text-blue-600" />,
      title: "Global OEM Integration",
      description:
        "We partner with the world's leading OEM technology vendors to design, certify, and deploy IoT hardware built for industrial environments on every continent.",
    },
    {
      icon: <Layers className="h-6 w-6 text-blue-600" />,
      title: "End-to-End SI Delivery",
      description:
        "Our global SI teams manage the full project lifecycle - requirements, multi-vendor integration, commissioning, and ongoing support - delivered on time, anywhere in the world.",
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-blue-600" />,
      title: "AI-Powered Analytics",
      description:
        "Transform raw telemetry into actionable intelligence. Predictive maintenance, anomaly detection, and real-time operational insights that help you act before problems occur.",
    },
    {
      icon: <Radio className="h-6 w-6 text-blue-600" />,
      title: "Private 5G Networks",
      description:
        "Dedicated high-speed connectivity with ultra-low latency and robust security. Purpose-built for mission-critical industrial and enterprise environments.",
    },
    {
      icon: <Wifi className="h-6 w-6 text-blue-600" />,
      title: "IoT Connectivity",
      description:
        "Connect every device, sensor, and system into a unified intelligent ecosystem. Real-time visibility and control across your entire operation from a single platform.",
    },
    {
      icon: <Shield className="h-6 w-6 text-blue-600" />,
      title: "Secure & Compliant",
      description:
        "Enterprise-grade security, fine-grained access controls, and audit-ready compliance built into every deployment, from edge device to cloud platform.",
    },
  ]

  return (
    <section id="features" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Capabilities</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              As a certified global OEM partner and international Systems Integrator, we own
              the full value chain. From intelligent edge hardware to AI-powered analytics.
            </p>
          </motion.div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-slate-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}