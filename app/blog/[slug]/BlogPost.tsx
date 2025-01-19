'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Clock, Calendar, ArrowRight } from 'lucide-react'
import { motion, HTMLMotionProps } from 'framer-motion'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'

interface Author {
  name: string
  image: string
  bio: string
}

interface PostData {
  title: string
  date: string
  description: string
  thumbnail: string
  author: Author
  readingTime: string
  tags: string[]
}

interface BlogPostProps {
  slug: string
}

const components = {
  Image: (props: React.ComponentProps<typeof Image>) => (
    <div className="relative w-full aspect-video my-8">
      <Image
        {...props}
        alt={props.alt || ''}
        fill
        className="object-cover rounded-lg"
      />
    </div>
  ),
  h1: (props: HTMLMotionProps<'h1'>) => (
    <motion.h1 
      {...props} 
      className="text-4xl font-bold my-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    />
  ),
  h2: (props: HTMLMotionProps<'h2'>) => (
    <motion.h2 
      {...props} 
      className="text-3xl font-semibold my-5"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    />
  ),
  p: (props: HTMLMotionProps<'p'>) => (
    <motion.p 
      {...props} 
      className="my-4 text-gray-700 leading-relaxed"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    />
  ),
  code: (props: HTMLMotionProps<'code'>) => (
    <motion.code 
      {...props} 
      className="bg-gray-100 rounded px-2 py-1 text-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    />
  ),
}

export default function BlogPost({ slug }: BlogPostProps) {
  const [postData, setPostData] = useState<PostData | null>(null)
  const [content, setContent] = useState<MDXRemoteSerializeResult | null>(null)

  useEffect(() => {
    const fetchPost = async () => {
      const response = await fetch(`/api/posts/${slug}`)
      const data = await response.json()
      setPostData(data.frontMatter)
      const mdxSource = await serialize(data.content)
      setContent(mdxSource)
    }

    fetchPost()
  }, [slug])

  if (!postData || !content) {
    return <div>Loading...</div>
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen"
    >
      <article className="max-w-4xl mx-auto px-4 py-8">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Link 
            href="/blog" 
            className="text-blue-600 hover:text-blue-800 mb-8 inline-flex items-center gap-2 group"
          >
            <ArrowRight className="w-4 h-4 transform rotate-180 transition-transform group-hover:-translate-x-1" />
            Back to Blog
          </Link>
        </motion.div>
        
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-lg shadow-lg overflow-hidden"
        >
          {/* Hero Image */}
          <div className="relative aspect-[2/1]">
            <Image
              src={postData.thumbnail || "/placeholder.svg"}
              alt={postData.title}
              fill
              className="object-cover"
            />
          </div>
          
          <div className="p-8">
            {/* Tags */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-2 mb-4"
            >
              {postData.tags.map(tag => (
                <span 
                  key={tag}
                  className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
            
            {/* Title */}
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-4xl font-bold mb-4"
            >
              {postData.title}
            </motion.h1>
            
            {/* Meta Information */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-6 mb-8 text-gray-600"
            >
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {new Date(postData.date).toLocaleDateString()}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {postData.readingTime}
              </div>
            </motion.div>
            
            {/* Author */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg mb-8"
            >
              <div className="relative w-16 h-16 rounded-full overflow-hidden">
                <Image
                  src={postData.author.image || "/placeholder.svg"}
                  alt={postData.author.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-semibold">{postData.author.name}</h3>
                <p className="text-sm text-gray-600">{postData.author.bio}</p>
              </div>
            </motion.div>
            
            {/* Content */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="prose prose-lg max-w-none"
            >
              <MDXRemote {...content} components={components} />
            </motion.div>
          </div>
        </motion.div>
      </article>
    </motion.div>
  )
}

