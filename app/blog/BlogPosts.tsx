import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

interface Author {
  name: string
  image: string
  bio: string
}

export interface Post {
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

export async function getBlogPosts(): Promise<Post[]> {
  const contentDirectory = path.join(process.cwd(), 'app/blog/content')
  
  if (!fs.existsSync(contentDirectory)) {
    fs.mkdirSync(contentDirectory, { recursive: true })
  }
  
  const files = fs.readdirSync(contentDirectory)
  
  const posts: Post[] = files
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => {
      const filePath = path.join(contentDirectory, file)
      const fileContent = fs.readFileSync(filePath, 'utf8')
      const { data } = matter(fileContent)
      
      return {
        slug: file.replace('.mdx', ''),
        frontMatter: data as Post['frontMatter'],
      }
    })
    .sort((a, b) => 
      new Date(b.frontMatter.date).getTime() - new Date(a.frontMatter.date).getTime()
    )

  return posts
}

