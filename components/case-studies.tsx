"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, ExternalLink } from "lucide-react"
import RevealOnScroll from "./scroll-reveal"
import { cn } from "@/lib/utils"

interface CaseStudy {
  id: string
  title: string
  client: string
  category: string
  image: string
  challenge: string
  solution: string
  results: string[]
  link?: string
}

export default function CaseStudies() {
  const [activeStudy, setActiveStudy] = useState<string | null>(null)

  const caseStudies: CaseStudy[] = [
    {
      id: "heart-2-heart",
      title: "Brand Revitalization & Digital Growth",
      client: "Heart 2 Heart",
      category: "Branding & Social Media",
      image: "/heart-2-heart-logo.png",
      challenge:
        "Heart 2 Heart needed to refresh their brand identity and establish a stronger digital presence to reach a wider audience.",
      solution:
        "We developed a comprehensive brand refresh and implemented a strategic social media campaign focused on engagement and community building.",
      results: [
        "300% increase in social media engagement",
        "150% growth in website traffic",
        "75% increase in online inquiries",
      ],
      link: "https://www.instagram.com/syed.ali.haider5/",
    },
    {
      id: "kingsmen-real-estate",
      title: "Digital Marketing Campaign",
      client: "Kingsmen Real Estate",
      category: "Digital Marketing",
      image: "/kingsmen-real-estate-logo.png",
      challenge:
        "Kingsmen Real Estate needed to establish a digital presence that would help them stand out in a competitive market.",
      solution:
        "We created a comprehensive digital marketing strategy including website development, SEO, and targeted social media campaigns.",
      results: [
        "250% increase in qualified leads",
        "180% growth in social media following",
        "Top 3 Google ranking for key search terms",
      ],
      link: "https://www.instagram.com/kingsmenrealestate/",
    },
    {
      id: "blacksuit",
      title: "Luxury Brand Positioning",
      client: "Blacksuit",
      category: "Branding & Content",
      image: "/blacksuit-logo.png",
      challenge: "Blacksuit needed to position themselves as a premium luxury brand in a competitive market.",
      solution:
        "We developed a sophisticated brand identity and content strategy that highlighted their exclusive offerings and premium services.",
      results: [
        "200% increase in high-value client acquisitions",
        "350% growth in engagement with luxury audience segments",
        "Featured in top luxury publications",
      ],
      link: "https://www.instagram.com/blacksuitems.ae/",
    },
  ]

  return (
    <section className="py-20 bg-black">
      <div className="container">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 text-white">
              Our <span className="text-[var(--accent-color)]">Success</span> Stories
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Explore how we've helped businesses transform their digital presence and achieve remarkable results.
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          {caseStudies.map((study) => (
            <RevealOnScroll key={study.id} delay={0.1}>
              <motion.div
                className={cn(
                  "group relative overflow-hidden rounded-xl bg-gray-900 cursor-pointer transition-all duration-300",
                  activeStudy === study.id
                    ? "ring-2 ring-[var(--accent-color)]"
                    : "hover:shadow-lg hover:shadow-[var(--accent-color)]/10",
                )}
                onClick={() => setActiveStudy(activeStudy === study.id ? null : study.id)}
                whileHover={{ y: -5 }}
              >
                <div className="p-5 sm:p-6">
                  <div className="mb-6 h-12 sm:h-16 flex items-center justify-center">
                    <img
                      src={study.image || "/placeholder.svg"}
                      alt={study.client}
                      className="max-h-full max-w-full object-contain"
                      onError={(e) => {
                        e.currentTarget.src = "/abstract-geometric-logo.png"
                      }}
                    />
                  </div>

                  <div className="space-y-2">
                    <div className="inline-block bg-[var(--accent-color)]/20 px-3 py-1 rounded-full text-[var(--accent-color)] text-xs font-medium">
                      {study.category}
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-white">{study.title}</h3>
                    <p className="text-gray-400 text-sm line-clamp-3">{study.challenge}</p>
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-sm text-[var(--accent-color)]">View case study</span>
                    <ArrowRight className="h-4 w-4 text-[var(--accent-color)] transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>

                <AnimatePresence>
                  {activeStudy === study.id && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 bg-gray-900/95 backdrop-blur-sm p-4 sm:p-6 flex flex-col overflow-y-auto"
                    >
                      <button
                        className="absolute top-2 right-2 text-gray-400 hover:text-white p-2"
                        onClick={(e) => {
                          e.stopPropagation()
                          setActiveStudy(null)
                        }}
                      >
                        ✕
                      </button>

                      <h3 className="text-xl font-bold text-white mb-2">{study.title}</h3>
                      <p className="text-[var(--accent-color)] font-medium mb-4">{study.client}</p>

                      <div className="space-y-4 flex-grow">
                        <div>
                          <h4 className="text-white font-medium mb-1">Challenge</h4>
                          <p className="text-gray-400 text-sm">{study.challenge}</p>
                        </div>

                        <div>
                          <h4 className="text-white font-medium mb-1">Solution</h4>
                          <p className="text-gray-400 text-sm">{study.solution}</p>
                        </div>

                        <div>
                          <h4 className="text-white font-medium mb-1">Results</h4>
                          <ul className="text-gray-400 text-sm space-y-1">
                            {study.results.map((result, index) => (
                              <li key={index} className="flex items-start">
                                <span className="text-[var(--accent-color)] mr-2">•</span>
                                <span>{result}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {study.link && (
                        <a
                          href={study.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-4 inline-flex items-center text-[var(--accent-color)] hover:underline"
                          onClick={(e) => e.stopPropagation()}
                        >
                          Visit project <ExternalLink className="ml-1 h-3 w-3" />
                        </a>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </RevealOnScroll>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href="/portfolio" className="inline-flex items-center text-[var(--accent-color)] hover:underline">
            View all case studies <ArrowRight className="ml-1 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
