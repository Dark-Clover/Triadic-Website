"use client"
import { motion } from "framer-motion"
import Image from "next/image"

const clientLogos = [
  { src: "/heart-of-europe-logo.png", alt: "Heart of Europe Logo" },
  { src: "/damac-new-logo.png", alt: "Damac Logo" },
  { src: "/heart-2-heart-logo.png", alt: "Heart 2 Heart Logo" },
  { src: "/xe-square-capital-logo.png", alt: "XE Square Capital Logo" },
  { src: "/k-shield-logo.png", alt: "K-Shield Logo" },
  { src: "/kingsmen-real-estate-logo.png", alt: "Kingsmen Real Estate Logo" },
  { src: "/ak-technologies-logo.png", alt: "AK Technologies Logo" },
  { src: "/milo-logo.png", alt: "Milo Logo" },
  { src: "/blacksuit-logo.png", alt: "Blacksuit Logo" },
  { src: "/reflections-with-rubina-logo.png", alt: "Reflections with Rubina Logo" },
  { src: "/tbh-logo.png", alt: "TBH Logo" },
  { src: "/savvy-logo.png", alt: "Savvy Logo" },
  { src: "/sobha-realty-logo.png", alt: "Sobha Realty Logo" },
]

export default function ClientLogos() {
  const duplicatedLogos = [...clientLogos, ...clientLogos, ...clientLogos] // Duplicate for seamless loop

  return (
    <section className="py-16 bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-small-white/[0.05] [mask-image:linear-gradient(to_bottom,transparent,white_20%,white_80%,transparent)]"></div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-purple-400">
          Official Marketing <span className="text-[var(--accent-color)]">Partner</span>
        </h2>

        <div className="space-y-8">
          {/* Top row - scrolls left */}
          <div className="relative w-full overflow-hidden">
            <motion.div
              className="flex"
              animate={{
                x: ["0%", "-100%"],
                transition: {
                  x: {
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "loop",
                    duration: 60, // Adjust speed as needed
                    ease: "linear",
                  },
                },
              }}
            >
              {duplicatedLogos.map((logo, index) => (
                <div
                  key={`top-${index}`}
                  className="flex-shrink-0 mx-8 opacity-70 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
                >
                  <Image
                    src={logo.src || "/placeholder.svg"}
                    alt={logo.alt}
                    width={150}
                    height={80}
                    objectFit="contain"
                    className="h-20 w-auto"
                  />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Bottom row - scrolls right */}
          <div className="relative w-full overflow-hidden">
            <motion.div
              className="flex"
              animate={{
                x: ["-100%", "0%"],
                transition: {
                  x: {
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "loop",
                    duration: 60, // Adjust speed as needed
                    ease: "linear",
                  },
                },
              }}
            >
              {duplicatedLogos.map((logo, index) => (
                <div
                  key={`bottom-${index}`}
                  className="flex-shrink-0 mx-8 opacity-70 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
                >
                  <Image
                    src={logo.src || "/placeholder.svg"}
                    alt={logo.alt}
                    width={150}
                    height={80}
                    objectFit="contain"
                    className="h-20 w-auto"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
