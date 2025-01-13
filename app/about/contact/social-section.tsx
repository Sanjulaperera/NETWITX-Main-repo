'use client'

import { motion } from "framer-motion"
import { Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react'
import Link from "next/link"

const socialLinks = [
  {
    name: "Facebook",
    icon: Facebook,
    href: "https://facebook.com",
    color: "hover:text-blue-600",
  },
  {
    name: "Twitter",
    icon: Twitter,
    href: "https://twitter.com/netwitx",
    color: "hover:text-blue-400",
  },
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://instagram.com",
    color: "hover:text-pink-600",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://linkedin.com",
    color: "hover:text-blue-700",
  },
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/Netwitx",
    color: "hover:text-gray-900 dark:hover:text-white",
  },
]

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
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
}

export function SocialSection() {
  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <motion.div 
        className="container mx-auto px-4 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.h2 
          className="text-3xl font-bold mb-8"
          variants={itemVariants}
        >
          Follow us on social media
        </motion.h2>
        <motion.div 
          className="flex justify-center items-center gap-8 flex-wrap"
          variants={containerVariants}
        >
          {socialLinks.map((social) => (
            <motion.div key={social.name} variants={itemVariants}>
              <Link
                href={social.href}
                className={`group flex items-center justify-center w-16 h-16 rounded-full bg-background shadow-lg transition-all duration-300 hover:scale-110 ${social.color}`}
              >
                <social.icon className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
                <span className="sr-only">Follow us on {social.name}</span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

