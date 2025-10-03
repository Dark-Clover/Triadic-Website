"use client"

import type React from "react"

import { useRef } from "react"
import { cn } from "@/lib/utils"
import gsap from "gsap"

interface MenuItem {
  link: string
  text: string
  image: string
  id?: string
}

interface FlowingMenuProps {
  items: MenuItem[]
  className?: string
  onItemClick?: (id: string) => void
}

export default function FlowingMenu({ items = [], className, onItemClick }: FlowingMenuProps) {
  return (
    <div className={cn("w-full h-full overflow-hidden", className)}>
      <nav className="flex flex-col h-full m-0 p-0">
        {items.map((item, idx) => (
          <MenuItemComponent
            key={idx}
            {...item}
            onClick={() => onItemClick && onItemClick(item.id || item.link.replace("#", ""))}
          />
        ))}
      </nav>
    </div>
  )
}

function MenuItemComponent({ link, text, image, onClick }: MenuItem & { onClick?: () => void }) {
  const itemRef = useRef<HTMLDivElement>(null)
  const marqueeRef = useRef<HTMLDivElement>(null)
  const marqueeInnerRef = useRef<HTMLDivElement>(null)

  const animationDefaults = { duration: 0.6, ease: "expo" }

  const findClosestEdge = (mouseX: number, mouseY: number, width: number, height: number) => {
    const topEdgeDist = distMetric(mouseX, mouseY, width / 2, 0)
    const bottomEdgeDist = distMetric(mouseX, mouseY, width / 2, height)
    return topEdgeDist < bottomEdgeDist ? "top" : "bottom"
  }

  const distMetric = (x: number, y: number, x2: number, y2: number) => {
    const xDiff = x - x2
    const yDiff = y - y2
    return xDiff * xDiff + yDiff * yDiff
  }

  const handleMouseEnter = (ev: React.MouseEvent) => {
    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current) return
    const rect = itemRef.current.getBoundingClientRect()
    const x = ev.clientX - rect.left
    const y = ev.clientY - rect.top
    const edge = findClosestEdge(x, y, rect.width, rect.height)

    gsap
      .timeline({ defaults: animationDefaults })
      .set(marqueeRef.current, { y: edge === "top" ? "-101%" : "101%" }, 0)
      .set(marqueeInnerRef.current, { y: edge === "top" ? "101%" : "-101%" }, 0)
      .to([marqueeRef.current, marqueeInnerRef.current], { y: "0%" }, 0)
  }

  const handleMouseLeave = (ev: React.MouseEvent) => {
    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current) return
    const rect = itemRef.current.getBoundingClientRect()
    const x = ev.clientX - rect.left
    const y = ev.clientY - rect.top
    const edge = findClosestEdge(x, y, rect.width, rect.height)

    gsap
      .timeline({ defaults: animationDefaults })
      .to(marqueeRef.current, { y: edge === "top" ? "-101%" : "101%" }, 0)
      .to(marqueeInnerRef.current, { y: edge === "top" ? "101%" : "-101%" }, 0)
  }

  const repeatedMarqueeContent = Array.from({ length: 4 }).map((_, idx) => (
    <div key={idx} className="flex items-center">
      <span className="text-black whitespace-nowrap uppercase font-medium text-2xl md:text-4xl px-4 py-2">{text}</span>
      <div
        className="w-[200px] h-[7vh] mx-[2vw] my-8 py-4 rounded-full bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      />
    </div>
  ))

  return (
    <div className="flex-1 relative overflow-hidden text-center border-t border-white/20" ref={itemRef}>
      <a
        className="flex items-center justify-center h-full relative cursor-pointer uppercase no-underline whitespace-nowrap font-semibold text-white text-4xl hover:text-black transition-colors duration-300"
        href={link}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={(e) => {
          e.preventDefault()
          if (onClick) onClick()
        }}
      >
        {text}
      </a>
      <div
        className="absolute top-0 left-0 overflow-hidden w-full h-full pointer-events-none bg-white translate-y-[101%]"
        ref={marqueeRef}
      >
        <div className="h-full w-[200%] flex translate-x-0" ref={marqueeInnerRef}>
          <div className="flex items-center relative h-full w-[200%] animate-marquee">{repeatedMarqueeContent}</div>
        </div>
      </div>
    </div>
  )
}
