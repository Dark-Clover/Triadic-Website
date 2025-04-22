import { Suspense, lazy } from "react"
import LoadingScreen from "@/components/loading-screen"
import InteractiveNavbar from "@/components/interactive-navbar"
import AnimatedBackground from "@/components/animated-background"
import ClientLogos from "@/components/client-logos"
import ServicePhoneShowcase from "@/components/service-phone-showcase"
import "./grid-motion.css"

// Lazy load components for better performance
const Hero = lazy(() => import("@/components/hero"))
const ContentKing = lazy(() => import("@/components/content-king"))
const CounterSection = lazy(() => import("@/components/counter-section"))
const ReviewsMarquee = lazy(() => import("@/components/reviews-marquee"))
const TestimonialCarousel = lazy(() => import("@/components/testimonial-carousel"))
const CaseStudies = lazy(() => import("@/components/case-studies"))
const HomeFAQ = lazy(() => import("@/components/home-faq"))
const ServiceComparison = lazy(() => import("@/components/service-comparison"))
const Footer = lazy(() => import("@/components/footer"))
const TeamSlider = lazy(() => import("@/components/team-slider"))

// Loading fallback component
const SectionLoading = () => (
  <div className="flex items-center justify-center min-h-[40vh]">
    <div className="w-8 h-8 border-4 border-primary/30 border-t-primary rounded-full animate-spin"></div>
  </div>
)

export default function Home() {
  return (
    <AnimatedBackground>
      <main className="min-h-screen bg-black overflow-hidden">
        <LoadingScreen />
        <InteractiveNavbar />

        <div id="home">
          <Suspense fallback={<SectionLoading />}>
            <Hero />
          </Suspense>
        </div>

        <Suspense fallback={<SectionLoading />}>
          <ContentKing />
        </Suspense>

        <Suspense fallback={<SectionLoading />}>
          <CounterSection />
        </Suspense>

        <Suspense fallback={<SectionLoading />}>
          <ClientLogos />
        </Suspense>

        {/* Added ServicePhoneShowcase component with phone UI feature */}
        <Suspense fallback={<SectionLoading />}>
          <ServicePhoneShowcase />
        </Suspense>

        <Suspense fallback={<SectionLoading />}>
          <CaseStudies />
        </Suspense>

        <Suspense fallback={<SectionLoading />}>
          <TeamSlider />
        </Suspense>

        <Suspense fallback={<SectionLoading />}>
          <TestimonialCarousel />
        </Suspense>

        <Suspense fallback={<SectionLoading />}>
          <ServiceComparison />
        </Suspense>

        <Suspense fallback={<SectionLoading />}>
          <HomeFAQ />
        </Suspense>

        <Suspense fallback={<SectionLoading />}>
          <ReviewsMarquee />
        </Suspense>

        <Suspense fallback={<SectionLoading />}>
          <Footer />
        </Suspense>
      </main>
    </AnimatedBackground>
  )
}
