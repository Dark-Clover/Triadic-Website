import { Suspense } from "react"
import InteractiveNavbar from "@/components/interactive-navbar"
import AIHero from "@/components/ai-hero"
import AIServices from "@/components/ai-services"
import VoiceAgentShowcase from "@/components/voice-agent-showcase"
import AIConsulting from "@/components/ai-consulting"
import Footer from "@/components/footer"
import AnimatedBackground from "@/components/animated-background"

// Loading fallback component
const SectionLoading = () => (
  <div className="flex items-center justify-center min-h-[40vh]">
    <div className="w-8 h-8 border-4 border-primary/30 border-t-primary rounded-full animate-spin"></div>
  </div>
)

export default function AIPage() {
  return (
    <AnimatedBackground>
      <main className="min-h-screen bg-black overflow-hidden">
        <InteractiveNavbar />

        <div className="pt-20 md:pt-24">
          <Suspense fallback={<SectionLoading />}>
            <AIHero />
          </Suspense>
        </div>

        <Suspense fallback={<SectionLoading />}>
          <VoiceAgentShowcase />
        </Suspense>

        <Suspense fallback={<SectionLoading />}>
          <AIServices />
        </Suspense>

        <Suspense fallback={<SectionLoading />}>
          <AIConsulting />
        </Suspense>

        <Suspense fallback={<SectionLoading />}>
          <Footer />
        </Suspense>
      </main>
    </AnimatedBackground>
  )
}
