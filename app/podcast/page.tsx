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
} from "lucide-react"
import RevealOnScroll from "@/components/scroll-reveal"
import InteractiveNavbar from "@/components/interactive-navbar"
import { cn } from "@/lib/utils"
import { useState } from "react"

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
      title: "Business & Marketing",
      description: "Professional business podcasts, industry insights, and marketing strategies",
      icon: <TrendingUp className="w-8 h-8 text-blue-400" />,
    },
    {
      title: "Technology & Innovation",
      description: "Tech reviews, startup stories, and innovation discussions",
      icon: <Zap className="w-8 h-8 text-purple-400" />,
    },
    {
      title: "Health & Wellness",
      description: "Wellness tips, health advice, and lifestyle content",
      icon: <Lightbulb className="w-8 h-8 text-green-400" />,
    },
    {
      title: "Entertainment & Culture",
      description: "Movie reviews, cultural discussions, and entertainment news",
      icon: <Star className="w-8 h-8 text-yellow-400" />,
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
      <div className="min-h-screen bg-black">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://i.ibb.co/C3frKdzY/Gear-Podcast-Gear-1327244548.png"
              alt="Professional Podcast Studio"
              className="w-full h-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
          </div>

          {/* Hero Content */}
          <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-6"
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tighter">
                Triadic
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  {" "}
                  Podcast
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Professional podcast production with state-of-the-art studio equipment, expert editing, and strategic
                content creation that elevates your voice.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <a
                href="#pricing"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
              >
                View Pricing
              </a>
              <a
                href="#services"
                className="border-2 border-white/30 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
              >
                Explore Services
              </a>
            </motion.div>
          </div>

          {/* Floating Elements */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            className="absolute top-20 left-10 text-purple-400 opacity-60"
          >
            <Mic className="w-8 h-8" />
          </motion.div>
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            className="absolute top-32 right-20 text-pink-400 opacity-60"
          >
            <Headphones className="w-8 h-8" />
          </motion.div>
        </section>

        {/* Success Metrics Section */}
        <section className="py-16 bg-gradient-to-r from-purple-900/20 to-pink-900/20">
          <div className="container px-4 mx-auto">
            <RevealOnScroll>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {successMetrics.map((metric, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="flex justify-center mb-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full flex items-center justify-center text-purple-400">
                        {metric.icon}
                      </div>
                    </div>
                    <div className="text-3xl md:text-4xl font-bold text-white mb-2">{metric.number}</div>
                    <div className="text-gray-400 text-sm">{metric.label}</div>
                  </motion.div>
                ))}
              </div>
            </RevealOnScroll>
          </div>
        </section>

        {/* Podcast Categories Section */}
        <section className="py-20 bg-black">
          <div className="container px-4 mx-auto">
            <RevealOnScroll>
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tighter">
                  Podcast
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                    {" "}
                    Categories
                  </span>
                </h2>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                  We specialize in various podcast genres and can help you create content that resonates with your
                  target audience.
                </p>
              </div>
            </RevealOnScroll>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {podcastCategories.map((category, index) => (
                <RevealOnScroll key={index} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ y: -10 }}
                    className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300 group text-center"
                  >
                    <div className="w-16 h-16 bg-gray-800/50 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-gray-700/50 transition-colors duration-300">
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{category.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{category.description}</p>
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

        {/* Studio Showcase Section */}
        <section className="py-20 bg-black">
          <div className="container px-4 mx-auto">
            <RevealOnScroll>
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tighter">
                  Professional
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                    {" "}
                    Studio
                  </span>
                </h2>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                  Experience our cutting-edge podcast studio equipped with the latest technology and professional-grade
                  equipment for exceptional audio and video quality.
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
                      alt="Professional Podcast Studio Setup"
                      className="w-full h-auto rounded-2xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  </div>

                  {/* Floating Stats */}
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                    className="absolute -top-6 -right-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white p-4 rounded-xl shadow-lg"
                  >
                    <div className="text-center">
                      <div className="text-2xl font-bold">4K</div>
                      <div className="text-sm opacity-90">Video Quality</div>
                    </div>
                  </motion.div>

                  <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                    className="absolute -bottom-6 -left-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-xl shadow-lg"
                  >
                    <div className="text-center">
                      <div className="text-2xl font-bold">24/7</div>
                      <div className="text-sm opacity-90">Studio Access</div>
                    </div>
                  </motion.div>
                </div>
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
                      href="https://api.whatsapp.com/send/?phone=971562997778&text=Hi! I'd like to book a podcast recording session"
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
                        href="tel:+971562997778"
                        className="text-purple-400 hover:text-purple-300 font-semibold text-lg"
                      >
                        +971 56 299 7778
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
                  Transparent
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                    {" "}
                    Pricing
                  </span>
                </h2>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                  Professional podcast production at competitive rates. No hidden fees, no surprises - just exceptional
                  quality and value.
                </p>
              </div>
            </RevealOnScroll>

            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Main Pricing Card */}
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
                    <h3 className="text-3xl font-bold text-white mb-4">Complete Podcast Package</h3>
                    <p className="text-gray-400 mb-6">Everything you need for professional podcast production</p>

                    <div className="mb-6">
                      <div className="text-gray-400 line-through text-2xl mb-2">25,000 PKR</div>
                      <div className="text-5xl font-bold text-white">18,000 PKR</div>
                      <div className="text-green-400 text-sm mt-2">Launch Offer - Save 28%</div>
                    </div>
                  </div>

                  <div className="space-y-4 mb-8">
                    {[
                      "Professional studio recording (2 hours)",
                      "High-quality audio editing & mastering",
                      "4K video recording & editing",
                      "Content strategy & script writing",
                      "Multi-platform distribution",
                      "SEO optimization & marketing",
                      "Analytics & performance tracking",
                      "Ongoing support & consultation",
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <a
                    href="https://api.whatsapp.com/send/?phone=971562997778&text=Hi! I'm interested in the Complete Podcast Package for 18,000 PKR"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-4 rounded-xl text-lg font-semibold text-center block transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
                  >
                    Book Your Session
                  </a>
                </motion.div>
              </RevealOnScroll>

              {/* Comparison Card */}
              <RevealOnScroll>
                <div className="space-y-6">
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:border-gray-700 transition-all duration-300"
                  >
                    <h4 className="text-xl font-semibold text-white mb-4 flex items-center">
                      <Star className="w-5 h-5 text-yellow-400 mr-2" />
                      Why Choose Triadic Podcast?
                    </h4>
                    <div className="space-y-3">
                      {[
                        "Professional-grade studio equipment",
                        "Expert audio engineers & producers",
                        "Comprehensive content strategy",
                        "Multi-platform optimization",
                        "Ongoing support & consultation",
                      ].map((benefit, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ y: -5 }}
                    className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:border-gray-700 transition-all duration-300"
                  >
                    <h4 className="text-xl font-semibold text-white mb-4 flex items-center">
                      <Users className="w-5 h-5 text-blue-400 mr-2" />
                      vs. Other Studios
                    </h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center py-2 border-b border-gray-700">
                        <span className="text-gray-300">Equipment Quality</span>
                        <span className="text-green-400 font-semibold">Premium</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-700">
                        <span className="text-gray-300">Expert Team</span>
                        <span className="text-green-400 font-semibold">Included</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-700">
                        <span className="text-gray-300">Content Strategy</span>
                        <span className="text-green-400 font-semibold">Full Service</span>
                      </div>
                      <div className="flex justify-between items-center py-2">
                        <span className="text-gray-300">Ongoing Support</span>
                        <span className="text-green-400 font-semibold">Lifetime</span>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ y: -5 }}
                    className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-6"
                  >
                    <h4 className="text-xl font-semibold text-white mb-4 flex items-center">
                      <Zap className="w-5 h-5 text-blue-400 mr-2" />
                      Special Offer
                    </h4>
                    <p className="text-gray-300 mb-4">
                      Book your first session and get a free consultation on podcast strategy and audience growth.
                    </p>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-400 mb-2">Launch Bonus</div>
                      <div className="text-sm text-gray-400">Free Strategy Session</div>
                    </div>
                  </motion.div>
                </div>
              </RevealOnScroll>
            </div>
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
                    href="https://api.whatsapp.com/send/?phone=971562997778&text=Hi! I'd like to discuss starting a podcast with Triadic Media"
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
      </div>
    </>
  )
}

export default PodcastPage
