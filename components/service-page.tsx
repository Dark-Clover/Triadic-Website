"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useRef } from "react"
import RevealOnScroll from "./scroll-reveal"
import InteractiveNavbar from "./interactive-navbar"
import Footer from "./footer"
import EnhancedButton from "./enhanced-button"
import ClientReviews from "./client-reviews"

interface ServicePageProps {
  title: string
  description: string
  color: string
  icon: React.ReactNode
  benefits: string[]
  features: { title: string; description: string; icon?: React.ReactNode }[]
  process: { step: string; title: string; description: string }[]
  heroImage: string
  children?: React.ReactNode
}

export default function ServicePage({
  title,
  description,
  color,
  icon,
  benefits,
  features,
  process,
  heroImage,
  children,
}: ServicePageProps) {
  const ref = useRef<HTMLDivElement>(null)

  return (
    <div className="min-h-screen" style={{ backgroundColor: `${color}05` }}>
      <InteractiveNavbar />

      {/* Hero Section */}
      <section
        className="pt-32 pb-20 relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(to bottom, ${color}10, ${color}30)`,
        }}
      >
        <div className="container max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <RevealOnScroll>
              <div className="text-left space-y-6">
                <div
                  className="inline-flex items-center justify-center p-3 rounded-full mb-4"
                  style={{ backgroundColor: `${color}20` }}
                >
                  <div className="w-10 h-10 flex items-center justify-center">{icon}</div>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">{title}</h1>

                <p className="text-lg text-gray-200 max-w-xl">{description}</p>

                <div className="pt-6">
                  <EnhancedButton
                    variant="primary"
                    className="rounded-full px-8 py-3"
                    style={{ backgroundColor: color }}
                    magneticPull={true}
                    onClick={() => {
                      const contactForm = document.getElementById("contact-form")
                      if (contactForm) {
                        contactForm.scrollIntoView({ behavior: "smooth" })
                      }
                    }}
                  >
                    Get Started
                  </EnhancedButton>
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll direction="right">
              <div className="relative">
                <motion.div
                  className="relative z-10 rounded-xl overflow-hidden shadow-2xl"
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <img src={heroImage || "/placeholder.svg"} alt={title} className="w-full h-auto object-cover" />
                </motion.div>

                {/* Background decoration */}
                <div
                  className="absolute -top-6 -left-6 w-32 h-32 rounded-full opacity-30 blur-xl z-0"
                  style={{ backgroundColor: color }}
                ></div>
                <div
                  className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full opacity-30 blur-xl z-0"
                  style={{ backgroundColor: color }}
                ></div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container max-w-7xl mx-auto">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Why Choose Our {title}</h2>
              <div
                className="w-20 h-1 bg-gradient-to-r mx-auto"
                style={{ from: "transparent", via: color, to: "transparent" }}
              ></div>
            </div>
          </RevealOnScroll>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <RevealOnScroll key={index} delay={index * 0.1}>
                <motion.div
                  className="bg-white/5 backdrop-blur-sm p-6 rounded-xl"
                  whileHover={{ y: -5, backgroundColor: `rgba(255,255,255,0.1)` }}
                >
                  <div
                    className="w-12 h-12 rounded-full mb-4 flex items-center justify-center text-white"
                    style={{ backgroundColor: color }}
                  >
                    {index + 1}
                  </div>
                  <p>{benefit}</p>
                </motion.div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20" style={{ backgroundImage: `linear-gradient(to bottom, ${color}05, ${color}15)` }}>
        <div className="container max-w-7xl mx-auto">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Our {title} Features</h2>
              <div
                className="w-20 h-1 bg-gradient-to-r mx-auto"
                style={{ from: "transparent", via: color, to: "transparent" }}
              ></div>
            </div>
          </RevealOnScroll>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <RevealOnScroll key={index} delay={index * 0.1}>
                <motion.div
                  className="bg-white/10 backdrop-blur-sm p-8 rounded-xl"
                  whileHover={{
                    y: -5,
                    boxShadow: `0 15px 30px rgba(0,0,0,0.2)`,
                  }}
                >
                  {feature.icon && (
                    <div
                      className="w-12 h-12 rounded-lg mb-4 flex items-center justify-center"
                      style={{ backgroundColor: `${color}30` }}
                    >
                      {feature.icon}
                    </div>
                  )}
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </motion.div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container max-w-7xl mx-auto">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Our {title} Process</h2>
              <div
                className="w-20 h-1 bg-gradient-to-r mx-auto"
                style={{ from: "transparent", via: color, to: "transparent" }}
              ></div>
            </div>
          </RevealOnScroll>

          <div className="relative flex flex-col space-y-6">
            {/* Process Timeline Line */}
            <div className="absolute left-[19px] top-0 bottom-0 w-1" style={{ backgroundColor: color }}></div>

            {process.map((step, index) => (
              <RevealOnScroll key={index} delay={index * 0.1}>
                <div className="flex gap-8">
                  <div
                    className="relative z-10 w-10 h-10 rounded-full flex items-center justify-center text-white mt-1"
                    style={{ backgroundColor: color }}
                  >
                    {index + 1}
                  </div>
                  <div>
                    <div className="flex items-center mb-2">
                      <div
                        className="px-3 py-1 rounded-full text-xs font-medium"
                        style={{ backgroundColor: `${color}20`, color: color }}
                      >
                        {step.step}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-gray-300">{step.description}</p>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Section if any */}
      {children}

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container max-w-7xl mx-auto">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
              <div
                className="w-20 h-1 bg-gradient-to-r mx-auto"
                style={{ from: "transparent", via: color, to: "transparent" }}
              ></div>
            </div>
          </RevealOnScroll>

          <ClientReviews />
        </div>
      </section>

      {/* CTA Section */}
      <section
        id="contact-form"
        className="py-20"
        style={{
          backgroundImage: `linear-gradient(to top, ${color}30, ${color}10)`,
        }}
      >
        <div className="container max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <RevealOnScroll>
              <h2 className="text-3xl font-bold mb-6">Ready to Transform Your {title}?</h2>
              <p className="text-xl mb-8">Get in touch with our team of experts to discuss your project</p>
              <EnhancedButton
                variant="primary"
                className="rounded-full px-8 py-3"
                style={{ backgroundColor: color }}
                magneticPull={true}
                onClick={() => (window.location.href = "/contact")}
              >
                Contact Us
              </EnhancedButton>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
