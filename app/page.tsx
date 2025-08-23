
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
                  "Welcome to my thought shithole"]}
        typeSpeed={100}
        backSpeed={100}
        backDelay={400}
        />
        
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
