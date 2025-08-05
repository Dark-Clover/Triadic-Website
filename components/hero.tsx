"use client"

import { useEffect, useRef, useState } from "react"
import { useRouter } from "next/navigation"
import ScrollVelocity from "./scroll-velocity"
import EnhancedButton from "./enhanced-button"
import { motion } from "framer-motion"

export default function Hero() {
  const router = useRouter()
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const [isMounted, setIsMounted] = useState(false)

  // Only run animations after component is mounted
  useEffect(() => {
    setIsMounted(true)
    return () => setIsMounted(false)
  }, [])

  // Particle animation in background - optimized
  useEffect(() => {
    if (!isMounted) return

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Check if device is mobile for performance optimization
    const isMobile = window.innerWidth < 768

    // Reduce particle count for mobile
    const particleCount = isMobile ? 10 : Math.floor(window.innerWidth / 100)

    let particles: {
      x: number
      y: number
      radius: number
      color: string
      vx: number
      vy: number
    }[] = []

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initParticles()
    }

    const initParticles = () => {
      particles = []

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 1.5 + 0.5, // Smaller particles
          color: `rgba(147, 51, 234, ${Math.random() * 0.12})`, // Updated color with lower opacity
          vx: Math.random() * 0.3 - 0.15, // Slower movement
          vy: Math.random() * 0.3 - 0.15, // Slower movement
        })
      }
    }

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        ctx.fillStyle = particle.color
        ctx.fill()

        // Update position
        particle.x += particle.vx
        particle.y += particle.vy

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1
      })

      // Draw connections - only if not mobile
      if (!isMobile) {
        particles.forEach((particle, i) => {
          // Limit connections to improve performance
          const connectionsLimit = 3
          let connections = 0

          for (let j = i + 1; j < particles.length && connections < connectionsLimit; j++) {
            const dx = particle.x - particles[j].x
            const dy = particle.y - particles[j].y
            const distance = Math.sqrt(dx * dx)

            if (distance < 80) {
              // Reduced connection distance
              ctx.beginPath()
              ctx.moveTo(particle.x, particle.y)
              ctx.lineTo(particles[j].x, particles[j].y)
              ctx.strokeStyle = `rgba(147, 51, 234, ${0.04 * (1 - distance / 80)})`
              ctx.stroke()
              connections++
            }
          }
        })
      }

      requestAnimationFrame(drawParticles)
    }

    window.addEventListener("resize", resize)
    resize()
    drawParticles()

    return () => {
      window.removeEventListener("resize", resize)
    }
  }, [isMounted])

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
            texts={["TRIADIC MEDIA", "DIGITAL EXCELLENCE", "INNOVATIVE DESIGN", "STRATEGIC MARKETING"]}
            velocity={40}
            className="font-bold text-9xl md:text-9xl lg:text-9xl tracking-wider text-shadow-lg"
            textColor="text-zinc-300/40"
            numCopies={6}
            velocityMapping={{ input: [0, 1000], output: [0, 5] }}
            scrollContainerRef={typeof window !== "undefined" ? window : undefined}
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

      <div className="container relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Digital Marketing <span className="text-gradient">Excellence</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto px-4 sm:px-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Elevate your digital presence with our strategic marketing solutions tailored for your business growth.
          </motion.p>
        </div>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <EnhancedButton
            variant="primary"
            glitch={true}
            className="px-6 py-3 text-sm sm:text-base"
            onClick={() => router.push("/contact")}
          >
            Book a Consultation
          </EnhancedButton>

          <EnhancedButton
            variant="outline"
            magneticPull={true}
            className="px-6 py-3 text-sm sm:text-base"
            onClick={() => router.push("/services")}
          >
            Our Services
          </EnhancedButton>
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
