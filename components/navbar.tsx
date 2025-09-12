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
      href: "/",
      dropdown: false,
    },
    {
      name: "Services",
      href: "/services",
      dropdown: true,
      items: [
        {
          name: "Social Media Ads",
          href: "/services/social-media",
          description: "Boost your online presence with captivating ads",
        },
        {
          name: "Website Development",
          href: "/services/web-development",
          description: "Custom websites that convert visitors to customers",
        },
        {
          name: "App Development",
          href: "/services/app-development",
          description: "Custom mobile apps for iOS and Android",
        },
        { name: "SEO", href: "/services/seo", description: "Improve your search rankings and visibility" },
        { name: "Branding & Design", href: "/services/branding", description: "Create a memorable brand identity" },
        { name: "Google Ads", href: "/services/google-ads", description: "Targeted advertising that drives results" },
        {
          name: "Content Creation",
          href: "/services/content-creation",
          description: "Engaging content that tells your story",
        },
      ],
    },
    {
      name: "AI",
      href: "/ai",
      dropdown: false,
    },
    {
      name: "Portfolio",
      href: "/portfolio",
      dropdown: false,
    },
    {
      name: "Clients",
      href: "/clients",
      dropdown: false,
    },
    {
      name: "Reviews",
      href: "/reviews",
      dropdown: false,
    },
    {
      name: "About",
      href: "/about",
      dropdown: false,
    },
    {
      name: "Contact",
      href: "/contact",
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
            <img src="/triadic-header-logo.png" alt="Triadic" className="h-10" />
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

        <button
          className="md:hidden relative z-50 p-3"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Mobile menu - improved */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center overflow-y-auto"
            >
              <div className="flex flex-col items-center gap-6 w-full px-6">
                {navItems.map((item, i) => (
                  <div key={item.name} className="w-full">
                    {item.dropdown ? (
                      <div className="w-full">
                        <button
                          onClick={() => toggleDropdown(i)}
                          className={cn(
                            "flex items-center justify-between w-full py-3 text-xl font-medium text-gray-800 hover:text-[#4a0072] border-b border-gray-100",
                            activeDropdown === i && "text-[#4a0072]",
                          )}
                        >
                          {item.name}
                          <ChevronDown
                            className={cn(
                              "h-5 w-5 transition-transform duration-200",
                              activeDropdown === i && "rotate-180",
                            )}
                          />
                        </button>

                        <AnimatePresence>
                          {activeDropdown === i && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <div className="py-2 pl-4">
                                {item.items.map((subItem, j) => (
                                  <Link
                                    key={j}
                                    href={subItem.href}
                                    className="block py-3 text-gray-600 hover:text-[#4a0072]"
                                    onClick={() => {
                                      setActiveDropdown(null)
                                      setIsOpen(false)
                                    }}
                                  >
                                    {subItem.name}
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        className="block w-full py-3 text-xl font-medium text-gray-800 hover:text-[#4a0072] border-b border-gray-100"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
                <Button
                  className="mt-6 w-full bg-[#4a0072] hover:bg-[#3a0058] py-6 text-lg"
                  onClick={() => setIsOpen(false)}
                >
                  Get Started
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
