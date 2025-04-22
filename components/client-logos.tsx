"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import GridMotion from "./grid-motion"
import RevealOnScroll from "./scroll-reveal"

export default function ClientLogos() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  // Replace the clientLogos array with this updated version that includes the milo logo

  const clientLogos = [
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/heart-of-europe-logo-WItVDvX8Zn0j1GYqETz4YGLWXWaWbV.png", // Heart of Europe
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Blacksuit%20Logo%20White-iUwLNKJ9xle9FQ4517iRmEXnu8UWNM.png", // Blacksuit
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/damac-logo-white-A5kE0sCnjS38pHcWG6iCwSh4FlpFif.png", // DAMAC
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/h2h%20brown%20logo-jzEhKhSL2ie7cMKPY4krhQtSQrium0.png", // Heart 2 Heart
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/---46nk4LWMUQk1lE9OjgmBThQjpm0khN.png", // XE Square Capital
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/final-logo-02%20white-Ga3FpZXyVK9goTV2hb1niRg0ohfVHR.png", // White logo
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/H2H%20logo%20bbrown%20heart%20only-WiSYWSKrIC8cldhk7G5XWg1YnxoTZQ.png", // Heart 2 Heart heart only
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/badge%20png-BLllCGTJqMz0XqZysJvv19KiWMooJy.png", // K shield
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo%20Final%20Kingsmen%20without%20badge-lLPhOtuAcMoDfNs9L6h5W1l2sfjN48.png", // Kingsmen Real Estate
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AK%20logo%20PNG-YH5uYeSnEcRfe5BLLkZlhL2t3CTDVc.png", // AK Technologies
    // New logos
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Reportage-Logo-ga152qJ92DXeKMGThjQewEMG62hn3e.png", // Reportage Logo
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/milo-logo-qiFluH6qC5aeqUzn6lSFJJcgKZsNRn.png", // Milo logo
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Orange-2Ud4TDQlBsRq17nVpnoK5MEcbIrMZW.png", // Organic Magic logo
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/website-16sOdkcT4AKmx9ajaD8gKRJ9wAAOHD.png", // Gold geometric logo
    // Repeat logos to fill the grid
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/heart-of-europe-logo-WItVDvX8Zn0j1GYqETz4YGLWXWaWbV.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Blacksuit%20Logo%20White-iUwLNKJ9xle9FQ4517iRmEXnu8UWNM.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/damac-logo-white-A5kE0sCnjS38pHcWG6iCwSh4FlpFif.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/h2h%20brown%20logo-jzEhKhSL2ie7cMKPY4krhQtSQrium0.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/---46nk4LWMUQk1lE9OjgmBThQjpm0khN.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/final-logo-02%20white-Ga3FpZXyVK9goTV2hb1niRg0ohfVHR.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/H2H%20logo%20bbrown%20heart%20only-WiSYWSKrIC8cldhk7G5XWg1YnxoTZQ.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/badge%20png-BLllCGTJqMz0XqZysJvv19KiWMooJy.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Reportage-Logo-ga152qJ92DXeKMGThjQewEMG62hn3e.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/milo-logo-qiFluH6qC5aeqUzn6lSFJJcgKZsNRn.png", // Milo logo
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Orange-2Ud4TDQlBsRq17nVpnoK5MEcbIrMZW.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/website-16sOdkcT4AKmx9ajaD8gKRJ9wAAOHD.png",
  ]

  return (
    <section ref={ref} className="py-20 bg-black relative overflow-hidden">
      <div className="container mb-8">
        <RevealOnScroll>
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 text-white">
              Official Marketing <span className="text-[var(--accent-color)]">Partner</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We're proud to work with these amazing brands and help them achieve their digital goals.
            </p>
          </div>
        </RevealOnScroll>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1 }}
        className="h-[50vh] md:h-[60vh] w-full"
      >
        <GridMotion items={clientLogos} gradientColor="rgba(147, 51, 234, 0.1)" />
      </motion.div>
    </section>
  )
}
