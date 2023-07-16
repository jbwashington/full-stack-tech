import Link from 'next/link'

export default function About() {
  return (
    <div className="p-5">
    <h2 className="text-3xl font-semibold mb-4">About Full Stack Tech LLC</h2>
    <p className="px-4 lead">
    Full Stack Tech is a proud 100% black-owned business. We value gender, cultural and neurological diversity and inclusivity, not just because it's the right thing to do, but because we believe it makes us stronger and more competetive. Our team is comprised of an amazing mix of talent from all around the world, and we actively work hard to foster a culture of safety and respect.
    </p>
    <p className="px-4 mt-4 lead"> We're always on the lookout for people who see it how it could be instead of how it is. If you're sharp, you should <Link className="text-darkgray-500 underline transition duration-300 ease-in-out"href="/careers">put in an application</Link>.
    </p>
    </div>
  )
}

