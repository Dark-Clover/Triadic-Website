"use client"

import { Check, X } from "lucide-react"
import RevealOnScroll from "./scroll-reveal"

interface ServiceFeature {
  name: string
  starter: boolean | string
  growth: boolean | string
  proBusiness: boolean | string
}

export default function ServiceComparison() {
  const features: ServiceFeature[] = [
    {
      name: "Social Media Management",
      starter: "2 platforms",
      growth: "3 platforms",
      proBusiness: "4 platforms",
    },
    {
      name: "Meta Ads Setup",
      starter: "1 campaign",
      growth: "Multiple campaigns",
      proBusiness: "Multiple campaigns",
    },
    {
      name: "TikTok Ads Setup",
      starter: false,
      growth: true,
      proBusiness: true,
    },
    {
      name: "YouTube Ads Setup",
      starter: false,
      growth: false,
      proBusiness: true,
    },
    {
      name: "SEO Optimization",
      starter: "Basic",
      growth: "Advanced",
      proBusiness: "Comprehensive",
    },
    {
      name: "Blog Posts",
      starter: false,
      growth: "2 per month",
      proBusiness: "4 per month",
    },
    {
      name: "Graphic Posts/Stories",
      starter: "5 per month",
      growth: "8 per month",
      proBusiness: "15 per month",
    },
    {
      name: "Video Reels Editing",
      starter: false,
      growth: "3 per month",
      proBusiness: "6 per month",
    },
    {
      name: "Performance Reports",
      starter: "Monthly",
      growth: "Bi-weekly",
      proBusiness: "Weekly",
    },
    {
      name: "Dedicated Account Manager",
      starter: true,
      growth: true,
      proBusiness: true,
    },
  ]

  return (
    <section className="py-20 bg-black">
      <div className="container">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 text-white">
              Service <span className="text-[var(--accent-color)]">Comparison</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Compare our service packages to find the perfect fit for your business needs.
            </p>
          </div>
        </RevealOnScroll>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[800px] border-collapse">
            <thead>
              <tr>
                <th className="p-4 text-left text-gray-400 font-medium">Features</th>
                <th className="p-4 text-center bg-gray-900 rounded-tl-lg text-white">
                  <div className="font-bold text-xl mb-1">Starter</div>
                  <div className="text-[var(--accent-color)] font-bold">2999AED</div>
                  <div className="text-sm text-gray-400">monthly</div>
                </th>
                <th className="p-4 text-center bg-[var(--primary-color)]/30 text-white relative">
                  
                  <div className="font-bold text-xl mb-1 mt-2">Growth</div>
                  <div className="text-[var(--accent-color)] font-bold">4999AED</div>
                  <div className="text-sm text-gray-400">monthly</div>
                </th>
                <th className="p-4 text-center bg-gray-900 rounded-tr-lg text-white">
                  <div className="font-bold text-xl mb-1">Pro Business</div>
                  <div className="text-[var(--accent-color)] font-bold">7999AED</div>
                  <div className="text-sm text-gray-400">monthly</div>
                </th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => (
                <tr key={index} className={index % 2 === 0 ? "bg-gray-900/30" : ""}>
                  <td className="p-4 border-t border-gray-800 text-white">{feature.name}</td>
                  <td className="p-4 border-t border-gray-800 text-center">
                    {typeof feature.starter === "string" ? (
                      <span className="text-gray-300">{feature.starter}</span>
                    ) : feature.starter ? (
                      <Check className="h-5 w-5 text-green-500 mx-auto" />
                    ) : (
                      <X className="h-5 w-5 text-gray-600 mx-auto" />
                    )}
                  </td>
                  <td className="p-4 border-t border-gray-800 text-center bg-[var(--primary-color)]/10">
                    {typeof feature.growth === "string" ? (
                      <span className="text-gray-300">{feature.growth}</span>
                    ) : feature.growth ? (
                      <Check className="h-5 w-5 text-green-500 mx-auto" />
                    ) : (
                      <X className="h-5 w-5 text-gray-600 mx-auto" />
                    )}
                  </td>
                  <td className="p-4 border-t border-gray-800 text-center">
                    {typeof feature.proBusiness === "string" ? (
                      <span className="text-gray-300">{feature.proBusiness}</span>
                    ) : feature.proBusiness ? (
                      <Check className="h-5 w-5 text-green-500 mx-auto" />
                    ) : (
                      <X className="h-5 w-5 text-gray-600 mx-auto" />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-12 flex justify-center gap-6 flex-wrap">
          <a
            href="https://api.whatsapp.com/send/?phone=971562997778&text=Hi%20Triadic%20Media,%20I'm%20interested%20in%20the%20Starter%20package.&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors"
          >
            Get Starter
          </a>
          <a
            href="https://api.whatsapp.com/send/?phone=971562997778&text=Hi%20Triadic%20Media,%20I'm%20interested%20in%20the%20Growth%20package.&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-[var(--accent-color)] hover:bg-[var(--accent-color)]/90 text-white rounded-lg transition-colors"
          >
            Get Growth
          </a>
          <a
            href="https://api.whatsapp.com/send/?phone=971562997778&text=Hi%20Triadic%20Media,%20I'm%20interested%20in%20the%20Pro%20Business%20package.&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors"
          >
            Get Pro Business
          </a>
        </div>
      </div>
    </section>
  )
}
