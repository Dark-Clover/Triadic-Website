"use client"

import { cn } from "@/lib/utils"
import type React from "react"

interface MarqueeProps {
  children: React.ReactNode
  pauseOnHover?: boolean
  reverse?: boolean
  repeat?: number
  className?: string
}

export default function Marquee({
  children,
  pauseOnHover = false,
  reverse = false,
  repeat = 4,
  className,
}: MarqueeProps) {
  return (
    <div className={cn("group flex overflow-hidden p-2 [--duration:20s] [--gap:1rem] [gap:var(--gap)]", className)}>
      {Array.from({ length: repeat }).map((_, i) => (
        <div
          key={i}
          className={cn("flex shrink-0 justify-around [gap:var(--gap)]", {
            "animate-marquee flex-row": true,
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
