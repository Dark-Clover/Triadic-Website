"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"
import { CheckCircle } from "lucide-react"
import RevealOnScroll from "./scroll-reveal"
import EnhancedButton from "./enhanced-button"
import { useRouter } from "next/navigation"

export default function About() {
  const router = useRouter()
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const stats = [
    { value: "250+", label: "Projects Completed" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "15+", label: "Industry Awards" },
    { value: "24/7", label: "Support Available" },
  ]

  const features = [
    "Strategic marketing campaigns",
    "Custom website development",
    "Brand identity design",
    "SEO optimization",
    "Social media management",
    "Content creation",
    "Google Ads management",
    "Analytics and reporting",
  ]

  return (
    <section id="about" ref={ref} className="py-20 bg-black text-white">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <RevealOnScroll direction="left">
            <div>
              <div className="inline-block bg-[var(--primary-color)]/20 px-4 py-2 rounded-full text-[var(--accent-color)] font-medium text-sm mb-4">
                About Triadic Media
              </div>

              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6 font-display">
                We're a team of <span className="text-gradient">digital experts</span>
              </h2>

              <p className="text-gray-400 mb-8">
                At Triadic Media, we combine creativity, technology, and strategy to deliver exceptional digital
                marketing solutions that drive results. Our team of experts is passionate about helping businesses grow
                and succeed in the digital landscape.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {features.map((feature, index) => (
                  <RevealOnScroll key={index} delay={0.1 + index * 0.05}>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-[var(--accent-color)]" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  </RevealOnScroll>
                ))}
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll direction="right" delay={0.2}>
            <div className="relative">
              <div className="relative z-10 bg-gray-900 rounded-2xl shadow-xl overflow-hidden">
                <div className="aspect-video bg-[var(--primary-color)] relative overflow-hidden">
                  <div className="absolute inset-0 opacity-30">
                    {Array.from({ length: 30 }).map((_, i) => (
                      <div
                        key={i}
                        className="absolute rounded-full bg-white"
                        style={{
                          width: `${Math.random() * 20 + 5}px`,
                          height: `${Math.random() * 20 + 5}px`,
                          top: `${Math.random() * 100}%`,
                          left: `${Math.random() * 100}%`,
                          opacity: Math.random() * 0.5,
                        }}
                      />
                    ))}
                  </div>

                  <div className="absolute inset-0 flex items-center justify-center">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-I9R3yBX2NllxS44IWuaB6tSUJWmA4o.png"
                      alt="Triadic Media Logo"
                      className="h-16"
                    />
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4">Why Choose Us?</h3>
                  <p className="text-gray-400 mb-6">
                    We're not just another marketing agency. We're your strategic partner committed to your success. Our
                    approach is data-driven, creative, and focused on delivering measurable results.
                  </p>

                  <div className="grid grid-cols-2 gap-6">
                    {stats.map((stat, index) => (
                      <RevealOnScroll key={index} delay={0.3 + index * 0.1}>
                        <div className="text-center">
                          <div className="text-3xl font-bold text-[var(--accent-color)]">{stat.value}</div>
                          <div className="text-sm text-gray-500">{stat.label}</div>
                        </div>
                      </RevealOnScroll>
                    ))}
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

      {/* Viral marketing section with text and image side by side */}
      <div className="container mt-20">
        <RevealOnScroll>
          <div className="bg-gray-900/50 rounded-2xl overflow-hidden shadow-xl border border-gray-800/50">
            <div className="grid md:grid-cols-2 items-center">
              <div className="p-8 md:p-12">
                <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                  We Make Your Brand <span className="text-gradient">Go Viral</span>
                </h3>
                <p className="text-gray-300 mb-6">
                  In today's fast-paced digital landscape, standing out is more challenging than ever. Our viral
                  marketing strategies are designed to cut through the noise and create meaningful connections with your
                  target audience.
                </p>
                <p className="text-gray-300 mb-8">
                  We combine data-driven insights with creative storytelling to craft campaigns that resonate, engage,
                  and inspire action. The result? Content that people can't help but share.
                </p>
                <EnhancedButton
                  variant="primary"
                  className="px-6 py-3"
                  onClick={() => router.push("/services/social-media")}
                >
                  Explore Viral Marketing
                </EnhancedButton>
              </div>
              <div className="relative h-full">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-transparent z-10 md:block hidden"></div>
                <img
                  src="/images/brand-viral-poster.png"
                  alt="We Make Your Brand Go Viral"
                  className="w-full h-full object-cover md:object-right"
                />
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}
