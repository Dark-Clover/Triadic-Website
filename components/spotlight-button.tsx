"use client"

import { motion } from "framer-motion"
import { useEffect, useRef } from "react"

export const SpotlightButton = ({ children, className = "" }) => {
  const btnRef = useRef(null)
  const spanRef = useRef(null)

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { width } = e.target.getBoundingClientRect()
      const offset = e.offsetX
      const left = `${(offset / width) * 100}%`

      spanRef.current.animate({ left }, { duration: 250, fill: "forwards" })
    }

    const handleMouseLeave = () => {
      spanRef.current.animate({ left: "50%" }, { duration: 100, fill: "forwards" })
    }

    btnRef.current.addEventListener("mousemove", handleMouseMove)
    btnRef.current.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      if (btnRef.current) {
        btnRef.current.removeEventListener("mousemove", handleMouseMove)
        btnRef.current.removeEventListener("mouseleave", handleMouseLeave)
      }
    }
  }, [])

  return (
    <motion.button
      whileTap={{ scale: 0.985 }}
      ref={btnRef}
      className={`relative overflow-hidden rounded-lg bg-[#4a0072] px-6 py-4 text-lg font-medium text-white ${className}`}
    >
      <span className="pointer-events-none relative z-10 mix-blend-difference">{children}</span>
      <span
        ref={spanRef}
        className="pointer-events-none absolute left-[50%] top-[50%] h-32 w-32 -translate-x-[50%] -translate-y-[50%] rounded-full bg-white"
      />
    </motion.button>
  )
}

export default SpotlightButton
