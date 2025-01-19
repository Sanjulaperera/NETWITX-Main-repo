'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Search, Calendar } from 'lucide-react'


interface Author {
  name: string
  image: string
  bio: string
}

interface Post {
  slug: string
  frontMatter: {
    title: string
    date: string
    description: string
    thumbnail: string
    tags: string[]
    author: Author
  }
}

export default function BlogList() {
  const [posts, setPosts] = useState<Post[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState<Post[]>([])

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('/api/posts')
      const data = await response.json()
      setPosts(data)
      setSearchResults(data)
    }

    fetchPosts()
  }, [])

  const handleSearch = () => {
    const results = posts.filter(post =>
      post.frontMatter.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.frontMatter.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setSearchResults(results)
  }

  return (
    <>
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mb-8 flex justify-center"
      >
        <div className="relative flex w-full max-w-md">
          <input
            type="text"
            placeholder="Search posts..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300 bg-white bg-opacity-80 backdrop-blur-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            className="bg-green-600 text-white px-4 py-2 rounded-r-lg hover:bg-green-700 transition-colors duration-200"
            onClick={handleSearch}
          >
            Search
          </button>
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        </div>
      </motion.div>

      {searchResults.length === 0 ? (
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-gray-600 text-center text-lg"
        >
          No blog posts found.
        </motion.p>
      ) : (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {searchResults.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 * index }}
            >
              <Link href={`/blog/${post.slug}`} className="group">
                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="relative aspect-video">
                    <Image
                      src={post.frontMatter.thumbnail || "/placeholder.svg"}
                      alt={post.frontMatter.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h2 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors duration-200">
                      {post.frontMatter.title}
                    </h2>
                    <div className="flex items-center text-gray-600 text-sm mb-3">
                      <Calendar size={16} className="mr-2" />
                      {new Date(post.frontMatter.date).toLocaleDateString()}
                    </div>
                    <p className="text-gray-600 mb-4">
                      {post.frontMatter.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.frontMatter.tags.map((tag) => (
                        <span 
                          key={tag}
                          className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center">
                      <Image
                        src={post.frontMatter.author.image || "/placeholder.svg"}
                        alt={post.frontMatter.author.name}
                        width={32}
                        height={32}
                        className="rounded-full mr-2"
                      />
                      <span className="text-sm text-gray-600">{post.frontMatter.author.name}</span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      )}
    </>
  )
}

