"use client"

import { cn } from "@/lib/utils"
import type React from "react"

interface MarqueeProps {
  children: React.ReactNode
  pauseOnHover?: boolean
  reverse?: boolean
  repeat?: number
  className?: string
  vertical?: boolean
  speed?: number
}

export default function EnhancedMarquee({
  children,
  pauseOnHover = false,
  reverse = false,
  repeat = 4,
  className,
  vertical = false,
  speed = 20,
}: MarqueeProps) {
  const duration = `${speed}s`

  return (
    <div
      className={cn(
        "group flex overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)]",
        {
          "flex-row": !vertical,
          "flex-col": vertical,
        },
        className,
      )}
      style={{ "--duration": duration } as React.CSSProperties}
    >
      {Array.from({ length: repeat }).map((_, i) => (
        <div
          key={i}
          className={cn("flex shrink-0 justify-around [gap:var(--gap)]", {
            "animate-marquee flex-row": !vertical,
            "animate-marquee-vertical flex-col": vertical,
            "group-hover:[animation-play-state:paused]": pauseOnHover,
            "[animation-direction:reverse]": reverse,
          })}
        >
          {children}
        </div>
      ))}
    </div>
  )
}
