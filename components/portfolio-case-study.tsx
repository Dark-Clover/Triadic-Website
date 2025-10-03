"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"
import { X, ExternalLink, ArrowRight } from "lucide-react"

type PortfolioItem = {
  id: string
  title: string
  subtitle: string
  description: string
  image: string
  logo: string
  url: string
  tags: string[]
  services: string[]
  challenge: string
  solution: string
  results: string[]
}

type PortfolioCaseStudyProps = {
  item: PortfolioItem
  onClose: () => void
}

export default function PortfolioCaseStudy({ item, onClose }: PortfolioCaseStudyProps) {
  // Prevent scrolling when modal is open
  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = originalStyle
    }
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 md:p-6"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ type: "spring", damping: 25 }}
        className="bg-white rounded-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Image */}
        <div className="relative h-64 md:h-80 overflow-hidden">
          <img
            src={item.image || "/placeholder.svg"}
            alt={item.title}
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
            <div className="p-6 md:p-8">
              <div className="flex items-center gap-4 mb-3">
                <img
                  src={item.logo || "/placeholder.svg"}
                  alt={`${item.title} logo`}
                  className="h-10 w-auto object-contain"
                />
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white">{item.title}</h2>
                  <p className="text-white/90">{item.subtitle}</p>
                </div>
              </div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors"
            aria-label="Close case study"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8">
          <div className="flex flex-wrap gap-2 mb-6">
            {item.tags.map((tag) => (
              <span key={tag} className="px-3 py-1 bg-[#4a0072]/10 text-[#4a0072] text-sm font-medium rounded-full">
                {tag}
              </span>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">The Challenge</h3>
              <p className="text-gray-700">{item.challenge}</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Our Solution</h3>
              <p className="text-gray-700">{item.solution}</p>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Services Provided</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {item.services.map((service) => (
                <div key={service} className="flex items-center gap-2">
                  <ArrowRight className="h-4 w-4 text-[#4a0072]" />
                  <span>{service}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Results</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {item.results.map((result, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-medium text-gray-900">{result}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-[#4a0072] text-white rounded-full hover:bg-[#3a0058] transition-colors"
            >
              Visit Live Website
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
