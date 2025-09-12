"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Instagram, Linkedin, ArrowUp } from "lucide-react"
import RevealOnScroll from "./scroll-reveal"
import { useRouter } from "next/navigation"

export default function Footer() {
  const router = useRouter()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const footerLinks = [
    {
      title: "Company",
      links: [
        { label: "About", href: "/about" },
        { label: "Services", href: "/services" },
        { label: "Team", href: "/team" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Services",
      links: [
        { label: "Social Media Marketing", href: "/services/social-media" },
        { label: "Web Development", href: "/services/web-development" },
        { label: "App Development", href: "/services/app-development" },
        { label: "SEO", href: "/services/seo" },
        { label: "Branding", href: "/services/branding" },
        { label: "Google Ads", href: "/services/google-ads" },
        { label: "Content Creation", href: "/services/content-creation" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Blog", href: "/blog" },
        { label: "FAQ", href: "/faq" },
        { label: "Privacy Policy", href: "/privacy-policy" },
      ],
    },
  ]

  const socialLinks = [
    { icon: <Instagram className="h-5 w-5" />, href: "https://www.instagram.com/triadicmarketing/" },
    {
      icon: <Linkedin className="h-5 w-5" />,
      href: "https://www.linkedin.com/company/triadicmarketing/posts/?feedView=all",
    },
  ]

  return (
    <footer className="relative bg-gradient-to-b from-black to-gray-900 text-white pt-20 pb-10 border-t border-gray-800 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[var(--accent-color)] to-transparent opacity-30"></div>
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-[var(--accent-color)]/5 blur-3xl -translate-y-1/2 translate-x-1/4"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-[var(--accent-color)]/5 blur-3xl translate-y-1/2 -translate-x-1/4"></div>

      <div className="container px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-16 mb-16">
          <RevealOnScroll direction="up" className="lg:col-span-1">
            <div className="text-center md:text-left">
              <Link href="/" className="inline-block mb-8">
                <img
                  src="/triadic-logo-new.png"
                  alt="Triadic - your digital partner"
                  className="h-16 sm:h-20 brightness-0 invert mx-auto md:mx-0 hover:scale-105 transition-transform duration-300"
                />
              </Link>

              <p className="text-gray-300 mb-8 max-w-md mx-auto md:mx-0 leading-relaxed">
                Triadic is a full-service digital marketing agency specializing in creating impactful digital
                experiences that drive results for businesses of all sizes.
              </p>

              <div className="flex gap-5 justify-center md:justify-start">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800/80 hover:bg-[var(--accent-color)] p-3.5 rounded-full transition-all duration-300 shadow-lg hover:shadow-[var(--accent-color)]/20"
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </RevealOnScroll>

          {footerLinks.map((column, index) => (
            <RevealOnScroll key={index} direction="up" delay={0.1 + index * 0.1}>
              <div className="text-center md:text-left">
                <h4 className="text-xl font-bold mb-6 text-white relative inline-block">
                  {column.title}
                  <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-[var(--accent-color)]"></span>
                </h4>
                <ul className="space-y-4 mt-2">
                  {column.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href={link.href}
                        className="block py-1 text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-1 md:hover:translate-x-2 transform-gpu"
                        onClick={(e) => {
                          if (link.href.startsWith("#")) {
                            e.preventDefault()
                            // Handle anchor links
                          } else if (link.href !== "#") {
                            e.preventDefault()
                            window.scrollTo(0, 0) // Scroll to top before navigation
                            router.push(link.href)
                          }
                        }}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        <div className="relative mt-16 pt-10 border-t border-gray-800/50 flex flex-col items-center justify-between">
          <div className="text-center mb-8 relative">
            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-20 h-0.5 bg-gradient-to-r from-transparent via-gray-500 to-transparent"></div>
            <p className="text-gray-300 text-base font-light">© 2025 Triadic. All rights reserved.</p>
          </div>

          <motion.button
            onClick={scrollToTop}
            className="bg-gray-800/80 hover:bg-[var(--accent-color)] p-3.5 rounded-full transition-all duration-300 shadow-lg hover:shadow-[var(--accent-color)]/20"
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        </div>
      </div>
    </footer>
  )
}
