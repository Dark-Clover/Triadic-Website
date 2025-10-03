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
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-4 flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <svg
                      viewBox="0 0 24 24"
                      className="w-8 h-8 text-white"
                      fill="currentColor"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                    </svg>
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
                  className="block bg-gradient-to-r from-purple-600 to-blue-600 text-white text-center py-3 font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
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
            className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2"
            aria-label={isOpen ? "Close WhatsApp chat" : "Open WhatsApp chat"}
          >
            {isOpen ? (
              <X size={24} />
            ) : (
              <svg
                viewBox="0 0 24 24"
                className="w-6 h-6 text-white"
                fill="currentColor"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
            )}
          </motion.button>
        </div>
      )}
    </AnimatePresence>
  )
}
