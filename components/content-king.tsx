"use client"

import { motion } from "framer-motion"
import { Instagram } from "lucide-react"
import RevealOnScroll from "./scroll-reveal"

export default function ContentKing() {
  return (
    <section className="py-20 bg-black">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <RevealOnScroll>
            <div className="relative">
              <motion.div
                className="relative z-10 rounded-2xl overflow-hidden border-2 border-[var(--accent-color)]/20 shadow-xl shadow-[var(--accent-color)]/10"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 3,
                  ease: "easeInOut",
                }}
              >
                <img src="/syed-ali-haider-profile.png" alt="Syed Ali Haider" className="w-full h-auto rounded-2xl" />
              </motion.div>

              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-gradient-to-br from-[var(--primary-color)] to-[var(--accent-color)] opacity-30 blur-xl z-0"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 rounded-full bg-gradient-to-br from-[var(--accent-color)] to-[var(--primary-color)] opacity-20 blur-xl z-0"></div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.2}>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6 text-white">
                Content is <span className="text-[var(--accent-color)]">King</span>
              </h2>
              <p className="text-gray-300 mb-8 text-lg">
                In today's digital landscape, compelling content is the cornerstone of effective marketing. At Triadic
                Media, we craft engaging, authentic content that resonates with your audience and drives meaningful
                engagement.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
                  <h3 className="text-xl font-bold text-white mb-3">Strategic Content</h3>
                  <p className="text-gray-400">
                    We develop content strategies aligned with your business goals and audience needs.
                  </p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
                  <h3 className="text-xl font-bold text-white mb-3">Multi-Channel Approach</h3>
                  <p className="text-gray-400">
                    Our content is optimized for various platforms to maximize reach and engagement.
                  </p>
                </div>
              </div>

              <div className="mt-8 flex items-center gap-3">
                <a
                  href="https://www.instagram.com/triadicmarketing/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] px-4 py-2 rounded-full hover:opacity-90 transition-opacity"
                >
                  <Instagram size={18} />
                  <span>Follow on Instagram</span>
                </a>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  )
}
