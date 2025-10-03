"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

export const RevealOnScroll = ({
  children,
  width = "100%",
  delay = 0,
  duration = 0.5,
  direction = "up", // up, down, left, right
  threshold = 0.1,
  once = true,
  className = "",
}) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, amount: threshold })

  const getInitialPosition = () => {
    switch (direction) {
      case "up":
        return { opacity: 0, y: 50 }
      case "down":
        return { opacity: 0, y: -50 }
      case "left":
        return { opacity: 0, x: 50 }
      case "right":
        return { opacity: 0, x: -50 }
      default:
        return { opacity: 0, y: 50 }
    }
  }

  const getFinalPosition = () => {
    switch (direction) {
      case "up":
      case "down":
        return { opacity: 1, y: 0 }
      case "left":
      case "right":
        return { opacity: 1, x: 0 }
      default:
        return { opacity: 1, y: 0 }
    }
  }

  return (
    <div ref={ref} style={{ width }} className={className}>
      <motion.div
        initial={getInitialPosition()}
        animate={isInView ? getFinalPosition() : getInitialPosition()}
        transition={{ duration, delay }}
      >
        {children}
      </motion.div>
    </div>
  )
}

export default RevealOnScroll
