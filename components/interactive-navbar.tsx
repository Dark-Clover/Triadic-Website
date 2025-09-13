"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { useRouter } from "next/navigation"

export default function InteractiveNavbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeTab, setActiveTab] = useState("home")
  const tabsRef = useRef<(HTMLAnchorElement | null)[]>([])
  const router = useRouter()

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("menu-open")
    } else {
      document.body.classList.remove("menu-open")
    }

    return () => {
      document.body.classList.remove("menu-open")
    }
  }, [isOpen])

  useEffect(() => {
    // Set active tab based on current path when component mounts
    const path = window.location.pathname
    if (path === "/") {
      setActiveTab("home")
    } else if (path.startsWith("/services")) {
      setActiveTab("services")
    } else if (path.startsWith("/ai")) {
      setActiveTab("ai")
    } else if (path.startsWith("/podcast")) {
      setActiveTab("podcast")
    } else if (path.startsWith("/portfolio")) {
      setActiveTab("portfolio")
    } else if (path.startsWith("/about")) {
      setActiveTab("about")
    } else if (path.startsWith("/team")) {
      setActiveTab("team")
    } else if (path.startsWith("/contact")) {
      setActiveTab("contact")
    } else if (path.startsWith("/reviews")) {
      setActiveTab("Reviews")
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      // Only determine active section based on scroll position if we're on the home page
      if (window.location.pathname === "/") {
        const sections = ["home", "services", "about", "testimonials", "contact", "Reviews"]
        const scrollPosition = window.scrollY + 100

        for (const section of sections) {
          const element = document.getElementById(section)
          if (element) {
            const offsetTop = element.offsetTop
            const offsetHeight = element.offsetHeight

            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
              setActiveTab(section)
              break
            }
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { id: "home", name: "Home", href: "/" },
    { id: "services", name: "Services", href: "/services" },
    { id: "ai", name: "AI Solutions", href: "/ai" },
    { id: "podcast", name: "Podcast", href: "/podcast" },
    { id: "portfolio", name: "Portfolio", href: "/portfolio" },
    { id: "about", name: "About", href: "/about" },
    { id: "team", name: "Team", href: "/team" },
    { id: "contact", name: "Contact", href: "/contact" },
    { id: "Reviews", name: "Reviews", href: "/reviews" },
  ]

  const handleTabClick = (id: string, href: string) => {
    setActiveTab(id)
    setIsOpen(false)

    // If we're already on the page, scroll to the section
    if (window.location.pathname === href) {
      const element = document.getElementById(id)
      if (element) {
        window.scrollTo({
          top: element.offsetTop - 100,
          behavior: "smooth",
        })
      }
    } else {
      // Otherwise navigate to the new page
      window.scrollTo(0, 0) // Scroll to top before navigation
      router.push(href)
    }
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-white py-3 shadow-sm" : "bg-black py-5",
      )}
    >
      <div className="container px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <Link href="/" className="relative z-50">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl font-bold tracking-tighter"
          >
            <img
              src="/triadic-logo-new.png"
              alt="Triadic Media"
              className={cn("h-12 sm:h-14", scrolled ? "brightness-0" : "brightness-0 invert")}
            />
          </motion.div>
        </Link>

        <div className="hidden lg:block relative">
          <nav className="flex items-center gap-6">
            {navItems.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              >
                <a
                  ref={(el) => {
                    tabsRef.current[i] = el
                  }}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault()
                    handleTabClick(item.id, item.href)
                  }}
                  className={cn(
                    "relative px-3 py-2 transition-colors text-sm font-medium",
                    scrolled ? "text-gray-700 hover:text-[#4a0072]" : "text-white hover:text-white/80",
                    activeTab === item.id && (scrolled ? "text-[#4a0072] font-semibold" : "text-white font-semibold"),
                  )}
                >
                  {item.name}
                  {activeTab === item.id && (
                    <motion.span
                      layoutId="bubble"
                      className={cn(
                        "absolute inset-0 z-[-1] rounded-full",
                        scrolled ? "bg-[#4a0072]/10" : "bg-white/10",
                      )}
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </a>
              </motion.div>
            ))}
          </nav>
        </div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="hidden lg:block"
        >
          <a
            href="https://api.whatsapp.com/send/?phone=971562997778&text&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className="relative overflow-hidden rounded-full bg-[#4a0072] px-5 py-2.5 text-white group inline-block text-sm font-medium"
          >
            <span className="relative z-10">Book a Consultation</span>
            <span className="absolute inset-0 bg-gradient-to-r from-[#4a0072] to-[#8e00da] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
        </motion.div>

        <button
          onClick={() => {
            console.log("Menu button clicked, current state:", isOpen)
            setIsOpen(!isOpen)
            console.log("Menu state after click:", !isOpen)
          }}
          className={cn(
            "p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4a0072] md:hidden relative z-50",
            scrolled ? "bg-gray-100" : "bg-white/40 backdrop-blur-sm",
          )}
          aria-expanded={isOpen}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className={scrolled ? "text-gray-900" : "text-white"} />
          ) : (
            <Menu className={scrolled ? "text-gray-900" : "text-white"} />
          )}
        </button>

        {/* Mobile menu */}
        {isOpen && (
          <div className="fixed top-0 left-0 right-0 bottom-0 bg-black z-[9999] flex flex-col mobile-menu-overlay">
            <div className="flex justify-between items-center p-4 border-b border-gray-800">
              <Link href="/" onClick={() => setIsOpen(false)}>
                <img src="/triadic-logo-new.png" alt="Triadic Media" className="h-10 brightness-0 invert" />
              </Link>
              <button
                className="p-2 rounded-full hover:bg-gray-800 transition-colors"
                onClick={() => setIsOpen(false)}
                aria-label="Close menu"
              >
                <X className="h-6 w-6 text-white" />
              </button>
            </div>

            <div className="flex-1 overflow-auto py-6">
              <ul className="flex flex-col gap-1">
                {navItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className="block px-6 py-4 text-lg text-white hover:bg-gray-900 hover:text-[#9333ea] transition-all duration-200"
                      onClick={(e) => {
                        e.preventDefault()
                        setIsOpen(false)
                        handleTabClick(item.id, item.href)
                      }}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 border-t border-gray-800">
              <a
                href="https://api.whatsapp.com/send/?phone=971562997778&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#9333ea] hover:bg-[#7c3aed] text-white px-6 py-3 rounded-lg inline-block w-full text-center font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Book a Consultation
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
