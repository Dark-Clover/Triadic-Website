"use client"

import ServicePage from "@/components/service-page"
import { Search, BarChart, Globe, Target, TrendingUp, FileText, Link2 } from "lucide-react"
import { motion } from "framer-motion"
import RevealOnScroll from "@/components/scroll-reveal"

export default function SEOPage() {
  return (
    <ServicePage
      title="Search Engine Optimization"
      description="Boost your online visibility with our data-driven SEO strategies that improve your search rankings and drive targeted organic traffic to your website."
      color="#ff6b00"
      icon={<Search className="w-6 h-6 text-white" />}
      heroImage="/services/seo.png"
      benefits={[
        "Increase organic search visibility",
        "Drive targeted traffic to your website",
        "Improve user experience and engagement",
        "Build credibility and authority",
        "Generate qualified leads and conversions",
        "Achieve sustainable long-term results",
        "Gain competitive advantage in your industry",
      ]}
      features={[
        {
          title: "Technical SEO",
          description:
            "Comprehensive site audits and optimization to ensure search engines can crawl and index your site effectively.",
          icon: <Globe className="w-5 h-5 text-[#ff6b00]" />,
        },
        {
          title: "On-Page Optimization",
          description:
            "Strategic optimization of content, meta tags, and internal linking to improve relevance and rankings.",
          icon: <FileText className="w-5 h-5 text-[#ff6b00]" />,
        },
        {
          title: "Keyword Research",
          description: "In-depth analysis to identify high-value keywords that your target audience is searching for.",
          icon: <Search className="w-5 h-5 text-[#ff6b00]" />,
        },
        {
          title: "Link Building",
          description: "Ethical backlink acquisition to build domain authority and improve search rankings.",
          icon: <Link2 className="w-5 h-5 text-[#ff6b00]" />,
        },
        {
          title: "Local SEO",
          description: "Specialized strategies to improve visibility in local search results and Google Maps.",
          icon: <Target className="w-5 h-5 text-[#ff6b00]" />,
        },
        {
          title: "Performance Tracking",
          description: "Comprehensive analytics and reporting to measure progress and refine strategies.",
          icon: <BarChart className="w-5 h-5 text-[#ff6b00]" />,
        },
      ]}
      process={[
        {
          step: "Audit",
          title: "Comprehensive Analysis",
          description:
            "We conduct a thorough audit of your website's current SEO performance, identifying strengths and opportunities.",
        },
        {
          step: "Research",
          title: "Keyword & Competitor Analysis",
          description:
            "We research high-value keywords and analyze competitor strategies to inform our optimization approach.",
        },
        {
          step: "Strategy",
          title: "Custom SEO Roadmap",
          description:
            "We develop a tailored SEO strategy aligned with your business goals and target audience behavior.",
        },
        {
          step: "Implementation",
          title: "On-site & Off-site Optimization",
          description:
            "We implement technical fixes, content optimization, and link building strategies to improve rankings.",
        },
        {
          step: "Monitoring",
          title: "Performance Tracking",
          description: "We continuously monitor rankings, traffic, and conversions to measure the impact of our work.",
        },
        {
          step: "Refinement",
          title: "Strategy Adjustment",
          description:
            "We regularly refine our approach based on performance data and algorithm updates to maximize results.",
        },
      ]}
    >
      {/* SEO Analytics Dashboard Section */}
      <section className="py-20">
        <div className="container max-w-7xl mx-auto">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">SEO Performance Analytics</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-transparent via-[#ff6b00] to-transparent mx-auto"></div>
            </div>
          </RevealOnScroll>

          <div className="bg-black/30 rounded-xl p-8 backdrop-blur-sm">
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {[
                { label: "Organic Traffic", value: "+187%", icon: <TrendingUp className="w-5 h-5" /> },
                { label: "Keyword Rankings", value: "Top 10", icon: <Target className="w-5 h-5" /> },
                { label: "Conversion Rate", value: "+43%", icon: <BarChart className="w-5 h-5" /> },
              ].map((metric, index) => (
                <RevealOnScroll key={index} delay={index * 0.1}>
                  <motion.div
                    className="bg-white/5 p-6 rounded-lg"
                    whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.1)" }}
                  >
                    <div className="flex items-center mb-3">
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center mr-3"
                        style={{ backgroundColor: "#ff6b0020" }}
                      >
                        {metric.icon}
                      </div>
                      <h3 className="text-lg font-medium">{metric.label}</h3>
                    </div>
                    <p className="text-3xl font-bold" style={{ color: "#ff6b00" }}>
                      {metric.value}
                    </p>
                    <p className="text-sm text-gray-400 mt-2">Average client improvement</p>
                  </motion.div>
                </RevealOnScroll>
              ))}
            </div>

            <RevealOnScroll>
              <div className="relative h-[300px] bg-black/50 rounded-lg overflow-hidden">
                {/* Mock SEO Analytics Chart */}
                <div className="absolute inset-0 p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h4 className="font-medium">Organic Traffic Growth</h4>
                    <div className="flex space-x-2">
                      {["1M", "3M", "6M", "1Y"].map((period, i) => (
                        <div
                          key={i}
                          className={`px-2 py-1 rounded text-xs ${
                            period === "6M" ? "bg-[#ff6b00] text-white" : "bg-white/10"
                          }`}
                        >
                          {period}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="relative h-[200px]">
                    {/* Chart grid lines */}
                    {[0, 1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="absolute w-full h-px bg-white/10"
                        style={{ bottom: `${(i * 200) / 4}px` }}
                      ></div>
                    ))}

                    {/* Chart data visualization */}
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                      {/* Area chart */}
                      <path
                        d="M0,100 L0,80 C10,75 20,85 30,70 C40,55 50,60 60,40 C70,20 80,25 90,15 L100,10 L100,100 Z"
                        fill="url(#orangeGradient)"
                        opacity="0.2"
                      />
                      {/* Line chart */}
                      <path
                        d="M0,80 C10,75 20,85 30,70 C40,55 50,60 60,40 C70,20 80,25 90,15 L100,10"
                        fill="none"
                        stroke="#ff6b00"
                        strokeWidth="2"
                      />
                      {/* Gradient definition */}
                      <defs>
                        <linearGradient id="orangeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#ff6b00" stopOpacity="0.8" />
                          <stop offset="100%" stopColor="#ff6b00" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                    </svg>

                    {/* Data points */}
                    {[
                      { x: 0, y: 80 },
                      { x: 30, y: 70 },
                      { x: 60, y: 40 },
                      { x: 90, y: 15 },
                    ].map((point, i) => (
                      <div
                        key={i}
                        className="absolute w-3 h-3 bg-[#ff6b00] rounded-full border-2 border-white"
                        style={{ left: `${point.x}%`, bottom: `${point.y}%`, transform: "translate(-50%, 50%)" }}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>
    </ServicePage>
  )
}
