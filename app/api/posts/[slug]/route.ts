import { NextRequest } from 'next/server'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  const { slug } = params
  const contentDirectory = path.join(process.cwd(), 'app/blog/content')
  const filePath = path.join(contentDirectory, `${slug}.mdx`)

  if (!fs.existsSync(filePath)) {
    return new Response(JSON.stringify({ error: 'Post not found' }), {
      status: 404,
      headers: { 'Content-Type': 'application/json' },
    })
  }

  const fileContent = fs.readFileSync(filePath, 'utf8')
  const { content, data } = matter(fileContent)

  return new Response(JSON.stringify({ content, frontMatter: data }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  })
}

