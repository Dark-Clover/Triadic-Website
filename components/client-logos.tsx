"use client"
import { motion } from "framer-motion"
import Image from "next/image"

const clientLogos = [
  { src: "/heart-of-europe-logo.png", alt: "Heart of Europe Logo" },
  { src: "/damac-logo.png", alt: "Damac Logo" },
  { src: "/heart-2-heart-logo.png", alt: "Heart 2 Heart Logo" },
  { src: "/xe-square-capital-logo.png", alt: "XE Square Capital Logo" },
  { src: "/k-shield-logo.png", alt: "K-Shield Logo" },
  { src: "/kingsmen-real-estate-logo.png", alt: "Kingsmen Real Estate Logo" },
  { src: "/ak-technologies-logo.png", alt: "AK Technologies Logo" },
  { src: "/milo-logo.png", alt: "Milo Logo" },
  { src: "/Blacksuit Logo White.png", alt: "Blacksuit Logo" },
  { src: "/reflections-with-rubina-logo.png", alt: "Reflections with Rubina Logo" },
  { src: "/tbh-logo-removebg-preview copy.png", alt: "TBH Logo" },
  { src: "/savvy-logo-removebg-preview copy.png", alt: "Savvy Logo" },
  { src: "/sobha-realty-logo-removebg-preview copy.png", alt: "Sobha Realty Logo" },
  { src: "/white-logo.png", alt: "House of Saloon Logo" },
]

export default function ClientLogos() {
  // Split logos evenly between top and bottom rows
  const halfLength = Math.ceil(clientLogos.length / 2)
  const topRowLogos = clientLogos.slice(0, halfLength)
  const bottomRowLogos = clientLogos.slice(halfLength)

  // Duplicate for seamless loop
  const duplicatedTop = [...topRowLogos, ...topRowLogos]
  const duplicatedBottom = [...bottomRowLogos, ...bottomRowLogos]

  return (
    <section className="py-16 bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-small-white/[0.05] [mask-image:linear-gradient(to_bottom,transparent,white_20%,white_80%,transparent)]"></div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-purple-400">
          Official Marketing <span className="text-[var(--accent-color)]">Partner</span>
        </h2>

        <div className="space-y-8">
          {/* Top row - scrolls left (distinct set) */}
          <div className="relative w-full overflow-hidden">
            <motion.div
              className="flex"
                animate={{
                  x: ["0%", "-100%"],
                  transition: {
                    x: {
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "loop",
                      duration: 25, // Even faster for mobile
                      ease: "linear",
                    },
                  },
                }}
            >
              {duplicatedTop.map((logo, index) => (
                <div
                  key={`top-${index}`}
                  className="flex-shrink-0 mx-8 md:mx-10 opacity-70 hover:opacity-100 transition-opacity duration-300"
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

          {/* Bottom row - scrolls right (all logos, rotated and offset for de-sync) */}
          <div className="relative w-full overflow-hidden">
            <motion.div
              className="flex"
              initial={{ x: "-25%" }}
              animate={{
                x: ["-100%", "0%"],
                transition: {
                  x: {
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "loop",
                    duration: 25, // Even faster for mobile, slightly different to avoid sync
                    ease: "linear",
                  },
                },
              }}
            >
              {duplicatedBottom.map((logo, index) => (
                <div
                  key={`bottom-${index}`}
                  className="flex-shrink-0 mx-10 md:mx-12 opacity-70 hover:opacity-100 transition-opacity duration-300"
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
