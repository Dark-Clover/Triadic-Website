"use client"

import type React from "react"

import { useRef, useState } from "react"
import { useInView } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Loader2, CheckCircle, AlertCircle } from "lucide-react"
import RevealOnScroll from "./scroll-reveal"
import EnhancedButton from "./enhanced-button"
import { useRouter } from "next/navigation"
import { sendEmail } from "@/app/actions/send-email"
import Image from "next/image"

export default function Contact() {
  const router = useRouter()
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formState, setFormState] = useState<{ success?: boolean; message?: string }>({})
  const formRef = useRef<HTMLFormElement>(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const formData = new FormData(e.currentTarget)
      console.log("Submitting form...")

      const result = await sendEmail(formData)
      console.log("Form submission result:", result)

      setFormState(result)

      if (result.success && formRef.current) {
        formRef.current.reset()
      }
    } catch (error) {
      console.error("Error in form submission:", error)
      setFormState({
        success: false,
        message: "An unexpected error occurred. Please try again later.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

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
          <div>+971 56 185 6240</div>
          <div>+92 331 1148881</div>
        </>
      ),
      description: "Mon-Fri from 9am to 6pm",
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      title: "Visit Us",
      details: (
        <a
          href="https://www.google.com/maps/dir//247+Rd+No+1704,+Manama,+Bahrain/@26.2416727,50.5471215,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3e49a5e905673dcf:0x7718553f512d6f7e!2m2!1d50.5882159!2d26.2417322?entry=ttu&g_ep=EgoyMDI1MDcxNS4xIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          Building Park Plaza Level 4, Diplomatic Area 317, Road 1704, Manama - The Kingdom of Bahrain
        </a>
      ),
      description: "Book an appointment first",
      flag: (
        <Image
          src="https://flagcdn.com/w40/bh.png"
          alt="Bahrain Flag"
          width={20}
          height={15}
          className="inline-block ml-2"
        />
      ),
    },

    {
      icon: <MapPin className="h-5 w-5" />,
      title: "Visit Us",
      details: (
        <a
          href="https://www.google.com/maps/dir//33.522196,73.1539818/@33.5221834,73.1539054,21z/data=!4m2!4m1!3e0?hl=en&entry=ttu&g_ep=EgoyMDI1MDcxNS4xIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          Westeria Rd, Sector A DHA Phase II, Islamabad, 45700
        </a>
      ),
      description: "Book an appointment first",
      flag: (
        <Image
          src="https://flagcdn.com/w40/pk.png"
          alt="Pakistan Flag"
          width={20}
          height={15}
          className="inline-block ml-2"
        />
      ),
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

              {formState.message && (
                <div
                  className={`mb-6 p-4 rounded-lg flex items-center gap-3 ${
                    formState.success
                      ? "bg-green-900/30 text-green-300 border border-green-800"
                      : "bg-red-900/30 text-red-300 border border-red-800"
                  }`}
                >
                  {formState.success ? (
                    <CheckCircle className="h-5 w-5 text-green-400" />
                  ) : (
                    <AlertCircle className="h-5 w-5 text-red-400" />
                  )}
                  {formState.message}
                </div>
              )}

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-300">
                      Full Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      className="w-full px-4 py-3 text-base bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)] text-white"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-300">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 text-base bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)] text-white"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-gray-300">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="How can we help you?"
                    className="w-full px-4 py-3 text-base bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)] text-white"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-300">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your project..."
                    className="min-h-[150px] bg-gray-800 border-gray-700 text-white"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full md:w-auto px-8 py-4 text-base font-medium bg-[var(--accent-color)] text-white rounded-lg hover:bg-[var(--accent-color)]/90 transition-colors disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    "Send Message"
                  )}
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
                    <h4 className="font-medium text-white flex items-center">
                      {item.title}
                      {item.flag && item.flag}
                    </h4>
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
