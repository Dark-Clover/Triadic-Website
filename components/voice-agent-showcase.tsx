"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Phone, MessageCircle, Calendar, Settings, Users, Zap, CheckCircle, Play, Bot, Star, ArrowRight, Mic, Headphones, Brain } from "lucide-react"

export default function VoiceAgentShowcase() {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-purple-900/20 relative overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(147,51,234,0.15),transparent_50%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.15),transparent_50%)]"></div>
        
        {/* Animated wave patterns */}
        <motion.div
          animate={{ 
            x: [0, 100, 0],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute top-1/4 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500/20 to-transparent"
        />
        <motion.div
          animate={{ 
            x: [0, -100, 0],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{ 
            duration: 12, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-1/4 right-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Enhanced Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.div 
              className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-purple-600/30 to-blue-600/30 border border-purple-500/40 rounded-full text-purple-300 mb-8 backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              >
                <Phone className="h-5 w-5" />
              </motion.div>
              <span className="text-sm font-semibold tracking-wide">AI Voice Agent</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2 h-2 bg-purple-400 rounded-full"
              />
            </motion.div>
            
            <motion.h2 
              className="text-5xl md:text-7xl font-bold text-white mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Meet Your New{" "}
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Virtual Receptionist
              </span>
            </motion.h2>
            
            <motion.p 
              className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Smart. Fast. Always On. Say goodbye to missed calls, hold music, and inconsistent customer service.
            </motion.p>
          </motion.div>

          {/* Enhanced Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Enhanced Features */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="space-y-8">
                {/* Enhanced What is Voice Agent */}
                <motion.div 
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 group"
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-4">
                    <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl">
                      <MessageCircle className="h-6 w-6 text-white" />
                    </div>
                    What is the Voice Agent?
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Our AI-powered Voice Agent is a natural-sounding, intelligent voice assistant that can handle:
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      "📞 Incoming calls",
                      "📋 Booking appointments",
                      "🛠️ Answering FAQs",
                      "🧠 Understanding customer intent",
                      "💬 Handling multi-turn conversations",
                      "✉️ Transferring calls or taking messages",
                    ].map((feature, index) => (
                      <motion.div 
                        key={index} 
                        className="flex items-center gap-3 text-sm text-gray-300 group-hover:text-white transition-colors"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                        <span>{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Enhanced Use Cases */}
                <motion.div 
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 group"
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-4">
                    <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    Use Cases
                  </h3>
                  <div className="space-y-6">
                    {[
                      { industry: "Clinics & Hospitals", desc: "Book appointments, provide directions, answer common questions", icon: "🏥" },
                      { industry: "Salons & Spas", desc: "Schedule/reschedule appointments and provide pricing info", icon: "💇‍♀️" },
                      { industry: "Law Firms", desc: "Qualify leads, answer initial queries, and transfer serious clients", icon: "⚖️" },
                      { industry: "E-Commerce", desc: "Order tracking, returns, product info", icon: "🛒" },
                      { industry: "Real Estate", desc: "Lead qualification, property info, appointment booking", icon: "🏠" },
                    ].map((useCase, index) => (
                      <motion.div 
                        key={index} 
                        className="flex items-start gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.02 }}
                      >
                        <div className="text-2xl">{useCase.icon}</div>
                        <div>
                          <div className="font-semibold text-white mb-1">{useCase.industry}</div>
                          <div className="text-sm text-gray-400">{useCase.desc}</div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Right Column - Enhanced Interactive Demo */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Enhanced Phone Mockup */}
              <div className="relative mx-auto max-w-sm">
                <motion.div 
                  className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-[3rem] p-3 shadow-2xl"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="bg-black rounded-[2.5rem] p-4 h-[650px] relative overflow-hidden">
                    {/* Enhanced Screen Content */}
                    <div className="h-full bg-gradient-to-b from-purple-900/30 to-blue-900/30 rounded-2xl p-6 flex flex-col">
                      {/* Enhanced Header */}
                      <div className="text-center mb-8">
                        <motion.div 
                          className="w-20 h-20 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center"
                          animate={{ 
                            boxShadow: [
                              "0 0 20px rgba(147, 51, 234, 0.5)",
                              "0 0 40px rgba(147, 51, 234, 0.8)",
                              "0 0 20px rgba(147, 51, 234, 0.5)"
                            ]
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <Bot className="h-10 w-10 text-white" />
                        </motion.div>
                        <h4 className="text-white font-semibold text-lg">AI Assistant</h4>
                        <p className="text-xs text-gray-400">Always Available</p>
                      </div>

                      {/* Enhanced Chat Interface */}
                      <div className="flex-1 space-y-4 mb-6">
                        {/* AI Message */}
                        <motion.div 
                          className="flex items-start gap-3"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 1 }}
                        >
                          <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
                            <Bot className="h-5 w-5 text-white" />
                          </div>
                          <div className="bg-purple-600/30 rounded-2xl rounded-tl-md p-4 max-w-[80%] backdrop-blur-sm">
                            <p className="text-white text-sm">Hello! How can I help you today?</p>
                          </div>
                        </motion.div>

                        {/* User Message */}
                        <motion.div 
                          className="flex items-start gap-3 justify-end"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 1.5 }}
                        >
                          <div className="bg-blue-600/30 rounded-2xl rounded-tr-md p-4 max-w-[80%] backdrop-blur-sm">
                            <p className="text-white text-sm">I need to book an appointment</p>
                          </div>
                          <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                            <Users className="h-5 w-5 text-white" />
                          </div>
                        </motion.div>

                        {/* AI Response */}
                        <motion.div 
                          className="flex items-start gap-3"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 2 }}
                        >
                          <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
                            <Bot className="h-5 w-5 text-white" />
                          </div>
                          <div className="bg-purple-600/30 rounded-2xl rounded-tl-md p-4 max-w-[80%] backdrop-blur-sm">
                            <p className="text-white text-sm">I'd be happy to help! What type of appointment are you looking for?</p>
                          </div>
                        </motion.div>
                      </div>

                      {/* Enhanced Call Button */}
                      <div className="text-center">
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-full px-8 py-4 shadow-lg">
                            <Play className="h-5 w-5 mr-2" />
                            Start Conversation
                          </Button>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Enhanced Floating elements */}
                <motion.div
                  animate={{ 
                    y: [0, -15, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-lg"
                />
                <motion.div
                  animate={{ 
                    y: [0, 15, 0],
                    scale: [1, 0.9, 1]
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute -bottom-6 -left-6 w-10 h-10 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 rounded-full blur-lg"
                />
              </div>
            </motion.div>
          </div>

          {/* Enhanced Why Choose Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-24"
          >
            <h3 className="text-4xl font-bold text-white text-center mb-16">
              Why Choose Our{" "}
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Voice Agent?
              </span>
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Users,
                  title: "Human-Like Conversations",
                  desc: "Built on powerful NLP models, it understands accents, context, and intent.",
                  color: "from-purple-500 to-pink-500",
                  delay: 0,
                },
                {
                  icon: Zap,
                  title: "Always Available",
                  desc: "Works 24/7 without breaks, holidays, or mood swings.",
                  color: "from-blue-500 to-cyan-500",
                  delay: 0.1,
                },
                {
                  icon: Settings,
                  title: "Scalable",
                  desc: "Handle 1 or 100 calls simultaneously without missing a beat.",
                  color: "from-green-500 to-emerald-500",
                  delay: 0.2,
                },
                {
                  icon: Calendar,
                  title: "Customizable",
                  desc: "We tailor the tone, voice, script, and logic to your brand.",
                  color: "from-orange-500 to-red-500",
                  delay: 0.3,
                },
                {
                  icon: CheckCircle,
                  title: "Cost-Effective",
                  desc: "Save up to 70% compared to a full-time human agent.",
                  color: "from-purple-500 to-blue-500",
                  delay: 0.4,
                },
                {
                  icon: Phone,
                  title: "Seamless Integration",
                  desc: "Works with your existing phone system and CRM.",
                  color: "from-cyan-500 to-blue-500",
                  delay: 0.5,
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: feature.delay }}
                  viewport={{ once: true }}
                  className="group relative"
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 relative overflow-hidden">
                    {/* Hover effect background */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                    
                    <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon className="h-8 w-8 text-white" />
                    </div>
                    <h4 className="text-xl font-semibold text-white mb-4">{feature.title}</h4>
                    <p className="text-gray-300 leading-relaxed">{feature.desc}</p>
                    
                    {/* Glow effect */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 -z-10`} />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Enhanced How It Works */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="mt-24 text-center"
          >
            <h3 className="text-4xl font-bold text-white mb-16">
              How It{" "}
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Works
              </span>
            </h3>

            <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {[
                { step: "1", title: "Customer Calls", desc: "Customer dials your number", icon: Phone },
                { step: "2", title: "Voice Agent Answers", desc: "AI instantly responds", icon: Mic },
                { step: "3", title: "Understands & Responds", desc: "Processes intent and provides solutions", icon: Brain },
                { step: "4", title: "Performs Actions", desc: "Books, routes, or answers queries", icon: CheckCircle },
              ].map((step, index) => (
                <motion.div 
                  key={index} 
                  className="relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <span className="text-white font-bold text-2xl">{step.step}</span>
                  </div>
                  <div className="text-center mb-4">
                    <step.icon className="h-8 w-8 text-purple-400 mx-auto mb-3" />
                    <h4 className="text-lg font-semibold text-white mb-2">{step.title}</h4>
                    <p className="text-gray-400 text-sm">{step.desc}</p>
                  </div>
                  
                  {/* Enhanced Connector line */}
                  {index < 3 && (
                    <div className="hidden md:block absolute top-10 left-full w-full h-1 bg-gradient-to-r from-purple-500 to-blue-500 transform -translate-y-1/2 z-10 rounded-full">
                      <motion.div
                        className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ duration: 1, delay: index * 0.3 }}
                        style={{ transformOrigin: "left" }}
                      />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
