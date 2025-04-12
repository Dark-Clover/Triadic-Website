"use client"

import { Suspense, useState, useRef, useEffect } from "react"
import InteractiveNavbar from "@/components/interactive-navbar"
import Footer from "@/components/footer"
import AnimatedBackground from "@/components/animated-background"
import BlurText from "@/components/blur-text"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { User, Instagram, Linkedin, ExternalLink, X } from "lucide-react"

// Loading fallback component
const SectionLoading = () => (
  <div className="flex items-center justify-center min-h-[40vh]">
    <div className="w-8 h-8 border-4 border-primary/30 border-t-primary rounded-full animate-spin"></div>
  </div>
)

// Team member modal component
const TeamMemberModal = ({ member, isOpen, onClose }) => {
  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3, ease: "easeOut" } },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.2, ease: "easeIn" } },
  }

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.2 } },
  }

  // Prevent scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  if (!member) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={overlayVariants}
        >
          <motion.div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.div
            className="relative bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl overflow-hidden max-w-2xl w-full z-10 shadow-xl"
            variants={modalVariants}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-white z-20 bg-black/50 rounded-full p-2"
            >
              <X size={20} />
            </button>

            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-2/5 relative h-60 md:h-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary-color)] to-[var(--accent-color)] opacity-30" />
                {member.image ? (
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gray-900">
                    <User className="w-20 h-20 text-gray-700" />
                  </div>
                )}
              </div>

              <div className="p-6 md:p-8 w-full md:w-3/5">
                <h2 className="text-3xl font-bold text-white mb-2">{member.name}</h2>
                <div className="inline-block bg-[var(--accent-color)]/20 px-3 py-1 rounded-full text-[var(--accent-color)] text-sm font-medium mb-4">
                  {member.role}
                </div>

                <p className="text-gray-300 mb-6">
                  {member.bio ||
                    `${member.name} is a talented professional at Triadic Media, bringing expertise and creativity to every project.`}
                </p>

                {member.socialLinks && member.socialLinks.length > 0 && (
                  <div className="flex gap-3">
                    {member.socialLinks.map((link, index) => (
                      <a
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-800 hover:bg-[var(--accent-color)] p-2 rounded-full transition-all duration-300 text-white"
                      >
                        {link.type === "instagram" ? (
                          <Instagram size={18} />
                        ) : link.type === "linkedin" ? (
                          <Linkedin size={18} />
                        ) : link.type === "website" ? (
                          <ExternalLink size={18} />
                        ) : null}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

// Team member card component
const TeamMember = ({ member, index, onClick }) => {
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef(null)
  const isInView = useInView(cardRef, { once: true, amount: 0.2 })
  const [rotation, setRotation] = useState({ x: 0, y: 0 })

  // Handle mouse move for 3D effect
  const handleMouseMove = (e) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateX = (y - centerY) / 20
    const rotateY = (centerX - x) / 20

    setRotation({ x: rotateX, y: rotateY })
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    setRotation({ x: 0, y: 0 })
  }

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: 0.1 * index }}
      whileHover={{ scale: 1.02 }}
      className="team-card"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onClick={() => onClick(member)}
      style={{
        transformStyle: "preserve-3d",
      }}
    >
      <motion.div
        className="relative overflow-hidden rounded-xl cursor-pointer group"
        animate={{
          rotateX: rotation.x,
          rotateY: rotation.y,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <div className="relative aspect-[3/4] overflow-hidden">
          {/* Background gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black z-10" />

          {/* Image */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-[var(--primary-color)] to-[var(--accent-color)] opacity-20"
            animate={{ opacity: isHovered ? 0.4 : 0.2 }}
            transition={{ duration: 0.3 }}
          />

          {member.image ? (
            <motion.img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover"
              initial={{ scale: 1 }}
              animate={{ scale: isHovered ? 1.05 : 1 }}
              transition={{ duration: 0.5 }}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-900">
              <User className="w-20 h-20 text-gray-700" />
            </div>
          )}

          {/* Content overlay */}
          <div className="absolute inset-0 flex flex-col justify-end p-5 z-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
              <p className="text-gray-300 text-sm mb-3">{member.role}</p>

              {member.socialLinks && member.socialLinks.length > 0 && (
                <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {member.socialLinks.map((link, index) => (
                    <motion.a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-black/50 hover:bg-[var(--accent-color)] p-1.5 rounded-full transition-colors duration-300"
                      whileHover={{ y: -3 }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      {link.type === "instagram" ? (
                        <Instagram size={14} />
                      ) : link.type === "linkedin" ? (
                        <Linkedin size={14} />
                      ) : link.type === "website" ? (
                        <ExternalLink size={14} />
                      ) : null}
                    </motion.a>
                  ))}
                </div>
              )}
            </motion.div>
          </div>

          {/* Hover overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-[var(--accent-color)]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              transformStyle: "preserve-3d",
              transform: "translateZ(10px)",
            }}
          />

          {/* View details button */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30">
            <motion.div
              className="bg-black/60 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-medium"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Profile
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

// Team section component
const TeamSection = ({ title, members }) => {
  const [selectedMember, setSelectedMember] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleMemberClick = (member) => {
    setSelectedMember(member)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <div className="mb-20">
      <h3 className="text-2xl font-bold text-white mb-8 inline-block border-b-2 border-[var(--accent-color)]/50 pb-2">
        {title}
      </h3>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {members.map((member, index) => (
          <TeamMember key={index} member={member} index={index} onClick={handleMemberClick} />
        ))}
      </div>

      <TeamMemberModal member={selectedMember} isOpen={isModalOpen} onClose={closeModal} />
    </div>
  )
}

export default function TeamPage() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 })

  // Leadership team
  const leadershipTeam = [
    {
      name: "Syed Ali Haider",
      role: "CEO",
      image: "/team/syed-ali-haider.jpg",
      bio: "As the CEO of Triadic Media, Syed Ali Haider brings visionary leadership and strategic direction to the company. With a passion for digital innovation, he leads the team in delivering exceptional results for clients.",
      socialLinks: [{ type: "instagram", url: "https://www.instagram.com/syed.ali.haider5/" }],
    },
    {
      name: "Awais Ali",
      role: "Founder",
      image: "/team/awais-ali.png",
      bio: "Awais Ali founded Triadic Media with a vision to transform digital marketing. His innovative approach and industry expertise have been instrumental in establishing Triadic as a leader in the digital space.",
      socialLinks: [
        { type: "instagram", url: "https://www.instagram.com/awaisalyh/" },
        { type: "linkedin", url: "https://www.linkedin.com/in/awaisali7/" },
      ],
    },
  ]

  // Technical team
  const technicalTeam = [
    {
      name: "Usman Arshad",
      role: "Senior Web/App Developer",
      image: "/team/usman-arshad.png",
      bio: "Usman Arshad leads web and app development at Triadic Media, bringing technical excellence and innovative solutions to every project. His expertise ensures clients receive cutting-edge digital experiences.",
      socialLinks: [
        { type: "instagram", url: "https://www.instagram.com/usmaniii/" },
        { type: "linkedin", url: "https://www.linkedin.com/in/usman-arshad-647235247" },
        { type: "website", url: "https://usmanarshad.tech/" },
      ],
    },
    {
      name: "Hasham Yaseen",
      role: "Head Graphic Designer",
      image: "/team/hasham-yaseen.png",
      bio: "Hasham Yaseen leads the graphic design team at Triadic Media, bringing creative vision and artistic excellence to every project. His innovative designs help clients stand out in the digital landscape.",
      socialLinks: [
        { type: "instagram", url: "https://www.instagram.com/resistz000/" },
        { type: "linkedin", url: "https://www.linkedin.com/in/hasham-yaseen-a26077254/" },
      ],
    },
    {
      name: "Ayma Imtiaz",
      role: "Design Head",
      image: "/team/ayma-imtiaz.png",
      bio: "As Design Head, Ayma Imtiaz brings creative direction and artistic vision to Triadic Media's projects. Her innovative approach ensures clients receive visually stunning and effective design solutions.",
    },
    {
      name: "Aqeel Ahmed",
      role: "Graphic Designer",
      image: "/team/aqeel-ahmed.png",
      bio: "Aqeel Ahmed creates compelling visual content that captures attention and communicates brand messages effectively. His design skills contribute to the success of client campaigns across platforms.",
    },
    {
      name: "Asfand Ali",
      role: "Designer",
      image: "/team/asfand-ali.png",
      bio: "Asfand Ali brings creative talent and design expertise to Triadic Media's projects. His work helps clients establish strong visual identities and connect with their target audiences.",
    },
  ]

  // Business development team
  const businessTeam = [
    {
      name: "Hamas Qazi",
      role: "BDM Pakistan",
      image: "/team/hamas-qazi.png",
      bio: "Hamas Qazi leads business development efforts in Pakistan, connecting clients with Triadic Media's digital marketing solutions. His strategic approach helps businesses achieve their growth objectives.",
      socialLinks: [{ type: "linkedin", url: "https://www.linkedin.com/in/hammasqazi/" }],
    },
    {
      name: "Zavier Cobb",
      role: "USA Business Development",
      image: "/team/xavier-cobb.png",
      bio: "Zavier Cobb manages business development in the USA market, bringing Triadic Media's digital marketing expertise to American businesses looking to enhance their online presence and performance.",
    },
    {
      name: "Veronika",
      role: "Business Development Manager",
      image: "/team/vernoica.png",
      bio: "Veronika drives business growth and client relationships at Triadic Media. Her strategic approach and understanding of digital marketing help clients achieve their business objectives.",
    },
  ]

  // Content team
  const contentTeam = [
    {
      name: "Ashar Ali",
      role: "Performance Marketer",
      image: "/team/ashar-ali.png",
      bio: "Ashar Ali specializes in performance marketing, optimizing campaigns to deliver measurable results. His data-driven approach ensures clients achieve maximum ROI on their marketing investments.",
    },
    {
      name: "Saif Ahmed",
      role: "Content Creator",
      image: "/team/saif-ahmed.png",
      bio: "Saif Ahmed creates engaging content that resonates with target audiences. His creative storytelling helps brands connect with customers and build lasting relationships.",
    },
  ]

  return (
    <AnimatedBackground>
      <main className="min-h-screen bg-black overflow-hidden">
        <InteractiveNavbar />

        <section className="py-32 relative" ref={sectionRef}>
          <div className="container">
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 1 }}
              className="text-center mb-16"
            >
              <div className="mb-8">
                <BlurText
                  text="Meet Our Team"
                  delay={150}
                  animateBy="words"
                  direction="top"
                  className="text-5xl md:text-7xl font-bold text-white tracking-tighter"
                />
              </div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="text-gray-400 max-w-2xl mx-auto text-lg"
              >
                Our talented professionals are dedicated to bringing your digital vision to life with creativity,
                expertise, and passion.
              </motion.p>
            </motion.div>

            {/* Team sections */}
            <TeamSection title="Leadership" members={leadershipTeam} />
            <TeamSection title="Technical Team" members={technicalTeam} />
            <TeamSection title="Business Development" members={businessTeam} />
            <TeamSection title="Content & Marketing" members={contentTeam} />
          </div>
        </section>

        <Suspense fallback={<SectionLoading />}>
          <Footer />
        </Suspense>
      </main>
    </AnimatedBackground>
  )
}
