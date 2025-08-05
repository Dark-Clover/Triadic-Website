"use client"

import ServicePage from "@/components/service-page"
import { Smartphone, Code, Layout, Share2, Zap, Shield, Server, Rocket } from "lucide-react"
import { motion } from "framer-motion"
import RevealOnScroll from "@/components/scroll-reveal"

export default function AppDevelopmentPage() {
  return (
    <ServicePage
      title="App Development"
      description="We create custom mobile applications for iOS and Android platforms that help businesses engage with their customers on the go. From concept to deployment, our app development team delivers intuitive, feature-rich applications."
      color="#00a86b"
      icon={<Smartphone className="w-6 h-6 text-white" />}
      heroImage="/services/app-dev.png"
      benefits={[
        "Extend your reach to mobile users",
        "Provide personalized user experiences",
        "Build customer loyalty and retention",
        "Create additional revenue streams",
        "Collect valuable user data and insights",
        "Stand out from competitors",
        "Offer offline functionality",
      ]}
      features={[
        {
          title: "Native App Development",
          description: "High-performance iOS and Android apps built specifically for each platform.",
          icon: <Code className="w-5 h-5 text-[#00a86b]" />,
        },
        {
          title: "Cross-Platform Solutions",
          description:
            "Cost-effective development across multiple platforms while maintaining native-like experiences.",
          icon: <Share2 className="w-5 h-5 text-[#00a86b]" />,
        },
        {
          title: "UI/UX Design",
          description: "Intuitive, engaging interfaces that provide exceptional user experiences.",
          icon: <Layout className="w-5 h-5 text-[#00a86b]" />,
        },
        {
          title: "Performance Optimization",
          description: "Fast, responsive apps that perform smoothly even with complex functionality.",
          icon: <Zap className="w-5 h-5 text-[#00a86b]" />,
        },
        {
          title: "Security Implementation",
          description: "Robust security measures to protect user data and privacy.",
          icon: <Shield className="w-5 h-5 text-[#00a86b]" />,
        },
        {
          title: "Backend Development",
          description: "Powerful server-side solutions to support your app's functionality.",
          icon: <Server className="w-5 h-5 text-[#00a86b]" />,
        },
      ]}
      process={[
        {
          step: "Discovery",
          title: "Requirements Analysis",
          description:
            "We analyze your business needs, target audience, and technical requirements to create a solid foundation.",
        },
        {
          step: "Design",
          title: "UI/UX Design",
          description:
            "Our designers create wireframes, mockups, and prototypes to visualize the app's interface and user flow.",
        },
        {
          step: "Development",
          title: "Frontend & Backend Coding",
          description: "Our development team builds both the user-facing elements and the server-side functionality.",
        },
        {
          step: "Testing",
          title: "Quality Assurance",
          description:
            "Rigorous testing across devices and scenarios to ensure your app works flawlessly for all users.",
        },
        {
          step: "Deployment",
          title: "App Store Submission",
          description: "We handle the submission process to make your app available on the App Store and Google Play.",
        },
        {
          step: "Maintenance",
          title: "Ongoing Support",
          description: "Regular updates, feature enhancements, and performance optimizations to keep your app current.",
        },
      ]}
    >
      {/* App Showcase Section */}
      <section className="py-20 overflow-hidden">
        <div className="container max-w-7xl mx-auto">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">App Development Technologies</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-transparent via-[#00a86b] to-transparent mx-auto"></div>
            </div>
          </RevealOnScroll>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <RevealOnScroll direction="left">
              <div className="relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#00a86b] opacity-10 rounded-full blur-[80px] -z-10"></div>

                <div className="grid grid-cols-2 gap-6">
                  {[
                    { name: "Swift", logo: "/swift-logo.png", color: "#F05138" },
                    { name: "Kotlin", logo: "/kotlin-logo.png", color: "#7F52FF" },
                    { name: "React Native", logo: "/react-native-logo.png", color: "#61DAFB" },
                    { name: "Flutter", logo: "/flutter-logo.png", color: "#02569B" },
                  ].map((tech, index) => (
                    <motion.div
                      key={index}
                      className="p-4 rounded-xl bg-white/5 backdrop-blur-sm flex flex-col items-center justify-center text-center"
                      whileHover={{
                        y: -5,
                        backgroundColor: `${tech.color}20`,
                      }}
                    >
                      <h3 className="text-sm font-medium">{tech.name}</h3>
                    </motion.div>
                  ))}
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll direction="right" delay={0.2}>
              <div className="relative">
                {/* Phone mockup */}
                <div className="relative mx-auto w-[240px]">
                  <div className="absolute top-0 left-0 w-full h-full bg-[#00a86b]/5 rounded-[40px] transform rotate-[5deg] scale-[1.04] -z-10"></div>
                  <div className="absolute top-0 left-0 w-full h-full bg-[#00a86b]/5 rounded-[40px] transform rotate-[-5deg] scale-[1.04] -z-10"></div>

                  <div className="relative border-[8px] border-black rounded-[40px] overflow-hidden">
                    <div className="absolute top-0 w-[40%] h-[30px] bg-black left-1/2 transform -translate-x-1/2 rounded-b-[16px] z-10"></div>

                    <div className="bg-[#00a86b]/10 aspect-[9/19]">
                      <div className="h-full w-full flex items-center justify-center text-center p-4">
                        <div>
                          <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-[#00a86b]/20 flex items-center justify-center">
                            <Rocket className="w-6 h-6 text-[#00a86b]" />
                          </div>
                          <h3 className="text-lg font-bold text-[#00a86b]">Your App</h3>
                          <p className="text-sm mt-2">Beautifully designed, perfectly functional</p>
                        </div>
                      </div>
                    </div>

                    <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-[40%] h-[4px] bg-black rounded-full"></div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* App Development Showcase Section */}
      <section className="py-20 bg-black/20">
        <div className="container max-w-7xl mx-auto">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">App Development Showcase</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-transparent via-[#00a86b] to-transparent mx-auto"></div>
            </div>
          </RevealOnScroll>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <RevealOnScroll direction="left">
              <div className="relative rounded-xl overflow-hidden">
                <img
                  src="/app-development-showcase.png"
                  alt="App Development Process"
                  className="w-full h-auto rounded-xl"
                  onError={(e) => {
                    e.currentTarget.src = "/abstract-mobile-development.png"
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll direction="right" delay={0.2}>
              <div className="space-y-6">
                <div className="bg-white/5 p-4 rounded-lg backdrop-blur-sm">
                  <h3 className="text-xl font-bold text-[#00a86b] mb-2">Native Performance</h3>
                  <p className="text-gray-300">
                    Our apps are built for optimal performance on each platform, ensuring smooth user experiences.
                  </p>
                </div>

                <div className="bg-white/5 p-4 rounded-lg backdrop-blur-sm">
                  <h3 className="text-xl font-bold text-[#00a86b] mb-2">Intuitive UX Design</h3>
                  <p className="text-gray-300">
                    Our create user interfaces that are both beautiful and functional, making your app a joy to use.
                  </p>
                </div>

                <div className="bg-white/5 p-4 rounded-lg backdrop-blur-sm">
                  <h3 className="text-xl font-bold text-[#00a86b] mb-2">Seamless Integration</h3>
                  <p className="text-gray-300">
                    Our apps integrate smoothly with existing systems and third-party services for maximum
                    functionality.
                  </p>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>
    </ServicePage>
  )
}
