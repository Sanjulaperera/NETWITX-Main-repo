import BlogPost from './BlogPost'

interface PageProps {
  params: {
    slug: string
  }
}

export default function BlogPostPage({ params }: PageProps) {
  return <BlogPost slug={params.slug} />
}

