"use client"

import type React from "react"
import "./globals.css"
import "./team.css"
import ScrollToTop from "@/components/scroll-to-top"
import WhatsAppWidget from "@/components/whatsapp-widget"

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <ScrollToTop />
      {children}
      <WhatsAppWidget />
      <style jsx global>{`
        @keyframes zoomInIcon {
          from {
            transform: scale(1);
          }
          to {
            transform: scale(1.2);
          }
        }
        
        .favicon-zoom {
          animation: zoomInIcon 0.5s ease-in-out infinite alternate;
        }
      `}</style>
    </>
  )
}
