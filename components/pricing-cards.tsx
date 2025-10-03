"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { Check, Star } from "lucide-react"
import { useRouter } from "next/navigation"
import { cn } from "@/lib/utils"

// Import TrueFocus at the top of the file
import TrueFocus from "./true-focus"

interface PricingFeature {
  text: string
  included: boolean
}

interface PricingTier {
  name: string
  popular?: boolean
  description?: string
  features: PricingFeature[]
  buttonText: string
}

export default function PricingCards() {
  const router = useRouter()

  const pricingTiers: PricingTier[] = []

  return (
    <section className="py-12 md:py-20 bg-black">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-10 md:mb-16">
          <div className="mb-4 flex justify-center">
            <TrueFocus
              sentence="Your Brand, Elevated, Let’s Talk"
              manualMode={false}
              blurAmount={5}
              borderColor="var(--accent-color)"
              glowColor="rgba(147, 51, 234, 0.6)"
              animationDuration={2}
              pauseBetweenAnimations={1}
              className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter"
              highlightWords={{ Package: "var(--accent-color)" }}
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {pricingTiers.map((tier, index) => (
            <TiltCard key={index} tier={tier} onClick={() => router.push("/contact#contact-form")} />
          ))}
        </div>
      </div>
    </section>
  )
}

function TiltCard({ tier, onClick }: { tier: PricingTier; onClick: () => void }) {
  const [rotation, setRotation] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateX = (y - centerY) / 20
    const rotateY = (centerX - x) / 20

    setRotation({ x: rotateX, y: rotateY })
  }

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 })
    setIsHovered(false)
  }

  return (
    <motion.div
      ref={cardRef}
      className={cn(
        "relative h-full rounded-2xl overflow-hidden transition-all duration-300",
        "backdrop-blur-sm border border-gray-800",
        tier.popular ? "bg-[var(--primary-color)]/30" : "bg-gray-900/50",
        isHovered && "shadow-xl shadow-[var(--accent-color)]/20",
      )}
      style={{
        transformStyle: "preserve-3d",
      }}
      animate={{
        rotateX: rotation.x,
        rotateY: rotation.y,
        scale: isHovered ? 1.03 : 1,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      {/* Shine effect */}
      {isHovered && (
        <motion.div
          className="absolute inset-0 w-full h-full"
          style={{
            background: "linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent)",
            zIndex: 1,
          }}
          initial={{ left: "-100%" }}
          animate={{ left: "200%" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
      )}

      {/* Popular badge (hidden on mobile) */}
      {tier.popular && (
        <div className="absolute top-0 right-0 bg-[var(--accent-color)] text-white px-4 py-1 rounded-bl-lg rounded-tr-lg z-10 hidden sm:flex items-center gap-1">
          <Star className="h-4 w-4 fill-white" />
          <span className="text-sm font-medium">Most Popular</span>
        </div>
      )}

      <div className="p-8 flex flex-col h-full">
        <div className="mb-6">
          <h3 className={cn("text-2xl font-bold mb-2", tier.popular ? "text-white" : "text-white")}>{tier.name}</h3>
          <p className="text-gray-400 text-sm">Contact us for custom pricing</p>
          {tier.description && <p className="text-gray-400 text-sm mt-2">{tier.description}</p>}
        </div>

        <div className="space-y-4 mb-8 flex-grow">
          {tier.features.map((feature, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <div
                className={cn(
                  "rounded-full p-1 flex-shrink-0 mt-0.5",
                  tier.popular ? "bg-[var(--accent-color)]/20" : "bg-[var(--accent-color)]/10",
                )}
              >
                <Check
                  className={cn("h-4 w-4", tier.popular ? "text-[var(--accent-color)]" : "text-[var(--accent-color)]")}
                />
              </div>
              <span className={cn("text-sm", tier.popular ? "text-gray-200" : "text-gray-300")}>{feature.text}</span>
            </div>
          ))}
        </div>

        <button
          onClick={onClick}
          className={cn(
            "w-full py-3 px-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]",
            tier.popular
              ? "bg-[var(--accent-color)] text-white hover:bg-[var(--accent-color)]/90"
              : "bg-gray-800 text-white hover:bg-gray-700",
          )}
        >
          {tier.buttonText}
        </button>
      </div>
    </motion.div>
  )
}
