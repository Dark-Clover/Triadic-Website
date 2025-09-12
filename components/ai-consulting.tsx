"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Users, Lightbulb, Target, TrendingUp, CheckCircle, ArrowRight, Star } from "lucide-react"

export default function AIConsulting() {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-purple-900/20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,rgba(147,51,234,0.1),transparent_50%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_70%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 rounded-full text-purple-300 mb-6">
              <Lightbulb className="h-4 w-4" />
              <span className="text-sm font-medium">AI Consulting</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Expert{" "}
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                AI Consulting
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Strategic guidance to help you navigate the AI landscape and implement solutions that drive real business value.
            </p>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Left Column - Consulting Process */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-white mb-8">
                Our{" "}
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Consulting Process
                </span>
              </h3>

              <div className="space-y-8">
                {[
                  {
                    step: "01",
                    title: "Discovery & Assessment",
                    description: "We analyze your current operations, identify AI opportunities, and assess your technical readiness.",
                    icon: Target,
                    color: "from-purple-500 to-pink-500",
                  },
                  {
                    step: "02",
                    title: "Strategy Development",
                    description: "Create a comprehensive AI roadmap aligned with your business goals and ROI expectations.",
                    icon: Lightbulb,
                    color: "from-blue-500 to-cyan-500",
                  },
                  {
                    step: "03",
                    title: "Implementation Planning",
                    description: "Design detailed implementation plans with timelines, resources, and success metrics.",
                    icon: TrendingUp,
                    color: "from-green-500 to-emerald-500",
                  },
                  {
                    step: "04",
                    title: "Execution & Optimization",
                    description: "Deploy AI solutions with continuous monitoring and optimization for maximum impact.",
                    icon: CheckCircle,
                    color: "from-orange-500 to-red-500",
                  },
                ].map((phase, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex gap-6"
                  >
                    <div className={`w-16 h-16 bg-gradient-to-r ${phase.color} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                      <phase.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-sm font-bold text-purple-400">{phase.step}</span>
                        <h4 className="text-xl font-semibold text-white">{phase.title}</h4>
                      </div>
                      <p className="text-gray-300 leading-relaxed">{phase.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Column - Expertise Areas */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <Star className="h-6 w-6 text-yellow-400" />
                  Areas of Expertise
                </h3>

                <div className="space-y-6">
                  {[
                    {
                      title: "AI Strategy & Roadmap",
                      description: "Develop comprehensive AI strategies that align with business objectives",
                      features: ["Technology assessment", "ROI analysis", "Implementation timeline"],
                    },
                    {
                      title: "Data Strategy & Infrastructure",
                      description: "Design robust data pipelines and infrastructure for AI success",
                      features: ["Data architecture", "Quality assurance", "Security compliance"],
                    },
                    {
                      title: "Model Development & Training",
                      description: "Build and train custom AI models for your specific use cases",
                      features: ["Custom algorithms", "Model optimization", "Performance tuning"],
                    },
                    {
                      title: "Integration & Deployment",
                      description: "Seamlessly integrate AI solutions into existing workflows",
                      features: ["API development", "System integration", "User training"],
                    },
                  ].map((expertise, index) => (
                    <div key={index} className="border-b border-white/10 pb-6 last:border-b-0 last:pb-0">
                      <h4 className="text-lg font-semibold text-white mb-2">{expertise.title}</h4>
                      <p className="text-gray-300 mb-3">{expertise.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {expertise.features.map((feature, featureIndex) => (
                          <span
                            key={featureIndex}
                            className="px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-xs text-purple-300"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Benefits Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h3 className="text-3xl font-bold text-white text-center mb-12">
              Why Choose Our{" "}
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                AI Consulting?
              </span>
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Users,
                  title: "Expert Team",
                  description: "Certified AI professionals with years of industry experience across multiple domains.",
                  color: "from-purple-500 to-pink-500",
                },
                {
                  icon: Target,
                  title: "Proven Results",
                  description: "Track record of successful AI implementations with measurable business impact.",
                  color: "from-blue-500 to-cyan-500",
                },
                {
                  icon: Lightbulb,
                  title: "Innovation Focus",
                  description: "Stay ahead with cutting-edge AI technologies and best practices.",
                  color: "from-green-500 to-emerald-500",
                },
                {
                  icon: TrendingUp,
                  title: "ROI-Driven",
                  description: "Focus on solutions that deliver tangible business value and measurable returns.",
                  color: "from-orange-500 to-red-500",
                },
                {
                  icon: CheckCircle,
                  title: "End-to-End Support",
                  description: "From strategy to implementation to ongoing optimization and support.",
                  color: "from-purple-500 to-blue-500",
                },
                {
                  icon: Star,
                  title: "Custom Solutions",
                  description: "Tailored AI solutions designed specifically for your business needs and challenges.",
                  color: "from-cyan-500 to-blue-500",
                },
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${benefit.color} rounded-lg flex items-center justify-center mb-4`}>
                    <benefit.icon className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-3">{benefit.title}</h4>
                  <p className="text-gray-300">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 rounded-2xl p-12 max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold text-white mb-4">
                Ready to Accelerate Your AI Journey?
              </h3>
              <p className="text-xl text-gray-300 mb-8">
                Let our expert consultants guide you through every step of your AI transformation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-full">
                  <ArrowRight className="h-5 w-5 mr-2" />
                  Schedule Consultation
                </Button>
                <Button variant="outline" className="border-purple-500/50 text-purple-300 hover:bg-purple-500/10 px-8 py-4 text-lg font-semibold rounded-full">
                  Download AI Guide
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
