"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import RevealOnScroll from "./scroll-reveal"
import { useRouter } from "next/navigation"

export default function ModernAbout() {
  const router = useRouter()
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0.5])

  return (
    <section id="about-modern" className="relative py-32 overflow-hidden bg-black">
      {/* Animated clouds without background image */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div className="absolute inset-0" style={{ opacity, y }}>
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white/70 blur-xl"
              style={{
                width: `${Math.random() * 300 + 100}px`,
                height: `${Math.random() * 100 + 50}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity: 0.7 + Math.random() * 0.3,
              }}
              animate={{
                x: [0, Math.random() * 50 - 25],
                y: [0, Math.random() * 30 - 15],
              }}
              transition={{
                duration: 10 + Math.random() * 20,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            />
          ))}
        </motion.div>

        {/* Flying particles */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 5 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${-20 + Math.random() * 10}%`,
                top: `${10 + Math.random() * 60}%`,
              }}
              animate={{
                x: ["0vw", "120vw"],
                y: [0, Math.random() * 100 - 50],
              }}
              transition={{
                duration: 20 + Math.random() * 10,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 2,
                ease: "linear",
              }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-white/80"
              >
                <path
                  d="M22 2L15 9M22 2L17 2M22 2L22 7M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="container relative z-10" ref={containerRef}>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <RevealOnScroll direction="left">
            <div className="text-white">
              <div className="text-sm uppercase tracking-widest mb-2 font-medium">Triadic Marketing</div>
              <h2 className="text-5xl md:text-7xl font-bold mb-8 font-display">About Us</h2>
              <p className="text-white/80 text-lg mb-6">
                We are a team of creative minds, strategic thinkers, and digital innovators passionate about helping
                brands reach their full potential in the digital landscape.
              </p>
              <p className="text-white/80 text-lg mb-8">
                Our approach combines cutting-edge technology with creative storytelling to create memorable digital
                experiences that drive results and build lasting connections with your audience.
              </p>

              <div className="flex flex-wrap gap-4">
                <button
                  className="bg-white text-[var(--primary-color)] px-6 py-3 rounded-full font-medium hover:bg-opacity-90 transition-all"
                  onClick={() => router.push("/services")}
                >
                  Our Services
                </button>
                <button
                  className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-full font-medium hover:bg-white/10 transition-all"
                  onClick={() => router.push("/contact")}
                >
                  Contact Us
                </button>
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll direction="right" delay={0.3}>
            <div className="relative h-[500px] flex items-center justify-center">
              {/* 3D Astronaut */}
              <motion.div
                className="relative z-20"
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
              >
                <img src="/ast.png" alt="Astronaut floating in space" className="h-[400px] w-auto object-contain" />
              </motion.div>

              {/* Floating elements */}
              {Array.from({ length: 6 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-full bg-white/30 backdrop-blur-md"
                  style={{
                    width: `${Math.random() * 60 + 20}px`,
                    height: `${Math.random() * 60 + 20}px`,
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [0, Math.random() * 50 - 25],
                    x: [0, Math.random() * 50 - 25],
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 10 + Math.random() * 10,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                    ease: "easeInOut",
                  }}
                />
              ))}

              {/* Glow effect */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] h-[100px] bg-[var(--accent-color)]/30 rounded-full blur-3xl" />
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  )
}
