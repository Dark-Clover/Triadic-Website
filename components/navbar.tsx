"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const dropdownRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null)
      }
    }

    window.addEventListener("scroll", handleScroll)
    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const navItems = [
    {
      name: "Home",
      href: "#",
      dropdown: false,
    },
    {
      name: "Services",
      href: "#services",
      dropdown: true,
      items: [
        { name: "Social Media Ads", href: "#", description: "Boost your online presence with captivating ads" },
        { name: "Website Development", href: "#", description: "Custom websites that convert visitors to customers" },
        { name: "SEO", href: "#", description: "Improve your search rankings and visibility" },
        { name: "Branding & Design", href: "#", description: "Create a memorable brand identity" },
        { name: "Google Ads", href: "#", description: "Targeted advertising that drives results" },
        { name: "Content Creation", href: "#", description: "Engaging content that tells your story" },
      ],
    },
    {
      name: "About",
      href: "#about",
      dropdown: false,
    },
    {
      name: "Contact",
      href: "#contact",
      dropdown: false,
    },
  ]

  const toggleDropdown = (index) => {
    if (activeDropdown === index) {
      setActiveDropdown(null)
    } else {
      setActiveDropdown(index)
    }
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

        <div className="hidden md:flex items-center gap-8" ref={dropdownRef}>
          {navItems.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="relative"
            >
              {item.dropdown ? (
                <>
                  <button
                    onClick={() => toggleDropdown(i)}
                    className={cn(
                      "flex items-center gap-1 text-gray-700 hover:text-[#4a0072] transition-colors",
                      activeDropdown === i && "text-[#4a0072]",
                    )}
                  >
                    {item.name}
                    <ChevronDown
                      className={cn("h-4 w-4 transition-transform duration-200", activeDropdown === i && "rotate-180")}
                    />
                  </button>

                  <AnimatePresence>
                    {activeDropdown === i && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-0 mt-2 w-64 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50"
                      >
                        <div className="py-1">
                          {item.items.map((subItem, j) => (
                            <Link
                              key={j}
                              href={subItem.href}
                              className="block px-4 py-3 hover:bg-gray-50"
                              onClick={() => setActiveDropdown(null)}
                            >
                              <div className="font-medium text-gray-900">{subItem.name}</div>
                              <div className="text-sm text-gray-500">{subItem.description}</div>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </>
              ) : (
                <Link href={item.href} className="text-gray-700 hover:text-[#4a0072] transition-colors">
                  {item.name}
                </Link>
              )}
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Button className="bg-[#4a0072] hover:bg-[#3a0058]">Get Started</Button>
          </motion.div>
        </div>

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
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-xl font-medium text-gray-800 hover:text-[#4a0072]"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <Button className="mt-4 bg-[#4a0072] hover:bg-[#3a0058]">Get Started</Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
