"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

interface ImprovedTextRevealProps {
  text: string
  className?: string
  revealDelay?: number
  letterDelay?: number
  color?: string
  highlightColor?: string
  glitch?: boolean
}

export default function ImprovedTextReveal({
  text,
  className,
  revealDelay = 300,
  letterDelay = 100,
  color = "#9333ea", // Updated to more subdued purple
  highlightColor = "#9333ea", // Updated to more subdued purple
  glitch = true,
}: ImprovedTextRevealProps) {
  const [letters, setLetters] = useState<string[]>([])
  const [currentIndex, setCurrentIndex] = useState(-1)
  const [isComplete, setIsComplete] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    // Initialize with placeholders
    setLetters(Array(text.length).fill(""))

    // Start revealing after specified delay
    timeoutRef.current = setTimeout(() => {
      setCurrentIndex(0)
    }, revealDelay)

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [text, revealDelay])

  useEffect(() => {
    if (currentIndex < 0) return

    if (currentIndex >= text.length) {
      setIsComplete(true)
      return
    }

    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let shuffleCount = 0
    const maxShuffles = 5 // How many times to shuffle before revealing

    // Create shuffling effect for current letter
    intervalRef.current = setInterval(() => {
      setLetters((prev) => {
        const updated = [...prev]

        // If we haven't reached max shuffles, show random character
        if (shuffleCount < maxShuffles) {
          const randomChar = chars[Math.floor(Math.random() * chars.length)]
          updated[currentIndex] = randomChar
          shuffleCount++
        } else {
          // Show actual letter and move to next index
          updated[currentIndex] = text[currentIndex]
          clearInterval(intervalRef.current!)

          setTimeout(() => {
            setCurrentIndex(currentIndex + 1)
          }, letterDelay)
        }

        return updated
      })
    }, 70) // Speed of character shuffling

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [currentIndex, letterDelay, text])

  // Glitch animation for individual letters
  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3,
        type: "spring",
        stiffness: 200,
        damping: 10,
      },
    }),
    glitch: {
      opacity: [1, 0.8, 1],
      x: [0, -1, 3, 0],
      y: [0, 3, -2, 0],
      filter: ["blur(0px)", "blur(1px)", "blur(0px)"],
      transition: {
        duration: 0.3,
        repeatType: "mirror",
        repeat: 1,
      },
    },
  }

  return (
    <div className={cn("flex overflow-hidden", className)}>
      <AnimatePresence>
        {letters.map((letter, index) => (
          <motion.div
            key={`letter-${index}`}
            initial="hidden"
            animate={letters[index] ? "visible" : "hidden"}
            custom={index}
            variants={letterVariants}
            className="relative inline-block"
            style={{
              color: index <= currentIndex ? color : "transparent",
              // Highlight the current letter being revealed
              textShadow: index === currentIndex && !isComplete ? `0 0 8px ${highlightColor}` : "none",
              fontWeight: "bold",
              fontSize: "inherit",
              lineHeight: "inherit",
            }}
            whileHover={glitch && isComplete ? "glitch" : undefined}
          >
            {letter || " "}

            {/* Cursor at the current position */}
            {index === currentIndex && !isComplete && (
              <motion.span
                className="absolute h-full w-[3px] bg-current"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY }}
                style={{ left: "100%" }}
              />
            )}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}
