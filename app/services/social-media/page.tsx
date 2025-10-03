"use client"

import ServicePage from "@/components/service-page"
import { PhoneIcon, Share2, BarChart, Target, Users, TrendingUp, GlobeIcon as GlobeCursor } from "lucide-react"
import { motion } from "framer-motion"
import RevealOnScroll from "@/components/scroll-reveal"

export default function SocialMediaPage() {
  return (
    <ServicePage
      title="Social Media Marketing"
      description="Boost your online presence with strategic social media management and captivating ads that bring your brand's unique voice to social media seamlessly."
      color="#4a0072"
      icon={<PhoneIcon className="w-6 h-6 text-white" />}
      heroImage="/services/social-media-marketing.png"
      benefits={[
        "Increase brand awareness and recognition",
        "Drive targeted traffic to your website",
        "Build and engage your community",
        "Generate qualified leads and conversions",
        "Improve customer loyalty and retention",
        "Stay ahead of competitors in your industry",
        "Gain valuable insights into your audience",
      ]}
      features={[
        {
          title: "Platform-Specific Strategy",
          description:
            "Customized approaches for each social platform, from Instagram to LinkedIn, TikTok to Facebook.",
          icon: <GlobeCursor className="w-5 h-5 text-[#4a0072]" />,
        },
        {
          title: "Content Creation",
          description:
            "Eye-catching visuals and compelling copy that resonate with your target audience and showcase your brand.",
          icon: <Share2 className="w-5 h-5 text-[#4a0072]" />,
        },
        {
          title: "Campaign Management",
          description: "Strategic planning, execution, and optimization of paid social campaigns to maximize ROI.",
          icon: <Target className="w-5 h-5 text-[#4a0072]" />,
        },
        {
          title: "Community Engagement",
          description: "Active management of comments, messages, and interactions to build a loyal community.",
          icon: <Users className="w-5 h-5 text-[#4a0072]" />,
        },
        {
          title: "Performance Analytics",
          description: "Detailed reporting and analysis to track progress and continually refine your strategy.",
          icon: <BarChart className="w-5 h-5 text-[#4a0072]" />,
        },
        {
          title: "Growth Optimization",
          description: "Continuous improvement based on performance data to scale your social media presence.",
          icon: <TrendingUp className="w-5 h-5 text-[#4a0072]" />,
        },
      ]}
      process={[
        {
          step: "Discovery",
          title: "Research & Analysis",
          description:
            "We analyze your business, audience, competitors, and current social presence to establish baselines and opportunities.",
        },
        {
          step: "Strategy",
          title: "Strategic Planning",
          description:
            "We develop a tailored social media strategy aligned with your business goals and audience preferences.",
        },
        {
          step: "Creation",
          title: "Content Development",
          description:
            "Our creative team produces high-quality content calendars, visuals, captions, and ad creatives.",
        },
        {
          step: "Execution",
          title: "Implementation & Management",
          description: "We handle posting, community management, and campaign execution across platforms.",
        },
        {
          step: "Optimization",
          title: "Analysis & Refinement",
          description: "Continuous performance monitoring and strategy adjustments to maximize results.",
        },
      ]}
    >
      {/* Custom Platform Section */}
      <section className="py-20">
        <div className="container max-w-7xl mx-auto">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Platforms We Specialize In</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-transparent via-[#4a0072] to-transparent mx-auto"></div>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { name: "Instagram", logo: "/instagram-logo.png", color: "#C13584" },
              { name: "Facebook", logo: "/facebook-logo.png", color: "#3b5998" },
              { name: "LinkedIn", logo: "/linkedin-logo.png", color: "#0077b5" },
              { name: "TikTok", logo: "/tiktok-logo.png", color: "#000000" },
              { name: "Twitter", logo: "/twitter-logo.png", color: "#1DA1F2" },
            ].map((platform, index) => (
              <RevealOnScroll key={index} delay={index * 0.1}>
                <motion.div
                  className="p-6 rounded-xl flex flex-col items-center justify-center text-center"
                  style={{ backgroundColor: `${platform.color}20` }}
                  whileHover={{
                    y: -5,
                    backgroundColor: `${platform.color}30`,
                  }}
                >
                  <h3 className="font-medium">{platform.name}</h3>
                </motion.div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>
      {/* Social Media Strategy Section */}
      <section className="py-20 bg-black/20">
        <div className="container max-w-7xl mx-auto">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Strategic Social Media Management</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-transparent via-[#4a0072] to-transparent mx-auto"></div>
              <p className="mt-4 max-w-2xl mx-auto text-gray-300">
                Our comprehensive approach to social media marketing helps your brand stand out and connect with your
                audience.
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <RevealOnScroll direction="left">
              <div className="relative rounded-xl overflow-hidden">
                <img
                  src="/social-media-showcase.png"
                  alt="Social Media Strategy"
                  className="w-full h-auto rounded-xl"
                  onError={(e) => {
                    e.currentTarget.src = "/purple-social-abstract.png"
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll direction="right" delay={0.2}>
              <div className="space-y-6">
                <div className="bg-white/5 p-4 rounded-lg backdrop-blur-sm">
                  <h3 className="text-xl font-bold text-[#4a0072] mb-2">Content Strategy</h3>
                  <p className="text-gray-300">
                    We develop a tailored content strategy that aligns with your brand voice and resonates with your
                    target audience.
                  </p>
                </div>

                <div className="bg-white/5 p-4 rounded-lg backdrop-blur-sm">
                  <h3 className="text-xl font-bold text-[#4a0072] mb-2">Community Building</h3>
                  <p className="text-gray-300">
                    We help you build and nurture an engaged community around your brand through consistent interaction.
                  </p>
                </div>

                <div className="bg-white/5 p-4 rounded-lg backdrop-blur-sm">
                  <h3 className="text-xl font-bold text-[#4a0072] mb-2">Analytics & Reporting</h3>
                  <p className="text-gray-300">
                    We provide detailed analytics and reporting to track performance and continuously improve your
                    strategy.
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
