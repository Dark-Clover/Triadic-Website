"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useRouter } from "next/navigation"
import { PhoneIcon, Globe, Search, Palette, Target, FileText, Smartphone } from "lucide-react"
import RevealOnScroll from "./scroll-reveal"

type ServiceItem = {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  color: string
  path: string
  image?: string
}

export default function ServicesGrid() {
  const router = useRouter()

  const services: ServiceItem[] = [
    {
      id: "social-media",
      title: "Social Media Marketing",
      description: "Strategic social media management to boost your brand's online presence and engagement.",
      icon: <PhoneIcon className="h-6 w-6" />,
      color: "#4a0072",
      path: "/services/social-media",
      image: "/purple-social-abstract.png",
    },
    {
      id: "web-dev",
      title: "Website Development",
      description: "Custom, responsive websites designed to convert visitors into customers.",
      icon: <Globe className="h-6 w-6" />,
      color: "#0062cc",
      path: "/services/web-development",
      image: "/digital-code-overlay.png",
    },
    {
      id: "app-dev",
      title: "App Development",
      description: "Native and cross-platform mobile applications for iOS and Android.",
      icon: <Smartphone className="h-6 w-6" />,
      color: "#00a86b",
      path: "/services/app-development",
      image: "/sustainable-app-interface.png",
    },
    {
      id: "seo",
      title: "SEO",
      description: "Boost your search rankings and drive organic traffic to your website.",
      icon: <Search className="h-6 w-6" />,
      color: "#ff6b00",
      path: "/services/seo",
      image: "/seo-orange-analytics.png",
    },
    {
      id: "branding",
      title: "Branding & Design",
      description: "Create a memorable brand identity that resonates with your target audience.",
      icon: <Palette className="h-6 w-6" />,
      color: "#e94057",
      path: "/services/branding",
      image: "/vibrant-gradient-branding.png",
    },
    {
      id: "google-ads",
      title: "Google Ads",
      description: "Targeted advertising campaigns that drive traffic and conversions.",
      icon: <Target className="h-6 w-6" />,
      color: "#4285F4",
      path: "/services/google-ads",
      image: "/interconnected-blue-network.png",
    },
    {
      id: "content",
      title: "Content Creation",
      description: "Engaging content that tells your brand story and connects with your audience.",
      icon: <FileText className="h-6 w-6" />,
      color: "#2e7d32",
      path: "/services/content-creation",
      image: "/verdant-content-studio.png",
    },
  ]

  return (
    <section className="py-16">
      <div className="container">
        <RevealOnScroll>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-white">
              Explore Our <span className="text-[var(--accent-color)]">Services</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Click on any service to discover how we can help your business grow
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <RevealOnScroll key={service.id} delay={index * 0.1}>
              <motion.div
                className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden cursor-pointer group"
                whileHover={{ y: -10, backgroundColor: "rgba(255,255,255,0.1)" }}
                transition={{ duration: 0.3 }}
                onClick={() => router.push(service.path)}
              >
                <div className="h-40 relative overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{
                      backgroundImage: service.image
                        ? `url(${service.image})`
                        : "linear-gradient(45deg, #0a0a0a, #222)",
                      opacity: 0.8,
                    }}
                  ></div>
                  <div className="absolute inset-0 opacity-80" style={{ backgroundColor: service.color }}></div>
                  <div className="absolute inset-0 flex items-center justify-center p-6">
                    <div className="text-white">
                      <div
                        className="w-14 h-14 rounded-full mx-auto mb-3 flex items-center justify-center"
                        style={{ backgroundColor: "rgba(255,255,255,0.2)" }}
                      >
                        {service.icon}
                      </div>
                      <h3 className="text-xl font-bold text-center">{service.title}</h3>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-gray-300 mb-4 line-clamp-2">{service.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium" style={{ color: service.color }}>
                      Learn more
                    </span>
                    <motion.div
                      className="w-8 h-8 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: `${service.color}20` }}
                      whileHover={{ x: 5 }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        style={{ color: service.color }}
                      >
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path>
                      </svg>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
