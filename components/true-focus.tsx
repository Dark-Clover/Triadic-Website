"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface TrueFocusProps {
  sentence?: string
  manualMode?: boolean
  blurAmount?: number
  borderColor?: string
  glowColor?: string
  animationDuration?: number
  pauseBetweenAnimations?: number
  className?: string
  highlightWords?: Record<string, string> // Add this new prop for highlighting specific words
}

const TrueFocus = ({
  sentence = "True Focus",
  manualMode = false,
  blurAmount = 5,
  borderColor = "green",
  glowColor = "rgba(0, 255, 0, 0.6)",
  animationDuration = 0.5,
  pauseBetweenAnimations = 1,
  className = "",
  highlightWords = { Package: "var(--accent-color)" }, // Default to highlighting "Package" in accent color
}: TrueFocusProps) => {
  const words = sentence.split(" ")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [lastActiveIndex, setLastActiveIndex] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const wordRefs = useRef<(HTMLSpanElement | null)[]>([])
  const [focusRect, setFocusRect] = useState({ x: 0, y: 0, width: 0, height: 0 })

  useEffect(() => {
    if (!manualMode) {
      const interval = setInterval(
        () => {
          setCurrentIndex((prev) => (prev + 1) % words.length)
        },
        (animationDuration + pauseBetweenAnimations) * 1000,
      )

      return () => clearInterval(interval)
    }
  }, [manualMode, animationDuration, pauseBetweenAnimations, words.length])

  useEffect(() => {
    if (currentIndex === null || currentIndex === -1) return

    if (!wordRefs.current[currentIndex] || !containerRef.current) return

    const parentRect = containerRef.current.getBoundingClientRect()
    const activeRect = wordRefs.current[currentIndex]!.getBoundingClientRect()

    setFocusRect({
      x: activeRect.left - parentRect.left,
      y: activeRect.top - parentRect.top,
      width: activeRect.width,
      height: activeRect.height,
    })
  }, [currentIndex, words.length])

  // Handlers for manual mode (hover)
  const handleMouseEnter = (index: number) => {
    if (manualMode) {
      setLastActiveIndex(index)
      setCurrentIndex(index)
    }
  }

  const handleMouseLeave = () => {
    if (manualMode) {
      setCurrentIndex(lastActiveIndex || 0)
    }
  }

  return (
    <div
      className={cn("focus-container relative flex gap-4 justify-center items-center flex-wrap", className)}
      ref={containerRef}
    >
      {words.map((word, index) => {
        const isActive = index === currentIndex
        // Check if this word should be highlighted with a custom color
        const customColor = highlightWords[word] || null

        return (
          <span
            key={index}
            ref={(el) => (wordRefs.current[index] = el)}
            className={cn(
              "focus-word relative font-black cursor-pointer transition-all",
              manualMode ? "manual" : "",
              isActive && !manualMode ? "active" : "",
            )}
            style={{
              filter: isActive ? `blur(0px)` : `blur(${blurAmount}px)`,
              transition: `filter ${animationDuration}s ease, color ${animationDuration}s ease`,
              color: customColor || "inherit", // Apply custom color if specified
            }}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            {word}
          </span>
        )
      })}

      <motion.div
        className="focus-frame absolute top-0 left-0 pointer-events-none border-2 border-[var(--accent-color)] rounded-md"
        animate={{
          x: focusRect.x,
          y: focusRect.y,
          width: focusRect.width,
          height: focusRect.height,
          opacity: currentIndex >= 0 ? 1 : 0,
        }}
        transition={{
          duration: animationDuration,
        }}
        style={{
          boxShadow: `0 0 10px ${glowColor}`,
        }}
      >
        <span
          className="corner absolute w-5 h-5 border-2 rounded-sm -top-2.5 -left-2.5"
          style={{
            borderColor: borderColor,
            borderRight: "none",
            borderBottom: "none",
            filter: `drop-shadow(0px 0px 6px ${borderColor})`,
          }}
        ></span>
        <span
          className="corner absolute w-5 h-5 border-2 rounded-sm -top-2.5 -right-2.5"
          style={{
            borderColor: borderColor,
            borderLeft: "none",
            borderBottom: "none",
            filter: `drop-shadow(0px 0px 6px ${borderColor})`,
          }}
        ></span>
        <span
          className="corner absolute w-5 h-5 border-2 rounded-sm -bottom-2.5 -left-2.5"
          style={{
            borderColor: borderColor,
            borderRight: "none",
            borderTop: "none",
            filter: `drop-shadow(0px 0px 6px ${borderColor})`,
          }}
        ></span>
        <span
          className="corner absolute w-5 h-5 border-2 rounded-sm -bottom-2.5 -right-2.5"
          style={{
            borderColor: borderColor,
            borderLeft: "none",
            borderTop: "none",
            filter: `drop-shadow(0px 0px 6px ${borderColor})`,
          }}
        ></span>
      </motion.div>
    </div>
  )
}

export default TrueFocus
