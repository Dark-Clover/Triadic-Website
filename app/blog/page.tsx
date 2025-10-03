"use client"

import { Suspense } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import InteractiveNavbar from "@/components/interactive-navbar"
import Footer from "@/components/footer"
import AnimatedBackground from "@/components/animated-background"
import RevealOnScroll from "@/components/scroll-reveal"
import { ArrowRight } from "lucide-react"

// Loading fallback component
const SectionLoading = () => (
  <div className="flex items-center justify-center min-h-[40vh]">
    <div className="w-8 h-8 border-4 border-primary/30 border-t-primary rounded-full animate-spin"></div>
  </div>
)

// Blog post data
const blogPosts = [
  {
    id: "boost-online-presence-seo",
    title: "Boost Your Online Presence with Our Expert SEO Optimization Services",
    excerpt:
      "Are you looking to elevate your online visibility and drive more traffic to your website? Our SEO Optimization Agency specializes in tailored solutions for businesses seeking to stand out in the digital world.",
    author: "Awais Ali",
    date: "April 10, 2025",
    category: "Uncategorized",
    image: "/website-growth-strategy.png",
  },
  {
    id: "what-is-digital-marketing",
    title: "What is Digital marketing? How to build a Personal Brand though Digital marketing?",
    excerpt:
      "Digital marketing is the strategic use of online platforms like social media, search engines, and email marketing to build strong connections with target audiences.",
    author: "Alina Ahmad",
    date: "April 5, 2025",
    category: "Uncategorized",
    image: "/connected-growth.png",
  },
]

export default function BlogPage() {
  return (
    <AnimatedBackground>
      <main className="min-h-screen bg-black overflow-hidden">
        <InteractiveNavbar />

        <section className="py-32 relative">
          <div className="container">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Our <span className="text-[var(--accent-color)]">Blog</span>
              </h1>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Insights, strategies, and expert advice to help your business thrive in the digital landscape.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {blogPosts.map((post, index) => (
                <RevealOnScroll key={post.id} delay={index * 0.1}>
                  <Link href={`/blog/${post.id}`}>
                    <motion.div
                      className="bg-gray-900 rounded-xl overflow-hidden hover:shadow-lg hover:shadow-[var(--accent-color)]/10 transition-all duration-300"
                      whileHover={{ y: -5 }}
                    >
                      <div className="h-60 overflow-hidden">
                        <img
                          src={post.image || "/placeholder.svg"}
                          alt={post.title}
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        />
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                          <span>{post.date}</span>
                          <span>•</span>
                          <span>{post.category}</span>
                        </div>
                        <h2 className="text-xl font-bold text-white mb-3">{post.title}</h2>
                        <p className="text-gray-400 mb-4">{post.excerpt}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500">By {post.author}</span>
                          <span className="text-[var(--accent-color)] flex items-center gap-1 text-sm font-medium">
                            Read More <ArrowRight className="h-4 w-4" />
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>

        <Suspense fallback={<SectionLoading />}>
          <Footer />
        </Suspense>
      </main>
    </AnimatedBackground>
  )
}
