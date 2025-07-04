"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Star, Play, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import SpotlightCard from "@/components/spotlight-card"
import "@/components/spotlight-card.css"

export default function ReviewsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    rating: 5,
    review: "",
  })

  const videoReviews = [
    {
      id: 1,
      client: "Saleha Khan",
      title: "Therapist & Healer",
      thumbnail: "/placeholder.svg?height=400&width=600&text=Saleha+Khan+Review",
      duration: "2:45",
    },
    {
      id: 2,
      client: "Rubina Kaur",
      title: "Therapist & Consultant",
      thumbnail: "/placeholder.svg?height=400&width=600&text=Rubina+Kaur+Review",
      duration: "3:12",
    },
    {
      id: 3,
      client: "Syed Ali Haider",
      title: "Relationship Counselor",
      thumbnail: "/placeholder.svg?height=400&width=600&text=Syed+Ali+Haider+Review",
      duration: "2:58",
    },
  ]

  const textReviews = [
    {
      name: "Saleha Khan",
      title: "Therapist & Healer",
      rating: 5,
      review:
        "Triadic Media transformed my online presence completely. Their website development and social media strategy helped me reach more clients and establish credibility in the therapy space.",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Rubina Kaur",
      title: "Therapist & Consultant",
      rating: 5,
      review:
        "Working with Triadic Media was a game-changer for my practice. They understood my vision and created a beautiful, functional website that truly represents my brand.",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Syed Ali Haider",
      title: "Relationship Counselor",
      review:
        "The team at Triadic Media is exceptional. They helped me build a strong online presence and their content creation services have been invaluable for my counseling practice.",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Savvy International",
      title: "Luxury Perfume Brand",
      rating: 5,
      review:
        "Triadic Media created a stunning e-commerce platform for our luxury perfume brand. Their attention to detail and understanding of our premium market was impressive.",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Kashif Ahmed",
      title: "AK Gaming Store Owner",
      rating: 5,
      review:
        "The gaming store website they built for us is incredible. Sales have increased significantly since launch, and customers love the user experience.",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Ruby",
      title: "Ruby Artistry Owner",
      rating: 5,
      review:
        "Triadic Media perfectly captured the essence of my art in the website design. The e-commerce functionality works flawlessly and showcases my artwork beautifully.",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Osman Shahid",
      title: "The Airport Transfers Limited",
      rating: 5,
      review:
        "Our cab booking website has been a huge success thanks to Triadic Media. The booking system is smooth and our customers find it very easy to use.",
      image: "/placeholder.svg?height=80&width=80",
    },
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleRatingChange = (rating: number) => {
    setFormData({
      ...formData,
      rating,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Review submitted:", formData)
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
              Client <span className="text-[var(--accent-color)]">Reviews</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Hear what our clients have to say about their experience working with Triadic Media
            </p>
          </motion.div>
        </div>
      </section>

      {/* Video Reviews Section */}
      <section className="py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">
              Video <span className="text-[var(--accent-color)]">Testimonials</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Watch our clients share their success stories</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {videoReviews.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              >
                <SpotlightCard className="group cursor-pointer h-full" spotlightColor="rgba(0, 229, 255, 0.2)">
                  <div className="relative aspect-video mb-4 rounded-lg overflow-hidden">
                    <img
                      src={video.thumbnail || "/placeholder.svg"}
                      alt={`${video.client} Review`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/20 transition-colors">
                      <div className="w-16 h-16 bg-[var(--accent-color)] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Play className="w-6 h-6 text-black ml-1" />
                      </div>
                    </div>
                    <div className="absolute bottom-4 right-4 bg-black/80 px-2 py-1 rounded text-sm">
                      {video.duration}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{video.client}</h3>
                  <p className="text-gray-400">{video.title}</p>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Text Reviews Section */}
      <section className="py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">
              What Our <span className="text-[var(--accent-color)]">Clients Say</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Read testimonials from businesses we've helped grow</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {textReviews.map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              >
                <SpotlightCard className="h-full" spotlightColor="rgba(0, 229, 255, 0.15)">
                  <div className="flex items-center mb-4">
                    {review.image ? (
                      <img
                        src={review.image || "/placeholder.svg"}
                        alt={review.name}
                        className="w-12 h-12 rounded-full object-cover mr-4"
                      />
                    ) : (
                      <div className="w-12 h-12 rounded-full bg-[var(--primary-color)]/20 flex items-center justify-center mr-4">
                        <User className="w-6 h-6 text-[var(--accent-color)]" />
                      </div>
                    )}
                    <div>
                      <h4 className="font-bold text-white">{review.name}</h4>
                      <p className="text-sm text-gray-400">{review.title}</p>
                    </div>
                  </div>

                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < review.rating ? "text-yellow-400 fill-current" : "text-gray-600"}`}
                      />
                    ))}
                  </div>

                  <p className="text-gray-300 leading-relaxed">{review.review}</p>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leave a Review Form */}
      <section className="py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">
                Leave Us a <span className="text-[var(--accent-color)]">Review</span>
              </h2>
              <p className="text-gray-400">Share your experience working with Triadic Media</p>
            </div>

            <SpotlightCard className="p-8" spotlightColor="rgba(0, 229, 255, 0.1)">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="bg-gray-900 border-gray-700 text-white"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="bg-gray-900 border-gray-700 text-white"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-2">
                    Company/Business
                  </label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="bg-gray-900 border-gray-700 text-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Rating *</label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button key={star} type="button" onClick={() => handleRatingChange(star)} className="p-1">
                        <Star
                          className={`w-6 h-6 ${
                            star <= formData.rating ? "text-yellow-400 fill-current" : "text-gray-600"
                          } hover:text-yellow-400 transition-colors`}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label htmlFor="review" className="block text-sm font-medium mb-2">
                    Your Review *
                  </label>
                  <Textarea
                    id="review"
                    name="review"
                    value={formData.review}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="bg-gray-900 border-gray-700 text-white"
                    placeholder="Tell us about your experience working with Triadic Media..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[var(--accent-color)] hover:bg-[var(--accent-color)]/90 text-black font-semibold py-3"
                >
                  Submit Review
                </Button>
              </form>
            </SpotlightCard>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
