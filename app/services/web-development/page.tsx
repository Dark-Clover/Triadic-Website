import Image from "next/image"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import { FaReact, FaNodeJs, FaPython, FaDatabase, FaServer, FaMobileAlt, FaCode } from "react-icons/fa"
import {
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiMysql,
  SiDocker,
  SiKubernetes,
  SiAmazonaws,
  SiGooglecloud,
  SiAzuredevops,
} from "react-icons/si"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Web Development Services | Your Company",
  description:
    "Professional web development services tailored to your needs. We build responsive, scalable, and high-performance web applications.",
}

const WebDevelopmentPage = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-r from-blue-100 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className={`text-4xl md:text-5xl font-bold text-gray-800 mb-4 ${poppins.className}`}>
                Crafting Exceptional Web Experiences
              </h1>
              <p className={`text-lg text-gray-600 mb-6 ${poppins.className}`}>
                We specialize in building modern, scalable, and user-friendly web applications that drive results.
              </p>
              <a
                href="/contact"
                className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Get a Free Quote
              </a>
            </div>
            <div>
              <Image
                src="/images/web-development-hero.svg"
                alt="Web Development Illustration"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Offered Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className={`text-3xl font-semibold text-gray-800 text-center mb-8 ${poppins.className}`}>
            Our Web Development Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <FaReact className="text-4xl text-blue-500 mb-4" />
              <h3 className={`text-xl font-semibold text-gray-700 mb-2 ${poppins.className}`}>Front-End Development</h3>
              <p className={`text-gray-600 ${poppins.className}`}>
                We build engaging user interfaces using modern frameworks like React, Angular, and Vue.js.
              </p>
            </div>

            {/* Service Card 2 */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <FaNodeJs className="text-4xl text-green-500 mb-4" />
              <h3 className={`text-xl font-semibold text-gray-700 mb-2 ${poppins.className}`}>Back-End Development</h3>
              <p className={`text-gray-600 ${poppins.className}`}>
                We develop robust and scalable server-side applications using Node.js, Python, and other technologies.
              </p>
            </div>

            {/* Service Card 3 */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <FaDatabase className="text-4xl text-yellow-500 mb-4" />
              <h3 className={`text-xl font-semibold text-gray-700 mb-2 ${poppins.className}`}>
                Database Design & Management
              </h3>
              <p className={`text-gray-600 ${poppins.className}`}>
                We design and manage databases using MySQL, MongoDB, PostgreSQL, and other database systems.
              </p>
            </div>

            {/* Service Card 4 */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <FaMobileAlt className="text-4xl text-purple-500 mb-4" />
              <h3 className={`text-xl font-semibold text-gray-700 mb-2 ${poppins.className}`}>
                Mobile-First Development
              </h3>
              <p className={`text-gray-600 ${poppins.className}`}>
                We prioritize mobile responsiveness to ensure your website looks great on all devices.
              </p>
            </div>

            {/* Service Card 5 */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <FaServer className="text-4xl text-red-500 mb-4" />
              <h3 className={`text-xl font-semibold text-gray-700 mb-2 ${poppins.className}`}>Cloud Solutions</h3>
              <p className={`text-gray-600 ${poppins.className}`}>
                We offer cloud solutions using AWS, Google Cloud, and Azure to ensure scalability and reliability.
              </p>
            </div>

            {/* Service Card 6 */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <FaCode className="text-4xl text-teal-500 mb-4" />
              <h3 className={`text-xl font-semibold text-gray-700 mb-2 ${poppins.className}`}>
                Custom Web Applications
              </h3>
              <p className={`text-gray-600 ${poppins.className}`}>
                We build custom web applications tailored to your specific business needs and requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies We Use Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className={`text-3xl font-semibold text-gray-800 text-center mb-8 ${poppins.className}`}>
            Technologies We Use
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-items-center">
            <FaReact className="text-5xl text-blue-500" />
            <SiNextdotjs className="text-5xl text-gray-800" />
            <SiJavascript className="text-5xl text-yellow-500" />
            <SiTypescript className="text-5xl text-blue-700" />
            <FaNodeJs className="text-5xl text-green-500" />
            <FaPython className="text-5xl text-yellow-400" />
            <SiTailwindcss className="text-5xl text-sky-500" />
            <SiMongodb className="text-5xl text-green-600" />
            <SiMysql className="text-5xl text-blue-600" />
            <SiDocker className="text-5xl text-blue-400" />
            <SiKubernetes className="text-5xl text-blue-600" />
            <SiAmazonaws className="text-5xl text-orange-400" />
            <SiGooglecloud className="text-5xl text-blue-400" />
            <SiAzuredevops className="text-5xl text-blue-500" />
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-blue-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className={`text-3xl font-semibold text-gray-800 mb-4 ${poppins.className}`}>
            Ready to Transform Your Web Presence?
          </h2>
          <p className={`text-lg text-gray-600 mb-8 ${poppins.className}`}>
            Contact us today to discuss your project and get a free consultation.
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg text-xl"
          >
            Get Started
          </a>
        </div>
      </section>
    </div>
  )
}

export default WebDevelopmentPage
