import { Suspense } from "react"
import InteractiveNavbar from "@/components/interactive-navbar"
import ServicesShowcase from "@/components/services-showcase"
import Footer from "@/components/footer"
import AnimatedBackground from "@/components/animated-background"

// Loading fallback component
const SectionLoading = () => (
  <div className="flex items-center justify-center min-h-[40vh]">
    <div className="w-8 h-8 border-4 border-primary/30 border-t-primary rounded-full animate-spin"></div>
  </div>
)

export default function ServicesPage() {
  return (
    <AnimatedBackground>
      <main className="min-h-screen bg-black overflow-hidden">
        <InteractiveNavbar />

        <div className="pt-24">
          <Suspense fallback={<SectionLoading />}>
            <ServicesShowcase />
          </Suspense>
        </div>

        <Suspense fallback={<SectionLoading />}>
          <Footer />
        </Suspense>
      </main>
    </AnimatedBackground>
  )
}
