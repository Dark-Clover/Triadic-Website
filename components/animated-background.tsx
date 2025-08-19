"use client"

import type React from "react"
import { useRef, useEffect, useState } from "react"
import { motion } from "framer-motion"

// Reduced particle count for better performance
const PARTICLE_COUNT = 12
const PARTICLE_SIZE_RANGE = [3, 10]
const LINE_CONNECTION_DISTANCE = 120
const ANIMATION_DURATION_RANGE = [20, 30]

interface Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  color: string
  opacity: number
}

export default function AnimatedBackground({ children }: { children?: React.ReactNode }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const animationRef = useRef<number>()
  const [isMobile, setIsMobile] = useState(false)

  // Check if device is mobile for performance optimization
  useEffect(() => {
    const checkMobile = () => {
      if (typeof window !== "undefined") {
        setIsMobile(window.innerWidth < 768)
      }
    }

    checkMobile()
    if (typeof window !== "undefined") {
      window.addEventListener("resize", checkMobile)
      return () => window.removeEventListener("resize", checkMobile)
    }
  }, [])

  useEffect(() => {
    // Skip animation on mobile devices
    if (isMobile) return

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const handleResize = () => {
      if (typeof window !== "undefined") {
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
        generateParticles()
      }
    }

    const generateParticles = () => {
      particlesRef.current = []

      // Reduce particle count based on screen size
      const particleCount = typeof window !== "undefined" 
        ? Math.min(PARTICLE_COUNT, Math.floor(window.innerWidth / 150))
        : PARTICLE_COUNT

      for (let i = 0; i < particleCount; i++) {
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * (PARTICLE_SIZE_RANGE[1] - PARTICLE_SIZE_RANGE[0]) + PARTICLE_SIZE_RANGE[0],
          speedX: (Math.random() - 0.5) * 0.3, // Reduced speed
          speedY: (Math.random() - 0.5) * 0.3, // Reduced speed
          color: "var(--accent-color)",
          opacity: Math.random() * 0.2 + 0.1, // Reduced opacity
        })
      }
    }

    const animateParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update particles
      particlesRef.current.forEach((particle) => {
        // Move particle
        particle.x += particle.speedX
        particle.y += particle.speedY

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1

        // Draw particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(147, 51, 234, ${particle.opacity})` // Updated for more subdued purple
        ctx.fill()
      })

      // Draw connections - only if not too many particles
      if (particlesRef.current.length < 15) {
        ctx.lineWidth = 0.5
        for (let i = 0; i < particlesRef.current.length; i++) {
          for (let j = i + 1; j < particlesRef.current.length; j++) {
            const dx = particlesRef.current[i].x - particlesRef.current[j].x
            const dy = particlesRef.current[i].y - particlesRef.current[j].y
            const distance = Math.sqrt(dx * dx + dy * dy)

            if (distance < LINE_CONNECTION_DISTANCE) {
              ctx.beginPath()
              ctx.moveTo(particlesRef.current[i].x, particlesRef.current[i].y)
              ctx.lineTo(particlesRef.current[j].x, particlesRef.current[j].y)

              // Opacity based on distance (closer = more opaque)
              const opacity = 1 - distance / LINE_CONNECTION_DISTANCE
              ctx.strokeStyle = `rgba(147, 51, 234, ${opacity * 0.1})` // Updated for more subdued purple
              ctx.stroke()
            }
          }
        }
      }

      animationRef.current = requestAnimationFrame(animateParticles)
    }

    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize)
      handleResize()
      animateParticles()
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize)
      }
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [isMobile])

  return (
    <div className="relative w-full h-full bg-black">
      <canvas ref={canvasRef} className="absolute inset-0 -z-10 w-full h-full" />

      {/* Floating orbs - reduced for mobile and toned down */}
      <div className="absolute inset-0 -z-5 overflow-hidden pointer-events-none">
        {[...Array(isMobile ? 2 : 3)].map((_, index) => (
          <motion.div
            key={`orb-${index}`}
            className="absolute rounded-full mix-blend-screen blur-xl"
            style={{
              background: `radial-gradient(circle, rgba(147,51,234,0.4) 0%, rgba(147,51,234,0) 70%)`,
              width: `${Math.random() * 12 + 8}rem`,
              height: `${Math.random() * 12 + 8}rem`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [Math.random() * 50 - 25, Math.random() * 50 - 25],
              y: [Math.random() * 50 - 25, Math.random() * 50 - 25],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: Math.random() * 10 + 20,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {children}
    </div>
  )
}
