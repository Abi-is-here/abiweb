import Link from 'next/link'
import { formatDate, getBlogPosts } from 'app/blog/utils'

export function BlogPosts() {
  let allBlogs = getBlogPosts()

  return (
    <div>
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1
          }
          return 1
        })
        .map((post) => (
          <div key={post.slug}>
          <Link
            className="flex flex-col space-y-1 "
            href={`/blog/${post.slug}`}
          >
            <div className="w-full flex flex-row md:flex-row space-x-0 md:space-x-2">
              <p className="text-neutral-900 dark:text-neutral-100 tracking-tight hover:bg-violet-800 underline">
                {post.metadata.title} 
                
              </p>
              <div className="text-neutral-600">
                {formatDate(post.metadata.publishedAt, false)}
                </div>
              </div>
          </Link>
          <div className="mb-4 text-neutral-400">
            {post.metadata.summary}
          </div>
          </div>
        ))}
    </div>
  )
}
