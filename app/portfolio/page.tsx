import PortfolioShowcase from "@/components/portfolio-showcase"
import InteractiveNavbar from "@/components/interactive-navbar"

export const metadata = {
  title: "Our Portfolio | Triadic Media",
  description: "Explore our portfolio of successful projects and client websites we've created at Triadic Media.",
}

export default function PortfolioPage() {
  return (
    <>
      <InteractiveNavbar />
      <PortfolioShowcase />
    </>
  )
}
