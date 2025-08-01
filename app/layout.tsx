import type React from "react"
import "./globals.css"
import "./team.css"
import ClientLayout from "./client-layout"

export const metadata = {
  title: "Triadic Media - Digital Marketing Excellence",
  description:
    "Triadic Media is a full-service digital marketing agency specializing in creating impactful digital experiences that drive results for businesses of all sizes.",
  keywords: "digital marketing, web development, SEO, social media, branding, content creation",
    generator: 'v0.dev'
}

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
        <link rel="icon" href="/favicon.png" className="favicon-zoom" />
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

        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-WJNTQSDS');
            `,
          }}
        />
        {/* End Google Tag Manager */}

        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-17394972358"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-17394972358');
            `,
          }}
        />
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-WJNTQSDS"
            height="0" 
            width="0" 
            style={{display:'none',visibility:'hidden'}}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
