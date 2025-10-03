"use client"

import { useRef, useEffect, useState } from "react"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"
import ScrollVelocity from "./scroll-velocity"
import EnhancedButton from "./enhanced-button"
import Orb from "./Orb"
import Image from "next/image"

interface Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  opacity: number
}

export default function Hero() {
  const router = useRouter()
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const sectionRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<number>()
  const [isMounted, setIsMounted] = useState(false)

  // Only run animations after component is mounted
  useEffect(() => {
    setIsMounted(true)
    return () => setIsMounted(false)
  }, [])

  // Particle animation in background - optimized
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const isMobile = typeof window !== "undefined" ? window.innerWidth < 768 : false
    const particleCount = isMobile ? 10 : (typeof window !== "undefined" ? Math.floor(window.innerWidth / 100) : 20)

    const particles: Particle[] = []
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.5 + 0.2,
      })
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        particle.x += particle.speedX
        particle.y += particle.speedY

        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(147, 51, 234, ${particle.opacity})`
        ctx.fill()
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    const resize = () => {
      if (typeof window !== "undefined") {
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
      }
    }

    resize()
    animate()

    if (typeof window !== "undefined") {
      window.addEventListener("resize", resize)
      return () => {
        window.removeEventListener("resize", resize)
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current)
        }
      }
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 overflow-hidden bg-black"
    >
      <canvas ref={canvasRef} className="absolute inset-0 -z-10" />

      {/* Enhanced scroll velocity text in background - improved visibility */}
      {isMounted && (
        <div className="absolute inset-0 -z-5 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--accent-color)]/5 to-transparent"></div>
          <ScrollVelocity
            texts={["TRIADIC MEDIA", "ROI-FOCUSED", "360 DIGITAL", "STRATEGIC PARTNER"]}
            velocity={40}
            className="font-bold text-9xl md:text-9xl lg:text-9xl tracking-wider text-shadow-lg"
            textColor="text-zinc-300/40"
            numCopies={6}
            velocityMapping={{ input: [0, 1000], output: [0, 5] }}
            scrollContainerRef={sectionRef}
            parallaxStyle={{
              opacity: 0.5,
              letterSpacing: "0.05em",
              background: "linear-gradient(180deg, rgba(255,255,255,0.05) 0%, transparent 100%)",
              margin: "30px 0",
              padding: "20px 0",
            }}
          />
        </div>
      )}

      {/* Orb Component - Surrounding the content */}
      <motion.div
        className="absolute inset-0 z-5 hidden lg:block"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <div style={{ width: '100%', height: '100%', position: 'relative' }}>
          <Orb
            hoverIntensity={0.5}
            rotateOnHover={true}
            hue={0}
            forceHoverState={false}
          />
        </div>
      </motion.div>

      <div className="container relative z-10">
        <div className="text-center max-w-5xl mx-auto">

          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <span className="block text-white">Your ROI-Focused</span>
            <span className="block bg-gradient-to-r from-purple-500 via-purple-400 to-white bg-clip-text text-transparent">
              360 Digital Partner
            </span>
          </motion.h1>


          {/* Google Rating with enhanced styling */}
          <motion.div
            className="flex justify-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-6 py-4 flex items-center space-x-4">
              <Image
                src="/google.png"
                alt="Google Rating"
                width={150}
                height={45}
                className="h-8 w-auto"
              />
              <div className="text-left">
                <div className="text-white font-semibold text-sm">5.0 Rating</div>
                <div className="text-gray-300 text-xs">Based on 200+ reviews</div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <EnhancedButton
            variant="primary"
            glitch={true}
            className="px-8 py-4 text-base sm:text-lg font-semibold shadow-2xl hover:shadow-purple-500/25"
            onClick={() => router.push("/contact")}
          >
            <span className="flex items-center space-x-2">
              <span>Book a Consultation</span>
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </span>
          </EnhancedButton>

          <EnhancedButton
            variant="outline"
            magneticPull={true}
            className="px-8 py-4 text-base sm:text-lg font-semibold border-2 border-white/30 hover:border-purple-500/50 backdrop-blur-sm"
            onClick={() => router.push("/services")}
          >
            Our Services
          </EnhancedButton>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          className="flex flex-wrap justify-center items-center gap-8 mt-12 text-gray-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm">24/7 Support</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            <span className="text-sm">Free Consultation</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
            <span className="text-sm">ROI Guaranteed</span>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        className="absolute bottom-10 left-0 right-0 mx-auto w-max z-10 cursor-pointer"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 1.2,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          repeatDelay: 0.2,
        }}
        onClick={() => {
          window.scrollTo({
            top: window.innerHeight,
            behavior: "smooth",
          })
        }}
      >
        <div className="flex flex-col items-center">
          <div className="w-8 h-12 border-2 border-white/50 rounded-full flex items-start justify-center p-1 mb-2">
            <motion.div
              className="w-1.5 h-1.5 bg-white rounded-full"
              animate={{
                y: [0, 15, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
                ease: "easeInOut",
              }}
            />
          </div>
          <span className="text-white/70 text-sm font-light">Scroll Down</span>
        </div>
      </motion.div>
    </section>
  )
}
