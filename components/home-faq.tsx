"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import RevealOnScroll from "./scroll-reveal"

interface FaqItem {
  question: string
  answer: string
}

export default function HomeFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs: FaqItem[] = [
    {
      question: "What services does Triadic Media offer?",
      answer:
        "We offer a comprehensive range of digital marketing services including social media management, website development, SEO optimization, content creation, Google Ads management, branding and design, email marketing, and analytics reporting.",
    },
    {
      question: "How long does it take to see results from digital marketing?",
      answer:
        "The timeline varies depending on the strategies implemented. Some tactics like paid advertising can show immediate results, while SEO and content marketing typically take 3-6 months to gain significant traction. We provide regular reports and updates so you can track progress throughout your campaign.",
    },
    {
      question: "How do you measure the success of a campaign?",
      answer:
        "We measure success through key performance indicators (KPIs) aligned with your business objectives. These may include website traffic, conversion rates, engagement metrics, lead generation, ROI, and more. We use advanced analytics tools to track these metrics and provide transparent reporting.",
    },
    {
      question: "What makes Triadic Media different from other agencies?",
      answer:
        "Our approach combines strategic thinking, creative execution, and data-driven optimization. We focus on delivering measurable results that impact your bottom line, not just vanity metrics. Our team brings expertise across multiple digital disciplines, ensuring a cohesive and effective marketing strategy.",
    },
  ]

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 bg-gray-900">
      <div className="container">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 text-white">
              Frequently Asked <span className="text-[var(--accent-color)]">Questions</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Get answers to common questions about our services and how we can help your business grow.
            </p>
          </div>
        </RevealOnScroll>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <RevealOnScroll key={index} delay={index * 0.1}>
              <div className="mb-4">
                <button
                  className={cn(
                    "w-full text-left p-6 rounded-lg flex justify-between items-center transition-colors",
                    openIndex === index
                      ? "bg-[var(--accent-color)]/10 text-white"
                      : "bg-gray-800 text-gray-200 hover:bg-gray-800/80",
                  )}
                  onClick={() => toggleFaq(index)}
                >
                  <span className="font-medium">{faq.question}</span>
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 text-[var(--accent-color)] transition-transform duration-200",
                      openIndex === index ? "rotate-180" : "",
                    )}
                  />
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 pt-2 text-gray-400 bg-gray-800/50 rounded-b-lg">{faq.answer}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll delay={0.4}>
          <div className="mt-12 text-center">
            <p className="text-gray-400 mb-6">Still have questions? We're here to help!</p>
            <a
              href="/contact"
              className="inline-block bg-[var(--accent-color)] hover:bg-[var(--accent-color)]/90 text-white px-8 py-3 rounded-full font-medium transition-colors"
            >
              Contact Us
            </a>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}
