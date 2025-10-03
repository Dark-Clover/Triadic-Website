"use client"

import ServicePage from "@/components/service-page"
import { FileText, Camera, Video, Mic, PenTool, BarChart, BookOpen, Share2 } from "lucide-react"
import { motion } from "framer-motion"
import RevealOnScroll from "@/components/scroll-reveal"

export default function ContentCreationPage() {
  return (
    <ServicePage
      title="Content Creation"
      description="Engage your audience with compelling content that tells your brand story and drives meaningful connections. Our content creation services span written, visual, and interactive formats tailored to your brand voice."
      color="#2e7d32"
      icon={<FileText className="w-6 h-6 text-white" />}
      heroImage="/services/content-creation.png"
      benefits={[
        "Establish thought leadership in your industry",
        "Improve search engine rankings with quality content",
        "Build trust and credibility with your audience",
        "Drive engagement across marketing channels",
        "Generate leads and nurture prospects",
        "Support sales and conversion processes",
        "Create reusable assets for multiple platforms",
      ]}
      features={[
        {
          title: "Written Content",
          description:
            "Blog posts, articles, whitepapers, and website copy that educate and engage your target audience.",
          icon: <PenTool className="w-5 h-5 text-[#2e7d32]" />,
        },
        {
          title: "Visual Content",
          description: "Eye-catching graphics, infographics, and images that communicate complex ideas effectively.",
          icon: <Camera className="w-5 h-5 text-[#2e7d32]" />,
        },
        {
          title: "Video Production",
          description:
            "Engaging video content from concept to final edit, including promotional, educational, and brand videos.",
          icon: <Video className="w-5 h-5 text-[#2e7d32]" />,
        },
        {
          title: "Podcast Production",
          description: "Professional audio content that positions your brand as an industry authority.",
          icon: <Mic className="w-5 h-5 text-[#2e7d32]" />,
        },
        {
          title: "Content Strategy",
          description: "Comprehensive planning to ensure your content aligns with business goals and audience needs.",
          icon: <BookOpen className="w-5 h-5 text-[#2e7d32]" />,
        },
        {
          title: "Content Distribution",
          description: "Strategic promotion of your content across channels to maximize reach and impact.",
          icon: <Share2 className="w-5 h-5 text-[#2e7d32]" />,
        },
      ]}
      process={[
        {
          step: "Strategy",
          title: "Content Planning",
          description:
            "We develop a content strategy aligned with your business goals, audience needs, and marketing objectives.",
        },
        {
          step: "Research",
          title: "Topic & Keyword Research",
          description:
            "We identify high-value topics and keywords that resonate with your audience and support SEO goals.",
        },
        {
          step: "Creation",
          title: "Content Development",
          description:
            "Our team creates high-quality content across formats, tailored to your brand voice and audience preferences.",
        },
        {
          step: "Design",
          title: "Visual Enhancement",
          description:
            "We enhance your content with professional design elements that improve engagement and comprehension.",
        },
        {
          step: "Distribution",
          title: "Content Promotion",
          description:
            "We implement strategic distribution across channels to maximize the reach and impact of your content.",
        },
        {
          step: "Analysis",
          title: "Performance Tracking",
          description:
            "We measure content performance against KPIs and refine our approach based on data-driven insights.",
        },
      ]}
    >
      {/* Content Types Section */}
      <section className="py-20">
        <div className="container max-w-7xl mx-auto">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Content Types We Create</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-transparent via-[#2e7d32] to-transparent mx-auto"></div>
            </div>
          </RevealOnScroll>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Written Content",
                items: ["Blog Posts", "Articles", "Whitepapers", "Case Studies", "Website Copy", "Email Newsletters"],
                icon: <PenTool className="w-8 h-8" />,
              },
              {
                title: "Visual Content",
                items: [
                  "Infographics",
                  "Social Media Graphics",
                  "Presentations",
                  "Illustrations",
                  "Data Visualizations",
                ],
                icon: <Camera className="w-8 h-8" />,
              },
              {
                title: "Video & Audio",
                items: ["Promotional Videos", "Explainer Videos", "Testimonials", "Podcasts", "Webinars", "Interviews"],
                icon: <Video className="w-8 h-8" />,
              },
            ].map((category, index) => (
              <RevealOnScroll key={index} delay={index * 0.1}>
                <motion.div
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-8"
                  whileHover={{ y: -5, backgroundColor: "rgba(46,125,50,0.1)" }}
                >
                  <div
                    className="w-16 h-16 rounded-full mb-6 flex items-center justify-center"
                    style={{ backgroundColor: "#2e7d3220" }}
                  >
                    <div className="text-[#2e7d32]">{category.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold mb-4">{category.title}</h3>
                  <ul className="space-y-2">
                    {category.items.map((item, i) => (
                      <li key={i} className="flex items-center">
                        <div
                          className="w-2 h-2 rounded-full mr-2 flex-shrink-0"
                          style={{ backgroundColor: "#2e7d32" }}
                        ></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Content Performance Section */}
      <section className="py-20 overflow-hidden">
        <div className="container max-w-7xl mx-auto">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Content Performance Metrics</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-transparent via-[#2e7d32] to-transparent mx-auto"></div>
            </div>
          </RevealOnScroll>

          <div className="relative">
            {/* Background decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#2e7d32] opacity-10 rounded-full blur-[100px] -z-10"></div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { metric: "Engagement Rate", value: "+165%", icon: <Share2 className="w-6 h-6" /> },
                { metric: "Time on Page", value: "4:32", icon: <BookOpen className="w-6 h-6" /> },
                { metric: "Conversion Rate", value: "+43%", icon: <BarChart className="w-6 h-6" /> },
                { metric: "Social Shares", value: "+210%", icon: <Share2 className="w-6 h-6" /> },
                { metric: "Organic Traffic", value: "+87%", icon: <BarChart className="w-6 h-6" /> },
                { metric: "Lead Generation", value: "+68%", icon: <BookOpen className="w-6 h-6" /> },
              ].map((item, index) => (
                <RevealOnScroll key={index} delay={index * 0.1}>
                  <motion.div
                    className="bg-white/5 backdrop-blur-sm p-6 rounded-xl"
                    whileHover={{ y: -5, backgroundColor: "rgba(46,125,50,0.1)" }}
                  >
                    <div className="flex items-center mb-4">
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center mr-4"
                        style={{ backgroundColor: "#2e7d3220" }}
                      >
                        <div className="text-[#2e7d32]">{item.icon}</div>
                      </div>
                      <h3 className="font-medium">{item.metric}</h3>
                    </div>
                    <p className="text-3xl font-bold" style={{ color: "#2e7d32" }}>
                      {item.value}
                    </p>
                    <p className="text-sm text-gray-400 mt-2">Average improvement with our content</p>
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
