"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import RevealOnScroll from "./scroll-reveal"
import { Mail, Phone, MapPin, CheckCircle2, ArrowRight } from "lucide-react"

export default function WhatWeDo() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      title: "Email Us",
      details: "info@triadicmarketing.com",
    },
    {
      icon: <Phone className="h-5 w-5" />,
      title: "Call Us",
      details: "+92 331 1148881",
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      title: "Visit Us",
      details: "DHA Phase 2 Islamabad",
    },
  ]

  return (
    <section ref={ref} className="py-24 relative overflow-hidden bg-gradient-to-b from-gray-900 to-gray-950">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[var(--accent-color)]/10 rounded-full blur-[100px]" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[var(--primary-color)]/10 rounded-full blur-[100px]" />
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-[80px]" />
      </div>

      <div className="container relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6 text-white">
              What We <span className="text-[var(--accent-color)]">Do</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[var(--primary-color)] to-[var(--accent-color)] mx-auto mb-6 rounded-full" />
            <p className="text-gray-300 mb-4 text-lg max-w-2xl mx-auto">
              We are one stop shop for all your digital needs.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <RevealOnScroll direction="left">
            <div className="bg-gray-800/30 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 shadow-xl">
              <p className="text-gray-300 mb-8 leading-relaxed">
                When we say 'one-stop shop for all your digital needs,' we truly mean it. Our comprehensive services
                encompass every aspect of your digital journey, ensuring that you have the support you need at every
                step. From crafting engaging content that resonates with your audience to implementing effective
                strategies for client generation, we're dedicated to helping you achieve success.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  "Tailored digital strategies",
                  "Expert team collaboration",
                  "Results-driven approach",
                  "Innovative solutions",
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="h-5 w-5 text-[var(--accent-color)]" />
                    <span className="text-gray-200">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll direction="right" delay={0.2}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary-color)]/20 to-[var(--accent-color)]/20 rounded-2xl transform rotate-3 scale-105 opacity-30 blur-sm" />

              <div className="relative z-10 bg-gradient-to-br from-[var(--primary-color)] to-[var(--accent-color)] rounded-2xl p-8 md:p-10 overflow-hidden shadow-xl">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-8 text-white flex items-center">
                    <span className="mr-3">Our Expertise</span>
                    <div className="h-px flex-grow bg-white/20"></div>
                  </h3>

                  <div className="space-y-5">
                    {[
                      {
                        title: "Digital Marketing",
                        desc: "SEO, PPC, Social Media, Content Strategy",
                        delay: 0.1,
                      },
                      {
                        title: "Web Development",
                        desc: "Custom websites, E-commerce, Web Applications",
                        delay: 0.2,
                      },
                      {
                        title: "Brand Strategy",
                        desc: "Identity Design, Brand Positioning, Market Research",
                        delay: 0.3,
                      },
                      {
                        title: "Content Creation",
                        desc: "Video Production, Copywriting, Photography",
                        delay: 0.4,
                      },
                    ].map((service, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ delay: service.delay, duration: 0.5 }}
                        className="bg-white/10 p-5 rounded-xl backdrop-blur-sm hover:bg-white/15 transition-all duration-300 group"
                      >
                        <div className="flex justify-between items-center">
                          <h4 className="text-white font-medium mb-1">{service.title}</h4>
                          <ArrowRight className="h-4 w-4 text-white/0 group-hover:text-white/100 transition-all duration-300" />
                        </div>
                        <p className="text-gray-200 text-sm">{service.desc}</p>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/10">
                    <p className="text-white/80 text-sm italic">
                      "With us by your side, you can focus on what you do best while we take care of the rest!"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  )
}
