"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import RevealOnScroll from "./scroll-reveal"
import { Mail, Phone, MapPin } from "lucide-react"

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
      details: "+971 56 299 7778",
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      title: "Visit Us",
      details: "United Arab Emirates",
    },
  ]

  return (
    <section ref={ref} className="py-20 bg-gray-900">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <RevealOnScroll direction="left">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6 text-white">
                What We <span className="text-[var(--accent-color)]">Do</span>
              </h2>
              <p className="text-gray-300 mb-8 text-lg">We are one stop shop for all your digital needs.</p>
              <p className="text-gray-400 mb-8">
                When we say 'one-stop shop for all your digital needs,' we truly mean it. Our comprehensive services
                encompass every aspect of your digital journey, ensuring that you have the support you need at every
                step. From crafting engaging content that resonates with your audience to implementing effective
                strategies for client generation, we're dedicated to helping you achieve success. Our team of experts is
                here to guide you, providing tailored solutions that drive results and elevate your brand. With us by
                your side, you can focus on what you do best while we take care of the rest!
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                    className="bg-gray-800 p-4 rounded-lg flex flex-col items-center text-center"
                  >
                    <div className="bg-[var(--accent-color)]/20 p-3 rounded-full mb-3">{item.icon}</div>
                    <h3 className="text-white font-medium mb-1">{item.title}</h3>
                    <p className="text-gray-400 break-all">{item.details}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll direction="right" delay={0.2}>
            <div className="relative">
              <div className="relative z-10 bg-gradient-to-br from-[var(--primary-color)] to-[var(--accent-color)] rounded-2xl p-8 md:p-12 overflow-hidden shadow-xl">
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-6 text-white">Our Expertise</h3>

                  <div className="space-y-4">
                    <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                      <h4 className="text-white font-medium mb-1">Digital Marketing</h4>
                      <p className="text-gray-200 text-sm">SEO, PPC, Social Media, Content Strategy</p>
                    </div>

                    <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                      <h4 className="text-white font-medium mb-1">Web Development</h4>
                      <p className="text-gray-200 text-sm">Custom websites, E-commerce, Web Applications</p>
                    </div>

                    <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                      <h4 className="text-white font-medium mb-1">Brand Strategy</h4>
                      <p className="text-gray-200 text-sm">Identity Design, Brand Positioning, Market Research</p>
                    </div>

                    <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                      <h4 className="text-white font-medium mb-1">Content Creation</h4>
                      <p className="text-gray-200 text-sm">Video Production, Copywriting, Photography</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-[var(--accent-color)] rounded-full blur-xl opacity-20" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[var(--accent-color)] rounded-full blur-xl opacity-20" />
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  )
}
