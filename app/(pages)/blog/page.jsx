import Link from 'next/link'
import { getAllPosts } from '@/lib/markdown'

export default function BlogListPage() {
  const posts = getAllPosts()

  return (
    <div className="prose text-black mx-auto py-10">
      <h1>Blog</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}> 
            <Link href={`/blog/${post.slug}`}>
              <p className='text-black'>
                {post.title} –
              </p>
              <img src={post.image} alt="" />
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
