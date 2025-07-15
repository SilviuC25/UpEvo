'use client'

import { useEffect } from 'react'
import { motion, Variants } from 'framer-motion'
import Link from 'next/link'

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
}

const Footer = () => {
  useEffect(() => {
    const orb = document.querySelector('.orb') as HTMLElement
    const handleMouseMove = (e: MouseEvent) => {
      if (orb) {
        orb.style.left = `${e.clientX}px`
        orb.style.top = `${e.clientY}px`
      }
    }
    document.addEventListener('mousemove', handleMouseMove)
    return () => document.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-gradient-to-br from-[#1A2F4F] to-[#2A3D5C] text-[#FDFDFC] overflow-hidden z-10">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#044E99] rounded-full blur-3xl animate-float1" />
        <div className="absolute top-40 right-20 w-40 h-40 bg-[#225A93] rounded-full blur-3xl animate-float2" />
        <div className="absolute bottom-10 left-1/2 w-48 h-48 bg-[#0D4E8C] rounded-full blur-3xl animate-float3" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-16 sm:py-20 lg:px-8">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={fadeUpVariants} custom={1}>
            <div className="flex items-center space-x-3 mb-6">
              <motion.div
                className="w-10 h-10 bg-gradient-to-r from-[#044E99] to-[#0D4E8C] rounded-lg flex items-center justify-center text-white font-bold text-lg transition-transform group-hover:rotate-12"
                whileHover={{ rotate: 12, scale: 1.1 }}
              >
                UE
              </motion.div>
              <h2 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#B1C6DC] to-white">
                UpEvo
              </h2>
            </div>
            <p className="text-[#B5C8DB] mb-6">
              Empowering your brand through beautiful code & design.
            </p>
            <div className="flex space-x-4">
              {['github', 'youtube', 'linkedin'].map((platform) => (
                <motion.a
                  key={platform}
                  href="#"
                  whileHover={{ scale: 1.2 }}
                  className="w-10 h-10 bg-[#1A2F4F] hover:bg-[#044E99] hover:shadow-lg hover:shadow-[#044E99]/40 rounded-full flex items-center justify-center transition duration-300"
                >
                  <i className={`fab fa-${platform} text-white`} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div variants={fadeUpVariants} custom={2}>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3 text-[#B5C8DB]">
              <li>
                <Link href="/" className="hover:text-[#FDFDFC] hover:pl-2 transition-all duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#FDFDFC] hover:pl-2 transition-all duration-300">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-[#FDFDFC] hover:pl-2 transition-all duration-300">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-[#FDFDFC] hover:pl-2 transition-all duration-300">
                  Blog
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div variants={fadeUpVariants} custom={3}>
            <h3 className="text-lg font-semibold mb-6">Get in Touch</h3>
            <ul className="space-y-4 text-[#B5C8DB] text-sm">
              <li>
                <p>Email:</p>
                <a
                  href="mailto:vilutsil25@gmail.com"
                  className="text-[#FDFDFC] hover:text-[#B1C6DC]"
                >
                  vilutsil25@gmail.com
                </a>
              </li>
              <li>
                <p>Phone:</p>
                <a
                  href="tel:+244941540352"
                  className="text-[#FDFDFC] hover:text-[#B1C6DC]"
                >
                  +40 770 639 392
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div variants={fadeUpVariants} custom={4}>
            <h3 className="text-lg font-semibold mb-6">Stay Updated</h3>
            <p className="text-[#B5C8DB] mb-4">Subscribe to our newsletter.</p>
            <form>
              <div className="relative">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full bg-[#2A3D5C] border border-[#1A2F4F] rounded-lg py-3 px-4 text-[#FDFDFC] placeholder-[#B1C6DC] focus:ring-2 focus:ring-[#044E99] transition duration-300"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#044E99] hover:bg-[#0D4E8C] text-white px-3 py-2 rounded-lg transition"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>

        <motion.div
          variants={fadeUpVariants}
          custom={5}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-[#1A2F4F] flex flex-col md:flex-row justify-between items-center text-sm text-[#B1C6DC]"
        >
          <p>&copy; {currentYear} UpEvo. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-[#FDFDFC] transition">Privacy Policy</a>
            <a href="#" className="hover:text-[#FDFDFC] transition">Terms</a>
            <a href="#" className="hover:text-[#FDFDFC] transition">Cookies</a>
          </div>
        </motion.div>
      </div>

      <div className="orb absolute w-64 h-64 rounded-full bg-gradient-to-r from-[#044E99]/10 to-[#0D4E8C]/10 blur-3xl pointer-events-none z-0" />

      <style>{`
        @keyframes float1 { 0%, 100% { transform: translate(0, 0); } 50% { transform: translate(20px, 20px); } }
        @keyframes float2 { 0%, 100% { transform: translate(0, 0); } 50% { transform: translate(-15px, 15px); } }
        @keyframes float3 { 0%, 100% { transform: translate(0, 0); } 50% { transform: translate(0, -20px); } }
        .animate-float1 { animation: float1 8s ease-in-out infinite; }
        .animate-float2 { animation: float2 10s ease-in-out infinite; }
        .animate-float3 { animation: float3 12s ease-in-out infinite; }
        .orb { transform: translate(-50%, -50%); opacity: 0.3; transition: transform 0.1s ease-out; }
      `}</style>
    </footer>
  )
}

export default Footer
