"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { cn } from "@/lib/utils"

interface GridMotionProps {
  items?: any[]
  gradientColor?: string
  className?: string
}

const GridMotion = ({ items = [], gradientColor = "var(--primary-color)", className }: GridMotionProps) => {
  const gridRef = useRef<HTMLDivElement>(null)
  const rowRefs = useRef<(HTMLDivElement | null)[]>([])
  const mouseXRef = useRef(typeof window !== "undefined" ? window.innerWidth / 2 : 0)

  // Ensure the grid has 28 items (4 rows x 7 columns) by default
  const totalItems = 28
  const defaultItems = Array.from({ length: totalItems }, (_, index) => `Item ${index + 1}`)
  const combinedItems = items.length > 0 ? items.slice(0, totalItems) : defaultItems

  useEffect(() => {
    if (typeof window === "undefined") return

    // Ensure GSAP is available
    if (!gsap) return

    gsap.ticker.lagSmoothing(0)

    const handleMouseMove = (e: MouseEvent) => {
      mouseXRef.current = e.clientX
    }

    const updateMotion = () => {
      const maxMoveAmount = 300
      const baseDuration = 0.8 // Base duration for inertia
      const inertiaFactors = [0.6, 0.4, 0.3, 0.2] // Different inertia for each row, outer rows slower

      rowRefs.current.forEach((row, index) => {
        if (row) {
          const direction = index % 2 === 0 ? 1 : -1
          const moveAmount = ((mouseXRef.current / window.innerWidth) * maxMoveAmount - maxMoveAmount / 2) * direction

          // Apply inertia and staggered stop
          gsap.to(row, {
            x: moveAmount,
            duration: baseDuration + inertiaFactors[index % inertiaFactors.length],
            ease: "power3.out",
            overwrite: "auto",
          })
        }
      })
    }

    const removeAnimationLoop = gsap.ticker.add(updateMotion)

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      removeAnimationLoop() // Properly remove the ticker listener
    }
  }, [])

  return (
    <div className={cn("noscroll", className)} ref={gridRef}>
      <section
        className="intro"
        style={{
          background: `radial-gradient(circle, ${gradientColor} 0%, transparent 100%)`,
        }}
      >
        <div className="gridMotion-container">
          {[...Array(4)].map((_, rowIndex) => (
            <div
              key={rowIndex}
              className="row"
              ref={(el) => (rowRefs.current[rowIndex] = el)} // Set each row's ref
            >
              {[...Array(7)].map((_, itemIndex) => {
                const content = combinedItems[rowIndex * 7 + itemIndex]
                return (
                  <div key={itemIndex} className="row__item">
                    <div className="row__item-inner" style={{ backgroundColor: "#111" }}>
                      {typeof content === "string" && content.startsWith("http") ? (
                        <div
                          className="row__item-img"
                          style={{
                            backgroundImage: `url(${content})`,
                          }}
                        ></div>
                      ) : (
                        <div className="row__item-content">{content}</div>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          ))}
        </div>
        <div className="fullview"></div>
      </section>
    </div>
  )
}

export default GridMotion
