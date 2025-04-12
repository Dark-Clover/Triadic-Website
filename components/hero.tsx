"use client"

import { useEffect, useRef, useState } from "react"
import { useRouter } from "next/navigation"
import ScrollVelocity from "./scroll-velocity"
import EnhancedButton from "./enhanced-button"
import RevealOnScroll from "./scroll-reveal"
import ImprovedTextReveal from "./improved-text-reveal"

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
            const distance = Math.sqrt(dx * dx + dy * dy)

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
    <section ref={sectionRef} className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-black">
      <canvas ref={canvasRef} className="absolute inset-0 -z-10" />

      {/* Enhanced scroll velocity text in background - improved visibility */}
      {isMounted && (
        <div className="absolute inset-0 -z-5 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--accent-color)]/5 to-transparent"></div>
          <ScrollVelocity
            texts={["TRIADIC MEDIA", "DIGITAL EXCELLENCE", "INNOVATIVE DESIGN", "STRATEGIC MARKETING"]}
            velocity={50}
            className="font-bold text-9xl md:text-9xl lg:text-9xl tracking-wider text-shadow-lg"
            textColor="text-zinc-300/40"
            numCopies={6}
            velocityMapping={{ input: [0, 1000], output: [0, 5] }}
            scrollContainerRef={typeof window !== "undefined" ? window : undefined}
            parallaxStyle={{ 
              opacity: 0.5, 
              letterSpacing: '0.05em',
              background: 'linear-gradient(180deg, rgba(255,255,255,0.05) 0%, transparent 100%)',
              margin: '30px 0',
              padding: '20px 0'
            }}
          />
        </div>
      )}

      <div className="container relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <RevealOnScroll direction="left" duration={0.8}>
            <div className="flex flex-col gap-6">
              <div className="inline-block bg-[var(--primary-color)]/20 px-4 py-2 rounded-full text-[var(--accent-color)] font-medium text-sm">
                Digital Marketing Excellence
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter font-display text-white">
                Elevate Your <span className="text-gradient">Digital</span> Presence
              </h1>

              {/* Text reveal animation */}
              <div className="h-16 font-display">
                <ImprovedTextReveal
                  text="TRIADIC"
                  className="text-5xl md:text-6xl"
                  glitch={true}
                  color="var(--accent-color)"
                  highlightColor="var(--accent-color)"
                />
              </div>

              <p className="text-lg text-gray-400 max-w-lg">
                We transform brands through strategic digital marketing, innovative design, and cutting-edge technology
                solutions.
              </p>

              <div className="flex flex-wrap gap-4 mt-8">
                <EnhancedButton variant="primary" glitch={true} onClick={() => router.push("/contact")}>
                  Join Us Today!
                </EnhancedButton>

                <EnhancedButton variant="outline" magneticPull={true} onClick={() => router.push("/services")}>
                  Our Services
                </EnhancedButton>
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll direction="right" duration={0.8} delay={0.2}>
            <div className="relative">
              <div className="relative z-10 bg-gradient-to-br from-[var(--primary-color)] to-[var(--accent-color)] rounded-2xl p-8 md:p-12 overflow-hidden shadow-[0_0_30px_rgba(var(--primary-color),0.3)]">
                <div className="relative z-10 text-white">
                  <h3 className="text-2xl font-bold mb-4">Triadic Media</h3>
                  <p className="mb-6">Your partner for digital growth and innovation</p>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                      <div className="text-3xl font-bold">250+</div>
                      <div className="text-sm opacity-80">Projects Completed</div>
                    </div>
                    <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                      <div className="text-3xl font-bold">98%</div>
                      <div className="text-sm opacity-80">Client Satisfaction</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative elements - reduced for performance and toned down */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-[var(--accent-color)] rounded-full blur-xl opacity-20" />
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-[var(--secondary-color)] rounded-full blur-xl opacity-20" />
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  )
}