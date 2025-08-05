"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { cn } from "@/lib/utils"

interface CounterItemProps {
  end: number
  suffix?: string
  label: string
  duration?: number
  delay?: number
}

function CounterItem({ end, suffix = "+", label, duration = 2, delay = 0 }: CounterItemProps) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (isInView) {
      let startTime: number | null = null
      let animationFrame: number

      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)
        setCount(Math.floor(progress * end))

        if (progress < 1) {
          animationFrame = requestAnimationFrame(step)
        }
      }

      const timeoutId = setTimeout(() => {
        animationFrame = requestAnimationFrame(step)
      }, delay * 1000)

      return () => {
        clearTimeout(timeoutId)
        if (animationFrame) cancelAnimationFrame(animationFrame)
      }
    }
  }, [isInView, end, duration, delay])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay: delay }}
      className="flex flex-col items-center"
    >
      <div className="text-5xl md:text-6xl font-bold text-[var(--accent-color)] flex items-baseline">
        <span>{count}</span>
        <span className="text-3xl ml-1">{suffix}</span>
      </div>
      <div className="mt-2 text-gray-400 text-center">{label}</div>
    </motion.div>
  )
}

export default function CounterSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const counterData = [
    { end: 83, label: "Partners and Collaborators", delay: 0 },
    { end: 25, label: "Experience Years", delay: 0.2 },
    { end: 138, label: "Happy Customers", delay: 0.4 },
    { end: 15, label: "Team Members", delay: 0.6 },
  ]

  return (
    <section className="py-20 bg-black" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div
            className={cn(
              "grid grid-cols-2 md:grid-cols-4 gap-8 p-10 rounded-2xl",
              "bg-gray-900 shadow-lg relative z-10 overflow-hidden",
            )}
          >
            {/* Background gradient blobs */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-[var(--accent-color)]/10 rounded-full blur-xl" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[var(--accent-color)]/10 rounded-full blur-xl" />

            {counterData.map((item, index) => (
              <CounterItem key={index} end={item.end} label={item.label} delay={item.delay} duration={2.5} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
