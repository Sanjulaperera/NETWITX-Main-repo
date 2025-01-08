"use client"

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface AppearFromBottomProps {
  children: React.ReactNode
  duration?: number
  delay?: number
  className?: string
}

export function AppearFromBottom({
  children,
  duration = 0.8,
  delay = 0.2,
  className = "",
}: AppearFromBottomProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: "100%" }}
      animate={{ 
        opacity: isVisible ? 1 : 0, 
        y: isVisible ? 0 : "100%" 
      }}
      transition={{ 
        duration: duration,
        ease: [0.16, 1, 0.3, 1],
        delay: delay
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

