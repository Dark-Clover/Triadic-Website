"use client"

import ServicePage from "@/components/service-page"
import { Palette, Eye, Layers, PenTool, Compass, Lightbulb, Aperture } from "lucide-react"
import { motion } from "framer-motion"
import RevealOnScroll from "@/components/scroll-reveal"

export default function BrandingPage() {
  return (
    <ServicePage
      title="Branding & Design"
      description="Create a memorable brand identity that resonates with your target audience and sets you apart from competitors. Our branding services help you establish a cohesive visual presence across all touchpoints."
      color="#e94057"
      icon={<Palette className="w-6 h-6 text-white" />}
      heroImage="/services/branding-and-design.png"
      benefits={[
        "Establish a distinctive brand identity",
        "Build trust and credibility with your audience",
        "Create emotional connections with customers",
        "Ensure consistency across all touchpoints",
        "Stand out from competitors in your industry",
        "Support marketing and advertising efforts",
        "Increase brand recognition and recall",
      ]}
      features={[
        {
          title: "Brand Strategy",
          description:
            "Comprehensive brand positioning, messaging, and value proposition development to guide your brand.",
          icon: <Compass className="w-5 h-5 text-[#e94057]" />,
        },
        {
          title: "Logo Design",
          description: "Distinctive, memorable logos that capture your brand essence and resonate with your audience.",
          icon: <PenTool className="w-5 h-5 text-[#e94057]" />,
        },
        {
          title: "Visual Identity",
          description:
            "Cohesive color palettes, typography, imagery, and design elements that express your brand personality.",
          icon: <Eye className="w-5 h-5 text-[#e94057]" />,
        },
        {
          title: "Brand Guidelines",
          description:
            "Comprehensive documentation to ensure consistent application of your brand across all channels.",
          icon: <Layers className="w-5 h-5 text-[#e94057]" />,
        },
        {
          title: "Marketing Collateral",
          description: "Professionally designed business cards, brochures, presentations, and promotional materials.",
          icon: <Lightbulb className="w-5 h-5 text-[#e94057]" />,
        },
        {
          title: "Brand Experience",
          description:
            "Holistic approach to how customers experience your brand across digital and physical touchpoints.",
          icon: <Aperture className="w-5 h-5 text-[#e94057]" />,
        },
      ]}
      process={[
        {
          step: "Discovery",
          title: "Brand Audit & Research",
          description:
            "We analyze your current brand, audience, competitors, and market position to identify opportunities.",
        },
        {
          step: "Strategy",
          title: "Brand Positioning",
          description:
            "We develop your brand strategy, including positioning, messaging, and unique value proposition.",
        },
        {
          step: "Creation",
          title: "Visual Identity Design",
          description:
            "Our designers create your logo, color palette, typography, and visual elements that express your brand.",
        },
        {
          step: "Application",
          title: "Brand Implementation",
          description:
            "We apply your new brand identity across key touchpoints and create comprehensive brand guidelines.",
        },
        {
          step: "Launch",
          title: "Brand Rollout",
          description: "We support the launch of your new brand with strategic communication and implementation.",
        },
        {
          step: "Evolution",
          title: "Brand Management",
          description: "Ongoing support to ensure your brand remains consistent, relevant, and impactful over time.",
        },
      ]}
    >
      {/* Brand Elements Showcase */}
      <section className="py-20 overflow-hidden">
        <div className="container max-w-7xl mx-auto">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Brand Elements We Create</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-transparent via-[#e94057] to-transparent mx-auto"></div>
            </div>
          </RevealOnScroll>

          <div className="relative">
            {/* Background decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#e94057] opacity-10 rounded-full blur-[100px] -z-10"></div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { name: "Logo Design", icon: <PenTool className="w-6 h-6" /> },
                { name: "Color Palette", icon: <Palette className="w-6 h-6" /> },
                { name: "Typography", icon: <Layers className="w-6 h-6" /> },
                { name: "Brand Guidelines", icon: <Compass className="w-6 h-6" /> },
                { name: "Business Cards", icon: <Aperture className="w-6 h-6" /> },
                { name: "Social Media", icon: <Eye className="w-6 h-6" /> },
                { name: "Packaging", icon: <Lightbulb className="w-6 h-6" /> },
                { name: "Brand Voice", icon: <Layers className="w-6 h-6" /> },
              ].map((element, index) => (
                <RevealOnScroll key={index} delay={index * 0.05}>
                  <motion.div
                    className="bg-white/5 backdrop-blur-sm rounded-xl p-6 flex flex-col items-center text-center"
                    whileHover={{
                      y: -5,
                      backgroundColor: "rgba(233,64,87,0.1)",
                    }}
                  >
                    <div
                      className="w-16 h-16 rounded-full mb-4 flex items-center justify-center"
                      style={{ backgroundColor: "#e9405720" }}
                    >
                      {element.icon}
                    </div>
                    <h3 className="font-medium">{element.name}</h3>
                  </motion.div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Brand Identity Showcase */}
      <section className="py-20">
        <div className="container max-w-7xl mx-auto">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Brand Identity Showcase</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-transparent via-[#e94057] to-transparent mx-auto"></div>
            </div>
          </RevealOnScroll>

          <div className="grid md:grid-cols-2 gap-12">
            <RevealOnScroll direction="left">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-full h-full border-2 border-[#e94057]/30 rounded-xl"></div>
                <div className="bg-gradient-to-br from-[#e94057]/10 to-[#e94057]/5 rounded-xl p-8">
                  <div className="mb-6">
                    <div
                      className="w-16 h-16 rounded-full mb-4 flex items-center justify-center"
                      style={{ backgroundColor: "#e9405720" }}
                    >
                      <Compass className="w-8 h-8 text-[#e94057]" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Brand Strategy</h3>
                    <p className="text-gray-300">
                      We develop comprehensive brand strategies that align with your business goals and resonate with
                      your target audience.
                    </p>
                  </div>

                  <ul className="space-y-3">
                    {[
                      "Brand Positioning",
                      "Target Audience Analysis",
                      "Competitive Landscape",
                      "Brand Messaging",
                      "Value Proposition",
                      "Brand Personality",
                    ].map((item, i) => (
                      <li key={i} className="flex items-center">
                        <div
                          className="w-4 h-4 rounded-full mr-3 flex-shrink-0"
                          style={{ backgroundColor: "#e94057" }}
                        ></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll direction="right">
              <div className="relative">
                <div className="absolute -top-4 -right-4 w-full h-full border-2 border-[#e94057]/30 rounded-xl"></div>
                <div className="bg-gradient-to-br from-[#e94057]/10 to-[#e94057]/5 rounded-xl p-8">
                  <div className="mb-6">
                    <div
                      className="w-16 h-16 rounded-full mb-4 flex items-center justify-center"
                      style={{ backgroundColor: "#e9405720" }}
                    >
                      <PenTool className="w-8 h-8 text-[#e94057]" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Visual Identity</h3>
                    <p className="text-gray-300">
                      We create distinctive visual identities that capture your brand essence and create a lasting
                      impression.
                    </p>
                  </div>

                  <ul className="space-y-3">
                    {[
                      "Logo Design",
                      "Color Palette",
                      "Typography System",
                      "Iconography",
                      "Photography Style",
                      "Design Elements",
                    ].map((item, i) => (
                      <li key={i} className="flex items-center">
                        <div
                          className="w-4 h-4 rounded-full mr-3 flex-shrink-0"
                          style={{ backgroundColor: "#e94057" }}
                        ></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>
    </ServicePage>
  )
}
