"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { User, Instagram, Linkedin, ExternalLink, Users } from "lucide-react"
import { cn } from "@/lib/utils"
import RevealOnScroll from "./scroll-reveal"
import { useRouter } from "next/navigation"

interface TeamMember {
  name: string
  role: string
  image?: string
  bio?: string
  socialLinks?: { type: string; url: string }[]
}

export default function TeamSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const touchStartX = useRef<number | null>(null)
  const router = useRouter()

  // Team members data - only showing CEO and Founder
  const teamMembers: TeamMember[] = [
    {
      name: "Syed Ali Haider",
      role: "CEO",
      image: "/team/syed-ali-haider.png",
      socialLinks: [{ type: "instagram", url: "https://www.instagram.com/syed.ali.haider5/" }],
    },
    {
      name: "Awais Ali",
      role: "Founder",
      image: "/team/awais-ali.png",
      socialLinks: [
        { type: "instagram", url: "https://www.instagram.com/awaisalyh/" },
        { type: "linkedin", url: "https://www.linkedin.com/in/awaisali7/" },
      ],
    },
  ]

  // Auto-advance slides
  const startAutoplay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current)

    intervalRef.current = setInterval(() => {
      if (!isPaused) {
        setDirection(1)
        setCurrentIndex((prevIndex) => (prevIndex + 1) % teamMembers.length)
      }
    }, 5000)
  }

  useEffect(() => {
    startAutoplay()
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [isPaused, teamMembers.length])

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
    setIsPaused(true)
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return

    const touchEndX = e.changedTouches[0].clientX
    const diff = touchStartX.current - touchEndX

    // Swipe threshold
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        // Swipe left
        setDirection(1)
        setCurrentIndex((prevIndex) => (prevIndex + 1) % teamMembers.length)
        startAutoplay()
      } else {
        // Swipe right
        setDirection(-1)
        setCurrentIndex((prevIndex) => (prevIndex - 1 + teamMembers.length) % teamMembers.length)
        startAutoplay()
      }
    }

    touchStartX.current = null
    setIsPaused(false)
  }

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  }

  return (
    <section className="py-20 bg-black">
      <div className="container">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 text-white">
              Meet Our <span className="text-[var(--accent-color)]">Team</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">The talented professionals behind our success</p>
          </div>
        </RevealOnScroll>

        <div
          className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="relative h-[500px] sm:h-[450px] overflow-hidden rounded-2xl bg-gray-900 shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary-color)]/20 to-[var(--accent-color)]/5 rounded-2xl" />

            <AnimatePresence custom={direction} initial={false}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="absolute inset-0 flex flex-col md:flex-row p-6 md:p-8"
              >
                <div className="w-full md:w-1/2 flex items-center justify-center mb-6 md:mb-0">
                  <div className="relative w-36 h-36 sm:w-48 sm:h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-[var(--accent-color)]/20">
                    {teamMembers[currentIndex].image ? (
                      <img
                        src={teamMembers[currentIndex].image || "/placeholder.svg"}
                        alt={teamMembers[currentIndex].name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gray-800">
                        <User className="w-16 h-16 sm:w-24 sm:h-24 text-gray-600" />
                      </div>
                    )}
                  </div>
                </div>

                <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2">
                    {teamMembers[currentIndex].name}
                  </h3>
                  <p className="text-[var(--accent-color)] mb-4">{teamMembers[currentIndex].role}</p>

                  <p className="text-gray-300 mb-6 text-sm sm:text-base">
                    {teamMembers[currentIndex].bio ||
                      `${teamMembers[currentIndex].name} is a key member of our team, bringing expertise and creativity to every project at Triadic Marketing.`}
                  </p>

                  {teamMembers[currentIndex].socialLinks && (
                    <div className="flex gap-3 justify-center items-center">
                      {teamMembers[currentIndex].socialLinks.map((link, idx) => (
                        <a
                          key={idx}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-gray-800 hover:bg-[var(--accent-color)] p-3 rounded-full transition-all duration-300 text-white flex items-center justify-center w-10 h-10"
                        >
                          {link.type === "instagram" ? (
                            <Instagram size={20} />
                          ) : link.type === "linkedin" ? (
                            <Linkedin size={20} />
                          ) : link.type === "website" ? (
                            <ExternalLink size={20} />
                          ) : null}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Pagination dots removed for cleaner mobile UI */}
          </div>
        </div>

        {/* View All Team Members button */}
        <div className="flex justify-center mt-12">
          <motion.button
            onClick={() => router.push("/team")}
            className="flex items-center gap-2 bg-gradient-to-r from-[var(--primary-color)] to-[var(--accent-color)] text-white px-6 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Users size={18} />
            View All Team Members
          </motion.button>
        </div>
      </div>
    </section>
  )
}
