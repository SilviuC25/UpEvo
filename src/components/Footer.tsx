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
          <motion.div variants={fadeUpVariants} custom={1} className="text-center md:text-left">
            <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#B1C6DC] to-white mb-6">
              UpEvo
            </h2>
            <p className="text-[#B5C8DB] mb-6">
              Empowering your brand through beautiful code & design.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <motion.a
                href="#"
                whileHover={{ scale: 1.2 }}
                className="w-10 h-10 bg-[#1A2F4F] hover:bg-[#044E99] rounded-full flex items-center justify-center transition duration-300"
                aria-label="Instagram"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="white"
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                >
                  <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm5.25-.88a1.12 1.12 0 11-2.24 0 1.12 1.12 0 012.24 0z" />
                </svg>
              </motion.a>

              <motion.a
                href="#"
                whileHover={{ scale: 1.2 }}
                className="w-10 h-10 bg-[#1A2F4F] hover:bg-[#044E99] rounded-full flex items-center justify-center transition duration-300"
                aria-label="LinkedIn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="white"
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.025-3.039-1.852-3.039-1.853 0-2.136 1.445-2.136 2.939v5.669H9.352V9h3.414v1.561h.049c.476-.9 1.637-1.852 3.369-1.852 3.603 0 4.268 2.371 4.268 5.456v6.287zM5.337 7.433a2.067 2.067 0 11.001-4.134 2.067 2.067 0 01-.001 4.134zM6.781 20.452H3.892V9h2.889v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.225.792 24 1.771 24h20.451C23.2 24 24 23.225 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                </svg>
              </motion.a>

              <motion.a
                href="#"
                whileHover={{ scale: 1.2 }}
                className="w-10 h-10 bg-[#1A2F4F] hover:bg-[#044E99] rounded-full flex items-center justify-center transition duration-300"
                aria-label="GitHub"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="white"
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                >
                  <path d="M12 2C6.48 2 2 6.58 2 12.24c0 4.53 2.87 8.37 6.84 9.73.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.71-2.78.61-3.37-1.36-3.37-1.36-.46-1.2-1.12-1.52-1.12-1.52-.91-.63.07-.62.07-.62 1.01.07 1.54 1.07 1.54 1.07.9 1.56 2.36 1.11 2.94.85.09-.66.35-1.11.64-1.37-2.22-.26-4.56-1.12-4.56-4.98 0-1.1.39-2 1.03-2.7-.1-.26-.45-1.3.1-2.7 0 0 .84-.27 2.75 1.02A9.3 9.3 0 0112 8.8c.85.004 1.7.11 2.5.32 1.9-1.3 2.75-1.02 2.75-1.02.55 1.4.2 2.44.1 2.7.64.7 1.03 1.6 1.03 2.7 0 3.87-2.35 4.7-4.58 4.95.36.31.68.92.68 1.86 0 1.34-.01 2.42-.01 2.75 0 .27.18.58.69.48A10.01 10.01 0 0022 12.24C22 6.58 17.52 2 12 2z" />
                </svg>
              </motion.a>
            </div>
          </motion.div>

          <motion.div variants={fadeUpVariants} custom={2}>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3 text-[#B5C8DB]">
              {['Home', 'Services', 'Projects', 'Blog'].map((text, i) => (
                <li key={i}>
                  <Link href={`/${text.toLowerCase() === 'home' ? '' : text.toLowerCase()}`} className="hover:text-[#FDFDFC] hover:pl-2 transition-all duration-300">
                    {text}
                  </Link>
                </li>
              ))}
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
                  href="tel:+40770639392"
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
