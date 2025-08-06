'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Button from '@/components/Button'

const ContactSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <section className="relative w-full bg-[#F8FBFB] py-20 px-4 md:py-32">
      <div className="absolute inset-0 z-0 [background-size:20px_20px] [background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]" />
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-[#1A2F4F] mb-6">
            Start Your Project / Website
          </h2>
          <form className="space-y-4 bg-[#FDFDFC] p-6 rounded-2xl shadow-lg border border-[#B5C8DB]">
            <input type="text" placeholder="Your Name" className="w-full border border-[#B1C6DC] rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#7A8FAA] outline-none" />
            <input type="email" placeholder="Your Email" className="w-full border border-[#B1C6DC] rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#7A8FAA] outline-none" />
            <input type="text" placeholder="Subject" className="w-full border border-[#B1C6DC] rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#7A8FAA] outline-none" />
            <textarea placeholder="Message" rows={5} className="w-full border border-[#B1C6DC] rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#7A8FAA] outline-none"></textarea>
            <div className="pt-4">
              <Button label="Send Message" href="#" dark={false} />
            </div>
          </form>
        </motion.div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          <h3 className="text-xl font-semibold text-[#1A2F4F]">Other Ways to Reach Me</h3>
          <ul className="space-y-2 text-[#2A3D5C]">
            <li><a href="#" className="text-[#044E99]">Instagram</a></li>
            <li><a href="#" className="text-[#044E99]">LinkedIn</a></li>
            <li><a href="mailto:you@example.com" className="text-[#044E99]">Email</a></li>
            <li className="text-[#2A3D5C]">123 Main St, City, Country</li>
          </ul>
          <div className="w-full h-64 rounded-xl overflow-hidden border border-[#B5C8DB]">
            <iframe
              src="https://maps.google.com/maps?q=your%20address&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full"
              allowFullScreen
              loading="lazy"
              title="Map"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactSection
