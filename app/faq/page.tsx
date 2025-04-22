"use client"

import { Suspense, useState } from "react"
import InteractiveNavbar from "@/components/interactive-navbar"
import Footer from "@/components/footer"
import AnimatedBackground from "@/components/animated-background"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

// Loading fallback component
const SectionLoading = () => (
  <div className="flex items-center justify-center min-h-[40vh]">
    <div className="w-8 h-8 border-4 border-primary/30 border-t-primary rounded-full animate-spin"></div>
  </div>
)

// Define types for FAQ items
interface FAQItemProps {
  question: string
  answer: string
  isOpen: boolean
  toggleOpen: () => void
}

// FAQ Item component
const FAQItem = ({ question, answer, isOpen, toggleOpen }: FAQItemProps) => {
  return (
    <div className="border-b border-gray-800 last:border-0">
      <button
        className="flex justify-between items-center w-full py-6 text-left focus:outline-none"
        onClick={toggleOpen}
      >
        <h3 className="text-xl font-medium text-white">{question}</h3>
        <ChevronDown
          className={cn("h-5 w-5 text-gray-400 transition-transform duration-300", isOpen && "rotate-180")}
        />
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-300",
          isOpen ? "max-h-96 opacity-100 pb-6" : "max-h-0 opacity-0",
        )}
      >
        <div className="text-gray-400">{answer}</div>
      </div>
    </div>
  )
}

// Define type for FAQ data
interface FAQItem {
  question: string
  answer: string
}

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number>(0)

  const faqs: FAQItem[] = [
    {
      question: "Why is digital marketing important for my business?",
      answer:
        "Digital marketing is essential in today's connected world as it allows businesses to reach their target audience where they spend most of their time—online. It provides measurable results, cost-effective strategies, and the ability to engage with customers in real-time. Unlike traditional marketing, digital marketing enables precise targeting, personalization, and the flexibility to adjust campaigns based on performance data.",
    },
    {
      question: "How long does it take to see results from digital marketing?",
      answer:
        "The timeline for seeing results varies depending on the strategies implemented. Some tactics like paid advertising can show immediate results, while SEO and content marketing typically take 3-6 months to gain significant traction. Social media marketing usually shows gradual improvement over 1-3 months. We provide regular reports and updates so you can track progress throughout your campaign.",
    },
    {
      question: "What services do you offer?",
      answer:
        "We offer a comprehensive range of digital marketing services including social media management, website development, SEO optimization, content creation, Google Ads management, branding and design, email marketing, and analytics reporting. Our team can create a customized strategy that combines these services to meet your specific business goals and target audience needs.",
    },
    {
      question: "How do you measure the success of a digital marketing campaign?",
      answer:
        "We measure success through key performance indicators (KPIs) aligned with your business objectives. These may include website traffic, conversion rates, engagement metrics, lead generation, ROI, and more. We use advanced analytics tools to track these metrics and provide transparent reporting so you can see exactly how your campaigns are performing and the value they're delivering to your business.",
    },
    {
      question: "How much should I budget for digital marketing?",
      answer:
        "Digital marketing budgets vary widely based on your business size, goals, industry, and competitive landscape. We work with clients across various budget ranges and can create a customized plan that maximizes your investment. Generally, we recommend allocating 7-15% of your revenue to marketing, but we'll help you determine the most appropriate budget for your specific situation during our consultation.",
    },
    {
      question: "How do I get started?",
      answer:
        "Getting started is easy! Simply contact us through our website, email at info@triadicmarketing.com, or call us at +1 (678) 249-9484. We'll schedule a free consultation to discuss your business goals, current marketing efforts, and how we can help you achieve success. After this initial conversation, we'll develop a tailored proposal outlining our recommended strategies, timeline, and investment.",
    },
  ]

  const toggleFAQ = (index: number): void => {
    setOpenIndex(openIndex === index ? -1 : index)
  }

  return (
    <AnimatedBackground>
      <main className="min-h-screen bg-black overflow-hidden">
        <InteractiveNavbar />

        <section className="py-32 relative">
          <div className="container max-w-4xl">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Frequently Asked Questions</h1>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Find answers to common questions about our digital marketing services and how we can help your business
                grow.
              </p>
            </div>

            <div className="bg-gray-900 rounded-2xl p-8 md:p-12 shadow-xl">
              {faqs.map((faq, index) => (
                <FAQItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openIndex === index}
                  toggleOpen={() => toggleFAQ(index)}
                />
              ))}
            </div>

            <div className="mt-16 text-center">
              <h2 className="text-2xl font-bold mb-4 text-white">Still have questions?</h2>
              <p className="text-gray-400 mb-8">
                Our team is here to help. Contact us for more information about our services.
              </p>
              <a
                href="/contact"
                className="inline-block bg-[var(--accent-color)] hover:bg-[var(--accent-color)]/90 text-white px-8 py-3 rounded-full font-medium transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>

        <Suspense fallback={<SectionLoading />}>
          <Footer />
        </Suspense>
      </main>
    </AnimatedBackground>
  )
}
