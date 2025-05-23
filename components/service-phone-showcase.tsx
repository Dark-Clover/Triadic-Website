"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { PhoneIcon, Globe, Search, Palette, Target, FileText, Smartphone } from "lucide-react"
import RevealOnScroll from "./scroll-reveal"

type Service = {
  id: string
  number: string
  title: string
  description: string
  icon: React.ReactNode
  color: string
  image: string
}

export default function ServicePhoneShowcase() {
  const [activeService, setActiveService] = useState<string>("social-media")

  const services: Service[] = [
    {
      id: "social-media",
      number: "01",
      title: "Social Media Ads",
      description:
        "Boost your online presence with captivating ads. We handle everything from setting up domains and hosting to creating engaging visuals and ad copy, bringing your brand's unique voice to social media seamlessly.",
      icon: <PhoneIcon className="h-6 w-6" />,
      color: "#4a0072",
      image:
        "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    {
      id: "web-dev",
      number: "02",
      title: "Website Development",
      description:
        "We specialize in website design and development, offering everything from WordPress solutions to custom coding. We handle everything from domain and hosting setup to getting your site live. Let's bring your vision online seamlessly!",
      icon: <Globe className="h-6 w-6" />,
      color: "#4a0072",
      image:
        "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=2064&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    {
      id: "app-dev",
      number: "03",
      title: "App Development",
      description:
        "We create custom mobile applications for iOS and Android platforms that help businesses engage with their customers on the go. From concept to deployment, our app development team delivers intuitive, feature-rich applications that drive user engagement and business growth.",
      icon: <Smartphone className="h-6 w-6" />,
      color: "#4a0072",
      image:
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    {
      id: "seo",
      number: "04",
      title: "SEO",
      description:
        "Enhance your search visibility effortlessly. From custom coding optimizations to strategic keyword integration and fast hosting setups, we ensure your site ranks higher, attracts organic traffic, and keeps visitors engaged.",
      icon: <Search className="h-6 w-6" />,
      color: "#4a0072",
      image:
        "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    {
      id: "branding",
      number: "05",
      title: "Branding & Design",
      description:
        "Create a memorable brand presence! We develop cohesive visual identities, set up domains and hosting, and customize everything to reflect your brand's essence, building a strong foundation for customer trust and recognition.",
      icon: <Palette className="h-6 w-6" />,
      color: "#4a0072",
      image:
        "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    {
      id: "google-ads",
      number: "06",
      title: "Google Ads",
      description:
        "Maximize conversions with Google Ads. Our setup includes seamless hosting, fast-loading pages, and compelling ad copy that drives traffic to your site, helping you reach and engage your target audience effectively.",
      icon: <Target className="h-6 w-6" />,
      color: "#4a0072",
      image:
        "https://images.unsplash.com/photo-1579869847514-7c1a19d2d2ad?q=80&w=2034&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    {
      id: "content",
      number: "07",
      title: "Content Creation",
      description:
        "Engage and inform with quality content. From blog posts to product descriptions, we craft content that speaks to your audience, optimizing for readability and SEO. Complete with domain and hosting support if needed.",
      icon: <FileText className="h-6 w-6" />,
      color: "#4a0072",
      image:
        "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
  ]

  const activeServiceData = services.find((s) => s.id === activeService)

  return (
    <section className="py-20 bg-black">
      <div className="container">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 text-white">
              Our <span className="text-[var(--accent-color)]">Services</span> in Action
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Experience our digital solutions firsthand. Tap on any service to see how we bring your vision to life.
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <RevealOnScroll direction="left">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {services.map((service) => (
                <div
                  key={service.id}
                  className={`cursor-pointer p-4 rounded-xl transition-all duration-300 ${
                    activeService === service.id
                      ? "bg-[var(--accent-color)] text-white shadow-lg scale-105"
                      : "bg-gray-900 text-white hover:bg-gray-800"
                  }`}
                  onClick={() => setActiveService(service.id)}
                >
                  <div className="font-bold text-2xl mb-2">{service.number}</div>
                  <h3 className="font-medium text-sm sm:text-base">{service.title}</h3>
                </div>
              ))}
            </div>
          </RevealOnScroll>

          <RevealOnScroll direction="right" delay={0.2}>
            <AnimatePresence mode="wait">
              {/* Phone UI display */}
              <motion.div
                key={activeService}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <div className="relative mx-auto max-w-[300px]">
                  <div className="relative z-10">
                    <div className="relative border-[8px] border-black rounded-[40px] overflow-hidden shadow-xl">
                      <div className="absolute top-0 w-[40%] h-[30px] bg-black left-1/2 transform -translate-x-1/2 rounded-b-[16px] z-10" />

                      <div className="bg-[#0000aa] aspect-[9/16] overflow-hidden">
                        <div className="h-full w-full flex items-center justify-center relative">
                          <motion.img
                            src={activeServiceData?.image || "/placeholder.svg"}
                            alt={activeServiceData?.title}
                            className="w-full h-full object-cover"
                            initial={{ scale: 1.2 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.5 }}
                          />

                          <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary-color)]/80 to-transparent flex flex-col justify-between p-6 text-white">
                            <div>
                              <div className="text-5xl font-bold">{activeServiceData?.number}</div>
                              <div className="text-xl font-medium mt-2">{activeServiceData?.title}</div>
                            </div>

                            <div className="mt-auto">
                              <a
                                href={`/services/${activeServiceData?.id}`}
                                className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-full backdrop-blur-sm transition-colors inline-block"
                              >
                                Learn More
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-[40%] h-[4px] bg-black rounded-full" />
                    </div>
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute -top-6 -right-6 w-24 h-24 bg-[var(--accent-color)] rounded-full blur-xl opacity-20" />
                  <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-[var(--accent-color)] rounded-full blur-xl opacity-20" />
                </div>
              </motion.div>
            </AnimatePresence>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  )
}
