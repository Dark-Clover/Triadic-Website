"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Star, Quote } from "lucide-react"
import { cn } from "@/lib/utils"

interface Testimonial {
  id: number
  name: string
  company: string
  image?: string
  rating: number
  text: string
}

export default function TestimonialCarousel() {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Anees Antapur",
      company: "Kingsmen Real Estate UAE",
      rating: 5,
      text: "Working with Triadic Media has been a game-changer for our real estate business. Their expertise in digital marketing and website development has helped us reach a wider audience and establish a strong online presence.",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      company: "House of Salon",
      rating: 5,
      text: "The team at Triadic Media understands our brand perfectly. They've created a cohesive digital strategy that has helped us attract new clients and retain existing ones. Their creativity and professionalism are unmatched.",
    },
    {
      id: 3,
      name: "Ahmed Hassan",
      company: "Tech Innovations",
      rating: 5,
      text: "Exceptional service from start to finish. Triadic Media helped us develop a comprehensive digital marketing strategy that has significantly increased our online visibility and lead generation.",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const touchStartX = useRef<number | null>(null)

  const startAutoplay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current)

    intervalRef.current = setInterval(() => {
      if (!isPaused) {
        setDirection(1)
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
      }
    }, 5000)
  }

  useEffect(() => {
    startAutoplay()
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [isPaused, testimonials.length])

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
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
        startAutoplay()
      } else {
        // Swipe right
        setDirection(-1)
        setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
        startAutoplay()
      }
    }

    touchStartX.current = null
    setIsPaused(false)
  }

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  return (
    <div className="relative max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
        <Quote className="h-16 w-16 text-[var(--accent-color)]/10" />
      </div>

      <div
        className="relative overflow-hidden rounded-2xl bg-gray-900 p-8 shadow-xl"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary-color)]/20 to-[var(--accent-color)]/5 rounded-2xl" />

        <div className="relative h-[350px] sm:h-[300px] md:h-[250px]">
          <AnimatePresence custom={direction} initial={false}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="absolute inset-0 flex flex-col justify-between"
            >
              <div>
                <div className="flex mb-4 justify-center sm:justify-start">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>

                <p className="text-gray-300 italic mb-6 text-base sm:text-lg text-center sm:text-left">
                  "{testimonials[currentIndex].text}"
                </p>
              </div>

              <div className="flex items-center justify-center sm:justify-start">
                <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-[var(--accent-color)]/20 flex items-center justify-center text-[var(--accent-color)] font-bold text-lg sm:text-xl">
                  {testimonials[currentIndex].name.charAt(0)}
                </div>
                <div className="ml-4">
                  <h3 className="text-white font-semibold text-center sm:text-left">
                    {testimonials[currentIndex].name}
                  </h3>
                  <p className="text-gray-400 text-sm text-center sm:text-left">{testimonials[currentIndex].company}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Pagination dots removed for cleaner mobile UI */}
      </div>
    </div>
  )
}
