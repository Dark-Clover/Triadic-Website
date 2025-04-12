"use client"

import Marquee from "./marquee"
import ReviewCard from "./review-card"
import RevealOnScroll from "./scroll-reveal"

export default function ReviewsMarquee() {
  const reviews = [
    {
      name: "Michael Chen",
      username: "@mchen",
      body: "Triadic Media completely transformed our online presence. Their team is incredibly talented and responsive.",
      img: "https://avatar.vercel.sh/michael",
    },
    {
      name: "Sarah Johnson",
      username: "@sjohnson",
      body: "Working with Triadic was the best decision we made. Our website traffic has increased by 200% since launch!",
      img: "https://avatar.vercel.sh/sarah",
    },
    {
      name: "David Rodriguez",
      username: "@drodriguez",
      body: "The SEO strategy they implemented has put us on the first page of Google. Amazing results!",
      img: "https://avatar.vercel.sh/david",
    },
    {
      name: "Emily Wong",
      username: "@ewong",
      body: "Their content creation team is exceptional. Our engagement metrics have never been better.",
      img: "https://avatar.vercel.sh/emily",
    },
    {
      name: "James Wilson",
      username: "@jwilson",
      body: "Professional, creative, and results-driven. Exactly what we needed for our digital marketing.",
      img: "https://avatar.vercel.sh/james",
    },
    {
      name: "Aisha Patel",
      username: "@apatel",
      body: "The social media campaign they designed exceeded all our expectations. Highly recommended!",
      img: "https://avatar.vercel.sh/aisha",
    },
  ]

  const firstRow = reviews.slice(0, reviews.length / 2)
  const secondRow = reviews.slice(reviews.length / 2)

  return (
    <section className="py-20 bg-black">
      <div className="container mb-12">
        <RevealOnScroll>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 text-white">
              Client <span className="text-[var(--accent-color)]">Reviews</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              See what our clients are saying about their experience working with Triadic Media.
            </p>
          </div>
        </RevealOnScroll>
      </div>

      <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden py-10">
        <Marquee pauseOnHover className="mb-8">
          {firstRow.map((review, index) => (
            <ReviewCard key={index} {...review} />
          ))}
        </Marquee>

        <Marquee reverse pauseOnHover>
          {secondRow.map((review, index) => (
            <ReviewCard key={index} {...review} />
          ))}
        </Marquee>

        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-black"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-black"></div>
      </div>
    </section>
  )
}
