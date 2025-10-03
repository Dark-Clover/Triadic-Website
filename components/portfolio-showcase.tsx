"use client"

import { useState, useRef } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { ArrowRight, ExternalLink, Globe, Play, TrendingUp } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

// Define portfolio item type
type PortfolioItem = {
  id: string
  title: string
  subtitle: string
  description: string
  image: string
  logo?: string
  url: string
  tags: string[]
  category: string
  subcategory?: string
}

// Portfolio data organized by categories
const portfolioData = {
  websites: {
    "booking-appointments": [
      {
        id: "saleha-khan-healer",
        title: "Saleha Khan Healer",
        subtitle: "Therapy Session Booking Site",
        description:
          "A comprehensive therapy booking platform that allows clients to schedule sessions with certified healers and therapists.",
        image: "https://i.ibb.co/p6Bg9Rcy/saleha.png",
        url: "https://www.salehakhanhealer.com/",
        tags: ["Booking", "Therapy", "Healthcare"],
        category: "websites",
        subcategory: "booking-appointments",
      },
      {
        id: "airports-transfers",
        title: "The Airports Transfers Limited",
        subtitle: "UK Cab Booking Site",
        description: "Professional airport transfer booking system for reliable transportation services across the UK.",
        image: "https://i.ibb.co/xKWYRL8y/tatl-site.png",
        url: "https://www.theairportstransfer.co.uk/",
        tags: ["Transportation", "Booking", "UK"],
        category: "websites",
        subcategory: "booking-appointments",
      },
      {
        id: "reflections-rubina",
        title: "Reflections with Rubina",
        subtitle: "Therapy and Consultation Site",
        description:
          "A professional platform for therapy and consultation services with integrated booking functionality.",
        image: "https://i.ibb.co/67QLhhBh/rubina-gg.png",
        url: "https://reflectionswithrubina.com/",
        tags: ["Therapy", "Consultation", "Booking"],
        category: "websites",
        subcategory: "booking-appointments",
      },
      {
        id: "heart2heart",
        title: "Heart 2 Heart with Syed Ali Haider",
        subtitle: "Relationship Counseling Site",
        description:
          "Professional relationship counseling platform with appointment scheduling and consultation services.",
        image: "https://i.ibb.co/mrwprD1v/h2h-appointment.png",
        url: "https://heart2heartwithsyedalihaider.com/",
        tags: ["Counseling", "Relationships", "Appointments"],
        category: "websites",
        subcategory: "booking-appointments",
      },
    ],
    ecommerce: [
      {
        id: "savvy-perfumes",
        title: "Savvy",
        subtitle: "Luxury Perfumes Site",
        description:
          "Premium e-commerce platform for luxury perfumes and fragrances with elegant design and seamless shopping experience.",
        image: "https://i.ibb.co/4Zg2tvbY/savvvyy.png",
        url: "https://www.alfredverne.com/",
        tags: ["E-commerce", "Luxury", "Perfumes"],
        category: "websites",
        subcategory: "ecommerce",
      },
      {
        id: "ruby-artistry",
        title: "Ruby Artistry",
        subtitle: "Art Showcase and Store",
        description:
          "Beautiful art showcase platform with integrated e-commerce functionality for purchasing original artworks.",
        image: "https://i.ibb.co/m5J8NJSW/rubyy.png",
        url: "https://rubysartistry.com/",
        tags: ["Art", "E-commerce", "Gallery"],
        category: "websites",
        subcategory: "ecommerce",
      },
      {
        id: "black-suits",
        title: "Black Suits",
        subtitle: "EMS Studio in Dubai",
        description:
          "Innovative fitness studio offering 40-minute wireless EMS training sessions with modern booking system.",
        image: "https://i.ibb.co/ccWxbRJz/black-suits.png",
        url: "https://blacksuitems.ae/",
        tags: ["Fitness", "EMS", "Dubai"],
        category: "websites",
        subcategory: "ecommerce",
      },
      {
        id: "baba-fareed-suitings",
        title: "Baba Fareed Suitings",
        subtitle: "Premium Men Luxury Suits",
        description: "Elegant e-commerce platform for premium men's luxury suits with custom tailoring services.",
        image: "https://i.ibb.co/mVGzJ35n/baba.png",
        url: "https://www.babafareedsuitings.com/",
        tags: ["Fashion", "Luxury", "Suits"],
        category: "websites",
        subcategory: "ecommerce",
      },
      {
        id: "ak-gaming-store",
        title: "AK Gaming Store",
        subtitle: "Gaming PC and Equipment Store",
        description: "Comprehensive gaming equipment store featuring high-performance PCs and gaming accessories.",
        image: "https://i.ibb.co/gpW7wNy/ak-gaming.png",
        url: "https://akgamingstore.com/",
        tags: ["Gaming", "PC", "Equipment"],
        category: "websites",
        subcategory: "ecommerce",
      },
      {
        id: "organic-magic",
        title: "Organic Magic",
        subtitle: "Hair Care Products Store",
        description: "Natural hair care products e-commerce platform with organic and sustainable beauty solutions.",
        image: "https://i.ibb.co/6Jw34ghR/organic.png",
        url: "https://organic-magic.com/",
        tags: ["Beauty", "Organic", "Hair Care"],
        category: "websites",
        subcategory: "ecommerce",
      },
      {
        id: "ocia",
        title: "Ocia",
        subtitle: "Women Clothing",
        description: "Modern women's fashion e-commerce platform with trendy clothing and accessories.",
        image: "https://i.ibb.co/Tx10w5hZ/ocia.png",
        url: "https://www.ocia.store/",
        tags: ["Fashion", "Women", "Clothing"],
        category: "websites",
        subcategory: "ecommerce",
      },
    ],
    portfolios: [
      {
        id: "anees-antapur",
        title: "Anees Antapur",
        subtitle: "Personal Brand Website",
        description: "A sophisticated personal brand website for entrepreneur and real estate investor Anees Antapur.",
        image: "https://i.ibb.co/t9rvzj2/anees-port.png",
        url: "https://aneeskingsmen.com/",
        tags: ["Personal Brand", "Real Estate", "Entrepreneur"],
        category: "websites",
        subcategory: "portfolios",
      },
      {
        id: "milo-match",
        title: "Milo Match",
        subtitle: "Matchmaking App Web Presence",
        description: "Professional web presence for a modern matchmaking application with elegant design.",
        image: "https://i.ibb.co/HZBRnGr/milo.png",
        url: "https://milomatch.com/",
        tags: ["Matchmaking", "App", "Dating"],
        category: "websites",
        subcategory: "portfolios",
      },
      {
        id: "tbh-magazine",
        title: "TBH",
        subtitle: "The Big Hustler Magazine Site",
        description: "Dynamic magazine website showcasing entrepreneurial stories and business insights.",
        image: "https://i.ibb.co/TVj89bG/tbhh.png",
        url: "https://www.thebighustler.com/",
        tags: ["Magazine", "Business", "Entrepreneurship"],
        category: "websites",
        subcategory: "portfolios",
      },
    ],
    courses: [
      {
        id: "h2h-courses",
        title: "H2H Courses",
        subtitle: "Premium Online Learning Platform",
        description:
          "A premium online learning platform offering self-paced courses on relationship intelligence and personal development.",
        image: "https://i.ibb.co/bRm1FmX7/h2h-courses.png",
        url: "https://h2hcourses.com/",
        tags: ["Education", "Courses", "Personal Development"],
        category: "websites",
        subcategory: "courses",
      },
    ],
    "real-estate": [
      {
        id: "kingsmen-realestate",
        title: "Kingsmen Real Estate",
        subtitle: "Real Estate Website",
        description: "Professional real estate platform showcasing premium properties and investment opportunities.",
        image: "https://i.ibb.co/bjsCt4yb/kingsmen.png",
        url: "https://kingsmenrealestate.com/",
        tags: ["Real Estate", "Properties", "Investment"],
        category: "websites",
        subcategory: "real-estate",
      },
    ],
  },
  "video-editing": [
    // Placeholder for video editing projects
    {
      id: "video-project-1",
      title: "Coming Soon",
      subtitle: "Video Editing Projects",
      description: "Our video editing portfolio will be showcased here soon.",
      image: "https://i.ibb.co/bjsCt4yb/kingsmen.png",
      url: "#",
      tags: ["Video", "Editing", "Production"],
      category: "video-editing",
    },
  ],
  "lead-generation": [
    // Placeholder for lead generation projects
    {
      id: "lead-gen-1",
      title: "Property First",
      subtitle: "Lead Generation Campaigns",
      description: "Enchanced Sales through Digital marketing and Lead Generation strategies",
      image: "https://i.ibb.co/vxDWL5qG/property-first-realty-llp-logo.png",
      url: "#",
      tags: ["Lead Generation", "Marketing", "Campaigns"],
      category: "lead-generation",
    },
    {
      id: "lead-gen-2",
      title: "KMG",
      subtitle: "Lead Generation Campaigns",
      description: "Enchanced Sales through Digital marketing and Lead Generation strategies",
      image: "https://i.ibb.co/Ppg12zw/2.png",
      url: "#",
      tags: ["Lead Generation", "Marketing", "Campaigns"],
      category: "lead-generation",
    },
    {
      id: "lead-gen-3",
      title: "Kingsmen",
      subtitle: "Lead Generation Campaigns",
      description: "Enchanced Sales through Digital marketing and Lead Generation strategies",
      image: "https://i.ibb.co/zW28q9Gw/4.png",
      url: "#",
      tags: ["Lead Generation", "Marketing", "Campaigns"],
      category: "lead-generation",
    },
    {
      id: "lead-gen-4",
      title: "DAMAC",
      subtitle: "Lead Generation Campaigns",
      description: "Enchanced Sales through Digital marketing and Lead Generation strategies",
      image: "https://i.ibb.co/wrQg7RCV/3.png",
      url: "#",
      tags: ["Lead Generation", "Marketing", "Campaigns"],
      category: "lead-generation",
    },
    {
      id: "lead-gen-5",
      title: "SOBHA",
      subtitle: "Lead Generation Campaigns",
      description: "Enchanced Sales through Digital marketing and Lead Generation strategies",
      image: "https://i.ibb.co/tMQgB8c8/sobha.png",
      url: "#",
      tags: ["Lead Generation", "Marketing", "Campaigns"],
      category: "lead-generation",
    },
    {
      id: "lead-gen-6",
      title: "Heart of Europe",
      subtitle: "Lead Generation Campaigns",
      description: "Enchanced Sales through Digital marketing and Lead Generation strategies",
      image: "https://i.ibb.co/60dQY2Z6/heart-of-europe.png",
      url: "#",
      tags: ["Lead Generation", "Marketing", "Campaigns"],
      category: "lead-generation",
    },

    
  ],
}

export default function PortfolioShowcase() {
  const [activeCategory, setActiveCategory] = useState("websites")
  const [activeSubcategory, setActiveSubcategory] = useState("booking-appointments")
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [1, 1, 1, 0])

  const categories = [
    { id: "websites", name: "Websites", icon: Globe },
    { id: "video-editing", name: "Video Editing", icon: Play },
    { id: "lead-generation", name: "Lead Generation", icon: TrendingUp },
  ]

  const websiteSubcategories = [
    { id: "booking-appointments", name: "Booking & Appointments" },
    { id: "ecommerce", name: "E-commerce Stores" },
    { id: "portfolios", name: "Portfolios/Others" },
    { id: "courses", name: "Course Platforms" },
    { id: "real-estate", name: "Real Estate" },
  ]

  const getCurrentItems = () => {
    if (activeCategory === "websites") {
      return portfolioData.websites[activeSubcategory as keyof typeof portfolioData.websites] || []
    }
    return portfolioData[activeCategory as keyof typeof portfolioData] as PortfolioItem[]
  }

  return (
    <section className="relative min-h-screen bg-black text-white overflow-hidden pt-20 md:pt-24">
      {/* Hero Section */}
      <motion.div
        ref={containerRef}
        style={{ opacity }}
        className="relative h-[90vh] flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black z-10"></div>
          <motion.div
            className="w-full h-full"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            {/* Animated background */}
            <div className="absolute inset-0 overflow-hidden">
              {Array.from({ length: 20 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-full"
                  style={{
                    width: `${Math.random() * 300 + 50}px`,
                    height: `${Math.random() * 300 + 50}px`,
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    background: `radial-gradient(circle, rgba(74, 0, 114, 0.7) 0%, rgba(74, 0, 114, 0) 70%)`,
                    opacity: 0.3 + Math.random() * 0.3,
                  }}
                  animate={{
                    x: [0, Math.random() * 100 - 50],
                    y: [0, Math.random() * 100 - 50],
                  }}
                  transition={{
                    duration: 15 + Math.random() * 15,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mb-6 inline-block"
            >
              <div className="text-sm uppercase tracking-[0.25em] font-medium text-white bg-gradient-to-r from-[#4a0072]/80 via-[#9c27b0]/60 to-[#4a0072]/80 backdrop-blur-sm px-6 py-2.5 rounded-full inline-flex items-center gap-2 border border-white/20 shadow-[0_0_15px_rgba(156,39,176,0.3)]">
                <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
                Our Creative Portfolio
                <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
              </div>
            </motion.div>

            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-300 to-white">
              Our Work
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Showcasing digital excellence through innovative design and strategic implementation
            </p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="flex justify-center gap-4 flex-wrap"
            >
              <Link
                href="#portfolio-categories"
                className="group relative overflow-hidden rounded-full bg-white/10 backdrop-blur-md px-8 py-4 text-white font-medium text-lg hover:bg-white/20 transition-all duration-300"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Explore our projects
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
                  >
                    <ArrowRight className="h-5 w-5" />
                  </motion.span>
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#4a0072]/40 to-[#9c27b0]/40"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.4 }}
                />
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
        >
          <div className="w-8 h-12 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
            <motion.div
              className="w-1 h-3 bg-white rounded-full"
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, delay: 0.2 }}
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Portfolio Categories */}
      <section id="portfolio-categories" className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#1a0029] to-black opacity-50 z-0"></div>

        <div className="container relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="text-sm uppercase tracking-widest text-[#9c27b0] mb-2">Portfolio</div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Work Categories</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Explore our diverse portfolio across different service categories
              </p>
            </div>

            {/* Category Navigation */}
            <div className="flex justify-center mb-12">
              <div className="flex flex-wrap gap-4 p-2 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10">
                {categories.map((category) => {
                  const IconComponent = category.icon
                  return (
                    <button
                      key={category.id}
                      onClick={() => {
                        setActiveCategory(category.id)
                        if (category.id === "websites") {
                          setActiveSubcategory("booking-appointments")
                        }
                      }}
                      className={cn(
                        "flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300",
                        activeCategory === category.id
                          ? "bg-[#4a0072] text-white shadow-lg"
                          : "text-gray-300 hover:text-white hover:bg-white/10",
                      )}
                    >
                      <IconComponent className="h-5 w-5" />
                      {category.name}
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Website Subcategories */}
            {activeCategory === "websites" && (
              <div className="flex justify-center mb-12">
                <div className="flex flex-wrap gap-2 p-2 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10">
                  {websiteSubcategories.map((subcategory) => (
                    <button
                      key={subcategory.id}
                      onClick={() => setActiveSubcategory(subcategory.id)}
                      className={cn(
                        "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300",
                        activeSubcategory === subcategory.id
                          ? "bg-[#9c27b0] text-white"
                          : "text-gray-400 hover:text-white hover:bg-white/10",
                      )}
                    >
                      {subcategory.name}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Portfolio Grid */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`${activeCategory}-${activeSubcategory}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {getCurrentItems().map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group relative bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300"
                  >
                    <div className="relative h-64 overflow-hidden">
                      <motion.img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                        initial={{ scale: 1 }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.5 }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                        <div className="p-6 w-full">
                          <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                          <p className="text-white/80 text-sm">{item.subtitle}</p>
                        </div>
                      </div>
                    </div>

                    <div className="p-6">
                      <p className="text-gray-300 text-sm mb-4 line-clamp-3">{item.description}</p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {item.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 bg-white/5 text-white/70 text-xs font-medium rounded-full border border-white/10"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex gap-3">
                        {item.url !== "#" && (
                          <a
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 px-4 py-2.5 bg-[#4a0072] text-white text-sm rounded-lg font-medium hover:bg-[#3a0058] transition-colors flex items-center justify-center gap-2"
                          >
                            <ExternalLink className="h-4 w-4" />
                            Live Demo
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Hover effect */}
                    <motion.div
                      className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        background: `radial-gradient(circle at center, rgba(74, 0, 114, 0.3) 0%, transparent 70%)`,
                      }}
                    />
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>

            {/* Empty State */}
            {getCurrentItems().length === 0 && (
              <div className="text-center py-20">
                <div className="text-6xl mb-4">🚧</div>
                <h3 className="text-2xl font-bold text-white mb-2">Coming Soon</h3>
                <p className="text-gray-400">This section is under construction. Check back soon!</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </section>
  )
}
