"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin } from "lucide-react"
import RevealOnScroll from "./scroll-reveal"
import EnhancedButton from "./enhanced-button"
import { useRouter } from "next/navigation"

export default function Contact() {
  const router = useRouter()
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      title: "Email Us",
      details: "info@triadicmarketing.com",
      description: "For general inquiries",
    },
    {
      icon: <Phone className="h-5 w-5" />,
      title: "Call Us",
      details: (
        <>
          <div>+971 56 299 7778</div>
          <div>+92 331 1148881</div>
        </>
      ),
      description: "Mon-Fri from 9am to 6pm",
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      title: "Visit Us",
      details: "United Arab Emirates",
      description: "Book an appointment first",
    },
  ]

  return (
    <section id="contact-form" ref={ref} className="py-20 bg-black">
      <div className="container">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 text-white">
              Get in <span className="text-[var(--accent-color)]">Touch</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Have a project in mind or want to learn more about our services? We'd love to hear from you!
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid lg:grid-cols-2 gap-12">
          <RevealOnScroll direction="left">
            <div className="bg-gray-900 p-6 sm:p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-white">Send us a message</h3>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-300">
                      Full Name
                    </label>
                    <Input
                      id="name"
                      placeholder="John Doe"
                      className="w-full px-4 py-3 text-base bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)] text-white"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-300">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 text-base bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)] text-white"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-gray-300">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    placeholder="How can we help you?"
                    className="w-full px-4 py-3 text-base bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)] text-white"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-300">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your project..."
                    className="min-h-[150px] bg-gray-800 border-gray-700 text-white"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full md:w-auto px-8 py-4 text-base font-medium bg-[var(--accent-color)] text-white rounded-lg hover:bg-[var(--accent-color)]/90 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </RevealOnScroll>

          <div className="space-y-6">
            {contactInfo.map((item, index) => (
              <RevealOnScroll key={index} delay={0.2 + index * 0.1} direction="right">
                <div className="bg-gray-900 p-6 rounded-xl shadow-md flex gap-4">
                  <div className="bg-[var(--primary-color)]/20 text-[var(--accent-color)] p-3 rounded-full h-12 w-12 flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>

                  <div>
                    <h4 className="font-medium text-white">{item.title}</h4>
                    <p className="text-lg font-semibold text-gray-300 break-words">{item.details}</p>
                    <p className="text-sm text-gray-500">{item.description}</p>
                  </div>
                </div>
              </RevealOnScroll>
            ))}

            <RevealOnScroll delay={0.5} direction="up">
              <div className="bg-[var(--primary-color)] text-white p-6 sm:p-8 rounded-2xl mt-8">
                <h3 className="text-2xl font-bold mb-4">Ready to get started?</h3>
                <p className="mb-6">
                  Let's discuss your project and see how we can help you achieve your business goals.
                </p>
                <EnhancedButton
                  variant="secondary"
                  magneticPull={true}
                  onClick={() => router.push("/contact#contact-form")}
                >
                  Join Us Today!
                </EnhancedButton>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  )
}
