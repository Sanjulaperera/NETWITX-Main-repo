import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export async function GET() {
  const contentDirectory = path.join(process.cwd(), 'app/blog/content')
  
  if (!fs.existsSync(contentDirectory)) {
    fs.mkdirSync(contentDirectory, { recursive: true })
  }
  
  const files = fs.readdirSync(contentDirectory)
  
  const posts = files
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => {
      const filePath = path.join(contentDirectory, file)
      const fileContent = fs.readFileSync(filePath, 'utf8')
      const { data } = matter(fileContent)
      
      return {
        slug: file.replace('.mdx', ''),
        frontMatter: data,
      }
    })
    .sort((a, b) => 
      new Date(b.frontMatter.date).getTime() - new Date(a.frontMatter.date).getTime()
    )

  return NextResponse.json(posts)
}

