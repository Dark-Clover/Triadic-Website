"use client"

import type React from "react"

import { useState, Suspense } from "react"
import { motion, AnimatePresence } from "framer-motion"
import InteractiveNavbar from "@/components/interactive-navbar"
import AnimatedBackground from "@/components/animated-background"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Play, User, Quote, Send, Heart, ThumbsUp } from "lucide-react" // Removed Star
import SpotlightCard from "@/components/spotlight-card"
import Footer from "@/components/footer"

const videoReviews = [
  {
    id: 1,
    name: "Saleha Khan",
    company: "Saleha Khan Healer",
    thumbnail: "/placeholder.svg?height=200&width=300&text=Saleha+Khan+Review",
    videoUrl: "#",
    preview:
      "Triadic Media transformed our digital presence completely. The results exceeded our expectations in every way possible.",
  },
  {
    id: 2,
    name: "Rubina Khaur",
    company: "Reflections with Rubina",
    thumbnail: "/placeholder.svg?height=200&width=300&text=Rubina+Khaur+Review",
    videoUrl: "#",
    preview:
      "Working with Triadic was a game-changer for our business. Their expertise in digital marketing is unmatched.",
  },
  {
    id: 3,
    name: "Syed Ali Haider",
    company: "Relationship Counselor",
    thumbnail: "/placeholder.svg?height=200&width=300&text=Syed+Ali+Haider+Review",
    videoUrl: "#",
    preview: "The team's creativity and technical skills delivered results beyond our wildest dreams.",
  },
]

const textReviews = [
  {
    id: 1,
    name: "Rubina Khaur",
    company: "Reflections with Rubina",
    review:
      "Triadic Media transformed my online presence completely. Their website development and social media strategy helped me reach more clients and establish credibility in the therapy space.",
    service: "Web Development & Social Media",
    date: "2024-01-15",
  },
  {
    id: 2,
    name: "Saleha Khan",
    company: "Saleha Khan Healer",
    review:
      "Working with Triadic Media was a game-changer for my practice. They understood my vision and created a beautiful, functional website that truly represents my brand.",
    service: "Web Development",
    date: "2024-01-10",
  },
  {
    id: 3,
    name: "Kashif",
    company: "AK Gaming Store",
    review:
      "The gaming store website they built for us is incredible. Sales have increased significantly since launch, and customers love the user experience.",
    service: "E-commerce Development",
    date: "2024-01-08",
  },
  {
    id: 4,
    name: "Afaq",
    company: "Baba Fareed Suitings",
    review:
      "Triadic Media helped us establish a strong online presence for Baba Fareed Suitings. Their digital marketing strategies have significantly boosted our brand visibility and customer engagement.",
    service: "Digital Marketing",
    date: "2024-01-05",
  },
  {
    id: 5,
    name: "Naeem",
    company: "House of Salon",
    review:
      "The team at Triadic Media delivered an outstanding website for House of Salon. It perfectly captures our brand's elegance and has made online bookings a breeze for our clients.",
    service: "Web Design & Development",
    date: "2024-01-03",
  },
  {
    id: 6,
    name: "Osman Shahid",
    company: "The Airports Transfer",
    review:
      "Our cab booking website has been a huge success thanks to Triadic Media. The booking system is smooth and our customers find it very easy to use.",
    service: "Web Development",
    date: "2024-01-01",
  },
]

export default function ReviewsPage() {
  const [activeTab, setActiveTab] = useState<"video" | "text">("video")
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    service: "",
    review: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Review submitted:", formData)
    // Handle form submission
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <AnimatedBackground>
      <div className="min-h-screen bg-black">
        <InteractiveNavbar />

        <main className="pt-20">
          {/* Hero Section */}
          <section className="py-20 px-4 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/10 to-black"></div>
            <div className="container mx-auto text-center relative z-10">
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
                {/* Removed star rating from hero section */}
                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
                  Client Reviews
                </h1>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                  Discover what our clients say about their transformative experiences with Triadic Media. Real stories,
                  real results, real success.
                </p>
                <div className="flex justify-center space-x-8 text-sm text-gray-400">
                  <div className="flex items-center">
                    <Heart className="w-5 h-5 mr-2 text-red-400" />
                    <span>500+ Happy Clients</span>
                  </div>
                  <div className="flex items-center">
                    <ThumbsUp className="w-5 h-5 mr-2 text-green-400" />
                    <span>98% Satisfaction Rate</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Tab Navigation */}
          <section className="px-4 mb-12">
            <div className="container mx-auto">
              <div className="flex justify-center mb-12">
                <div className="bg-gray-900/50 backdrop-blur-sm rounded-full p-2 border border-purple-500/20">
                  <Button
                    onClick={() => setActiveTab("video")}
                    variant={activeTab === "video" ? "default" : "ghost"}
                    size="lg"
                    className={`rounded-full px-8 py-3 transition-all duration-300 ${
                      activeTab === "video"
                        ? "bg-purple-600 hover:bg-purple-700 text-white shadow-lg shadow-purple-500/25"
                        : "text-gray-300 hover:text-white hover:bg-purple-600/20"
                    }`}
                  >
                    <Play className="w-5 h-5 mr-2" />
                    Video Reviews
                  </Button>
                  <Button
                    onClick={() => setActiveTab("text")}
                    variant={activeTab === "text" ? "default" : "ghost"}
                    size="lg"
                    className={`rounded-full px-8 py-3 transition-all duration-300 ${
                      activeTab === "text"
                        ? "bg-purple-600 hover:bg-purple-700 text-white shadow-lg shadow-purple-500/25"
                        : "text-gray-300 hover:text-white hover:bg-purple-600/20"
                    }`}
                  >
                    <Quote className="w-5 h-5 mr-2" />
                    Written Reviews
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Reviews Content */}
          <section className="px-4 pb-20">
            <div className="container mx-auto">
              <AnimatePresence mode="wait">
                {activeTab === "video" && (
                  <motion.div
                    key="video"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
                  >
                    {videoReviews.map((review) => (
                      <SpotlightCard key={review.id} className="group overflow-hidden">
                        <div className="relative">
                          <img
                            src={review.thumbnail || "/placeholder.svg"}
                            alt={`${review.name} testimonial`}
                            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                            <div className="bg-purple-600 rounded-full p-4 transform scale-75 group-hover:scale-100 transition-transform duration-300">
                              <Play className="w-8 h-8 text-white" />
                            </div>
                          </div>
                          {/* Removed star rating from video card */}
                        </div>

                        <div className="p-6">
                          <h3 className="text-xl font-bold text-white mb-1">{review.name}</h3>
                          <p className="text-purple-300 text-sm mb-4">{review.company}</p>
                          <p className="text-gray-300 leading-relaxed italic">"{review.preview}"</p>
                        </div>
                      </SpotlightCard>
                    ))}
                  </motion.div>
                )}

                {activeTab === "text" && (
                  <motion.div
                    key="text"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
                  >
                    {textReviews.map((review) => (
                      <SpotlightCard key={review.id} className="group">
                        <div className="p-8">
                          <div className="flex items-start justify-between mb-6">
                            <div className="flex items-center">
                              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center mr-4">
                                <User className="w-6 h-6 text-white" />
                              </div>
                              <div>
                                <h3 className="text-lg font-bold text-white">{review.name}</h3>
                                <p className="text-purple-300 text-sm">{review.company}</p>
                              </div>
                            </div>
                            {/* Removed star rating from text card */}
                          </div>

                          <Quote className="w-8 h-8 text-purple-400 mb-4 opacity-50" />
                          <p className="text-gray-300 leading-relaxed mb-6 text-base">{review.review}</p>

                          <div className="flex items-center justify-between pt-4 border-t border-gray-800">
                            <Badge variant="outline" className="border-purple-500/30 text-purple-300">
                              {review.service}
                            </Badge>
                            <span className="text-sm text-gray-500">{review.date}</span>
                          </div>
                        </div>
                      </SpotlightCard>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Review Form */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="max-w-2xl mx-auto"
              >
                <SpotlightCard className="p-8">
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-white mb-4">Share Your Experience</h2>
                    <p className="text-gray-300">
                      Help others discover the Triadic Media difference by sharing your success story.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Your Name *</label>
                        <Input
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="bg-gray-900/50 border-gray-700 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-purple-500/20"
                          placeholder="Enter your full name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Company</label>
                        <Input
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="bg-gray-900/50 border-gray-700 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-purple-500/20"
                          placeholder="Your company name"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Email *</label>
                        <Input
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="bg-gray-900/50 border-gray-700 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-purple-500/20"
                          placeholder="your.email@example.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Service Used</label>
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleInputChange}
                          className="w-full bg-gray-900/50 border border-gray-700 text-white rounded-md px-3 py-2 focus:border-purple-500 focus:ring-purple-500/20"
                        >
                          <option value="">Select a service</option>
                          <option value="SEO">SEO Optimization</option>
                          <option value="Social Media">Social Media Marketing</option>
                          <option value="Web Development">Web Development</option>
                          <option value="Google Ads">Google Ads</option>
                          <option value="Content Creation">Content Creation</option>
                          <option value="Branding">Branding & Design</option>
                        </select>
                      </div>
                    </div>

                    {/* Removed Rating input */}

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Your Review *</label>
                      <Textarea
                        name="review"
                        value={formData.review}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        className="bg-gray-900/50 border-gray-700 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-purple-500/20 resize-none"
                        placeholder="Share your experience with Triadic Media. What results did you achieve? How did we help your business grow?"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/25"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      Submit Review
                    </Button>
                  </form>
                </SpotlightCard>
              </motion.div>
            </div>
          </section>
        </main>

        <Suspense fallback={<div>Loading...</div>}>
          <Footer />
        </Suspense>
      </div>
    </AnimatedBackground>
  )
}
