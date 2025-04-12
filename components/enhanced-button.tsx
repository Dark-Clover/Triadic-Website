"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface EnhancedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  variant?: "primary" | "secondary" | "outline"
  glowColor?: string
  magneticPull?: boolean
  glitch?: boolean
  className?: string
}

export default function EnhancedButton({
  children,
  variant = "primary",
  glowColor,
  magneticPull = true,
  glitch = false,
  className,
  ...props
}: EnhancedButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)
  const [glitchActive, setGlitchActive] = useState(false)

  // Set default glow color based on variant
  if (!glowColor) {
    glowColor =
      variant === "primary"
        ? "var(--accent-color)"
        : variant === "secondary"
          ? "var(--primary-color)"
          : "var(--accent-color)"
  }

  // For magnetic effect
  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current || !magneticPull) return

    const rect = buttonRef.current.getBoundingClientRect()

    // Calculate center of button
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    // Calculate distance from cursor to center
    const distanceX = e.clientX - centerX
    const distanceY = e.clientY - centerY

    // Set the pull amount (adjust the division for stronger/weaker effect)
    setPosition({
      x: distanceX / 8,
      y: distanceY / 8,
    })
  }

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 })
    setIsHovered(false)
  }

  // For glitch effect
  useEffect(() => {
    if (glitch && isHovered) {
      const interval = setInterval(() => {
        setGlitchActive(true)
        setTimeout(() => setGlitchActive(false), 100)
      }, 2000)

      return () => clearInterval(interval)
    }
  }, [glitch, isHovered])

  // Determine variant styles
  const getVariantStyles = () => {
    switch (variant) {
      case "primary":
        return "bg-gradient-to-br from-[var(--primary-color)] to-[var(--accent-color)] text-white"
      case "secondary":
        return "bg-gradient-to-br from-[var(--secondary-color)] to-black text-white"
      case "outline":
        return "bg-transparent border-2 border-[var(--accent-color)] text-[var(--accent-color)] hover:bg-[var(--accent-color)]/10"
      default:
        return "bg-gradient-to-br from-[var(--primary-color)] to-[var(--accent-color)] text-white"
    }
  }

  // Create the glitch clip paths
  const glitchVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.1,
      },
    },
  }

  return (
    <motion.button
      ref={buttonRef}
      className={cn(
        "relative px-8 py-3 rounded-lg font-medium overflow-hidden transition-all duration-300",
        "transform hover:scale-[1.02] active:scale-[0.98]",
        getVariantStyles(),
        isHovered && "shadow-lg",
        className,
      )}
      animate={{
        x: position.x,
        y: position.y,
      }}
      transition={{ type: "spring", stiffness: 150, damping: 15 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {/* Glow effect - toned down */}
      {isHovered && (
        <motion.div
          className="absolute inset-0 rounded-lg blur-xl opacity-50"
          style={{
            background: glowColor,
            zIndex: -1,
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.4, scale: 1.2 }}
          exit={{ opacity: 0, scale: 0.8 }}
        />
      )}

      {/* Glitch effect layers */}
      {glitch && glitchActive && (
        <>
          <motion.span
            className="absolute inset-0 flex items-center justify-center text-red-500"
            style={{ clipPath: "polygon(0 0, 100% 0, 100% 45%, 0 45%)", transform: "translate(-5px, 0)" }}
            variants={glitchVariants}
            initial="hidden"
            animate="visible"
          >
            {children}
          </motion.span>
          <motion.span
            className="absolute inset-0 flex items-center justify-center text-blue-500"
            style={{ clipPath: "polygon(0 80%, 100% 20%, 100% 100%, 0 100%)", transform: "translate(5px, 0)" }}
            variants={glitchVariants}
            initial="hidden"
            animate="visible"
          >
            {children}
          </motion.span>
        </>
      )}

      {/* Hover light effect */}
      {isHovered && (
        <motion.div
          className="absolute inset-0 opacity-20"
          initial={{ x: "-100%", opacity: 0.1 }}
          animate={{ x: "200%", opacity: 0.2 }}
          transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, repeatType: "loop" }}
          style={{
            background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)",
            width: "50%",
            zIndex: 1,
          }}
        />
      )}

      {/* Main content */}
      <span className="relative z-10">{children}</span>
    </motion.button>
  )
}
