"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Instagram, Linkedin, Youtube, ArrowUp } from "lucide-react"
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
        { label: "Social Media Ads", href: "/services" },
        { label: "Website Development", href: "/services" },
        { label: "SEO", href: "/services" },
        { label: "Branding & Design", href: "/services" },
        {
          label: "Google Ads",
          href: "/services",
        },
        { label: "Content Creation", href: "/services" },
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
    { icon: <Youtube className="h-5 w-5" />, href: "https://www.youtube.com/@TriadicMarketingagency" },
    {
      icon: (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
        </svg>
      ),
      href: "https://www.tiktok.com/@triadic.media?_t=ZS-8vTFttq9QLy&_r=1",
    },
  ]

  return (
    <footer className="bg-black text-white pt-16 pb-8 border-t border-gray-800">
      <div className="container">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <RevealOnScroll direction="up" className="lg:col-span-2">
            <div>
              <Link href="/" className="inline-block mb-6">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-I9R3yBX2NllxS44IWuaB6tSUJWmA4o.png"
                  alt="Triadic Media"
                  className="h-10 brightness-0 invert"
                />
              </Link>

              <p className="text-gray-400 mb-6 max-w-md">
                Triadic Media is a full-service digital marketing agency specializing in creating impactful digital
                experiences that drive results for businesses of all sizes.
              </p>

              <div className="flex gap-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    className="bg-gray-800 hover:bg-[var(--accent-color)] p-2 rounded-full transition-colors"
                    whileHover={{ scale: 1.1 }}
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
              <div>
                <h4 className="text-lg font-bold mb-4 text-white">{column.title}</h4>
                <ul className="space-y-3">
                  {column.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href={link.href}
                        className="text-gray-400 hover:text-white transition-colors"
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

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-500 text-sm mb-4 md:mb-0 flex flex-col md:flex-row items-center gap-1 md:gap-2">
            <p>© {new Date().getFullYear()} Triadic Media. All rights reserved.</p>
            <span className="hidden md:inline">|</span>
            <p>
              Made and designed for Triadic by{" "}
              <a
                href="https://usmanarshad.tech/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--accent-color)] hover:text-[var(--accent-color)]/80 transition-colors"
              >
                Usman Arshad
              </a>
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="bg-gray-800 hover:bg-[var(--accent-color)] p-3 rounded-full transition-colors"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        </div>
      </div>
    </footer>
  )
}
