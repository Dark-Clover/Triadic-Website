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
      name: "Rahul Sharma",
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
      name: "Ayesha Khan",
      title: "Founder, Lahore Fashion House",
      content:
        "The team at Triadic Media understands our brand perfectly. They've created a cohesive digital strategy that has helped us attract new clients and retain existing ones. Their creativity and professionalism are unmatched.",
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
