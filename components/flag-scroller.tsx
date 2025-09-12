"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const flags = [
  { id: "uae", name: "United Arab Emirates", src: "https://i.ibb.co/gZBBpM1x/Flag-United-Arab-Emirates.png" },
  { id: "uk", name: "United Kingdom", src: "https://i.ibb.co/h1B23fTg/uk.png" },
  { id: "usa", name: "United States", src: "https://i.ibb.co/4Z4WNtxN/usa.png" },
  { id: "bahrian", name: "Bahrian", src: "https://i.ibb.co/pvnCVpy6/bahrian.png" },
  { id: "switzerland", name: "Switzerland", src: "https://i.ibb.co/23Vkzyyz/swiss.png" },
  { id: "pakistan", name: "Pakistan", src: "https://i.ibb.co/QvJmP6gY/pak.png" },
]

export default function FlagScroller() {
  return (
    <div className="relative w-full overflow-hidden py-8 bg-black">
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black z-10"></div>
      <motion.div
        className="flex"
        animate={{
          x: ["0%", "-100%"],
        }}
        transition={{
          ease: "linear",
          duration: 30,
          repeat: Number.POSITIVE_INFINITY,
        }}
      >
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex flex-shrink-0 justify-around w-full">
            {flags.map((flag) => (
              <div key={flag.id} className="mx-8 flex flex-col items-center">
                <Image
                  src={flag.src || "/placeholder.svg"}
                  alt={flag.name}
                  width={90}
                  height={60}
                  className="rounded-md shadow-lg border border-white/20"
                />
                <span className="mt-2 text-sm text-gray-400">{flag.name}</span>
              </div>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  )
}
