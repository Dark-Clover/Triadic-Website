"use client"

import ServicePage from "@/components/service-page"
import { Target, BarChart, Search, DollarSign, Users, Zap, LineChart, MousePointer } from "lucide-react"
import { motion } from "framer-motion"
import RevealOnScroll from "@/components/scroll-reveal"

export default function GoogleAdsPage() {
  return (
    <ServicePage
      title="Google Ads"
      description="Drive targeted traffic and increase conversions with our data-driven Google Ads campaigns. We create, manage, and optimize paid search campaigns that deliver measurable results for your business."
      color="#4285F4"
      icon={<Target className="w-6 h-6 text-white" />}
      heroImage="/services/google-ads.png"
      benefits={[
        "Generate immediate traffic to your website",
        "Target users actively searching for your products/services",
        "Control your advertising budget and costs",
        "Measure and track campaign performance",
        "Increase brand visibility and awareness",
        "Drive qualified leads and conversions",
        "Gain insights into customer behavior",
      ]}
      features={[
        {
          title: "Search Campaigns",
          description: "Targeted text ads that appear when users search for keywords relevant to your business.",
          icon: <Search className="w-5 h-5 text-[#4285F4]" />,
        },
        {
          title: "Display Advertising",
          description: "Visual ads that appear on websites within the Google Display Network.",
          icon: <MousePointer className="w-5 h-5 text-[#4285F4]" />,
        },
        {
          title: "Remarketing Campaigns",
          description: "Targeted ads that reach users who have previously visited your website.",
          icon: <Users className="w-5 h-5 text-[#4285F4]" />,
        },
        {
          title: "Shopping Campaigns",
          description: "Product listings that appear in Google search results and the Shopping tab.",
          icon: <DollarSign className="w-5 h-5 text-[#4285F4]" />,
        },
        {
          title: "Performance Tracking",
          description: "Comprehensive analytics and reporting to measure campaign effectiveness.",
          icon: <BarChart className="w-5 h-5 text-[#4285F4]" />,
        },
        {
          title: "Conversion Optimization",
          description: "Continuous refinement to improve conversion rates and reduce cost per acquisition.",
          icon: <Zap className="w-5 h-5 text-[#4285F4]" />,
        },
      ]}
      process={[
        {
          step: "Research",
          title: "Account & Market Analysis",
          description:
            "We research your industry, competitors, and target audience to identify opportunities and challenges.",
        },
        {
          step: "Strategy",
          title: "Campaign Planning",
          description:
            "We develop a comprehensive strategy including campaign structure, keywords, and bidding approach.",
        },
        {
          step: "Creation",
          title: "Ad Development",
          description: "We create compelling ad copy, extensions, and landing pages designed to drive conversions.",
        },
        {
          step: "Launch",
          title: "Campaign Implementation",
          description: "We set up and launch your campaigns with proper tracking and conversion measurement.",
        },
        {
          step: "Optimization",
          title: "Performance Management",
          description: "We continuously monitor and optimize your campaigns to improve performance and reduce costs.",
        },
        {
          step: "Reporting",
          title: "Analysis & Insights",
          description: "We provide detailed reporting on campaign performance and actionable insights for improvement.",
        },
      ]}
    >
      {/* Campaign Performance Section */}
      <section className="py-20">
        <div className="container max-w-7xl mx-auto">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Campaign Performance Metrics</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-transparent via-[#4285F4] to-transparent mx-auto"></div>
            </div>
          </RevealOnScroll>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { metric: "Click-Through Rate", value: "4.7%", icon: <MousePointer className="w-5 h-5" /> },
              { metric: "Conversion Rate", value: "8.2%", icon: <Zap className="w-5 h-5" /> },
              { metric: "Cost Per Click", value: "$1.85", icon: <DollarSign className="w-5 h-5" /> },
              { metric: "Return on Ad Spend", value: "380%", icon: <LineChart className="w-5 h-5" /> },
            ].map((item, index) => (
              <RevealOnScroll key={index} delay={index * 0.1}>
                <motion.div
                  className="bg-white/5 backdrop-blur-sm p-6 rounded-xl"
                  whileHover={{ y: -5, backgroundColor: "rgba(66,133,244,0.1)" }}
                >
                  <div className="flex items-center mb-4">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center mr-4"
                      style={{ backgroundColor: "#4285F420" }}
                    >
                      {item.icon}
                    </div>
                    <h3 className="font-medium">{item.metric}</h3>
                  </div>
                  <p className="text-3xl font-bold" style={{ color: "#4285F4" }}>
                    {item.value}
                  </p>
                  <p className="text-sm text-gray-400 mt-2">Industry average outperformed</p>
                </motion.div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Google Ads Platforms Section */}
      <section className="py-20 overflow-hidden">
        <div className="container max-w-7xl mx-auto">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Google Ads Platforms We Manage</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-transparent via-[#4285F4] to-transparent mx-auto"></div>
            </div>
          </RevealOnScroll>

          <div className="relative">
            {/* Background decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#4285F4] opacity-5 rounded-full blur-[100px] -z-10"></div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Google Search",
                  description:
                    "Text ads that appear when users search for relevant keywords, targeting users with high purchase intent.",
                  color: "#4285F4",
                  icon: <Search className="w-8 h-8" />,
                },
                {
                  title: "Google Display",
                  description:
                    "Visual ads across millions of websites in the Google Display Network, ideal for brand awareness.",
                  color: "#34A853",
                  icon: <MousePointer className="w-8 h-8" />,
                },
                {
                  title: "Google Shopping",
                  description:
                    "Product listings with images and prices that appear in search results and the Shopping tab.",
                  color: "#FBBC05",
                  icon: <DollarSign className="w-8 h-8" />,
                },
                {
                  title: "YouTube Ads",
                  description: "Video ads that appear before or during YouTube videos, reaching a massive audience.",
                  color: "#EA4335",
                  icon: <Users className="w-8 h-8" />,
                },
                {
                  title: "Google Local",
                  description:
                    "Location-based ads that target users in specific geographic areas, ideal for local businesses.",
                  color: "#4285F4",
                  icon: <Target className="w-8 h-8" />,
                },
                {
                  title: "Google Remarketing",
                  description:
                    "Targeted ads that reach users who have previously visited your website, increasing conversion rates.",
                  color: "#34A853",
                  icon: <Zap className="w-8 h-8" />,
                },
              ].map((platform, index) => (
                <RevealOnScroll key={index} delay={index * 0.1}>
                  <motion.div
                    className="bg-white/5 backdrop-blur-sm rounded-xl p-8"
                    whileHover={{
                      y: -5,
                      backgroundColor: `rgba(${
                        platform.color === "#4285F4"
                          ? "66,133,244"
                          : platform.color === "#34A853"
                            ? "52,168,83"
                            : platform.color === "#FBBC05"
                              ? "251,188,5"
                              : "234,67,53"
                      },0.1)`,
                    }}
                  >
                    <div
                      className="w-16 h-16 rounded-full mb-6 flex items-center justify-center"
                      style={{ backgroundColor: `${platform.color}20` }}
                    >
                      <div style={{ color: platform.color }}>{platform.icon}</div>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{platform.title}</h3>
                    <p className="text-gray-300">{platform.description}</p>
                  </motion.div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>
    </ServicePage>
  )
}
