"use client"

import ServicePage from "@/components/service-page"
import { Globe, Smartphone, LineChart, Shield, Zap, Server, Palette } from "lucide-react"
import { motion } from "framer-motion"
import RevealOnScroll from "@/components/scroll-reveal"

export default function WebDevelopmentPage() {
  return (
    <ServicePage
      title="Website Development"
      description="We specialize in website design and development, creating beautiful, functional sites that convert visitors into customers. From WordPress to custom coding, we handle everything from domain setup to launch."
      color="#0062cc"
      icon={<Globe className="w-6 h-6 text-white" />}
      heroImage="/digital-code-overlay.png"
      benefits={[
        "Establish a professional online presence",
        "Provide 24/7 accessibility to your business",
        "Build credibility and trust with customers",
        "Generate leads and drive sales",
        "Showcase your products and services",
        "Improve search engine visibility",
        "Gain competitive advantage",
      ]}
      features={[
        {
          title: "Custom Design",
          description: "Unique, brand-aligned websites designed specifically for your business needs and goals.",
          icon: <Palette className="w-5 h-5 text-[#0062cc]" />,
        },
        {
          title: "Responsive Development",
          description: "Mobile-friendly websites that provide exceptional user experience across all devices.",
          icon: <Smartphone className="w-5 h-5 text-[#0062cc]" />,
        },
        {
          title: "Performance Optimization",
          description: "Lightning-fast loading speeds and smooth functionality for maximum user retention.",
          icon: <Zap className="w-5 h-5 text-[#0062cc]" />,
        },
        {
          title: "SEO Integration",
          description: "Built-in search engine optimization to improve visibility and organic traffic.",
          icon: <LineChart className="w-5 h-5 text-[#0062cc]" />,
        },
        {
          title: "Security Implementation",
          description: "Robust security measures to protect your website and user data from threats.",
          icon: <Shield className="w-5 h-5 text-[#0062cc]" />,
        },
        {
          title: "Hosting & Maintenance",
          description: "Reliable hosting solutions and ongoing maintenance to keep your site running smoothly.",
          icon: <Server className="w-5 h-5 text-[#0062cc]" />,
        },
      ]}
      process={[
        {
          step: "Discover",
          title: "Requirements Gathering",
          description:
            "We learn about your business, goals, target audience, and specific requirements for your website.",
        },
        {
          step: "Design",
          title: "UI/UX Planning",
          description:
            "Our designers create wireframes and mockups to visualize the layout and aesthetic of your site.",
        },
        {
          step: "Develop",
          title: "Frontend & Backend Coding",
          description:
            "Our developers bring the designs to life with clean, efficient code and powerful functionality.",
        },
        {
          step: "Test",
          title: "Quality Assurance",
          description: "Rigorous testing across devices and browsers to ensure everything works flawlessly.",
        },
        {
          step: "Launch",
          title: "Deployment",
          description: "We handle the technical aspects of launching your site and ensuring it's properly indexed.",
        },
        {
          step: "Support",
          title: "Ongoing Maintenance",
          description:
            "Regular updates, security patches, and performance optimizations to keep your site running smoothly.",
        },
      ]}
    >
      {/* Custom Tech Stack Section */}
      <section className="py-20">
        <div className="container max-w-7xl mx-auto">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Our Web Technology Stack</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-transparent via-[#0062cc] to-transparent mx-auto"></div>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: "React", logo: "/react-logo.png", color: "#61DAFB" },
              { name: "WordPress", logo: "/wordpress-logo.png", color: "#21759B" },
              { name: "Next.js", logo: "/nextjs-logo.png", color: "#000000" },
              { name: "Tailwind CSS", logo: "/tailwind-logo.png", color: "#38B2AC" },
              { name: "JavaScript", logo: "/javascript-logo.png", color: "#F7DF1E" },
              { name: "PHP", logo: "/php-logo.png", color: "#777BB4" },
              { name: "Node.js", logo: "/nodejs-logo.png", color: "#339933" },
              { name: "HTML5", logo: "/html5-logo.png", color: "#E34F26" },
              { name: "CSS3", logo: "/css3-logo.png", color: "#1572B6" },
              { name: "MySQL", logo: "/mysql-logo.png", color: "#4479A1" },
              { name: "MongoDB", logo: "/mongodb-logo.png", color: "#47A248" },
              { name: "GraphQL", logo: "/graphql-logo.png", color: "#E535AB" },
            ].map((tech, index) => (
              <RevealOnScroll key={index} delay={index * 0.05}>
                <motion.div
                  className="p-4 rounded-xl flex flex-col items-center justify-center text-center"
                  style={{ backgroundColor: `${tech.color}15` }}
                  whileHover={{
                    y: -5,
                    backgroundColor: `${tech.color}25`,
                  }}
                >
                  <h3 className="text-sm font-medium">{tech.name}</h3>
                </motion.div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Code Animation Section */}
      <section className="py-20 overflow-hidden">
        <div className="container max-w-7xl mx-auto">
          <div className="relative bg-black/30 rounded-xl p-8 overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0062cc] opacity-10 blur-[100px] -z-10"></div>

            <RevealOnScroll>
              <div className="mb-10">
                <h3 className="text-2xl font-bold mb-4">Clean, Efficient Code</h3>
                <p className="text-gray-300 max-w-2xl">
                  We build websites with clean, well-structured code that's easy to maintain and optimized for
                  performance.
                </p>
              </div>
            </RevealOnScroll>

            <RevealOnScroll>
              <div className="bg-black/50 rounded-lg p-4 font-mono text-sm text-gray-300 overflow-x-auto">
                <pre>
                  <code className="language-javascript">
                    {`// Modern JavaScript for interactive websites
const createDynamicExperience = () => {
  // Select interactive elements
  const elements = document.querySelectorAll('.interactive');
  
  // Add event listeners and animations
  elements.forEach(element => {
    element.addEventListener('mouseenter', () => {
      element.classList.add('active');
      animateElement(element);
    });
    
    element.addEventListener('mouseleave', () => {
      element.classList.remove('active');
      resetElement(element);
    });
  });
  
  // Initialize responsive behaviors
  initResponsiveLayout();
  optimizePerformance();
  
  console.log('Dynamic experience initialized successfully!');
};

// Call the function when DOM is ready
document.addEventListener('DOMContentLoaded', createDynamicExperience);`}
                  </code>
                </pre>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Web Development Showcase Section */}
      <section className="py-20 bg-black/20">
        <div className="container max-w-7xl mx-auto">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Web Development Excellence</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-transparent via-[#0062cc] to-transparent mx-auto"></div>
              <p className="mt-4 max-w-2xl mx-auto text-gray-300">
                We build websites that not only look great but also perform exceptionally well across all devices and
                platforms.
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <RevealOnScroll direction="right" delay={0.2}>
              <div className="space-y-6">
                <div className="bg-white/5 p-4 rounded-lg backdrop-blur-sm">
                  <h3 className="text-xl font-bold text-[#0062cc] mb-2">Responsive Design</h3>
                  <p className="text-gray-300">
                    Our websites adapt perfectly to any screen size, ensuring a consistent experience for all users.
                  </p>
                </div>

                <div className="bg-white/5 p-4 rounded-lg backdrop-blur-sm">
                  <h3 className="text-xl font-bold text-[#0062cc] mb-2">Performance Optimization</h3>
                  <p className="text-gray-300">
                    We optimize every aspect of your website for lightning-fast loading speeds and smooth interactions.
                  </p>
                </div>

                <div className="bg-white/5 p-4 rounded-lg backdrop-blur-sm">
                  <h3 className="text-xl font-bold text-[#0062cc] mb-2">SEO-Friendly Structure</h3>
                  <p className="text-gray-300">
                    Our websites are built with search engines in mind, helping you rank higher and attract more
                    visitors.
                  </p>
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll direction="left">
              <div className="relative rounded-xl overflow-hidden">
                <img
                  src="/web-development-showcase.png"
                  alt="Web Development Process"
                  className="w-full h-auto rounded-xl"
                  onError={(e) => {
                    e.currentTarget.src = "/digital-code-overlay.png"
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>
    </ServicePage>
  )
}
