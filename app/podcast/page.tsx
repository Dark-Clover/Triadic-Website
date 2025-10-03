"use client"

import { motion } from "framer-motion"
import {
  Mic,
  Headphones,
  Video,
  PenTool,
  Lightbulb,
  Shield,
  Zap,
  Users,
  Star,
  Check,
  Calendar,
  TrendingUp,
  Award,
  MessageCircle,
  ChevronDown,
  Clock,
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Volume2,
  BarChart3,
  Globe,
  ArrowRight,
  MapPin,
} from "lucide-react"
import RevealOnScroll from "@/components/scroll-reveal"
import InteractiveNavbar from "@/components/interactive-navbar"
import Footer from "@/components/footer"
import { cn } from "@/lib/utils"
import { useState } from "react"
import { LocalBusinessSchema } from './local-business-schema'

const PodcastPage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const faqData = [
    {
      question: "How long does it take to produce a podcast episode?",
      answer:
        "A typical episode takes 2-3 weeks from recording to final delivery. This includes recording, editing, mastering, and distribution setup.",
    },
    {
      question: "Do you provide equipment for remote recordings?",
      answer:
        "Yes, we can provide professional recording equipment for remote sessions and guide you through optimal setup for the best audio quality.",
    },
    {
      question: "Can you help with podcast marketing and growth?",
      answer:
        "We offer comprehensive marketing services including social media promotion, SEO optimization, and audience growth strategies.",
    },
    {
      question: "What formats do you support for distribution?",
      answer:
        "We prepare your podcast for all major platforms including Spotify, Apple Podcasts, Google Podcasts, and YouTube with optimized formats.",
    },
    {
      question: "Do you offer ongoing support after production?",
      answer:
        "Yes, we provide ongoing consultation, analytics tracking, and support to help your podcast grow and succeed long-term.",
    },
  ]

  const podcastCategories = [
    {
      title: "Business & Entrepreneurship",
      description: "Startup stories, business insights, and entrepreneurial journeys with real-world examples",
      icon: (
        <div className="relative">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <TrendingUp className="w-5 h-5 text-white" />
          </div>
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
        </div>
      ),
      episodes: "12+ Episodes",
      duration: "45-60 min",
    },
    {
      title: "Technology & Innovation",
      description: "Cutting-edge tech discussions, AI insights, and digital transformation stories",
      icon: (
        <div className="relative">
          <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
            <Zap className="w-5 h-5 text-white" />
          </div>
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
        </div>
      ),
      episodes: "18+ Episodes",
      duration: "30-45 min",
    },
    {
      title: "Health & Wellness",
      description: "Mental health, fitness tips, and holistic wellness conversations",
      icon: (
        <div className="relative">
          <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-teal-600 rounded-lg flex items-center justify-center">
            <Lightbulb className="w-5 h-5 text-white" />
          </div>
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
        </div>
      ),
      episodes: "25+ Episodes",
      duration: "40-55 min",
    },
    {
      title: "Entertainment & Culture",
      description: "Movie reviews, cultural discussions, and entertainment industry insights",
      icon: (
        <div className="relative">
          <div className="w-8 h-8 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-lg flex items-center justify-center">
            <Star className="w-5 h-5 text-white" />
          </div>
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-400 rounded-full animate-pulse"></div>
        </div>
      ),
      episodes: "15+ Episodes",
      duration: "35-50 min",
    },
  ]

  const successMetrics = [
    { number: "25+", label: "Episodes Produced", icon: <Mic className="w-6 h-6" /> },
    { number: "12+", label: "Happy Clients", icon: <Users className="w-6 h-6" /> },
    { number: "50K+", label: "Total Downloads", icon: <TrendingUp className="w-6 h-6" /> },
    { number: "5.0", label: "Client Rating", icon: <Star className="w-6 h-6" /> },
  ]

  return (
    <>

              <InteractiveNavbar />
        
        {/* Local Business Schema */}
        <LocalBusinessSchema />
        
        {/* Enhanced Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Triadic Media Podcast Studio",
              "description": "Best podcast studio in Islamabad, centrally located in Blue Area near Centaurus Mall. Professional 24-bit audio recording with expert engineers.",
              "url": "https://triadicmedia.com/podcast",
              "telephone": "+923311148881",
              "email": "info@triadicmedia.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Blue Area",
                "addressLocality": "Islamabad",
                "addressRegion": "Islamabad Capital Territory",
                "postalCode": "44000",
                "addressCountry": "PK"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 33.7000,
                "longitude": 73.0000
              },
              "openingHours": "Mo-Su 00:00-23:59",
              "priceRange": "$$",
              "currenciesAccepted": "PKR, USD, AED",
              "paymentAccepted": "Cash, Credit Card, Bank Transfer",
              "areaServed": ["Islamabad", "Rawalpindi", "Pakistan", "Blue Area", "F-7", "F-8", "F-6", "G-8", "G-9"],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Podcast Production Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Professional Podcast Recording",
                      "description": "Studio recording with 24-bit audio quality, professional microphones, and soundproofing"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Audio Engineering & Mastering",
                      "description": "Expert audio editing, mixing, and mastering for broadcast-ready quality"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Content Strategy & Marketing",
                      "description": "Podcast content planning, distribution, and marketing strategies"
                    }
                  }
                ]
              },
              "sameAs": [
                "https://facebook.com/triadicmedia",
                "https://twitter.com/triadicmedia",
                "https://instagram.com/triadicmedia"
              ],
              "image": "https://i.ibb.co/C3frKdzY/Gear-Podcast-Gear-1327244548.png",
              "logo": "https://i.ibb.co/C3frKdzY/Gear-Podcast-Gear-1327244548.png"
            })
          }}
        />
        
        {/* Additional Podcast Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Podcast",
              "name": "Triadic Podcast - Best Podcast Studio in Islamabad",
              "description": "Professional podcast production studio in Islamabad with state-of-the-art equipment, expert audio engineers, and comprehensive services.",
              "publisher": {
                "@type": "Organization",
                "name": "Triadic Media",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://i.ibb.co/C3frKdzY/Gear-Podcast-Gear-1327244548.png"
                }
              },
              "image": "https://i.ibb.co/C3frKdzY/Gear-Podcast-Gear-1327244548.png",
              "url": "https://triadicmedia.com/podcast",
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://triadicmedia.com/podcast"
              },
              "genre": "Business, Technology, Wellness, Entertainment",
              "keywords": "podcast production, podcast studio, Islamabad, professional podcast, audio production, podcast editing, podcast marketing",
              "inLanguage": "en-US",
              "isFamilyFriendly": true,
              "location": {
                "@type": "Place",
                "name": "Triadic Media Podcast Studio",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Islamabad",
                  "addressRegion": "Islamabad Capital Territory",
                  "addressCountry": "PK",
                  "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": 33.7000,
                    "longitude": 73.0000
                  }
                }
              },
              "hasPart": [
                {
                  "@type": "Episode",
                  "name": "The Future of AI in Business",
                  "description": "Exploring how artificial intelligence is transforming business operations and decision-making processes.",
                  "url": "https://triadicmedia.com/episodes/ai-business",
                  "duration": "PT42M15S",
                  "isFamilyFriendly": true,
                  "thumbnail": "https://i.ibb.co/C3frKdzY/Gear-Podcast-Gear-1327244548.png",
                  "uploadDate": "2023-01-01",
                  "author": {
                    "@type": "Person",
                    "name": "Sarah Chen"
                  },
                  "publisher": {
                    "@type": "Organization",
                    "name": "Triadic Media"
                  }
                }
              ]
            })
          }}
        />
        
        <div className="min-h-screen bg-black">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://i.ibb.co/C3frKdzY/Gear-Podcast-Gear-1327244548.png"
              alt="Professional Podcast Studio in Islamabad Blue Area - Best Audio Recording Studio with 24-bit Quality"
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/90" />
          </div>

          {/* Animated Background Elements */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            {/* Floating Audio Waves */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0.1, 0.3, 0.1],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 4 + i * 0.5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: i * 0.3,
                }}
                className="absolute"
                style={{
                  left: `${10 + i * 10}%`,
                  top: `${20 + i * 8}%`,
                }}
              >
                <div className="flex items-end space-x-1 h-16">
                  {[...Array(5)].map((_, j) => (
                    <motion.div
                      key={j}
                      animate={{
                        height: [20, 60, 20],
                      }}
                      transition={{
                        duration: 2 + j * 0.2,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                        delay: j * 0.1,
                      }}
                      className="w-1 bg-gradient-to-b from-purple-400/40 to-pink-400/40 rounded-full"
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Hero Content */}
          <div className="relative z-10 text-center px-4 max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              {/* Podcast Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm border border-purple-500/30 px-6 py-3 rounded-full mb-8"
              >
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-purple-300 text-sm font-medium">Live Studio Recording</span>
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              </motion.div>

              <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tighter">
                Triadic
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">
                  {" "}
                  Podcast
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
                Where <span className="text-purple-400 font-semibold">luxury meets technology</span> in podcast production. 
                State-of-the-art studio equipment, expert editing, and strategic content creation that elevates your voice 
                to <span className="text-pink-400 font-semibold">professional excellence</span>.
              </p>
            </motion.div>

                         {/* CTA Buttons */}
             <motion.div
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 0.4 }}
               className="flex flex-col sm:flex-row gap-4 justify-center items-center"
             >
               <a
                 href="#pricing"
                 className="group bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-10 py-5 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-purple-500/30 relative overflow-hidden"
               >
                 <span className="relative z-10 flex items-center">
                   <Mic className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform duration-300" />
                   Start Your Podcast
                   <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
                 </span>
                 <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 via-white/10 to-pink-600/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
               </a>
               <a
                 href="#services"
                 className="group border-2 border-white/30 text-white px-10 py-5 rounded-full text-lg font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm hover:border-purple-500/50 relative overflow-hidden"
               >
                 <span className="relative z-10 flex items-center">
                   <Headphones className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform duration-300" />
                   Explore Services
                   <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
                 </span>
               </a>
             </motion.div>
          </div>

          {/* Floating Luxury Elements */}
          <motion.div
            animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            className="absolute top-20 left-10 text-purple-400 opacity-60"
          >
            <div className="w-12 h-12 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-purple-500/30">
              <Mic className="w-6 h-6" />
            </div>
          </motion.div>
          <motion.div
            animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
            transition={{ duration: 7, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            className="absolute top-32 right-20 text-pink-400 opacity-60"
          >
            <div className="w-12 h-12 bg-gradient-to-r from-pink-600/20 to-purple-600/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-pink-500/30">
              <Headphones className="w-6 h-6" />
            </div>
          </motion.div>
          <motion.div
            animate={{ y: [0, -15, 0], rotate: [0, 3, 0] }}
            transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            className="absolute bottom-32 left-1/4 text-blue-400 opacity-60"
          >
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-blue-500/30">
              <Zap className="w-5 h-5" />
            </div>
          </motion.div>
        </section>

        {/* Location & Statistics Section */}
        <section className="py-16 bg-gradient-to-r from-purple-900/20 to-pink-900/20">
          <div className="container px-4 mx-auto">
            <RevealOnScroll>
              <div className="text-center mb-12">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Podcast Production
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                    {" "}
                    Statistics
                  </span>
                </h3>
                <p className="text-gray-400 max-w-2xl mx-auto">
                  Our track record of delivering exceptional podcast content that engages and grows audiences.
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {successMetrics.map((metric, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="text-center group"
                  >
                    <div className="flex justify-center mb-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform duration-300">
                        {metric.icon}
                      </div>
                    </div>
                    <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
                      {metric.number}
                    </div>
                    <div className="text-gray-400 text-sm">{metric.label}</div>
                    
                    {/* Animated Bar */}
                    <div className="mt-3 flex justify-center">
                      <div className="w-16 h-1 bg-gray-700 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: "100%" }}
                          transition={{ duration: 1, delay: index * 0.2 }}
                          className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </RevealOnScroll>
          </div>
        </section>

        {/* Podcast Production Categories Section */}
        <section className="py-20 bg-black">
          <div className="container px-4 mx-auto">
            <RevealOnScroll>
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tighter">
                  Podcast
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                    {" "}
                    Production Genres
                  </span>
                </h2>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                  We specialize in producing various podcast genres with professional audio quality and strategic content planning.
                </p>
              </div>
            </RevealOnScroll>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Business & Entrepreneurship",
                  subtitle: "Professional Business Content",
                  description: "Startup stories, business insights, and entrepreneurial journeys with real-world examples and expert interviews.",
                  icon: <TrendingUp className="w-8 h-8 text-blue-400" />,
                  episodes: "12+ Episodes",
                  duration: "45-60 min",
                  production: "Studio Recording",
                  audience: "Business Professionals",
                  features: ["Expert Interviews", "Case Studies", "Industry Insights", "Professional Audio"],
                  color: "from-blue-500/20 to-purple-600/20",
                  borderColor: "border-blue-500/30",
                  accentColor: "text-blue-400",
                },
                {
                  title: "Technology & Innovation",
                  subtitle: "Cutting-Edge Tech Content",
                  description: "AI insights, digital transformation stories, and tech discussions with industry leaders and innovators.",
                  icon: <Zap className="w-8 h-8 text-purple-400" />,
                  episodes: "18+ Episodes",
                  duration: "30-45 min",
                  production: "Multi-Format",
                  audience: "Tech Enthusiasts",
                  features: ["AI Discussions", "Startup Stories", "Tech Reviews", "Innovation Talks"],
                  color: "from-purple-500/20 to-pink-600/20",
                  borderColor: "border-purple-500/30",
                  accentColor: "text-purple-400",
                },
                {
                  title: "Health & Wellness",
                  subtitle: "Holistic Wellness Content",
                  description: "Mental health, fitness tips, and holistic wellness conversations with certified professionals.",
                  icon: <Lightbulb className="w-8 h-8 text-green-400" />,
                  episodes: "25+ Episodes",
                  duration: "40-55 min",
                  production: "Professional Studio",
                  audience: "Wellness Seekers",
                  features: ["Expert Guidance", "Practical Tips", "Mental Health", "Fitness Advice"],
                  color: "from-green-500/20 to-teal-600/20",
                  borderColor: "border-green-500/30",
                  accentColor: "text-green-400",
                },
                {
                  title: "Entertainment & Culture",
                  subtitle: "Creative Entertainment Content",
                  description: "Movie reviews, cultural discussions, and entertainment industry insights with creative professionals.",
                  icon: <Star className="w-8 h-8 text-yellow-400" />,
                  episodes: "15+ Episodes",
                  duration: "35-50 min",
                  production: "Creative Studio",
                  audience: "Entertainment Fans",
                  features: ["Movie Reviews", "Cultural Talks", "Industry Insights", "Creative Discussions"],
                  color: "from-yellow-500/20 to-orange-600/20",
                  borderColor: "border-yellow-500/30",
                  accentColor: "text-yellow-400",
                },
              ].map((category, index) => (
                <RevealOnScroll key={index} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ y: -10, scale: 1.02 }}
                    className={`bg-gradient-to-br ${category.color} backdrop-blur-sm border ${category.borderColor} rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300 group relative overflow-hidden`}
                  >
                    {/* Animated Audio Waveform */}
                    <div className="absolute top-4 right-4 opacity-20">
                      <div className="flex items-end space-x-1 h-12">
                        {[...Array(6)].map((_, i) => (
                          <motion.div
                            key={i}
                            animate={{ height: [20, 40, 20] }}
                            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, delay: i * 0.2 }}
                            className="w-1 bg-purple-400 rounded-full"
                          />
                        ))}
                      </div>
                    </div>

                    {/* Header Section */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center space-x-4">
                        <div className={`w-16 h-16 bg-gray-800/50 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          {category.icon}
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
                            {category.title}
                          </h3>
                          <p className={`text-sm font-medium ${category.accentColor}`}>
                            {category.subtitle}
                          </p>
                        </div>
                      </div>
                      
                      {/* Production Badge */}
                      <div className="bg-gray-800/50 px-3 py-2 rounded-lg">
                        <span className="text-xs text-gray-300 font-medium">{category.production}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 text-sm leading-relaxed mb-6">
                      {category.description}
                    </p>

                    {/* Production Features */}
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {category.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                          <span className="text-xs text-gray-400">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-gray-800/30 rounded-lg p-3">
                        <div className="flex items-center space-x-2 mb-1">
                          <Mic className="w-4 h-4 text-purple-400" />
                          <span className="text-xs text-gray-400">Episodes</span>
                        </div>
                        <div className="text-lg font-bold text-white">{category.episodes}</div>
                      </div>
                      
                      <div className="bg-gray-800/30 rounded-lg p-3">
                        <div className="flex items-center space-x-2 mb-1">
                          <Clock className="w-4 h-4 text-purple-400" />
                          <span className="text-xs text-gray-400">Duration</span>
                        </div>
                        <div className="text-lg font-bold text-white">{category.duration}</div>
                      </div>
                    </div>

                    {/* Audience & Production Info */}
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center space-x-2">
                        <Users className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-400">{category.audience}</span>
                      </div>
                      
                      <button className={`bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 transform hover:scale-105`}>
                        Start Production
                      </button>
                    </div>
                  </motion.div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Episodes Section */}
        <section className="py-20 bg-gradient-to-r from-purple-900/10 to-pink-900/10">
          <div className="container px-4 mx-auto">
            <RevealOnScroll>
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tighter">
                  Featured
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                    {" "}
                    Episodes
                  </span>
                </h2>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                  Listen to some of our most popular podcast episodes and discover the quality we deliver.
                </p>
              </div>
            </RevealOnScroll>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "The Future of AI in Business",
                  host: "Sarah Chen",
                  duration: "42:15",
                  category: "Technology",
                  image: "https://i.ibb.co/C3frKdzY/Gear-Podcast-Gear-1327244548.png",
                  description: "Exploring how artificial intelligence is transforming business operations and decision-making processes.",
                  plays: "15.2K",
                  rating: "4.9",
                },
                {
                  title: "Building a Startup from Zero",
                  host: "Marcus Rodriguez",
                  duration: "58:32",
                  category: "Business",
                  image: "https://i.ibb.co/SXMyw3Fn/ge.png",
                  description: "Real stories from entrepreneurs who built successful companies from the ground up.",
                  plays: "12.8K",
                  rating: "4.8",
                },
                {
                  title: "Mindful Living in the Digital Age",
                  host: "Dr. Emily Watson",
                  duration: "35:47",
                  category: "Wellness",
                  image: "https://i.ibb.co/C3frKdzY/Gear-Podcast-Gear-1327244548.png",
                  description: "Practical tips for maintaining mental health and balance in our technology-driven world.",
                  plays: "18.5K",
                  rating: "4.9",
                },
              ].map((episode, index) => (
                <RevealOnScroll key={index} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ y: -10, scale: 1.02 }}
                    className="bg-gradient-to-br from-gray-900/80 to-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden group"
                  >
                    {/* Episode Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={episode.image}
                        alt={episode.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                      
                      {/* Play Button Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 cursor-pointer group-hover:bg-white/30 transition-all duration-300"
                        >
                          <Play className="w-8 h-8 text-white ml-1" />
                        </motion.div>
                      </div>
                      
                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="bg-purple-600/90 text-white px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm">
                          {episode.category}
                        </span>
                      </div>
                    </div>

                    {/* Episode Content */}
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm text-gray-400">{episode.host}</span>
                        <span className="text-sm text-gray-400 flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {episode.duration}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">
                        {episode.title}
                      </h3>
                      
                      <p className="text-gray-400 text-sm leading-relaxed mb-4">
                        {episode.description}
                      </p>
                      
                      {/* Episode Stats */}
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center space-x-4">
                          <span className="text-gray-400 flex items-center">
                            <Play className="w-4 h-4 mr-1" />
                            {episode.plays}
                          </span>
                          <span className="text-gray-400 flex items-center">
                            <Star className="w-4 h-4 mr-1 text-yellow-400" />
                            {episode.rating}
                          </span>
                        </div>
                        
                        <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 transform hover:scale-105">
                          Listen Now
                        </button>
                      </div>
                    </div>
                  </motion.div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-gradient-to-b from-black to-gray-900">
          <div className="container px-4 mx-auto">
            <RevealOnScroll>
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tighter">
                  Complete Podcast
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                    {" "}
                    Solutions
                  </span>
                </h2>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                  From concept to distribution, we provide everything you need to create professional-quality podcasts
                  that engage and grow your audience.
                </p>
              </div>
            </RevealOnScroll>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Mic className="w-8 h-8 text-purple-400" />,
                  title: "Professional Recording",
                  description:
                    "State-of-the-art microphones, soundproofing, and acoustic treatment for crystal-clear audio quality.",
                  features: [
                    "High-end microphones",
                    "Soundproof studio",
                    "Professional acoustics",
                    "Multiple recording formats",
                  ],
                },
                {
                  icon: <Headphones className="w-8 h-8 text-pink-400" />,
                  title: "Audio Engineering",
                  description:
                    "Expert audio editing, mixing, and mastering to ensure your podcast sounds professional and polished.",
                  features: ["Noise reduction", "Audio enhancement", "Professional mixing", "Mastering services"],
                },
                {
                  icon: <Video className="w-8 h-8 text-blue-400" />,
                  title: "Video Production",
                  description:
                    "High-quality video recording and editing for platforms like YouTube, Instagram, and TikTok.",
                  features: [
                    "4K video recording",
                    "Professional lighting",
                    "Video editing",
                    "Multi-platform optimization",
                  ],
                },
                {
                  icon: <PenTool className="w-8 h-8 text-green-400" />,
                  title: "Content Strategy",
                  description:
                    "Strategic content planning, script writing, and episode structuring for maximum engagement.",
                  features: ["Content planning", "Script writing", "Episode structure", "Audience research"],
                },
                {
                  icon: <Lightbulb className="w-8 h-8 text-yellow-400" />,
                  title: "Creative Direction",
                  description:
                    "Professional guidance on podcast branding, themes, and creative direction to stand out.",
                  features: ["Brand development", "Theme creation", "Creative direction", "Visual identity"],
                },
                {
                  icon: <Zap className="w-8 h-8 text-orange-400" />,
                  title: "Distribution & Marketing",
                  description:
                    "Multi-platform distribution, SEO optimization, and marketing strategies to grow your audience.",
                  features: [
                    "Multi-platform upload",
                    "SEO optimization",
                    "Social media promotion",
                    "Analytics tracking",
                  ],
                },
              ].map((service, index) => (
                <RevealOnScroll key={index} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ y: -10 }}
                    className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300 group"
                  >
                    <div className="mb-6">
                      <div className="w-16 h-16 bg-gray-800/50 rounded-xl flex items-center justify-center group-hover:bg-gray-700/50 transition-colors duration-300">
                        {service.icon}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                    <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <Check className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Podcast Studio Environment Section */}
        <section className="py-20 bg-black">
          <div className="container px-4 mx-auto">
            <RevealOnScroll>
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tighter">
                  Professional
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                    {" "}
                    Podcast Studio
                  </span>
                </h2>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                  Experience our cutting-edge podcast studio designed for optimal audio quality, comfort, and creativity.
                </p>
              </div>
            </RevealOnScroll>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <RevealOnScroll>
                <div className="space-y-8">
                  {[
                    {
                      title: "Professional Microphones",
                      description:
                        "High-end condenser and dynamic microphones for crystal-clear voice recording with noise cancellation technology.",
                      icon: <Mic className="w-6 h-6 text-purple-400" />,
                    },
                    {
                      title: "Soundproofing & Acoustics",
                      description:
                        "Advanced acoustic treatment and soundproofing materials to eliminate echo and external noise interference.",
                      icon: <Shield className="w-6 h-6 text-blue-400" />,
                    },
                    {
                      title: "Professional Lighting",
                      description:
                        "Studio-grade LED lighting systems with adjustable color temperature and intensity for perfect video recording.",
                      icon: <Lightbulb className="w-6 h-6 text-yellow-400" />,
                    },
                    {
                      title: "Video Equipment",
                      description:
                        "4K cameras, teleprompters, and professional video editing suites for multi-platform content creation.",
                      icon: <Video className="w-6 h-6 text-green-400" />,
                    },
                  ].map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="flex items-start space-x-4"
                    >
                      <div className="w-12 h-12 bg-gray-800/50 rounded-lg flex items-center justify-center flex-shrink-0">
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                        <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </RevealOnScroll>

              <RevealOnScroll>
                <div className="relative">
                  <div className="relative rounded-2xl overflow-hidden">
                    <img
                      src="https://i.ibb.co/SXMyw3Fn/ge.png"
                      alt="Professional Podcast Studio Setup in Islamabad - State-of-the-Art Audio Recording Equipment"
                      className="w-full h-auto rounded-2xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  </div>

                  {/* Audio Quality Stats */}
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                    className="absolute -top-6 -right-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white p-4 rounded-xl shadow-lg"
                  >
                    <div className="text-center">
                      <div className="text-2xl font-bold">24-bit</div>
                      <div className="text-sm opacity-90">Audio Quality</div>
                    </div>
                  </motion.div>

                  <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                    className="absolute -bottom-6 -left-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-xl shadow-lg"
                  >
                    <div className="text-center">
                      <div className="text-2xl font-bold">-60dB</div>
                      <div className="text-sm opacity-90">Noise Floor</div>
                    </div>
                  </motion.div>

                  {/* Podcast Waveform Visualization */}
                  <motion.div
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-16 opacity-20"
                  >
                    <div className="flex items-end justify-center space-x-1 h-full">
                      {[...Array(16)].map((_, i) => (
                        <div
                          key={i}
                          className="w-1 bg-purple-400 rounded-full animate-pulse"
                          style={{
                            height: `${Math.random() * 80 + 20}%`,
                            animationDelay: `${i * 0.1}s`,
                            animationDuration: `${Math.random() * 2 + 1}s`
                          }}
                        />
                      ))}
                    </div>
                  </motion.div>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </section>

        {/* Podcast Recording Process Section */}
        <section className="py-20 bg-gradient-to-r from-purple-900/20 to-pink-900/20">
          <div className="container px-4 mx-auto">
            <RevealOnScroll>
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tighter">
                  Our Podcast
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                    {" "}
                    Recording Process
                  </span>
                </h2>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                  From initial consultation to final distribution, we guide you through every step of creating professional podcast content.
                </p>
              </div>
            </RevealOnScroll>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Pre-Production",
                  description: "Content strategy, script writing, and episode planning with our expert team.",
                  icon: <PenTool className="w-8 h-8 text-purple-400" />,
                  duration: "1-2 weeks",
                },
                {
                  step: "02",
                  title: "Recording",
                  description: "Professional studio recording with high-end equipment and expert guidance.",
                  icon: <Mic className="w-8 h-8 text-pink-400" />,
                  duration: "2-4 hours",
                },
                {
                  step: "03",
                  title: "Post-Production",
                  description: "Audio editing, mixing, mastering, and quality enhancement for broadcast-ready content.",
                  icon: <Headphones className="w-8 h-8 text-blue-400" />,
                  duration: "1-2 weeks",
                },
                {
                  step: "04",
                  title: "Distribution",
                  description: "Multi-platform upload, SEO optimization, and marketing strategy implementation.",
                  icon: <Globe className="w-8 h-8 text-green-400" />,
                  duration: "1 week",
                },
              ].map((process, index) => (
                <RevealOnScroll key={index} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ y: -10, scale: 1.02 }}
                    className="bg-gradient-to-br from-gray-900/80 to-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 text-center relative group"
                  >
                    {/* Step Number */}
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                        {process.step}
                      </div>
                    </div>

                    {/* Process Icon */}
                    <div className="w-16 h-16 bg-gray-800/50 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-gray-700/50 transition-colors duration-300">
                      {process.icon}
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">
                      {process.title}
                    </h3>
                    
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                      {process.description}
                    </p>

                    {/* Duration */}
                    <div className="bg-gray-800/30 rounded-lg p-2">
                      <span className="text-xs text-gray-400 flex items-center justify-center">
                        <Clock className="w-3 h-3 mr-1" />
                        {process.duration}
                      </span>
                    </div>
                  </motion.div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Podcast Audio Player Mockup Section */}
        <section className="py-20 bg-gradient-to-r from-purple-900/20 to-pink-900/20">
          <div className="container px-4 mx-auto">
            <RevealOnScroll>
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tighter">
                  Professional
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                    {" "}
                    Audio Quality
                  </span>
                </h2>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                  Experience the difference that professional audio engineering makes in your podcast production.
                </p>
              </div>
            </RevealOnScroll>

            <div className="max-w-4xl mx-auto">
              <RevealOnScroll>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-gradient-to-br from-gray-900/80 to-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8 shadow-2xl"
                >
                  {/* Real Audio Player */}
                  <div className="bg-gray-800/50 rounded-2xl p-6 mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                          <Mic className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-white font-semibold">Studio Quality Demo</h3>
                          <p className="text-gray-400 text-sm">Professional Podcast Audio • 24-bit Quality</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-white font-bold" id="currentTime">00:00</div>
                        <div className="text-gray-400 text-xs">Duration</div>
                      </div>
                    </div>

                    {/* Real Audio Element */}
                    <audio
                      id="studioAudio"
                      className="hidden"
                      preload="metadata"
                      onLoadedMetadata={() => {
                        const audio = document.getElementById('studioAudio') as HTMLAudioElement;
                        const durationDisplay = document.getElementById('totalDuration');
                        if (audio && durationDisplay) {
                          const minutes = Math.floor(audio.duration / 60);
                          const seconds = Math.floor(audio.duration % 60);
                          durationDisplay.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
                        }
                      }}
                      onTimeUpdate={() => {
                        const audio = document.getElementById('studioAudio') as HTMLAudioElement;
                        const currentTimeDisplay = document.getElementById('currentTime');
                        const progressBar = document.getElementById('progressBar');
                        if (audio && currentTimeDisplay && progressBar) {
                          const minutes = Math.floor(audio.currentTime / 60);
                          const seconds = Math.floor(audio.currentTime % 60);
                          currentTimeDisplay.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
                          
                          const progress = (audio.currentTime / audio.duration) * 100;
                          progressBar.style.width = `${progress}%`;
                        }
                      }}
                      onEnded={() => {
                        const playButton = document.getElementById('playButton');
                        if (playButton) {
                          playButton.innerHTML = '<Play className="w-8 h-8 ml-1" />';
                        }
                      }}
                    >
                      <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/git-blob/prj_d5ca3UD7kTIwCYN2dUju5xHbHFhP/IJYBeW9LZZnZiiHCcxyNp8/public/audio/studio-demo.mp3" type="audio/mpeg" />
                      <source src="/audio/studio-demo.wav" type="audio/wav" />
                      Your browser does not support the audio element.
                    </audio>

                    {/* Progress Bar */}
                    <div className="mb-4">
                      <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden cursor-pointer" 
                           onClick={(e) => {
                             const audio = document.getElementById('studioAudio') as HTMLAudioElement;
                             const rect = e.currentTarget.getBoundingClientRect();
                             const clickX = e.clientX - rect.left;
                             const percentage = clickX / rect.width;
                             if (audio) {
                               audio.currentTime = percentage * audio.duration;
                             }
                           }}>
                        <div 
                          id="progressBar"
                          className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-100"
                          style={{ width: '0%' }}
                        />
                      </div>
                    </div>

                    {/* Audio Controls */}
                    <div className="flex items-center justify-center space-x-6">
                      <button 
                        className="w-10 h-10 bg-gray-700/50 rounded-full flex items-center justify-center text-white hover:bg-gray-600/50 transition-colors duration-300"
                        onClick={() => {
                          const audio = document.getElementById('studioAudio') as HTMLAudioElement;
                          if (audio) {
                            audio.currentTime = Math.max(0, audio.currentTime - 10);
                          }
                        }}
                      >
                        <SkipBack className="w-5 h-5" />
                      </button>
                      
                      <button 
                        id="playButton"
                        className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
                        onClick={() => {
                          const audio = document.getElementById('studioAudio') as HTMLAudioElement;
                          const playButton = document.getElementById('playButton');
                          if (audio && playButton) {
                            if (audio.paused) {
                              audio.play();
                              playButton.innerHTML = '<Pause className="w-8 h-8" />';
                            } else {
                              audio.pause();
                              playButton.innerHTML = '<Play className="w-8 h-8 ml-1" />';
                            }
                          }
                        }}
                      >
                        <Play className="w-8 h-8 ml-1" />
                      </button>
                      
                      <button 
                        className="w-10 h-10 bg-gray-700/50 rounded-full flex items-center justify-center text-white hover:bg-gray-600/50 transition-colors duration-300"
                        onClick={() => {
                          const audio = document.getElementById('studioAudio') as HTMLAudioElement;
                          if (audio) {
                            audio.currentTime = Math.min(audio.duration, audio.currentTime + 10);
                          }
                        }}
                      >
                        <SkipForward className="w-5 h-5" />
                      </button>
                    </div>

                                         {/* Volume Control */}
                     <div className="flex items-center justify-center space-x-3 mt-4">
                       <Volume2 className="w-4 h-4 text-gray-400" />
                       <div className="w-32 h-2 bg-gray-700 rounded-full overflow-hidden relative">
                         <div 
                           id="volumeBar"
                           className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-100"
                           style={{ width: '70%' }}
                         />
                         <input
                           type="range"
                           min="0"
                           max="100"
                           defaultValue="70"
                           className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                           onChange={(e) => {
                             const audio = document.getElementById('studioAudio') as HTMLAudioElement;
                             const volumeBar = document.getElementById('volumeBar');
                             if (audio && volumeBar) {
                               const volume = parseInt(e.target.value) / 100;
                               audio.volume = volume;
                               volumeBar.style.width = `${e.target.value}%`;
                             }
                           }}
                           id="volumeSlider"
                         />
                       </div>
                     </div>

                    {/* Time Display */}
                    <div className="flex justify-between text-xs text-gray-400 mt-2">
                      <span id="currentTime">00:00</span>
                      <span id="totalDuration">00:00</span>
                    </div>
                  </div>

                  {/* Audio Quality Features */}
                  <div className="grid md:grid-cols-3 gap-6">
                    {[
                      { feature: "24-bit Audio", value: "Studio Quality", icon: <Mic className="w-5 h-5 text-purple-400" /> },
                      { feature: "Noise Reduction", value: "-60dB Floor", icon: <Shield className="w-5 h-5 text-pink-400" /> },
                      { feature: "Dynamic Range", value: "120dB", icon: <Zap className="w-5 h-5 text-blue-400" /> },
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="text-center"
                      >
                        <div className="flex justify-center mb-2">{item.icon}</div>
                        <div className="text-white font-semibold text-sm">{item.feature}</div>
                        <div className="text-purple-400 font-bold">{item.value}</div>
                      </motion.div>
                    ))}
                  </div>

                  
                </motion.div>
              </RevealOnScroll>
            </div>
          </div>
        </section>



        {/* FAQ Section */}
        <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
          <div className="container px-4 mx-auto">
            <RevealOnScroll>
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tighter">
                  Frequently Asked
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                    {" "}
                    Questions
                  </span>
                </h2>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                  Get answers to common questions about our podcast production services.
                </p>
              </div>
            </RevealOnScroll>

            <div className="max-w-4xl mx-auto space-y-4">
              {faqData.map((faq, index) => (
                <RevealOnScroll key={index} delay={index * 0.1}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-800/30 transition-colors duration-300"
                    >
                      <h3 className="text-lg font-semibold text-white pr-4">{faq.question}</h3>
                      <ChevronDown
                        className={cn(
                          "w-5 h-5 text-gray-400 transition-transform duration-300 flex-shrink-0",
                          openFaq === index && "rotate-180",
                        )}
                      />
                    </button>
                    <motion.div
                      initial={false}
                      animate={{
                        height: openFaq === index ? "auto" : 0,
                        opacity: openFaq === index ? 1 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6">
                        <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                      </div>
                    </motion.div>
                  </motion.div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Booking Section */}
        <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
          <div className="container px-4 mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <RevealOnScroll>
                <div>
                  <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tighter">
                    Book Your
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                      {" "}
                      Podcast Session
                    </span>
                  </h2>
                  <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                    Ready to start your podcast journey? Book a session in our professional studio and let our experts
                    help you create amazing content.
                  </p>

                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Calendar className="w-6 h-6 text-purple-400" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">Flexible Scheduling</h3>
                        <p className="text-gray-400">
                          Book sessions that fit your schedule with 24/7 studio availability
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <MessageCircle className="w-6 h-6 text-blue-400" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">Free Consultation</h3>
                        <p className="text-gray-400">
                          Get expert advice on your podcast concept and strategy before recording
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-600/20 to-blue-600/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Award className="w-6 h-6 text-green-400" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">Quality Guarantee</h3>
                        <p className="text-gray-400">
                          We're committed to delivering professional-quality results every time
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>

              <RevealOnScroll>
                <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-3xl p-8">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-4">Quick Booking</h3>
                    <p className="text-gray-400">Choose your preferred method to get started</p>
                  </div>

                  <div className="space-y-4">
                    <a
                      href="https://api.whatsapp.com/send/?phone=923311148881&text=Hi! I'd like to book a podcast recording session"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl text-lg font-semibold text-center block transition-all duration-300 transform hover:scale-105"
                    >
                      Book via WhatsApp
                    </a>

                    <a
                      href="/contact"
                      className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-4 rounded-xl text-lg font-semibold text-center block transition-all duration-300 transform hover:scale-105"
                    >
                      Contact Form
                    </a>

                    <div className="text-center">
                      <p className="text-gray-400 text-sm mb-2">Or call us directly</p>
                      <a
                        href="tel:+923311148881"
                        className="text-purple-400 hover:text-purple-300 font-semibold text-lg"
                      >
                        +92 331 1148881
                      </a>
                    </div>
                  </div>

                  <div className="mt-8 p-4 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-xl border border-purple-500/20">
                    <div className="text-center">
                      <div className="text-purple-400 font-semibold mb-1">Special Offer</div>
                      <div className="text-white text-sm">First-time clients get 20% off their first session</div>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20 bg-gradient-to-b from-gray-900 to-black">
          <div className="container px-4 mx-auto">
            <RevealOnScroll>
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tighter">
                  Service
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                    {" "}
                    Packages
                  </span>
                </h2>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                  Professional podcast production packages designed to meet your specific needs and budget.
                  Choose the perfect plan for your podcast journey.
                </p>
              </div>
            </RevealOnScroll>

            <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {/* Basic Plan */}
              <RevealOnScroll>
                <motion.div
                  whileHover={{ y: -10 }}
                  className="bg-gradient-to-br from-gray-900/80 to-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8 shadow-2xl"
                >
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-4">BASIC PLAN</h3>
                    <div className="text-4xl font-bold text-white mb-2">PKR 18,000</div>
                    <p className="text-gray-400 text-sm">Perfect for getting started</p>
                  </div>

                  <div className="space-y-4 mb-8">
                    {[
                      "Studio rental (up to 40 Min)",
                      "Single Cam Shoot",
                      "High-quality audio editing & mastering",
                      "4K video recording & editing",
                      "Final delivery: full episode",
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <a
                    href="https://api.whatsapp.com/send/?phone=923311148881&text=Hi! I'm interested in the Basic Plan for 18,000 PKR"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white py-3 rounded-xl text-lg font-semibold text-center block transition-all duration-300 transform hover:scale-105"
                  >
                    Choose Basic Plan
                  </a>
                </motion.div>
              </RevealOnScroll>

              {/* Standard Plan */}
              <RevealOnScroll>
                <motion.div
                  whileHover={{ y: -10 }}
                  className="relative bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-sm border border-purple-500/30 rounded-3xl p-8 shadow-2xl shadow-purple-500/20"
                >
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>

                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-4">STANDARD PLAN</h3>
                    <div className="text-4xl font-bold text-white mb-2">PKR 30,000</div>
                    <p className="text-gray-400 text-sm">Best value for content creators</p>
                  </div>

                  <div className="space-y-4 mb-8">
                    {[
                      "Studio rental (up to 1 hours)",
                      "Two cam Shoot",
                      "High-quality audio editing & mastering",
                      "4K video recording & editing",
                      "Final delivery in both full episode + reels (3 short clips)",
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <a
                    href="https://api.whatsapp.com/send/?phone=923311148881&text=Hi! I'm interested in the Standard Plan for 30,000 PKR"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3 rounded-xl text-lg font-semibold text-center block transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
                  >
                    Choose Standard Plan
                  </a>
                </motion.div>
              </RevealOnScroll>

              {/* Premium Plan */}
              <RevealOnScroll>
                <motion.div
                  whileHover={{ y: -10 }}
                  className="bg-gradient-to-br from-yellow-900/30 to-orange-900/30 backdrop-blur-sm border border-yellow-500/30 rounded-3xl p-8 shadow-2xl shadow-yellow-500/20"
                >
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-4">PREMIUM PLAN</h3>
                    <div className="text-4xl font-bold text-white mb-2">PKR 45,000</div>
                    <p className="text-gray-400 text-sm">Complete professional package</p>
                  </div>

                  <div className="space-y-4 mb-8">
                    {[
                      "Studio rental (up to 2 hours)",
                      "Three cam Shoot",
                      "High-quality audio editing & mastering",
                      "4K video recording & editing",
                      "Content strategy & script writing",
                      "Final delivery in both full episode + 5 reels + promotional trailer",
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <a
                    href="https://api.whatsapp.com/send/?phone=923311148881&text=Hi! I'm interested in the Premium Plan for 45,000 PKR"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700 text-white py-3 rounded-xl text-lg font-semibold text-center block transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-yellow-500/25"
                  >
                    Choose Premium Plan
                  </a>
                </motion.div>
              </RevealOnScroll>
            </div>

            {/* Equipment Note */}
            <RevealOnScroll>
              <div className="mt-16 text-center">
                <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-6 max-w-4xl mx-auto">
                  <h4 className="text-xl font-semibold text-white mb-4 flex items-center justify-center">
                    <Zap className="w-6 h-6 text-purple-400 mr-2" />
                    Professional Equipment
                  </h4>
                  <p className="text-gray-300 text-lg">
                    <span className="text-purple-400 font-semibold">Sony A7iv</span>, high-quality mics, lights, premium studio
                  </p>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </section>



        {/* CTA Section */}
        <section className="py-20 bg-black">
          <div className="container px-4 mx-auto text-center">
            <RevealOnScroll>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl mx-auto"
              >
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tighter">
                  Ready to Start Your
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                    {" "}
                    Podcast Journey?
                  </span>
                </h2>
                <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                  Join the growing community of successful podcasters who trust Triadic Media to bring their vision to
                  life with professional quality and strategic guidance.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a
                    href="https://api.whatsapp.com/send/?phone=923311148881&text=Hi! I'd like to discuss starting a podcast with Triadic Media"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
                  >
                    Start Your Podcast
                  </a>
                  <a
                    href="/contact"
                    className="border-2 border-white/30 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                  >
                    Schedule Consultation
                  </a>
                </div>
              </motion.div>
            </RevealOnScroll>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </>
  )
}

export default PodcastPage
