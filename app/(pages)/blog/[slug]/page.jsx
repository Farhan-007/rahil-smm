import { getPostBySlug, getAllPosts } from '@/lib/markdown'

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  return (
    <article className="prose text-black mx-auto py-10">
      <h1 className='text-black'>{post.frontmatter.title}</h1>
      <p className="text-gray-500 mb-4">
        {post.frontmatter.description || 'No description available.'}
      </p>
      <img src={post.frontmatter.image} alt="" />
      <p className="text-sm">
        {new Date(post.frontmatter.date).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })}
      </p>
      <div className='prose-invert' dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
    </article>
  )
}
