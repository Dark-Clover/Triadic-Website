"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, X } from "lucide-react"

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  // Show widget after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  const toggleWidget = () => {
    setIsOpen(!isOpen)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <div
          className={`fixed ${isOpen ? "bottom-24" : "bottom-6"} right-4 sm:right-6 z-50 transition-all duration-300 ease-in-out`}
        >
          {/* Chat bubble */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.8 }}
                className="mb-4 bg-white rounded-lg shadow-lg overflow-hidden w-[280px] sm:w-72 md:w-80 max-w-[90vw]"
              >
                <div className="bg-[#25D366] p-4 flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <img
                      src="/whatsapp-logo.png"
                      alt="WhatsApp"
                      className="w-8 h-8"
                      onError={(e) => {
                        e.currentTarget.src = "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                      }}
                    />
                    <div className="text-white">
                      <h3 className="font-bold">Chat with us</h3>
                      <p className="text-xs opacity-90">We typically reply within minutes</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-white hover:bg-white/10 rounded-full p-1"
                    aria-label="Close chat"
                  >
                    <X size={18} />
                  </button>
                </div>
                <div className="p-4 bg-[#E5DDD5]">
                  <div className="bg-white rounded-lg p-3 mb-3 inline-block max-w-[85%] shadow-sm">
                    <p className="text-sm text-black">👋 Hi there! How can we help you today?</p>
                    <p className="text-[10px] text-gray-500 text-right mt-1">11:32 AM</p>
                  </div>
                  <div className="flex justify-end">
                    <div className="bg-[#DCF8C6] rounded-lg p-3 inline-block max-w-[85%] shadow-sm">
                      <p className="text-sm text-black">I'm interested in your services</p>
                      <p className="text-[10px] text-gray-500 text-right mt-1">11:33 AM</p>
                    </div>
                  </div>
                </div>
                <a
                  href="https://api.whatsapp.com/send/?phone=971562997778&text=Hi%20Triadic%20Media,%20I'm%20interested%20in%20your%20services.&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-[#25D366] text-white text-center py-3 font-medium hover:bg-[#1ea952] transition-colors"
                >
                  Start Conversation
                </a>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Button */}
          <motion.button
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleWidget}
            className="flex items-center justify-center w-14 h-14 rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 transition-colors focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2"
            aria-label={isOpen ? "Close WhatsApp chat" : "Open WhatsApp chat"}
          >
            {isOpen ? <X size={24} /> : <MessageCircle size={24} fill="white" className="text-[#25D366]" />}
          </motion.button>
        </div>
      )}
    </AnimatePresence>
  )
}
