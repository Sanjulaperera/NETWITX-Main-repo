import { Suspense } from 'react'
import Link from 'next/link'
import { getBlogPosts } from './BlogPosts'
import BlogList from './BlogList'
import { MainNav } from '@/components/mainHeader'

export const metadata = {
  title: 'Blog | NETWITX',
  description: 'Read the latest articles on web development and technology',
}

export default async function BlogPage() {
  const posts = await getBlogPosts()

  return (
    <div className="min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            Blog Posts
          </h1>
          <Link 
            href="/"
            className="text-green-600 hover:text-breen-800 transition-colors duration-200"
          >
            ← Back to Home
          </Link>
        </div>

        <Suspense fallback={<div>Loading...</div>}>
          <BlogList initialPosts={posts} />
        </Suspense>
      </div>
    </div>
  )
}

