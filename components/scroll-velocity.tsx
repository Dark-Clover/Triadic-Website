"use client"

import { useRef, useLayoutEffect, useState } from "react"
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

function useElementWidth(ref) {
  const [width, setWidth] = useState(0)

  useLayoutEffect(() => {
    function updateWidth() {
      if (ref.current) {
        setWidth(ref.current.offsetWidth)
      }
    }
    updateWidth()
    window.addEventListener("resize", updateWidth)
    return () => window.removeEventListener("resize", updateWidth)
  }, [ref])

  return width
}

export const ScrollVelocity = ({
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
  }) {
    const baseX = useMotionValue(0)
    const scrollOptions = scrollContainerRef ? { container: scrollContainerRef } : {}
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

    const copyRef = useRef(null)
    const copyWidth = useElementWidth(copyRef)

    function wrap(min, max, v) {
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
        <span 
          className={cn(className, textColor, "velocity-text-glow")} 
          key={i} 
          ref={i === 0 ? copyRef : null}
          style={{ 
            textShadow: "0 0 10px rgba(255, 255, 255, 0.7), 0 0 20px rgba(255, 255, 255, 0.5)",
            fontWeight: 900,
            letterSpacing: "0.05em"
          }}
        >
          {children}
        </span>,
      )
    }

    return (
      <div className={cn("relative overflow-hidden", parallaxClassName)} style={parallaxStyle}>
        <motion.div 
          className={cn("flex whitespace-nowrap", scrollerClassName)} 
          style={{ 
            x, 
            ...scrollerStyle 
          }}
        >
          {spans}
        </motion.div>
      </div>
    )
  }

  return (
    <div className="w-full h-full">
      {texts.map((text, index) => (
        <VelocityText
          key={index}
          className={cn(className)}
          baseVelocity={index % 2 !== 0 ? -velocity : velocity}
          scrollContainerRef={scrollContainerRef}
          damping={damping}
          stiffness={stiffness}
          numCopies={numCopies}
          velocityMapping={velocityMapping}
          parallaxClassName={parallaxClassName}
          scrollerClassName={scrollerClassName}
          parallaxStyle={{
            ...parallaxStyle,
            position: "relative",
            zIndex: 1,
          }}
          scrollerStyle={{
            ...scrollerStyle,
            filter: "brightness(1.2)",
          }}
        >
          {text}&nbsp;&nbsp;&nbsp;
        </VelocityText>
      ))}
    </div>
  )
}

export default ScrollVelocity