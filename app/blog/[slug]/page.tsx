import BlogPost from './BlogPost'

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function BlogPostPage(props: PageProps) {
  const params = await props.params;
  return <BlogPost slug={params.slug} />
}

