'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface TemplateCategory {
  id: string
  title: string
  imageUrl: string
}

const templateCategories: TemplateCategory[] = [
  { id: '1', title: 'E-commerce', imageUrl: 'https://uploadthing.com/f/3avCIVBvIockzhfCMisLNCRpTEuxIvKQ08VX3jMJO1qo4AHD' },
  { id: '2', title: 'Portfolio', imageUrl: 'https://uploadthing.com/f/3avCIVBvIock5X9hQ3lchGoXZCurMI5lxOyN4ijAkLzgnKmb' },
  { id: '3', title: 'Blog', imageUrl: 'https://uploadthing.com/f/3avCIVBvIockNegIW6r3rAsqXcoSxHR8v4yju1ZmMLbfdIOK' },
  { id: '4', title: 'Landing Page', imageUrl: 'https://uploadthing.com/f/' },
  { id: '5', title: 'Corporate', imageUrl: 'https://uploadthing.com/f/3avCIVBvIockbfWzEManHSngtQOCDZPzsbh0xRdlp15Lk7jN' },
  { id: '6', title: 'Non-Profit', imageUrl: 'https://uploadthing.com/f/3avCIVBvIocks3BXSKs7e6FTifoCzdQ8Xx0ykZPn4UBDHMLI' },
  { id: '7', title: 'Restaurant', imageUrl: 'https://uploadthing.com/f/3avCIVBvIock5sIp5HlchGoXZCurMI5lxOyN4ijAkLzgnKmb' },
  { id: '8', title: 'Educational', imageUrl: 'https://uploadthing.com/f/3avCIVBvIock6urdF7Nsp3ZRmOEQAVxFUeInGMdhvKruLHok' },
]

export default function WebsiteTemplatesSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [showLeftArrow, setShowLeftArrow] = useState(false)
  const [showRightArrow, setShowRightArrow] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
        setShowLeftArrow(scrollLeft > 0)
        setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10)
      }
    }

    scrollContainerRef.current?.addEventListener('scroll', handleScroll)
    return () => scrollContainerRef.current?.removeEventListener('scroll', handleScroll)
  }, [])

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { current: container } = scrollContainerRef
      const scrollAmount = container.clientWidth * 0.8
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section className="py-16 bg-gradient-to-r from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-3xl font-bold text-gray-800">Website Templates</h2>
            <Link href="/templates">
              <Button variant="outline" className="text-primary hover:bg-primary hover:text-white transition-colors">
                Browse Templates
              </Button>
            </Link>
          </div>
          <p className="text-sm text-gray-600 max-w-2xl">
            Pick from 900+ free website templates, fully customizable<br className="hidden sm:inline" /> and tailored to any business type.
          </p>
        </div>
        <div className="relative">
          {showLeftArrow && (
            <button
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-md hover:bg-white transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
          )}
          {showRightArrow && (
            <button
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-md hover:bg-white transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>
          )}
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto space-x-6 pb-4 scrollbar-hide"
          >
            {templateCategories.map((category) => (
              <div key={category.id} className="flex-none w-64">
                <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
                  <Image
                    src={category.imageUrl}
                    alt={`${category.title} template`}
                    width={300}
                    height={400}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-800">{category.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

