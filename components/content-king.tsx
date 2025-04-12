"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import { useRouter } from "next/navigation"
import EnhancedButton from "./enhanced-button"

export default function ContentKing() {
  const router = useRouter()
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, threshold: 0.3 })
  const [currentSlide, setCurrentSlide] = useState(0)

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 4)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  // Array of fashion/lifestyle images for the slideshow
  const slideImages = [
    "/fashion-1.png",
    "/fashion-2.png",
    "/fashion-3.png",
    "/fashion-4.png"
  ]

  return (
    <section
      className="py-20 overflow-hidden bg-black relative"
      ref={ref}
      style={{
        backgroundImage: "url('/travius.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark overlay to ensure text is readable */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="relative">
          {/* Glowing background effect - toned down */}
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="w-[600px] h-[600px] rounded-full bg-[var(--accent-color)]/10 blur-[100px] opacity-30"></div>
          </div>

          <div className="flex flex-col items-center text-center relative z-10">
            {/* Text with image fill */}
            <div className="relative">
              {/* Background text outline for better visibility */}
              <div className="absolute inset-0 filter blur-[2px]">
                <h2 className="text-[8rem] md:text-[12rem] font-black tracking-tighter leading-none text-center font-display text-[var(--accent-color)]/20">
                  CONTENT
                </h2>
                <h2 className="text-[8rem] md:text-[12rem] font-black tracking-tighter leading-none text-center font-display text-[var(--accent-color)]/20">
                  IS KING
                </h2>
              </div>

              {/* Main text with background-clip for image masking */}
              <div className="relative">
                {/* The container for the text that will mask the images */}
                <div 
                  className="relative"
                  style={{
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    color: "transparent",
                    backgroundImage: `url(${slideImages[currentSlide]})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <h2 className="text-[8rem] md:text-[12rem] font-black tracking-tighter leading-none text-center font-display">
                    CONTENT
                  </h2>
                  <h2 className="text-[8rem] md:text-[12rem] font-black tracking-tighter leading-none text-center font-display">
                    IS KING
                  </h2>
                </div>
              </div>
            </div>

            {/* Subtle animated underline */}
            <motion.div
              className="h-1 bg-gradient-to-r from-transparent via-[var(--accent-color)]/50 to-transparent w-[200px] mt-4"
              animate={{
                opacity: [0.2, 0.5, 0.2],
                width: ["150px", "300px", "150px"],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            />

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="mt-12"
            >
              <EnhancedButton
                variant="primary"
                className="rounded-full px-8 py-6 text-lg"
                magneticPull={true}
                onClick={() => router.push("/services")}
              >
                Our Services
              </EnhancedButton>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}