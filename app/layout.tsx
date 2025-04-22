import type React from "react"
import "./globals.css"
import "./team.css"
import ScrollToTop from "@/components/scroll-to-top"
// Import the WhatsApp widget
import WhatsAppWidget from "@/components/whatsapp-widget"

export const metadata = {
  title: "Triadic Media - Digital Marketing Excellence",
  description:
    "Triadic Media is a full-service digital marketing agency specializing in creating impactful digital experiences that drive results for businesses of all sizes.",
  keywords: "digital marketing, web development, SEO, social media, branding, content creation",
    generator: 'v0.dev'
}

// Add the WhatsAppWidget component just before the closing body tag
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/triadic-logo-new.png" />
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
      </head>
      <body>
        <ScrollToTop />
        {children}
        <WhatsAppWidget />
      </body>
    </html>
  )
}
