"use client"

import type React from "react"
import { useEffect, useMemo, useRef, useState } from "react"

interface ScrollFloatProps {
  children: React.ReactNode
  scrollContainerRef?: React.RefObject<HTMLElement>
  containerClassName?: string
  textClassName?: string
  animationDuration?: number
  ease?: string
  scrollStart?: string
  scrollEnd?: string
  stagger?: number
}

const ScrollFloat = ({
  children,
  scrollContainerRef,
  containerClassName = "",
  textClassName = "",
  animationDuration = 1,
  ease = "back.inOut(2)",
  scrollStart = "center bottom+=50%",
  scrollEnd = "bottom bottom-=40%",
  stagger = 0.03,
}: ScrollFloatProps) => {
  const containerRef = useRef<HTMLHeadingElement>(null)
  const [gsapLoaded, setGsapLoaded] = useState(false)

  const splitText = useMemo(() => {
    const text = typeof children === "string" ? children : ""
    return text.split("").map((char, index) => (
      <span className="char inline-block" key={index}>
        {char === " " ? "\u00A0" : char}
      </span>
    ))
  }, [children])

  useEffect(() => {
    // Dynamically import GSAP only on the client side
    if (typeof window !== "undefined") {
      const loadGsap = async () => {
        try {
          const gsapModule = await import("gsap")
          const scrollTriggerModule = await import("gsap/dist/ScrollTrigger")

          const gsap = gsapModule.default || gsapModule
          const ScrollTrigger = scrollTriggerModule.default || scrollTriggerModule.ScrollTrigger

          // Register ScrollTrigger plugin
          gsap.registerPlugin(ScrollTrigger)

          const el = containerRef.current
          if (!el) return

          const scroller = scrollContainerRef && scrollContainerRef.current ? scrollContainerRef.current : window
          const charElements = el.querySelectorAll(".char")

          gsap.fromTo(
            charElements,
            {
              willChange: "opacity, transform",
              opacity: 0,
              yPercent: 120,
              scaleY: 2.3,
              scaleX: 0.7,
              transformOrigin: "50% 0%",
            },
            {
              duration: animationDuration,
              ease: ease,
              opacity: 1,
              yPercent: 0,
              scaleY: 1,
              scaleX: 1,
              stagger: stagger,
              scrollTrigger: {
                trigger: el,
                scroller,
                start: scrollStart,
                end: scrollEnd,
                scrub: true,
              },
            },
          )

          setGsapLoaded(true)
        } catch (error) {
          console.error("Failed to load GSAP:", error)
          // Apply a simple fallback animation if GSAP fails to load
          const charElements = containerRef.current?.querySelectorAll(".char")
          if (charElements) {
            Array.from(charElements).forEach((char, i) => {
              const element = char as HTMLElement
              element.style.opacity = "1"
              element.style.transform = "none"
              element.style.transition = `opacity 0.5s ease ${i * 0.05}s, transform 0.5s ease ${i * 0.05}s`
            })
          }
        }
      }

      loadGsap()
    }
  }, [scrollContainerRef, animationDuration, ease, scrollStart, scrollEnd, stagger])

  return (
    <h2 ref={containerRef} className={`overflow-hidden ${containerClassName}`}>
      <span
        className={`inline-block text-[clamp(1.6rem,8vw,10rem)] font-black text-center leading-normal ${textClassName}`}
      >
        {splitText}
      </span>
    </h2>
  )
}

export default ScrollFloat
