"use client"

import { useState, useRef, useEffect } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { ArrowRight, ChevronLeft, ChevronRight, X, ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

// Define portfolio item type
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
  color: string
}

// Portfolio data
const portfolioItems: PortfolioItem[] = [
  {
    id: "damac",
    title: "DAMAC Properties",
    subtitle: "Real Estate Lead Generation",
    description:
      "Strategic digital marketing campaign for DAMAC Properties focused on generating high-quality real estate leads in the luxury market.",
    image: "/damac-logo.png",
    logo: "/damac-logo.png",
    url: "#",
    tags: ["Real Estate", "Lead Generation", "Digital Marketing"],
    services: ["Social Media Marketing", "Google Ads", "Landing Page Optimization"],
    challenge:
      "Generate qualified leads for luxury real estate properties in a highly competitive market while maintaining a reasonable cost per acquisition.",
    solution:
      "We implemented a multi-channel digital marketing strategy with targeted ads, optimized landing pages, and sophisticated lead qualification processes.",
    results: [
      "Generated 200+ qualified leads monthly",
      "Reduced cost per acquisition by 35%",
      "Increased conversion rate by 28%",
    ],
    color: "#c8a45c",
  },
  {
    id: "blacksuit",
    title: "BlackSuit EMS",
    subtitle: "Fitness Technology Brand",
    description:
      "Complete digital presence and marketing strategy for BlackSuit, an innovative EMS (Electrical Muscle Stimulation) fitness technology brand.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-2nAxLwfZO0ItGzWbq09iih8kjncKox.png",
    logo: "/blacksuit-logo.png",
    url: "https://blacksuit.ae/",
    tags: ["Fitness", "Technology", "Lifestyle"],
    services: ["Brand Strategy", "Web Development", "Social Media Marketing"],
    challenge:
      "Launch a new fitness technology brand in a competitive market and establish it as a premium solution for efficient workouts.",
    solution:
      "We created a comprehensive digital strategy including a high-converting website, compelling brand messaging, and targeted social media campaigns highlighting the unique benefits of EMS training.",
    results: [
      "Achieved 150% growth in monthly memberships",
      "Established brand presence in 3 major cities",
      "Generated 500+ qualified leads in first quarter",
    ],
    color: "#ff7700",
  },
  {
    id: "h2h-courses",
    title: "Heart 2 Heart Courses",
    subtitle: "Educational Platform",
    description:
      "A premium online learning platform offering self-paced courses on relationship intelligence and personal development.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/h2h-cqYNg2zEFekzxFwMLNNL2g38UtBrCL.png",
    logo: "/heart-2-heart-logo.png",
    url: "https://h2hcourses.com/",
    tags: ["Education", "E-Learning", "Personal Development"],
    services: ["Web Development", "UI/UX Design", "Content Management System"],
    challenge:
      "Create an elegant, user-friendly platform for delivering premium educational content with secure payment processing and course management.",
    solution:
      "We developed a custom learning management system with an intuitive interface, seamless payment integration, and responsive design to ensure accessibility across all devices.",
    results: [
      "50% increase in course completion rates",
      "35% growth in student enrollment",
      "Reduced support tickets by 40% due to improved UX",
    ],
    color: "#e57373",
  },
  {
    id: "anees-kingsmen",
    title: "Anees Kingsmen",
    subtitle: "Professional Portfolio",
    description: "A sophisticated personal brand website for entrepreneur and real estate investor Anees Antapur.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/kingsmen-jgk5gTMf72HcH2tOD0xsPB2tg8ZPJS.png",
    logo: "/kingsmen-real-estate-logo.png",
    url: "https://aneeskingsmen.com/",
    tags: ["Real Estate", "Personal Brand", "Luxury"],
    services: ["Brand Strategy", "Web Design", "Content Creation"],
    challenge:
      "Develop a premium personal brand website that reflects the luxury real estate market while showcasing the founder's expertise and vision.",
    solution:
      "We created a sleek, dark-themed website with gold accents that embodies luxury and professionalism, featuring custom animations and a sophisticated user experience.",
    results: [
      "200% increase in investor inquiries",
      "Featured in top real estate publications",
      "Strengthened brand positioning in luxury market",
    ],
    color: "#ffd700",
  },
  {
    id: "nano-trader",
    title: "Nano Trader",
    subtitle: "E-Commerce Platform",
    description:
      "A modern e-commerce website selling cutting-edge technology products with an intuitive shopping experience.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nanotech-52atRzaIZOh62cXF682ZqqSgjs8vC6.png",
    logo: "/nano-trader-logo.png",
    url: "https://nanotrader.co.uk/",
    tags: ["E-Commerce", "Technology", "Retail"],
    services: ["E-Commerce Development", "Payment Integration", "SEO Optimization"],
    challenge:
      "Build a high-converting e-commerce platform with advanced filtering, search capabilities, and seamless checkout process for tech products.",
    solution:
      "We implemented a custom e-commerce solution with optimized product categorization, advanced search functionality, and a streamlined checkout process to maximize conversions.",
    results: ["75% increase in conversion rate", "45% reduction in cart abandonment", "3x growth in monthly revenue"],
    color: "#7986cb",
  },
]

export default function PortfolioShowcase() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [1, 1, 1, 0])

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % portfolioItems.length)
  }

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + portfolioItems.length) % portfolioItems.length)
  }

  const openCaseStudy = (item: PortfolioItem) => {
    setSelectedItem(item)
    setIsModalOpen(true)
    document.body.style.overflow = "hidden"
  }

  const closeCaseStudy = () => {
    setIsModalOpen(false)
    document.body.style.overflow = "auto"
  }

  // Add keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") handleNext()
      if (e.key === "ArrowLeft") handlePrev()
      if (e.key === "Escape" && isModalOpen) closeCaseStudy()
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isModalOpen])

  return (
    <section className="relative min-h-screen bg-black text-white overflow-hidden pt-24">
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
                href="#featured-work"
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

              <a
                href="/triadic-marketing-overview.pdf"
                download
                className="group relative overflow-hidden rounded-full bg-white px-8 py-4 text-[#4a0072] font-medium text-lg hover:bg-white/90 transition-all duration-300 flex items-center gap-2"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Download Brochure
                  <motion.span
                    animate={{ y: [0, -3, 0] }}
                    transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-download"
                    >
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                      <polyline points="7 10 12 15 17 10"></polyline>
                      <line x1="12" y1="15" x2="12" y2="3"></line>
                    </svg>
                  </motion.span>
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#9c27b0]/10 to-[#4a0072]/10"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.4 }}
                />
              </a>
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

      {/* Featured Work Carousel */}
      <section id="featured-work" className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#1a0029] to-black opacity-50 z-0"></div>

        <div className="container relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
              <div>
                <div className="text-sm uppercase tracking-widest text-[#9c27b0] mb-2">Showcase</div>
                <h2 className="text-4xl md:text-5xl font-bold text-white">Featured Projects</h2>
              </div>
              <p className="text-gray-400 max-w-md mt-4 md:mt-0">
                Explore our most impactful digital solutions that have transformed businesses and elevated brands.
              </p>
            </div>

            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.5 }}
                  className="grid md:grid-cols-2 gap-12 items-center"
                >
                  <div className="order-2 md:order-1">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                      className="flex items-center gap-4 mb-6"
                    >
                      <div
                        className="p-3 rounded-xl"
                        style={{ backgroundColor: `${portfolioItems[activeIndex].color}20` }}
                      >
                        <img
                          src={portfolioItems[activeIndex].logo || "/placeholder.svg"}
                          alt={`${portfolioItems[activeIndex].title} logo`}
                          className="h-10 w-auto object-contain"
                        />
                      </div>
                      <div>
                        <h3 className="text-3xl md:text-4xl font-bold text-white">
                          {portfolioItems[activeIndex].title}
                        </h3>
                        <p className="text-[#9c27b0] font-medium">{portfolioItems[activeIndex].subtitle}</p>
                      </div>
                    </motion.div>

                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                      className="text-gray-300 text-lg mb-8"
                    >
                      {portfolioItems[activeIndex].description}
                    </motion.p>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4, duration: 0.5 }}
                      className="flex flex-wrap gap-2 mb-8"
                    >
                      {portfolioItems[activeIndex].tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-4 py-1.5 bg-white/10 text-white text-sm font-medium rounded-full border border-white/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5, duration: 0.5 }}
                      className="flex flex-wrap gap-4"
                    >
                      <button
                        onClick={() => openCaseStudy(portfolioItems[activeIndex])}
                        className="group relative overflow-hidden px-8 py-3 bg-white text-[#4a0072] rounded-full hover:bg-white/90 transition-all font-medium"
                      >
                        <span className="relative z-10 flex items-center gap-2">
                          View Case Study
                          <ArrowUpRight className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </span>
                      </button>
                    </motion.div>
                  </div>

                  <motion.div
                    className="order-1 md:order-2 relative"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                      <div
                        className="absolute inset-0 z-10 opacity-70"
                        style={{
                          background: `linear-gradient(to bottom, transparent, ${portfolioItems[activeIndex].color}90)`,
                        }}
                      ></div>
                      <motion.img
                        src={portfolioItems[activeIndex].image || "/placeholder.svg"}
                        alt={portfolioItems[activeIndex].title}
                        className="w-full h-auto object-cover"
                        initial={{ scale: 1 }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.5 }}
                      />

                      {/* Decorative elements */}
                      <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md p-2 rounded-full">
                        <div
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: portfolioItems[activeIndex].color }}
                        ></div>
                      </div>
                    </div>

                    {/* Glow effect */}
                    <div
                      className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[80%] h-[40px] rounded-full blur-3xl z-0"
                      style={{ backgroundColor: portfolioItems[activeIndex].color }}
                    ></div>
                  </motion.div>
                </motion.div>
              </AnimatePresence>

              <div className="flex justify-center mt-16 gap-6">
                <button
                  onClick={handlePrev}
                  className="p-4 rounded-full bg-white/5 hover:bg-white/15 border border-white/20 transition-colors group"
                  aria-label="Previous project"
                >
                  <ChevronLeft className="h-6 w-6 text-white group-hover:scale-110 transition-transform" />
                </button>

                <div className="flex items-center gap-3">
                  {portfolioItems.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveIndex(index)}
                      className={cn(
                        "transition-all duration-300",
                        index === activeIndex
                          ? "w-12 h-3 bg-white rounded-full"
                          : "w-3 h-3 bg-white/30 rounded-full hover:bg-white/50",
                      )}
                      aria-label={`Go to project ${index + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={handleNext}
                  className="p-4 rounded-full bg-white/5 hover:bg-white/15 border border-white/20 transition-colors group"
                  aria-label="Next project"
                >
                  <ChevronRight className="h-6 w-6 text-white group-hover:scale-110 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Projects Grid */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-[#0a0014] z-0"></div>

        <div className="container relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <div className="text-sm uppercase tracking-widest text-[#9c27b0] mb-2">Our Work</div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">All Projects</h2>
              <div className="max-w-2xl mx-auto">
                <p className="text-gray-400">
                  Explore our complete portfolio of digital projects that showcase our expertise across various
                  industries and technologies.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {portfolioItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className="relative h-64 overflow-hidden">
                    <motion.img
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      className="w-full h-full object-cover object-top"
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.5 }}
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-black to-transparent flex items-end"
                      style={{
                        background:
                          hoveredIndex === index
                            ? `linear-gradient(to top, black, ${item.color}50, transparent)`
                            : "linear-gradient(to top, black, transparent)",
                      }}
                    >
                      <div className="p-6 w-full">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="p-2 rounded-lg bg-white/10">
                            <img
                              src={item.logo || "/placeholder.svg"}
                              alt={`${item.title} logo`}
                              className="h-6 w-auto object-contain"
                            />
                          </div>
                          <h3 className="text-xl font-bold text-white">{item.title}</h3>
                        </div>
                        <p className="text-white/80 text-sm">{item.subtitle}</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-6">
                      {item.services.slice(0, 2).map((service) => (
                        <span
                          key={service}
                          className="px-3 py-1 bg-white/5 text-white/70 text-xs font-medium rounded-full border border-white/10"
                        >
                          {service}
                        </span>
                      ))}
                      {item.services.length > 2 && (
                        <span className="px-3 py-1 bg-white/5 text-white/70 text-xs font-medium rounded-full border border-white/10">
                          +{item.services.length - 2} more
                        </span>
                      )}
                    </div>

                    <div className="flex gap-3">
                      <button
                        onClick={() => openCaseStudy(item)}
                        className="w-full px-4 py-2.5 bg-white text-[#4a0072] text-sm rounded-lg font-medium hover:bg-white/90 transition-colors"
                      >
                        Case Study
                      </button>
                    </div>
                  </div>

                  {/* Hover effect */}
                  <motion.div
                    className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: `radial-gradient(circle at center, ${item.color}30 0%, transparent 70%)`,
                    }}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Modal */}
      <AnimatePresence>
        {isModalOpen && selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
          >
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={closeCaseStudy}></div>

            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative bg-[#0a0014] border border-white/10 rounded-2xl overflow-hidden w-full max-w-6xl max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={closeCaseStudy}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10"
              >
                <X className="h-6 w-6 text-white" />
              </button>

              <div className="relative h-[40vh] overflow-hidden">
                <div
                  className="absolute inset-0 z-10"
                  style={{
                    background: `linear-gradient(to bottom, transparent, ${selectedItem.color}90, #0a0014)`,
                  }}
                ></div>
                <img
                  src={selectedItem.image || "/placeholder.svg"}
                  alt={selectedItem.title}
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute bottom-0 left-0 p-8 z-20">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="p-3 rounded-xl bg-white/10 backdrop-blur-md">
                      <img
                        src={selectedItem.logo || "/placeholder.svg"}
                        alt={`${selectedItem.title} logo`}
                        className="h-10 w-auto object-contain"
                      />
                    </div>
                    <div>
                      <h2 className="text-3xl md:text-4xl font-bold text-white">{selectedItem.title}</h2>
                      <p className="text-white/80">{selectedItem.subtitle}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="md:col-span-2">
                    <h3 className="text-xl font-bold text-white mb-4">Overview</h3>
                    <p className="text-gray-300 mb-8">{selectedItem.description}</p>

                    <div className="mb-8">
                      <h3 className="text-xl font-bold text-white mb-4">The Challenge</h3>
                      <p className="text-gray-300">{selectedItem.challenge}</p>
                    </div>

                    <div className="mb-8">
                      <h3 className="text-xl font-bold text-white mb-4">Our Solution</h3>
                      <p className="text-gray-300">{selectedItem.solution}</p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-white mb-4">Results</h3>
                      <ul className="space-y-2">
                        {selectedItem.results.map((result, index) => (
                          <li key={index} className="flex items-start gap-2 text-gray-300">
                            <div
                              className="mt-1.5 h-2 w-2 rounded-full"
                              style={{ backgroundColor: selectedItem.color }}
                            ></div>
                            <span>{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div>
                    <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                      <h3 className="text-xl font-bold text-white mb-4">Project Details</h3>

                      <div className="space-y-6">
                        <div>
                          <h4 className="text-sm uppercase tracking-wider text-gray-400 mb-2">Services Provided</h4>
                          <div className="flex flex-wrap gap-2">
                            {selectedItem.services.map((service) => (
                              <span
                                key={service}
                                className="px-3 py-1 bg-white/10 text-white text-xs font-medium rounded-full"
                              >
                                {service}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="text-sm uppercase tracking-wider text-gray-400 mb-2">Categories</h4>
                          <div className="flex flex-wrap gap-2">
                            {selectedItem.tags.map((tag) => (
                              <span
                                key={tag}
                                className="px-3 py-1 bg-white/5 text-white/80 text-xs font-medium rounded-full border border-white/10"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
