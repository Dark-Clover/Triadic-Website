"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"

interface Testimonial {
  name: string
  title: string
  content: string
  image?: string
}

export default function ClientReviews() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const testimonials: Testimonial[] = [
    {
      name: "Saleha Khan",
      title: "CEO, Indus Tech Solutions",
      content:
        "Triadic Media transformed our online presence completely. Their strategic approach to social media and content creation has resulted in a significant increase in engagement and conversions.",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Anees Antapur",
      title: "CEO Kingsmen Real Estate UAE",
      content:
        "Working with Triadic Media has been a game-changer for our real estate business. Their expertise in digital marketing and website development has helped us reach a wider audience and establish a strong online presence.",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Ellie",
      title: "Marketing Director",
      content:
        "The team at Triadic Media understands our brand perfectly. They've created a cohesive digital strategy that has helped us attract new clients and retain existing ones. Their creativity and professionalism are unmatched.",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Fahad",
      title: "Business Owner",
      content:
        "Exceptional service and results! Triadic Media helped us increase our online visibility and customer engagement through their targeted digital marketing strategies.",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "David",
      title: "E-commerce Manager",
      content:
        "Our online sales have increased by 45% since we started working with Triadic Media. Their SEO and content strategies have been game-changing for our business.",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "J.Cole",
      title: "Startup Founder",
      content:
        "As a new business, we needed to establish our brand quickly. Triadic Media delivered a comprehensive digital strategy that helped us gain traction in a competitive market.",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Dieri",
      title: "Creative Director",
      content:
        "The branding work that Triadic Media did for us perfectly captured our company's vision and values. Their attention to detail and creative approach exceeded our expectations.",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Yun Mao",
      title: "International Business Consultant",
      content:
        "Triadic Media's global approach to digital marketing helped us expand into new markets with culturally relevant content and strategies. Highly recommended for international businesses.",
      image: "/placeholder.svg?height=100&width=100",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return null
}
