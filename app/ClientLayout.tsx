"use client"

import type React from "react"
import "./globals.css"
import "./team.css"
import ScrollToTop from "@/components/scroll-to-top"
// Import the WhatsApp widget
import WhatsAppWidget from "@/components/whatsapp-widget"

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
        <meta name="theme-color" content="#2d0845" />

        {/* Add preload for critical resources */}
        <link
          rel="preload"
          as="image"
          href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-I9R3yBX2NllxS44IWua"
        />

        {/* Add meta tags for better SEO */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Triadic Media" />
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
          
          link[rel="icon"]:hover {
            animation: zoomInIcon 0.5s ease-in-out infinite alternate;
          }
        `}</style>
      </head>
      <body>
        <ScrollToTop />
        {children}
        <WhatsAppWidget />
      </body>
    </html>
  )
}
