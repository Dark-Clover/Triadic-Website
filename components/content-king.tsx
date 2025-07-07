"use client"

import { motion } from "framer-motion"
import { Instagram, Eye, Globe, Users, DollarSign } from "lucide-react"
import RevealOnScroll from "./scroll-reveal"

export default function ContentKing() {
  const statVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
    hover: {
      scale: 1.08,
      y: -5,
      boxShadow: "0 20px 40px rgba(6, 182, 212, 0.3)",
      transition: { duration: 0.3, ease: "easeOut" },
    },
  }

  const stats = [
    {
      icon: Eye,
      number: "200M+",
      title: "Views Generated",
      subtitle: "across 3 platforms",
      gradient: "from-cyan-400 to-blue-500",
    },
    {
      icon: Globe,
      number: "20+",
      title: "Industries Served", // Changed from "Websites Created"
      subtitle: "custom solutions",
      gradient: "from-purple-400 to-pink-500",
    },
    {
      icon: Users,
      number: "6500+",
      title: "Leads Generated",
      subtitle: "qualified prospects",
      gradient: "from-green-400 to-emerald-500",
    },
    {
      icon: DollarSign,
      number: "$1M+",
      title: "Revenue Generated",
      subtitle: "for our clients",
      gradient: "from-yellow-400 to-orange-500",
    },
  ]

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <RevealOnScroll>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon
                return (
                  <motion.div
                    key={index}
                    className="relative group"
                    variants={statVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    whileHover="hover"
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="bg-white/5 backdrop-blur-xl p-8 rounded-2xl border border-white/20 text-center cursor-pointer hover:bg-white/10 transition-all duration-500 ease-out relative overflow-hidden">
                      {/* Gradient overlay on hover */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`}
                      ></div>

                      {/* Icon */}
                      <div className="relative z-10 mb-4 flex justify-center">
                        <div className={`p-3 rounded-full bg-gradient-to-br ${stat.gradient} shadow-lg`}>
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                      </div>

                      {/* Number */}
                      <h3
                        className={`text-5xl md:text-6xl font-black bg-gradient-to-br ${stat.gradient} bg-clip-text text-transparent mb-3 relative z-10`}
                      >
                        {stat.number}
                      </h3>

                      {/* Title */}
                      <p className="text-white text-xl font-semibold mb-1 relative z-10">{stat.title}</p>

                      {/* Subtitle */}
                      <p className="text-gray-400 text-sm relative z-10">{stat.subtitle}</p>

                      {/* Decorative corner accent */}
                      <div
                        className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl ${stat.gradient} opacity-20 rounded-bl-full`}
                      ></div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.3}>
            <div>
              <h2 className="text-5xl md:text-6xl font-bold tracking-tighter mb-8 text-white leading-tight">
                Content is{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">King</span>
              </h2>
              <p className="text-gray-300 mb-10 text-xl leading-relaxed">
                In today's digital landscape, compelling content is the cornerstone of effective marketing. At Triadic
                Media, we craft engaging, authentic content that resonates with your audience and drives meaningful
                engagement.
              </p>

              <div className="grid sm:grid-cols-2 gap-6 mb-10">
                <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <h3 className="text-2xl font-bold text-white mb-4">Strategic Content</h3>
                  <p className="text-gray-400 text-lg">
                    We develop content strategies aligned with your business goals and audience needs.
                  </p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <h3 className="text-2xl font-bold text-white mb-4">Multi-Channel Approach</h3>
                  <p className="text-gray-400 text-lg">
                    Our content is optimized for various platforms to maximize reach and engagement.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <a
                  href="https://www.instagram.com/triadicmarketing/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] px-6 py-3 rounded-full hover:opacity-90 transition-all duration-300 hover:scale-105 shadow-lg text-lg font-medium"
                >
                  <Instagram size={20} />
                  <span>Follow on Instagram</span>
                </a>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  )
}
