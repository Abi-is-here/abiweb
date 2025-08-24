
import { BlogPosts } from 'app/components/posts'
import { RotatingText } from './components/rotatingText'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        A美
      </h1>
      <pre>
      </pre>
      <p className="mb-4">
        こんにちは! I'm Abi, a walking project 
      </p>
      <RotatingText
        options={["I am that basic non binary linux enthusiast that spends too much time online",
                  "Pleaase point the antennas",
                  "Welcome to my thought shithole",
                  "Yes I watch anime",
                  "I am an ever-expanding weed, constantly finding new things to grow into",
                  "お腹すいた"]}
        typeSpeed={60}
        backSpeed={50}
        backDelay={500}
        />
        
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
