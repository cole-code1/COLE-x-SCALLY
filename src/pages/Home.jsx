import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-100">
      <section className="max-w-6xl mx-auto px-6 py-28 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
          CULTURE MEETS STREET CREDIBILITY
        </h1>

        <p className="text-neutral-600 text-lg mb-10 max-w-xl mx-auto">
          Premium streetwear built for everyday movement.
        </p>

        {/* Shop Now Button */}
        <Link
          to="/shop"
          className="group inline-flex items-center gap-3 bg-black text-white px-8 py-4 rounded-full font-bold tracking-wide transition hover:gap-5"
        >
          Shop Now
          <ArrowRight
            className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2"
          />
        </Link>
      </section>
    </div>
  )
}
