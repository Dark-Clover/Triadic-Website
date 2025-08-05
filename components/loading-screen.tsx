"use client"

import { useEffect, useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true)
  const [displayText, setDisplayText] = useState("")
  const [currentLetterIndex, setCurrentLetterIndex] = useState(-1)
  const targetWord = "TRIADIC"
  const shuffleRef = useRef<NodeJS.Timeout | null>(null)
  const [animationComplete, setAnimationComplete] = useState(false)

  // Simplified loading simulation with a fixed timeout
  useEffect(() => {
    if (!loading) return

    // Instead of tracking progress, just set a timeout to complete the animation
    const timer = setTimeout(() => {
      setAnimationComplete(true)
      setTimeout(() => setLoading(false), 800) // Delay after animation completes
    }, 3000) // 3 seconds before completing

    return () => clearTimeout(timer)
  }, [loading])

  // Text shuffle animation
  useEffect(() => {
    // Start revealing letters when loading begins
    if (loading && currentLetterIndex < targetWord.length) {
      const startNextLetter = () => {
        setCurrentLetterIndex((prev) => prev + 1)
      }

      // Start with a delay for the first letter
      if (currentLetterIndex === -1) {
        setTimeout(startNextLetter, 300)
        return
      }

      // For subsequent letters, start shuffling
      const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
      let shuffleCount = 0
      const maxShuffles = 5 // How many times to shuffle before revealing

      shuffleRef.current = setInterval(() => {
        if (shuffleCount < maxShuffles) {
          // Create a temporary text with the current letter being shuffled
          let tempText = targetWord.substring(0, currentLetterIndex)
          const randomChar = chars[Math.floor(Math.random() * chars.length)]
          tempText += randomChar

          // Fill the rest with random characters
          for (let i = currentLetterIndex + 1; i < targetWord.length; i++) {
            tempText += chars[Math.floor(Math.random() * chars.length)]
          }

          setDisplayText(tempText)
          shuffleCount++
        } else {
          // Reveal the correct letter and move to the next
          clearInterval(shuffleRef.current!)

          // Update the display text with the correct letter revealed
          const revealedText = targetWord.substring(0, currentLetterIndex + 1)
          let tempText = revealedText

          // Fill the rest with random characters
          for (let i = revealedText.length; i < targetWord.length; i++) {
            tempText += chars[Math.floor(Math.random() * chars.length)]
          }

          setDisplayText(tempText)

          // Move to the next letter after a delay
          if (currentLetterIndex < targetWord.length - 1) {
            setTimeout(startNextLetter, 150)
          } else {
            // All letters revealed, set the final text
            setDisplayText(targetWord)
          }
        }
      }, 70)

      return () => {
        if (shuffleRef.current) clearInterval(shuffleRef.current)
      }
    }
  }, [loading, currentLetterIndex, targetWord])

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black"
          exit={{
            y: "-100%",
            transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] }, // Faster transition
          }}
        >
          <motion.div className="relative flex flex-col items-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            {/* Text shuffle animation */}
            <div className="mb-8 text-center" style={{ opacity: animationComplete ? 0 : 1 }}>
              <motion.div
                className="text-5xl md:text-7xl font-bold tracking-wider text-[var(--accent-color)]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {displayText}

                {/* Blinking cursor */}
                {currentLetterIndex < targetWord.length - 1 && (
                  <motion.span
                    className="inline-block w-[3px] h-10 md:h-14 bg-[var(--accent-color)] ml-1"
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY }}
                  />
                )}
              </motion.div>
              <motion.div
                className="text-sm text-gray-500 mt-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                MARKETING
              </motion.div>
            </div>

            {/* Final animation when loading completes */}
            <AnimatePresence>
              {animationComplete && (
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="text-center">
                    <motion.div
                      className="text-6xl md:text-8xl font-bold tracking-wider text-[var(--accent-color)]"
                      initial={{ filter: "blur(10px)" }}
                      animate={{ filter: "blur(0px)" }}
                      transition={{ duration: 0.5 }}
                    >
                      {targetWord}
                    </motion.div>
                    <motion.div
                      className="text-lg text-white mt-2"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2, duration: 0.3 }}
                    >
                      MARKETING
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Background animated elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {Array.from({ length: 20 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-[var(--accent-color)]/10"
                style={{
                  width: `${Math.random() * 100 + 20}px`,
                  height: `${Math.random() * 100 + 20}px`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: [0, 0.2, 0],
                  scale: [0, 1, 0.5],
                }}
                transition={{
                  duration: 3 + Math.random() * 5,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: Math.random() * 5,
                }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
