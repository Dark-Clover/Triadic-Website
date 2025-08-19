"use client"

import { useRef, useLayoutEffect, useState, useEffect } from "react"
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion"
import { cn } from "@/lib/utils"

interface ScrollVelocityProps {
  scrollContainerRef?: React.RefObject<HTMLElement> | null
  texts?: string[]
  velocity?: number
  className?: string
  damping?: number
  stiffness?: number
  numCopies?: number
  velocityMapping?: { input: number[]; output: number[] }
  parallaxClassName?: string
  scrollerClassName?: string
  parallaxStyle?: React.CSSProperties
  scrollerStyle?: React.CSSProperties
  textColor?: string
}

interface VelocityTextProps {
  children: React.ReactNode
  baseVelocity?: number
  scrollContainerRef?: React.RefObject<HTMLElement> | null
  className?: string
  damping?: number
  stiffness?: number
  numCopies?: number
  velocityMapping?: { input: number[]; output: number[] }
  parallaxClassName?: string
  scrollerClassName?: string
  parallaxStyle?: React.CSSProperties
  scrollerStyle?: React.CSSProperties
}

function useElementWidth(ref: React.RefObject<HTMLElement>) {
  const [width, setWidth] = useState(0)

  useLayoutEffect(() => {
    function updateWidth() {
      if (ref.current) {
        setWidth(ref.current.offsetWidth)
      }
    }
    updateWidth()
    if (typeof window !== "undefined") {
      window.addEventListener("resize", updateWidth)
      return () => window.removeEventListener("resize", updateWidth)
    }
  }, [ref])

  return width
}

export const ScrollVelocity: React.FC<ScrollVelocityProps> = ({
  scrollContainerRef,
  texts = [],
  velocity = 100,
  className = "",
  damping = 50,
  stiffness = 400,
  numCopies = 8,
  velocityMapping = { input: [0, 1000], output: [0, 8] },
  parallaxClassName = "parallax",
  scrollerClassName = "scroller",
  parallaxStyle,
  scrollerStyle,
  textColor = "text-white", // Default to white text
}) => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  function VelocityText({
    children,
    baseVelocity = velocity,
    scrollContainerRef,
    className = "",
    damping,
    stiffness,
    numCopies,
    velocityMapping,
    parallaxClassName,
    scrollerClassName,
    parallaxStyle,
    scrollerStyle,
  }: VelocityTextProps) {
    const baseX = useMotionValue(0)
    
    // Only use scroll container if it's properly defined and mounted
    const scrollOptions = scrollContainerRef && isMounted ? { container: scrollContainerRef } : {}
    const { scrollY } = useScroll(scrollOptions)
    const scrollVelocity = useVelocity(scrollY)
    const smoothVelocity = useSpring(scrollVelocity, {
      damping: damping ?? 50,
      stiffness: stiffness ?? 400,
    })
    const velocityFactor = useTransform(
      smoothVelocity,
      velocityMapping?.input || [0, 1000],
      velocityMapping?.output || [0, 8],
      { clamp: false },
    )

    const copyRef = useRef<HTMLSpanElement>(null)
    const copyWidth = useElementWidth(copyRef)

    function wrap(min: number, max: number, v: number) {
      const range = max - min
      const mod = (((v - min) % range) + range) % range
      return mod + min
    }

    const x = useTransform(baseX, (v) => {
      if (copyWidth === 0) return "0px"
      return `${wrap(-copyWidth, 0, v)}px`
    })

    const directionFactor = useRef(1)
    useAnimationFrame((t, delta) => {
      let moveBy = directionFactor.current * baseVelocity * (delta / 1000)

      if (velocityFactor.get() < 0) {
        directionFactor.current = -1
      } else if (velocityFactor.get() > 0) {
        directionFactor.current = 1
      }

      moveBy += directionFactor.current * moveBy * velocityFactor.get()
      baseX.set(baseX.get() + moveBy)
    })

    const spans = []
    for (let i = 0; i < numCopies; i++) {
      spans.push(
        <span className={cn(className, "velocity-text-glow")} key={i} ref={i === 0 ? copyRef : null}>
          {children}
        </span>,
      )
    }

    return (
      <div className={cn("relative overflow-hidden", parallaxClassName)} style={parallaxStyle}>
        <motion.div className={cn("flex whitespace-nowrap", scrollerClassName)} style={{ x, ...scrollerStyle }}>
          {spans}
        </motion.div>
      </div>
    )
  }

  // Don't render until mounted to prevent hydration issues
  if (!isMounted) {
    return null
  }

  return (
    <div className="w-full h-full">
      {texts.map((text, index) => (
        <VelocityText
          key={index}
          className={cn(className, textColor)} // Apply textColor class
          baseVelocity={index % 2 !== 0 ? -velocity : velocity}
          scrollContainerRef={scrollContainerRef}
          damping={damping}
          stiffness={stiffness}
          numCopies={numCopies}
          velocityMapping={velocityMapping}
          parallaxClassName={parallaxClassName}
          scrollerClassName={scrollerClassName}
          parallaxStyle={parallaxStyle}
          scrollerStyle={scrollerStyle}
        >
          {text}&nbsp;
        </VelocityText>
      ))}
    </div>
  )
}

export default ScrollVelocity
