"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface TextRevealProps {
  text: string
  className?: string
  revealDuration?: number
  shuffleDuration?: number
}

export default function TextReveal({ text, className, revealDuration = 2000, shuffleDuration = 50 }: TextRevealProps) {
  const [displayText, setDisplayText] = useState("")
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let currentIndex = 0
    let intervalId: NodeJS.Timeout

    const shuffleText = () => {
      if (currentIndex >= text.length) {
        clearInterval(intervalId)
        setIsComplete(true)
        return
      }

      const revealedPart = text.substring(0, currentIndex + 1)
      const remainingLength = text.length - revealedPart.length
      let shuffledPart = ""

      for (let i = 0; i < remainingLength; i++) {
        shuffledPart += chars[Math.floor(Math.random() * chars.length)]
      }

      setDisplayText(revealedPart + shuffledPart)

      // Gradually reveal one character at a time
      const revealDelay = revealDuration / text.length
      setTimeout(() => {
        currentIndex++
      }, revealDelay)
    }

    // Start the shuffle animation
    intervalId = setInterval(shuffleText, shuffleDuration)

    return () => clearInterval(intervalId)
  }, [text, revealDuration, shuffleDuration])

  return (
    <div className={cn("font-bold", className)}>
      <motion.span
        initial={{ opacity: 0.5 }}
        animate={{ opacity: isComplete ? 1 : 0.8 }}
        transition={{ duration: 0.5 }}
      >
        {displayText}
      </motion.span>
    </div>
  )
}
