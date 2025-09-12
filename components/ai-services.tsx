"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Brain, Bot, Cpu, BarChart3, MessageSquare, Zap, Target, TrendingUp, ArrowRight, Star, Sparkles } from "lucide-react"

export default function AIServices() {
  return (
    <section className="py-20 bg-gradient-to-b from-purple-900/20 to-black relative overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.15),transparent_50%)]"></div>
        <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.15),transparent_50%)]"></div>
        
        {/* Animated geometric shapes */}
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute top-1/4 right-1/4 w-32 h-32 border border-purple-500/20 rounded-full"
        />
        <motion.div
          animate={{ 
            rotate: -360,
            scale: [1, 0.9, 1]
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity, 
            ease: "linear",
            delay: 5
          }}
          className="absolute bottom-1/4 left-1/4 w-24 h-24 border border-blue-500/20 rounded-full"
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
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <Brain className="h-5 w-5" />
              </motion.div>
              <span className="text-sm font-semibold tracking-wide">AI Solutions</span>
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
              Complete{" "}
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                AI Solutions
              </span>
            </motion.h2>
            
            <motion.p 
              className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              viewport={{ once: true }}
            >
              From voice agents to predictive analytics, we provide comprehensive AI solutions that transform your business operations.
            </motion.p>
          </motion.div>

          {/* Enhanced Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Bot,
                title: "AI Voice Agents",
                description: "Intelligent voice assistants that handle customer calls 24/7 with natural conversations and seamless integration.",
                features: ["Natural language processing", "Multi-language support", "CRM integration", "Custom voice training"],
                color: "from-purple-500 to-pink-500",
                gradient: "from-purple-600/20 to-pink-600/20",
                delay: 0,
              },
              {
                icon: Brain,
                title: "Machine Learning",
                description: "Custom ML models that learn from your data to automate processes and make intelligent predictions.",
                features: ["Predictive analytics", "Pattern recognition", "Automated decision making", "Continuous learning"],
                color: "from-blue-500 to-cyan-500",
                gradient: "from-blue-600/20 to-cyan-600/20",
                delay: 0.1,
              },
              {
                icon: MessageSquare,
                title: "Chatbot Development",
                description: "Intelligent chatbots that provide instant customer support and handle complex conversations.",
                features: ["Multi-platform support", "Natural conversations", "Integration APIs", "Analytics dashboard"],
                color: "from-green-500 to-emerald-500",
                gradient: "from-green-600/20 to-emerald-600/20",
                delay: 0.2,
              },
              {
                icon: BarChart3,
                title: "Data Analytics",
                description: "Advanced analytics that turn your data into actionable insights for better decision making.",
                features: ["Real-time dashboards", "Predictive modeling", "Custom reports", "Data visualization"],
                color: "from-orange-500 to-red-500",
                gradient: "from-orange-600/20 to-red-600/20",
                delay: 0.3,
              },
              {
                icon: Target,
                title: "Process Automation",
                description: "Intelligent automation that streamlines workflows and reduces manual tasks across your organization.",
                features: ["Workflow automation", "Document processing", "Email automation", "Task scheduling"],
                color: "from-purple-500 to-blue-500",
                gradient: "from-purple-600/20 to-blue-600/20",
                delay: 0.4,
              },
              {
                icon: TrendingUp,
                title: "Predictive Analytics",
                description: "Forecast trends and customer behavior to make proactive business decisions with confidence.",
                features: ["Trend forecasting", "Customer segmentation", "Risk assessment", "Performance optimization"],
                color: "from-cyan-500 to-blue-500",
                gradient: "from-cyan-600/20 to-blue-600/20",
                delay: 0.5,
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: service.delay }}
                viewport={{ once: true }}
                className="group relative"
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 h-full hover:bg-white/10 transition-all duration-300 relative overflow-hidden">
                  {/* Enhanced Service Icon */}
                  <motion.div 
                    className={`w-20 h-20 bg-gradient-to-r ${service.color} rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    whileHover={{ rotate: 5 }}
                  >
                    <service.icon className="h-10 w-10 text-white" />
                  </motion.div>

                  {/* Enhanced Service Title */}
                  <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 group-hover:bg-clip-text transition-all duration-300">{service.title}</h3>

                  {/* Enhanced Service Description */}
                  <p className="text-gray-300 mb-8 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">{service.description}</p>

                  {/* Enhanced Features List */}
                  <div className="space-y-4 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <motion.div 
                        key={featureIndex} 
                        className="flex items-center gap-3 group-hover:gap-4 transition-all duration-300"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: featureIndex * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className={`w-3 h-3 bg-gradient-to-r ${service.color} rounded-full flex-shrink-0 group-hover:scale-125 transition-transform duration-300`}></div>
                        <span className="text-sm text-gray-300 group-hover:text-white transition-colors duration-300">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Enhanced CTA Button */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button 
                      className={`w-full bg-gradient-to-r ${service.color} hover:opacity-90 text-white rounded-2xl py-4 transition-all duration-300 shadow-lg group-hover:shadow-2xl`}
                    >
                      <span className="mr-2">Learn More</span>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </motion.div>
                </div>

                {/* Enhanced Hover effect background */}
                <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10`}></div>
                
                {/* Glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-30 blur-2xl transition-opacity duration-300 -z-20`}></div>
              </motion.div>
            ))}
          </div>

          {/* Enhanced Technology Stack */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-24 text-center"
          >
            <h3 className="text-4xl font-bold text-white mb-16">
              Powered by{" "}
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Cutting-Edge Technology
              </span>
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 max-w-5xl mx-auto">
              {[
                { name: "OpenAI GPT", logo: "🤖", color: "from-purple-500 to-pink-500" },
                { name: "TensorFlow", logo: "🧠", color: "from-blue-500 to-cyan-500" },
                { name: "PyTorch", logo: "🔥", color: "from-orange-500 to-red-500" },
                { name: "AWS AI", logo: "☁️", color: "from-yellow-500 to-orange-500" },
                { name: "Google Cloud AI", logo: "🔍", color: "from-blue-500 to-green-500" },
                { name: "Azure ML", logo: "💻", color: "from-purple-500 to-blue-500" },
              ].map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative"
                  whileHover={{ scale: 1.1, y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex flex-col items-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 relative overflow-hidden">
                    {/* Hover effect background */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${tech.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                    
                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{tech.logo}</div>
                    <span className="text-sm text-gray-300 font-medium text-center group-hover:text-white transition-colors duration-300">{tech.name}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Enhanced CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="mt-24 text-center"
          >
            <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 rounded-3xl p-16 max-w-5xl mx-auto backdrop-blur-sm">
              <motion.h3 
                className="text-4xl font-bold text-white mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Ready to Transform Your Business with AI?
              </motion.h3>
              
              <motion.p 
                className="text-xl text-gray-300 mb-10 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Let's discuss how our AI solutions can streamline your operations and drive growth.
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-6 justify-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-10 py-5 text-lg font-semibold rounded-full shadow-2xl shadow-purple-500/25">
                    <Sparkles className="h-6 w-6 mr-3" />
                    Start AI Consultation
                    <ArrowRight className="h-5 w-5 ml-3" />
                  </Button>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button variant="outline" className="border-purple-500/50 text-purple-300 hover:bg-purple-500/10 px-10 py-5 text-lg font-semibold rounded-full backdrop-blur-sm">
                    <Star className="h-5 w-5 mr-3" />
                    View Case Studies
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
