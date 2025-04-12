"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { cn } from "@/lib/utils"
import { User } from "lucide-react"

interface Testimonial {
  name: string
  title: string
  content: string
  image?: string
}

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const testimonials: Testimonial[] = [
    {
      name: "Syed Ali Haider",
      title: "Owner Heart 2 Heart",
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
      name: "Sarah Johnson",
      title: "Owner House of Salon",
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

  return (
    <section className="py-20 bg-black" ref={ref}>
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 text-white">
            Businesses We <span className="text-[var(--accent-color)]">Created</span> From Scratch
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            These are the businesses we built from the ground up. Their success stories matter the most to us.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={cn(
                "bg-gray-900 p-8 rounded-2xl shadow-lg transform transition-all duration-300 hover:-translate-y-2",
                index === 1 ? "md:translate-y-12" : "",
              )}
            >
              <div className="flex items-center mb-6">
                {testimonial.image ? (
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                ) : (
                  <div className="w-16 h-16 rounded-full bg-[var(--primary-color)]/20 flex items-center justify-center mr-4">
                    <User className="w-8 h-8 text-[var(--accent-color)]" />
                  </div>
                )}
                <div>
                  <h4 className="text-xl font-bold text-white">{testimonial.name}</h4>
                  <p className="text-gray-400">{testimonial.title}</p>
                </div>
              </div>

              <div className="relative">
                <div className="text-6xl font-serif text-[var(--accent-color)]/10 absolute -top-6 -left-2">"</div>
                <p className="text-gray-300 relative z-10">{testimonial.content}</p>
                <div className="text-6xl font-serif text-[var(--accent-color)]/10 absolute -bottom-10 -right-2">"</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
