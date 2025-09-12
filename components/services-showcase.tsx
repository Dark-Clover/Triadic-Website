"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { cn } from "@/lib/utils"
import { PhoneIcon, Globe, Search, Palette, Target, FileText, Smartphone, X } from "lucide-react"
import RevealOnScroll from "./scroll-reveal"
import FlowingMenu from "./flowing-menu"

// First, I'll update the Service type to include a detailed description field
type Service = {
  id: string
  number: string
  title: string
  description: string
  detailedDescription: string // Add this new field
  icon: React.ReactNode
  color: string
  image: string
}

interface FlowingMenuProps {
  items: MenuItem[]
  className?: string
  onItemClick?: (id: string) => void
}

interface MenuItem {
  link: string
  text: string
  image: string
  id: string
}

export default function ServicesShowcase() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [activeService, setActiveService] = useState<string>("social-media")

  // Then I'll update the services array with the detailed content
  const services: Service[] = [
    {
      id: "social-media",
      number: "01",
      title: "Social Media Ads",
      description:
        "Boost your online presence with captivating ads. We handle everything from setting up domains and hosting to creating engaging visuals and ad copy, bringing your brand's unique voice to social media seamlessly.",
      detailedDescription: `
        <h3>Unlock Growth with Expert Social Media Marketing Services</h3>
        <p>Are you ready to elevate your brand and connect with your audience like never before? Our social media marketing services are designed to help businesses achieve measurable success online and generate sales.</p>
        
        <h4>Transform Your Brand with a Leading Social Media Marketing Agency</h4>
        <p>In today's digital world, your online presence matters more than ever. As a trusted social media marketing agency, we specialize in crafting strategies that deliver results.</p>
        
        <h4>Why Choose Us?</h4>
        <ul>
          <li><strong>Custom Strategies:</strong> Every business has its unique story. We tailor our campaigns to resonate with your target audience.</li>
          <li><strong>Content that Converts:</strong> From eye-catching visuals to compelling captions, our creative team knows how to engage and inspire.</li>
          <li><strong>Expert Ad Management:</strong> Maximize ROI with data-driven campaigns across platforms like Instagram, Facebook, TikTok, and LinkedIn.</li>
          <li><strong>Engaging Content Creation:</strong> High-quality visuals, videos, and copy to captivate your audience and drive engagement.</li>
          <li><strong>Data-Driven Campaigns:</strong> From targeted ads to performance analysis, we ensure every dollar you spend yields maximum ROI.</li>
          <li><strong>Platform Expertise:</strong> Whether it's Instagram, Facebook, LinkedIn, TikTok, or YouTube, we know how to leverage each platform effectively.</li>
        </ul>
        
        <h4>Your One-Stop Social Media Marketing Agency</h4>
        <p>No matter where your audience spends their time—whether it's YouTube, Facebook, Instagram, TikTok, or Snapchat—we'll help your brand shine.</p>
        
        <ul>
          <li><strong>YouTube:</strong> Video is king! We create compelling content and manage ad campaigns to grow your channel and engage viewers.</li>
          <li><strong>Facebook:</strong> From page management to targeted ad campaigns, we make Facebook work for your business.</li>
          <li><strong>Instagram:</strong> Build a stunning feed and connect with your audience through reels, stories, and posts that stop the scroll.</li>
          <li><strong>TikTok:</strong> Go viral with creative, on-trend videos and targeted ads designed to captivate Gen Z and millennials.</li>
          <li><strong>Snapchat:</strong> Leverage unique ad formats and engaging content to reach a younger, highly engaged audience.</li>
        </ul>
        
        <h4>Industries We Serve</h4>
        <p>With years of experience in Real Estate, Food & Beverages, and Health & Beauty, we understand what it takes to thrive in competitive markets.</p>
        
        <p>Partner with our social media marketing agency to grow your audience, increase engagement, and drive sales.</p>
        
        <h4>Why Choose Us?</h4>
        <p>With years of experience and over $300k in ad spend across industries like Real Estate, Food & Beverage, and Health & Beauty, we bring proven expertise to the table. Let us handle your social media, so you can focus on running your business.</p>
        
        <p>📩 Contact us today for a free consultation and see how our social media marketing services can transform your online presence with increasing sales.</p>
      `,
      icon: <PhoneIcon className="h-6 w-6" />,
      color: "#4a0072",
      image:
        "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    {
      id: "web-dev",
      number: "02",
      title: "Website Development",
      description:
        "We specialize in website design and development, offering everything from WordPress solutions to custom coding. We handle everything from domain and hosting setup to getting your site live. Let's bring your vision online seamlessly!",
      detailedDescription: `
        <h3>Website Development and Marketing</h3>
        <p>Website development and marketing go hand in hand to create a digital presence that attracts, engages, and converts visitors into customers. Here's an integrated approach to website development and marketing:</p>
        
        <h4>1. Planning & Strategy</h4>
        <ul>
          <li><strong>Define Objectives:</strong> Clearly outline the purpose of the site (e.g., lead generation, e-commerce, brand awareness).</li>
          <li><strong>Target Audience:</strong> Research demographics, preferences, and online behavior.</li>
          <li><strong>Content Architecture:</strong> Plan a clear site structure with easy navigation and intuitive design.</li>
          <li><strong>Competitor Research:</strong> Analyze competitors' websites for design and marketing strategies.</li>
          <li><strong>SEO Strategy:</strong> Identify relevant keywords and structure the site for search engine optimization from the start.</li>
          <li><strong>Marketing Funnel Alignment:</strong> Design the website to guide users through the customer journey, from awareness to conversion.</li>
        </ul>
        
        <h4>2. Design with Marketing in Mind</h4>
        <ul>
          <li><strong>Responsive Design:</strong> Ensure the site is optimized for all devices.</li>
          <li><strong>Visual Hierarchy:</strong> Highlight CTAs (Call-to-Actions) and important content.</li>
          <li><strong>Brand Consistency:</strong> Use consistent colors, logos, and typography.</li>
          <li><strong>Conversion Optimization:</strong> Place CTAs strategically (e.g., "Buy Now," "Subscribe," "Contact Us").</li>
          <li><strong>Lead Magnets:</strong> Include forms for email subscriptions, downloads, or free trials.</li>
          <li><strong>Landing Pages:</strong> Create dedicated pages for specific campaigns, products, or services.</li>
        </ul>
        
        <h4>3. Content Creation</h4>
        <ul>
          <li><strong>Dynamic Content Management:</strong> Use CMS tools like WordPress to update content easily.</li>
          <li><strong>Multimedia Integration:</strong> Include images, videos, and infographics to enhance engagement.</li>
          <li><strong>SEO Content:</strong> Write keyword-optimized content for pages, blogs, and product descriptions.</li>
          <li><strong>Social Proof:</strong> Include testimonials, reviews, and case studies.</li>
          <li><strong>Blog Strategy:</strong> Regularly publish valuable content to drive organic traffic.</li>
        </ul>
        
        <h4>4. Development & Functionality</h4>
        <ul>
          <li><strong>Fast Loading Speeds:</strong> Optimize code, images, and hosting.</li>
          <li><strong>Secure Platform:</strong> Use SSL certificates, firewalls, and regular updates.</li>
          <li><strong>E-Commerce Features:</strong> Build secure payment gateways and easy checkout processes.</li>
          <li><strong>Analytics Integration:</strong> Add Google Analytics, Facebook Pixel, and other tracking tools.</li>
          <li><strong>Retargeting Setup:</strong> Prepare for remarketing campaigns by integrating cookies and tracking pixels.</li>
          <li><strong>User Behavior Tools:</strong> Use heatmaps and session recordings to understand user interaction.</li>
        </ul>
        
        <h4>5. Launch & Promotion</h4>
        <ul>
          <li><strong>Test Before Launch:</strong> Conduct thorough testing for performance, usability, and responsiveness.</li>
          <li><strong>Live Deployment:</strong> Host the site on reliable servers with an appropriate domain.</li>
          <li><strong>SEO Launch Plan:</strong> Submit the site to search engines and set up XML sitemaps.</li>
          <li><strong>Social Media Promotion:</strong> Announce the launch on platforms like Instagram, LinkedIn, and Facebook.</li>
          <li><strong>Email Campaigns:</strong> Notify existing contacts about the new site or updates.</li>
        </ul>
        
        <h4>6. Post-Launch Marketing</h4>
        <ul>
          <li><strong>Ongoing Updates:</strong> Regularly update content, plugins, and security patches.</li>
          <li><strong>Scalability:</strong> Ensure the site is ready to grow with your business needs.</li>
          <li><strong>Content Marketing:</strong> Create blog posts, videos, and guides to keep the site relevant.</li>
          <li><strong>Paid Advertising:</strong> Run PPC campaigns using Google Ads and social media platforms.</li>
          <li><strong>Analytics Review:</strong> Continuously analyze site performance and refine strategies.</li>
          <li><strong>A/B Testing:</strong> Experiment with CTAs, layouts, and content to maximize conversions.</li>
        </ul>
        
        <h4>Tools & Platforms</h4>
        <ul>
          <li><strong>Website Development Tools:</strong> WordPress, Elementor, Shopify, WooCommerce, HTML/CSS.</li>
          <li><strong>Marketing Tools:</strong> Google Analytics, SEMrush, Mailchimp, HubSpot, Canva, Facebook Ads Manager.</li>
        </ul>
      `,
      icon: <Globe className="h-6 w-6" />,
      color: "#4a0072",
      image:
        "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=2064&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    {
      id: "app-dev",
      number: "03",
      title: "App Development",
      description:
        "We create custom mobile applications for iOS and Android platforms that help businesses engage with their customers on the go. From concept to deployment, our app development team delivers intuitive, feature-rich applications that drive user engagement and business growth.",
      detailedDescription: `
        <h3>Custom Mobile App Development Services</h3>
        <p>Transform your business with cutting-edge mobile applications designed to engage users and drive growth. Our expert app development team creates powerful, intuitive mobile solutions for iOS and Android platforms.</p>
        
        <h4>Comprehensive App Development Solutions</h4>
        <p>From concept to launch and beyond, we handle every aspect of the mobile app development process:</p>
        
        <ul>
          <li><strong>Strategy & Planning:</strong> We work closely with you to define your app's goals, target audience, and key features to ensure your solution meets business objectives.</li>
          <li><strong>UI/UX Design:</strong> Our designers create intuitive, engaging interfaces that delight users and keep them coming back.</li>
          <li><strong>Native & Cross-Platform Development:</strong> Whether you need iOS, Android, or both, we build high-performance apps using the latest technologies.</li>
          <li><strong>Backend Development:</strong> Robust server-side solutions that power your app with secure, scalable infrastructure.</li>
          <li><strong>Quality Assurance:</strong> Rigorous testing across devices and scenarios ensures your app works flawlessly.</li>
          <li><strong>Deployment & Launch:</strong> We handle app store submissions and ensure a smooth release.</li>
          <li><strong>Ongoing Support:</strong> Post-launch maintenance, updates, and enhancements keep your app current and competitive.</li>
        </ul>
        
        <h4>Technologies We Excel In</h4>
        <ul>
          <li><strong>Native Development:</strong> Swift and Objective-C for iOS, Kotlin and Java for Android</li>
          <li><strong>Cross-Platform Solutions:</strong> React Native, Flutter, and Xamarin for efficient multi-platform deployment</li>
          <li><strong>Backend Technologies:</strong> Node.js, Python, PHP, and cloud services (AWS, Azure, Google Cloud)</li>
          <li><strong>Database Solutions:</strong> SQL, NoSQL, and real-time database integration</li>
          <li><strong>Advanced Features:</strong> AR/VR, AI integration, payment gateways, geolocation, push notifications, and more</li>
        </ul>
        
        <h4>Industries We Serve</h4>
        <p>We've developed successful mobile applications across diverse sectors:</p>
        <ul>
          <li><strong>E-commerce & Retail:</strong> Shopping apps with seamless payment integration and personalized experiences</li>
          <li><strong>Healthcare:</strong> Patient management, telemedicine, and health tracking solutions</li>
          <li><strong>Finance:</strong> Secure banking, investment, and fintech applications</li>
          <li><strong>Real Estate:</strong> Property listing, virtual tours, and client management tools</li>
          <li><strong>Food & Beverage:</strong> Ordering, delivery, and loyalty program applications</li>
          <li><strong>Travel & Hospitality:</strong> Booking, itinerary management, and customer service solutions</li>
        </ul>
        
        <h4>Our App Development Process</h4>
        <ol>
          <li><strong>Discovery:</strong> Understanding your business goals, target users, and market opportunities</li>
          <li><strong>Planning:</strong> Defining features, creating wireframes, and establishing technical requirements</li>
          <li><strong>Design:</strong> Creating intuitive user interfaces and engaging user experiences</li>
          <li><strong>Development:</strong> Building the front-end and back-end components of your application</li>
          <li><strong>Testing:</strong> Ensuring quality, performance, and security across devices</li>
          <li><strong>Deployment:</strong> Launching your app to the appropriate app stores</li>
          <li><strong>Maintenance:</strong> Providing ongoing support, updates, and enhancements</li>
        </ol>
        
        <h4>Why Choose Us for App Development?</h4>
        <ul>
          <li><strong>Experienced Team:</strong> Our developers have created dozens of successful apps across industries</li>
          <li><strong>User-Centered Approach:</strong> We focus on creating intuitive experiences that users love</li>
          <li><strong>Technical Excellence:</strong> Clean code, optimal performance, and scalable architecture</li>
          <li><strong>Transparent Process:</strong> Regular updates and clear communication throughout development</li>
          <li><strong>Long-Term Partnership:</strong> We're committed to your app's ongoing success</li>
        </ul>
        
        <p>Ready to bring your app idea to life? Contact us today for a free consultation and let's discuss how we can help your business thrive in the mobile space.</p>
      `,
      icon: <Smartphone className="h-6 w-6" />,
      color: "#4a0072",
      image:
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    {
      id: "seo",
      number: "04",
      title: "SEO",
      description:
        "Enhance your search visibility effortlessly. From custom coding optimizations to strategic keyword integration and fast hosting setups, we ensure your site ranks higher, attracts organic traffic, and keeps visitors engaged.",
      detailedDescription: `
        <h3>Boost Your Online Presence with Our Expert SEO Optimization Services</h3>
        <p>Are you looking to elevate your online visibility and drive more traffic to your website? Our SEO Optimization Agency specializes in tailored solutions for businesses seeking to stand out in the digital world.</p>
        
        <h4>Why Choose Our SEO Engine Optimization Services?</h4>
        <p>At our agency, we combine the power of SEO and Marketing to create comprehensive strategies that deliver results. From off-page SEO and on-page SEO to advanced search engine optimization marketing techniques, we ensure your website is optimized to rank higher and convert better.</p>
        
        <h4>Local Search Engine Optimization</h4>
        <p>Dominate your local market with our specialized local SEO optimization services. Whether you're a small business or a large enterprise, our local search engine optimization solutions ensure your brand is easily discoverable by customers near you.</p>
        
        <h4>Comprehensive Website and SEO Services</h4>
        <p>Our all-inclusive website and SEO services are designed to improve your site's performance and user experience. We address every aspect, from SEO digital marketing strategies to technical optimizations, ensuring your website ranks on top search engines.</p>
        
        <h4>Expertise You Can Trust</h4>
        <p>With a team of seasoned search engine optimization experts, we provide data-driven insights and strategies that align with your business goals. Our focus on both off-page SEO and on-page SEO ensures a holistic approach to achieving sustainable growth.</p>
        
        <h4>Partner with Us for Success</h4>
        <p>Join countless businesses that have benefited from our proven expertise in search engine optimization and marketing. From boosting rankings to driving qualified leads, our SEO solutions are designed to take your business to the next level.</p>
        
        <p>Let us help you grow your online presence with powerful SEO optimization services tailored to your needs. Contact us today to work with the leading experts in SEO engine optimization and digital marketing!</p>
      `,
      icon: <Search className="h-6 w-6" />,
      color: "#4a0072",
      image:
        "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    {
      id: "branding",
      number: "05",
      title: "Branding & Design",
      description:
        "Create a memorable brand presence! We develop cohesive visual identities, set up domains and hosting, and customize everything to reflect your brand's essence, building a strong foundation for customer trust and recognition.",
      detailedDescription: `
        <h3>Transform your business with strategic branding and stunning design that leaves a lasting impression</h3>
        
        <h4>What We Offer</h4>
        
        <h5>1. Brand Strategy</h5>
        <ul>
          <li>Define your brand's mission, vision, and core values.</li>
          <li>Develop a clear positioning statement that sets you apart.</li>
          <li>Research your target audience to craft a brand that resonates.</li>
        </ul>
        
        <h5>2. Visual Identity Design</h5>
        <ul>
          <li>Logo design: Unique, versatile, and timeless.</li>
          <li>Color palette creation: Evoke emotions and align with your brand personality.</li>
          <li>Typography selection: Ensure readability and consistency.</li>
        </ul>
        
        <h5>3. Marketing Collateral</h5>
        <ul>
          <li>Eye-catching brochures, flyers, and presentations.</li>
          <li>Social media templates for consistent branding across platforms.</li>
          <li>Packaging and merchandise designs that turn heads.</li>
        </ul>
        
        <h5>4. Website and Digital Design</h5>
        <ul>
          <li>Responsive, user-friendly web design with seamless navigation.</li>
          <li>Optimized designs for mobile, tablet, and desktop.</li>
          <li>Visual storytelling through captivating graphics and animations.</li>
        </ul>
        
        <h4>Why Branding Matters</h4>
        <ul>
          <li><strong>First Impressions Count:</strong> Your brand is often the first thing potential customers see—make it unforgettable.</li>
          <li><strong>Build Trust:</strong> A consistent brand builds credibility and fosters loyalty.</li>
          <li><strong>Stand Out:</strong> In a crowded market, your brand is your unique identifier.</li>
        </ul>
        
        <h4>Our Design Process</h4>
        <ol>
          <li><strong>Discovery:</strong> We dive deep into your business goals, target audience, and competition to create a tailored branding strategy.</li>
          <li><strong>Conceptualization:</strong> Transform ideas into sketches and mockups, ensuring every detail aligns with your brand identity.</li>
          <li><strong>Refinement:</strong> Collaborate with you to refine designs, incorporating feedback for perfection.</li>
          <li><strong>Delivery:</strong> Provide high-quality, ready-to-use files and guidelines for consistent implementation.</li>
        </ol>
        
        <h4>Showcase Your Brand Everywhere</h4>
        <ul>
          <li><strong>Social media platforms:</strong> Consistent branding across Instagram, Facebook, LinkedIn, and more.</li>
          <li><strong>Advertising campaigns:</strong> Cohesive designs for digital and print ads.</li>
          <li><strong>Events and trade shows:</strong> Booth designs, banners, and marketing materials that grab attention.</li>
        </ul>
        
        <h4>Client Success Stories</h4>
        <p>Highlight case studies and testimonials from clients who have experienced growth and success through exceptional branding and design.</p>
        
        <p>Get started today!</p>
      `,
      icon: <Palette className="h-6 w-6" />,
      color: "#4a0072",
      image:
        "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    {
      id: "google-ads",
      number: "06",
      title: "Google Ads",
      description:
        "Maximize conversions with Google Ads. Our setup includes seamless hosting, fast-loading pages, and compelling ad copy that drives traffic to your site, helping you reach and engage your target audience effectively.",
      detailedDescription: `
        <h3>Drive Growth with Google Ads by Triadic Marketing Agency</h3>
        <p>In today's competitive digital landscape, leveraging Google Ads is essential for businesses aiming to enhance visibility, drive traffic, and boost sales. At Triadic Marketing Agency, we specialize in creating high-impact Google Ads campaigns that deliver measurable results.</p>
        
        <h4>Why Choose Google Ads?</h4>
        <p>Google Ads (formerly known as Google AdWords) is the ultimate platform for connecting with your target audience. With tools like Google Ads Manager and AdManager, businesses can seamlessly manage their campaigns, ensuring every dollar spent brings value.</p>
        
        <ul>
          <li><strong>Advertise on Google:</strong> Reach millions of potential customers searching for services like yours.</li>
          <li><strong>Pay Per Click Advertising Google:</strong> Pay only for actual clicks—no unnecessary expenses.</li>
          <li><strong>Google PPC Campaigns:</strong> Tailor your ads for specific audiences to maximize ROI.</li>
        </ul>
        
        <h4>Services We Offer</h4>
        <p>As a leading Google Ads Agency, we offer a full suite of services tailored to your needs:</p>
        
        <h5>Google Adwords Campaigns</h5>
        <p>Our team of Google Ads Experts creates customized campaigns that align with your business objectives, ensuring optimal performance.</p>
        
        <h5>Google Local Service Ads</h5>
        <p>Perfect for businesses wanting to target local customers. Get noticed where it matters most.</p>
        
        <h5>Google Display Advertising</h5>
        <p>Capture attention with visually appealing ads that showcase your brand across the Google Ads website and network.</p>
        
        <h5>Google PPC Ads</h5>
        <p>With Google Ads Planner, we research high-converting keywords like "ad words google" to ensure your Google PPC campaigns are both effective and budget-friendly.</p>
        
        <h4>Benefits of Working with Us</h4>
        <ul>
          <li><strong>Expert Management:</strong> From admanager google to advanced ad manager tools, we handle everything.</li>
          <li><strong>Strategic Planning:</strong> We use data-driven insights to plan your Google AdWords advertising strategy.</li>
          <li><strong>Optimized Results:</strong> Whether it's Google click ads or a comprehensive Google Ads campaign, we deliver outcomes that matter.</li>
        </ul>
        
        <h4>Start Advertising on Google Today</h4>
        <p>Ready to dominate search results and outshine competitors? Partner with Triadic Marketing Agency, the trusted experts in Google Ads and Google AdSense strategies.</p>
        
        <p>Contact us today to transform your advertising goals into reality with powerful, performance-driven campaigns.</p>
        
        <p>Let's create, manage, and optimize your Google Ads to drive unparalleled success!</p>
      `,
      icon: <Target className="h-6 w-6" />,
      color: "#4a0072",
      image:
        "https://images.unsplash.com/photo-1579869847514-7c1a19d2d2ad?q=80&w=2034&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    {
      id: "content",
      number: "07",
      title: "Content Creation",
      description:
        "Engage and inform with quality content. From blog posts to product descriptions, we craft content that speaks to your audience, optimizing for readability and SEO. Complete with domain and hosting support if needed.",
      detailedDescription: `
        <h3>Elevate Your Brand with Professional Content Creation Services</h3>
        <p>In today's digital landscape, compelling content is the cornerstone of effective marketing. At Triadic Media, we craft engaging, strategic content that captivates your audience and drives meaningful results.</p>
        
        <h4>Comprehensive Content Solutions</h4>
        <p>Our expert team delivers a wide range of content services tailored to your unique business needs:</p>
        
        <h5>Written Content</h5>
        <ul>
          <li><strong>Blog Posts & Articles:</strong> Informative, SEO-optimized content that establishes your authority and drives organic traffic</li>
          <li><strong>Website Copy:</strong> Compelling messaging that converts visitors into customers</li>
          <li><strong>Email Campaigns:</strong> Strategic sequences that nurture leads and drive engagement</li>
          <li><strong>Social Media Content:</strong> Platform-specific posts that build community and increase reach</li>
          <li><strong>Product Descriptions:</strong> Persuasive copy that highlights benefits and drives sales</li>
          <li><strong>Case Studies & White Papers:</strong> In-depth content that showcases your expertise</li>
        </ul>
        
        <h5>Visual Content</h5>
        <ul>
          <li><strong>Photography:</strong> Professional images that elevate your brand aesthetic</li>
          <li><strong>Infographics:</strong> Visual representations that simplify complex information</li>
          <li><strong>Social Media Graphics:</strong> Eye-catching visuals optimized for each platform</li>
          <li><strong>Branded Templates:</strong> Consistent designs for ongoing content needs</li>
        </ul>
        
        <h5>Video Content</h5>
        <ul>
          <li><strong>Promotional Videos:</strong> Engaging content that showcases your products or services</li>
          <li><strong>Explainer Videos:</strong> Clear, concise explanations of complex concepts</li>
          <li><strong>Social Media Clips:</strong> Short-form videos optimized for maximum engagement</li>
          <li><strong>Testimonials:</strong> Authentic customer stories that build trust</li>
          <li><strong>Product Demonstrations:</strong> Detailed showcases of your offerings in action</li>
        </ul>
        
        <h4>Our Content Creation Process</h4>
        <ol>
          <li><strong>Strategy Development:</strong> We align content goals with your business objectives and target audience needs</li>
          <li><strong>Research & Planning:</strong> Thorough research ensures accurate, valuable content that resonates</li>
          <li><strong>Creation & Production:</strong> Our skilled team crafts compelling content across formats</li>
          <li><strong>Optimization:</strong> We enhance content for search engines and user experience</li>
          <li><strong>Distribution:</strong> Strategic publishing across appropriate channels</li>
          <li><strong>Analysis & Refinement:</strong> Data-driven improvements based on performance metrics</li>
        </ol>
        
        <h4>Why Choose Our Content Creation Services?</h4>
        <ul>
          <li><strong>Industry Expertise:</strong> Content creators specialized in your specific field</li>
          <li><strong>SEO Integration:</strong> Content optimized for search visibility and rankings</li>
          <li><strong>Brand Consistency:</strong> Messaging aligned with your unique voice and values</li>
          <li><strong>Data-Driven Approach:</strong> Content strategies informed by analytics and performance</li>
          <li><strong>Scalable Solutions:</strong> Content packages that grow with your business needs</li>
        </ul>
        
        <h4>Industries We Serve</h4>
        <p>We create specialized content for diverse sectors including:</p>
        <ul>
          <li>E-commerce & Retail</li>
          <li>Professional Services</li>
          <li>Healthcare & Wellness</li>
          <li>Technology & SaaS</li>
          <li>Real Estate & Property</li>
          <li>Food & Hospitality</li>
          <li>Education & Training</li>
        </ul>
        
        <p>Ready to transform your content strategy? Contact us today to discuss how our content creation services can help your business stand out and connect with your ideal audience.</p>
      `,
      icon: <FileText className="h-6 w-6" />,
      color: "#4a0072",
      image:
        "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
  ]

  const flowingMenuItems = services.map((service) => ({
    link: `#${service.id}`,
    text: service.title,
    image: service.image,
    id: service.id,
  }))

  const activeServiceData = services.find((s) => s.id === activeService)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section id="services" className="py-20 bg-black">
      <div className="container">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 text-white">
              Our <span className="text-[var(--accent-color)]">Services</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We offer comprehensive digital marketing solutions to help your business grow and thrive in the digital
              landscape.
            </p>
          </div>
        </RevealOnScroll>

        

        {/* Services content that appears when a tab is clicked */}
        {activeServiceData && (
          <div ref={ref} className="grid lg:grid-cols-2 gap-12 items-center">
            <RevealOnScroll direction="left">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="grid grid-cols-2 gap-4"
              >
                {services.map((service) => (
                  <motion.div
                    key={service.id}
                    variants={itemVariants}
                    className={cn(
                      "cursor-pointer p-4 rounded-xl transition-all duration-300",
                      activeService === service.id
                        ? "bg-[var(--accent-color)] text-white shadow-lg scale-105"
                        : "bg-gray-900 text-white hover:bg-gray-800",
                    )}
                    onClick={() => setActiveService(service.id)}
                    whileHover={{ scale: activeService === service.id ? 1.05 : 1.03 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="font-bold text-2xl mb-2">{service.number}</div>
                    <h3 className="font-medium">{service.title}</h3>
                  </motion.div>
                ))}
              </motion.div>
            </RevealOnScroll>

            <RevealOnScroll direction="right" delay={0.2}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeService}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="relative"
                >
                  <div className="bg-gray-900 p-8 rounded-xl shadow-lg text-white">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-full bg-[var(--accent-color)] flex items-center justify-center mr-4">
                        {activeServiceData.icon}
                      </div>
                      <h3 className="text-2xl font-bold">{activeServiceData.title}</h3>
                    </div>

                    <div className="mb-6">
                      <img
                        src={activeServiceData.image || "/placeholder.svg"}
                        alt={activeServiceData.title}
                        className="w-full h-48 object-cover rounded-lg mb-4"
                      />
                    </div>

                    <p className="text-gray-300 mb-6">{activeServiceData.description}</p>

                    <ul className="mb-6 space-y-2">
                      {activeServiceData.detailedDescription
                        .split("<li>")
                        .slice(1)
                        .map((item, index) => {
                          const cleanItem = item.split("</li>")[0].replace(/<\/?[^>]+(>|$)/g, "")
                          return (
                            <li key={index} className="flex items-start">
                              <span className="text-[var(--accent-color)] mr-2">•</span>
                              <span>{cleanItem}</span>
                            </li>
                          )
                        })
                        .slice(0, 3)}
                    </ul>

                    <button
                      onClick={() => document.getElementById("service-details-modal").classList.remove("hidden")}
                      className="bg-[var(--accent-color)] hover:bg-[var(--accent-color)]/90 text-white px-6 py-3 rounded-lg transition-colors w-full"
                    >
                      View Full Details
                    </button>
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute -top-6 -right-6 w-24 h-24 bg-[var(--accent-color)] rounded-full blur-xl opacity-20" />
                  <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-[var(--accent-color)] rounded-full blur-xl opacity-20" />
                </motion.div>
              </AnimatePresence>
            </RevealOnScroll>
          </div>
        )}
      </div>
      {/* Add a modal for detailed service description */}
      <div id="service-details-modal" className="fixed inset-0 z-50 hidden">
        <div
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          onClick={() => document.getElementById("service-details-modal").classList.add("hidden")}
        ></div>
        <div className="relative z-10 max-w-4xl mx-auto mt-20 bg-gray-900 rounded-xl p-6 max-h-[80vh] overflow-y-auto">
          <button
            onClick={() => document.getElementById("service-details-modal").classList.add("hidden")}
            className="absolute top-4 right-4 text-gray-400 hover:text-white"
          >
            <X className="h-6 w-6" />
          </button>

          <h2 className="text-2xl font-bold text-white mb-4">{activeServiceData?.title}</h2>

          <div
            className="prose prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: activeServiceData?.detailedDescription }}
          ></div>

          <div className="mt-6 flex justify-end">
            <button
              onClick={() => document.getElementById("service-details-modal").classList.add("hidden")}
              className="bg-[var(--accent-color)] hover:bg-[var(--accent-color)]/90 text-white px-6 py-2 rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
