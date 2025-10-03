import BlogPostClient from "./client"

// This function needs to be exported from a Server Component
export function generateStaticParams() {
  return [{ slug: "boost-online-presence-seo" }, { slug: "what-is-digital-marketing" }]
}

// Export the generateStaticParams function

// Server component that renders the client component
export default function BlogPostPage() {
  return <BlogPostClient />
}
