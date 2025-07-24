import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        My Portfolio
      </h1>
      <p className="mb-4">
        こんにちは! I'm Abi, a walking project 
        <br/>
        Welcome to this place, whatever it is, whatever is meant to be.
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
