'use client'

import { useState, useEffect, useRef, FormEvent } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code2, 
  Database, 
  Globe, 
  Palette, 
  Server, 
  Layers,
  ChevronDown,
  Send,
  CheckCircle,
  GraduationCap,
  Briefcase,
  User,
  Sparkles
} from 'lucide-react'

// Navigation Component
function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      // Determine active section
      const sections = navItems.map(item => document.getElementById(item.id))
      const scrollPosition = window.scrollY + 100

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0a0a0f]/90 backdrop-blur-lg border-b border-white/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl md:text-2xl font-bold gradient-text cursor-pointer"
            onClick={() => scrollToSection('hero')}
          >
            Shubhranshu
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-white/70 hover:text-white transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-current transform transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`w-full h-0.5 bg-current transform transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{ height: isMobileMenuOpen ? 'auto' : 0 }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left px-4 py-2 rounded-lg transition-colors ${
                  activeSection === item.id
                    ? 'text-cyan-400 bg-cyan-400/10'
                    : 'text-white/70 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </nav>
  )
}

// Floating Particles Background
function ParticleBackground() {
  return (
    <div className="particle-container">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="particle animate-particle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${8 + Math.random() * 4}s`,
            width: `${2 + Math.random() * 4}px`,
            height: `${2 + Math.random() * 4}px`,
            background: i % 2 === 0 ? 'var(--accent-cyan)' : 'var(--accent-purple)',
          }}
        />
      ))}
    </div>
  )
}

// Geometric Shapes
function GeometricShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-float-reverse" />
      
      {/* Floating Shapes */}
      <motion.div
        className="absolute top-20 right-[15%] w-16 h-16 border border-cyan-500/30 rounded-lg"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute bottom-32 left-[10%] w-20 h-20 border border-purple-500/30 rounded-full"
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute top-1/3 left-[5%] w-12 h-12 border-2 border-teal-500/20 rotate-45"
        animate={{ y: [-20, 20, -20] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  )
}

// Hero Section
function HeroSection() {
  const [typedText, setTypedText] = useState('')
  const fullText = "Hi, I'm Shubhranshu"

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(timer)
      }
    }, 100)
    return () => clearInterval(timer)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-grid-pattern overflow-hidden"
    >
      <ParticleBackground />
      <GeometricShapes />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="mb-6 inline-block"
          >
            <span className="px-4 py-2 text-sm md:text-base bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-full text-cyan-300">
              <Sparkles className="w-4 h-4 inline-block mr-2" />
              Welcome to my portfolio
            </span>
          </motion.div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="typing-cursor">{typedText}</span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-4"
          >
            <span className="gradient-text font-semibold">BCA Student</span>
            <span className="mx-2">|</span>
            <span className="gradient-text font-semibold">Java & DSA Developer</span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="text-base sm:text-lg text-gray-400 mb-10 max-w-2xl mx-auto"
          >
            Building innovative solutions with clean code and creative problem-solving.
            Passionate about software development and continuous learning.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button
              onClick={() => scrollToSection('projects')}
              className="btn-primary text-base md:text-lg"
            >
              View Projects
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="btn-secondary text-base md:text-lg"
            >
              Contact Me
            </button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="cursor-pointer"
            onClick={() => scrollToSection('about')}
          >
            <ChevronDown className="w-8 h-8 text-cyan-400/50 hover:text-cyan-400 transition-colors" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

// About Section
function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-20 md:py-32 px-4 bg-gradient-to-b from-[#0a0a0f] via-[#0d1117] to-[#0a0a0f]"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            <span className="gradient-text">About Me</span>
          </h2>
          <p className="section-subtitle">
            Get to know me better and my journey in the world of technology
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity" />
              <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-cyan-500/30 animate-glow-pulse">
                <Image
                  src="/download/avatar.png"
                  alt="Shubhranshu"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="glass-card-glow p-6 md:p-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">
                <User className="w-6 h-6 md:w-8 md:h-8 inline-block mr-2 text-cyan-400" />
                Who I Am
              </h3>
              
              <p className="text-gray-300 mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
                I&apos;m a passionate <span className="text-cyan-400 font-semibold">BCA student</span> at{' '}
                <span className="text-purple-400 font-semibold">Bahra University</span>, dedicated to 
                crafting elegant solutions through code. My journey in technology has been driven by 
                curiosity and a relentless pursuit of excellence.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="mt-1">
                    <GraduationCap className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Education</h4>
                    <p className="text-gray-400 text-sm md:text-base">Bachelor of Computer Applications (BCA) at Bahra University</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1">
                    <Briefcase className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Experience</h4>
                    <p className="text-gray-400 text-sm md:text-base">6 Month Internship at Exeoelnce Technology</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1">
                    <Code2 className="w-5 h-5 text-teal-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Focus Areas</h4>
                    <p className="text-gray-400 text-sm md:text-base">Java Development, Data Structures & Algorithms, Web Technologies</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Skills Section
function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const skills = [
    { name: 'Java', icon: Code2, color: 'from-orange-500 to-red-500', description: 'Object-Oriented Programming' },
    { name: 'DSA', icon: Database, color: 'from-cyan-500 to-blue-500', description: 'Data Structures & Algorithms' },
    { name: 'HTML', icon: Globe, color: 'from-orange-400 to-red-400', description: 'Markup Language' },
    { name: 'CSS', icon: Palette, color: 'from-blue-400 to-purple-400', description: 'Styling & Animations' },
    { name: 'JavaScript', icon: Code2, color: 'from-yellow-400 to-orange-400', description: 'Dynamic Web Development' },
    { name: 'PHP', icon: Server, color: 'from-purple-500 to-indigo-500', description: 'Backend Development' },
    { name: 'WordPress', icon: Layers, color: 'from-blue-500 to-cyan-500', description: 'Content Management' },
    { name: 'Spring Boot', icon: Server, color: 'from-green-500 to-teal-500', description: 'Enterprise Java Framework' },
  ]

  return (
    <section
      id="skills"
      ref={ref}
      className="relative py-20 md:py-32 px-4 bg-[#0a0a0f]"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            <span className="gradient-text">My Skills</span>
          </h2>
          <p className="section-subtitle">
            Technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="skill-card group h-full">
                <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-r ${skill.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <skill.icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-white mb-1">{skill.name}</h3>
                <p className="text-xs md:text-sm text-gray-400">{skill.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Experience Section
function ExperienceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="experience"
      ref={ref}
      className="relative py-20 md:py-32 px-4 bg-gradient-to-b from-[#0a0a0f] via-[#0d1117] to-[#0a0a0f]"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            <span className="gradient-text">Experience</span>
          </h2>
          <p className="section-subtitle">
            My professional journey and learning experiences
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-purple-500 to-transparent" />

          {/* Timeline Item */}
          <div className="relative pl-12 md:pl-20 pb-8">
            <div className="absolute left-2 md:left-6 top-0 timeline-dot" />
            
            <div className="glass-card-glow p-6 md:p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-1">Software Development Intern</h3>
                  <p className="text-cyan-400 font-semibold text-base md:text-lg">Exeoelnce Technology</p>
                </div>
                <span className="mt-2 md:mt-0 px-4 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-full text-sm text-cyan-300">
                  6 Months
                </span>
              </div>

              <ul className="space-y-3 text-gray-300 text-sm md:text-base">
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                  <span>Gained hands-on experience in software development methodologies and best practices</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-400 flex-shrink-0" />
                  <span>Worked on real-world projects using Java, PHP, and web technologies</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-teal-400 flex-shrink-0" />
                  <span>Collaborated with development teams and learned agile development processes</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                  <span>Enhanced problem-solving skills and coding proficiency through practical assignments</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Projects Section
function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const projects = [
    {
      title: 'Banking Management System',
      description: 'A comprehensive banking system built with Java using Object-Oriented Programming principles. Features include account management, transactions, and balance inquiries.',
      technologies: ['Java', 'OOP', 'JDBC'],
      icon: Database,
      gradient: 'from-orange-500 to-red-500',
    },
    {
      title: 'Social Media Web Application',
      description: 'Full-stack social media platform with user authentication, post creation, comments, and real-time interactions. Built with modern web technologies.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'PHP'],
      icon: Globe,
      gradient: 'from-blue-500 to-purple-500',
    },
    {
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website showcasing projects and skills. Features smooth animations and a clean, professional design.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      icon: Palette,
      gradient: 'from-cyan-500 to-teal-500',
    },
    {
      title: 'Student Management System',
      description: 'Enterprise-level student management system using Spring Boot. Includes student registration, grade tracking, and administrative features.',
      technologies: ['Java', 'Spring Boot', 'MySQL'],
      icon: Server,
      gradient: 'from-green-500 to-teal-500',
    },
  ]

  return (
    <section
      id="projects"
      ref={ref}
      className="relative py-20 md:py-32 px-4 bg-[#0a0a0f]"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            <span className="gradient-text">My Projects</span>
          </h2>
          <p className="section-subtitle">
            A showcase of my work and creative solutions
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="project-card h-full flex flex-col">
                <div className={`h-32 md:h-40 bg-gradient-to-r ${project.gradient} p-6 flex items-center justify-center`}>
                  <project.icon className="w-12 h-12 md:w-16 md:h-16 text-white/80" />
                </div>
                
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3">{project.title}</h3>
                  <p className="text-gray-400 mb-4 flex-1 text-sm md:text-base">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="tech-badge">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <button className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-colors text-sm text-gray-300 hover:text-white">
                      <Github className="w-4 h-4" />
                      Code
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 hover:from-cyan-500/30 hover:to-purple-500/30 border border-cyan-500/30 rounded-lg transition-colors text-sm text-cyan-300">
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Contact Section
function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    message: '',
  })

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({ email: '', message: '' })
    
    // Reset success message after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-20 md:py-32 px-4 bg-gradient-to-b from-[#0a0a0f] via-[#0d1117] to-[#0a0a0f]"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <p className="section-subtitle">
            Have a project in mind? Let&apos;s work together and create something amazing
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="glass-card-glow p-6 md:p-10">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              {/* Contact Info */}
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">Let&apos;s Connect</h3>
                <p className="text-gray-400 mb-6 md:mb-8 text-sm md:text-base">
                  I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out!
                </p>

                <div className="space-y-4 mb-6 md:mb-8">
                  <div className="flex items-center gap-4">
                    <div className="social-icon">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-xs md:text-sm">Email</p>
                      <p className="text-white font-medium text-sm md:text-base">shubhranshu@example.com</p>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="text-gray-400 mb-3 md:mb-4 text-sm md:text-base">Find me on</p>
                  <div className="flex gap-3">
                    <a href="#" className="social-icon" aria-label="GitHub">
                      <Github className="w-5 h-5" />
                    </a>
                    <a href="#" className="social-icon" aria-label="LinkedIn">
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a href="#" className="social-icon" aria-label="Email">
                      <Mail className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                  <div>
                    <label htmlFor="email" className="block text-gray-300 mb-2 text-sm font-medium">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="form-input text-sm md:text-base"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-gray-300 mb-2 text-sm font-medium">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="form-input resize-none text-sm md:text-base"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed text-sm md:text-base"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : isSubmitted ? (
                      <>
                        <CheckCircle className="w-5 h-5" />
                        Message Sent!
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Footer Component
function Footer() {
  return (
    <footer className="relative py-8 md:py-12 px-4 bg-[#0a0a0f] border-t border-white/10">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-gray-400 text-sm md:text-base">
          Designed & Built by{' '}
          <span className="gradient-text font-semibold">Shubhranshu</span>
        </p>
        <p className="text-gray-500 text-xs md:text-sm mt-2">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  )
}

// Main Page Component
export default function Home() {
  return (
    <main className="relative bg-[#0a0a0f] text-white overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
