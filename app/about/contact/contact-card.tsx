'use client'

import { motion } from 'framer-motion'
import { type LucideIcon } from 'lucide-react'
import Link from "next/link"
import { BookMeeting } from "./book-call"

interface ContactCardProps {
  title: string
  description: string
  icon: LucideIcon
  link: {
    href: string
    label: string
  }
}

export function ContactCard({ title, description, icon: Icon, link }: ContactCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="rounded-lg border bg-white p-6 transition-colors duration-300 hover:bg-accent"
    >
      <motion.div
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.1, rotate: 5 }}
        className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10"
      >
        <Icon className="h-5 w-5 text-primary" />
      </motion.div>
      <h3 className="mb-2 text-xl font-semibold">{title}</h3>
      <p className="mb-4 text-muted-foreground">{description}</p>
      {title === "Book a virtual meeting" ? (
        <BookMeeting />
      ) : (
        <Link 
          href={link.href} 
          className="text-primary relative inline-block group"
        >
          <span className="relative">
            {link.label}
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
          </span>
        </Link>
      )}
    </motion.div>
  )
}

