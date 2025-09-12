import { Suspense } from "react"
import InteractiveNavbar from "@/components/interactive-navbar"
import ServicesShowcase from "@/components/services-showcase"
import ServicesGrid from "@/components/services-grid"
import Footer from "@/components/footer"
import AnimatedBackground from "@/components/animated-background"
import FlowingMenu from "@/components/flowing-menu" // Import FlowingMenu

// Loading fallback component
const SectionLoading = () => (
  <div className="flex items-center justify-center min-h-[40vh]">
    <div className="w-8 h-8 border-4 border-primary/30 border-t-primary rounded-full animate-spin"></div>
  </div>
)

export default function ServicesPage() {
  const flowingMenuItems = [
    {
      link: "#web-development",
      text: "Web Development",
      image: "/web-development-showcase.png",
      id: "web-development",
    },
    {
      link: "#app-development",
      text: "App Development",
      image: "/app-development-showcase.png",
      id: "app-development",
    },
    { link: "#social-media", text: "Social Media", image: "/social-media-showcase.png", id: "social-media" },
    { link: "#seo", text: "SEO", image: "/services/seo.png", id: "seo" },
    { link: "#branding", text: "Branding", image: "/services/branding-and-design.png", id: "branding" },
    { link: "#google-ads", text: "Google Ads", image: "/services/google-ads.png", id: "google-ads" },
    {
      link: "#content-creation",
      text: "Content Creation",
      image: "/services/content-creation.png",
      id: "content-creation",
    },
  ]

  return (
    <AnimatedBackground>
      <main className="min-h-screen bg-black overflow-hidden">
        <InteractiveNavbar />

        <div className="pt-20 md:pt-24">
          <Suspense fallback={<SectionLoading />}>
            <ServicesShowcase />
          </Suspense>
        </div>

        {/* Added Services Grid */}
        <Suspense fallback={<SectionLoading />}>
          <ServicesGrid />
        </Suspense>

        {/* Moved Flowing Menu to the bottom */}
        <section className="w-full h-[80vh] md:h-[100vh] flex items-center justify-center bg-black text-white">
          <FlowingMenu items={flowingMenuItems} />
        </section>

        <Suspense fallback={<SectionLoading />}>
          <Footer />
        </Suspense>
      </main>
    </AnimatedBackground>
  )
}
