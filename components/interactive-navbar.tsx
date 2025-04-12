"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { useRouter } from "next/navigation"

export default function InteractiveNavbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeTab, setActiveTab] = useState("home")
  const tabsRef = useRef<(HTMLAnchorElement | null)[]>([])
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      // Determine active section based on scroll position
      const sections = ["home", "services", "about", "testimonials", "contact"]
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

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { id: "home", name: "Home", href: "/" },
    { id: "services", name: "Services", href: "/services" },
    { id: "about", name: "About", href: "/about" },
    { id: "team", name: "Team", href: "/team" },
    { id: "contact", name: "Contact", href: "/contact" },
  ]

  const handleTabClick = (id: string, href: string) => {
    setActiveTab(id)
    setIsOpen(false)
    window.scrollTo(0, 0) // Scroll to top before navigation
    router.push(href)
  }

  const handleGetStarted = () => {
    window.open("https://api.whatsapp.com/send/?phone=971562997778&text&type=phone_number&app_absent=0", "_blank")
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
        scrolled ? "bg-white/90 backdrop-blur-md py-3 shadow-sm" : "bg-transparent py-5",
      )}
    >
      <div className="container flex items-center justify-between">
        <Link href="/" className="relative z-50">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl font-bold tracking-tighter text-[#4a0072]"
          >
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-I9R3yBX2NllxS44IWuaB6tSUJWmA4o.png"
              alt="Triadic Media"
              className="h-10"
            />
          </motion.div>
        </Link>

        <div className="hidden md:block relative">
          <nav className="flex items-center gap-8">
            {navItems.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              >
                <a
                  ref={(el) => (tabsRef.current[i] = el)}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault()
                    handleTabClick(item.id, item.href)
                  }}
                  className={cn(
                    "relative px-4 py-2 text-gray-700 hover:text-[#4a0072] transition-colors",
                    activeTab === item.id && "text-[#4a0072] font-medium",
                  )}
                >
                  {item.name}
                  {activeTab === item.id && (
                    <motion.span
                      layoutId="bubble"
                      className="absolute inset-0 z-[-1] bg-[#4a0072]/10 rounded-full"
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
          className="hidden md:block"
        >
          <a
            href="https://api.whatsapp.com/send/?phone=971562997778&text&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className="relative overflow-hidden rounded-full bg-[#4a0072] px-6 py-2 text-white group inline-block"
          >
            <span className="relative z-10">Book a Consultation</span>
            <span className="absolute inset-0 bg-gradient-to-r from-[#4a0072] to-[#8e00da] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
        </motion.div>

        <button className="md:hidden relative z-50" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>

        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center"
            >
              <div className="flex flex-col items-center gap-8">
                {navItems.map((item) => (
                  <a
                    key={item.id}
                    href={item.href}
                    className="text-xl font-medium text-gray-800 hover:text-[#4a0072]"
                    onClick={(e) => {
                      e.preventDefault()
                      handleTabClick(item.id, item.href)
                    }}
                  >
                    {item.name}
                  </a>
                ))}
                <a
                  href="https://api.whatsapp.com/send/?phone=971562997778&text&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 bg-[#4a0072] hover:bg-[#3a0058] text-white px-6 py-2 rounded-full inline-block"
                >
                  Book a Consultation
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
