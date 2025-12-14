export default function About() {
  return (
    <div className="min-h-screen bg-neutral-100">
      {/* Hero */}
      <section className="bg-black text-white py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Our Brand</h1>
          <p className="text-neutral-300 text-lg max-w-2xl mx-auto">
            Where culture meets street credibility.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-6">Our Story</h2>
        <p className="text-neutral-700 leading-relaxed mb-6">
          Our brand was born from the streets — inspired by everyday life, local culture,
          and the raw confidence of people who move with purpose. We believe clothing is
          more than fabric; it’s identity, attitude, and self‑expression.
        </p>
        <p className="text-neutral-700 leading-relaxed">
          Each piece is designed to represent the balance between cultural roots and modern
          street style. This is where heritage blends with edge. Where culture meets street credibility.
        </p>
      </section>

      {/* Values */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">What We Stand For</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl shadow-sm">
              <h3 className="font-semibold text-xl mb-3">Culture</h3>
              <p className="text-neutral-600">
                Rooted in real stories, real people, and the energy of the streets that shape us.
              </p>
            </div>

            <div className="p-6 rounded-2xl shadow-sm">
              <h3 className="font-semibold text-xl mb-3">Quality</h3>
              <p className="text-neutral-600">
                Premium materials and attention to detail — made to be worn, lived in, and respected.
              </p>
            </div>

            <div className="p-6 rounded-2xl shadow-sm">
              <h3 className="font-semibold text-xl mb-3">Credibility</h3>
              <p className="text-neutral-600">
                No hype without substance. Everything we drop represents authenticity and confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Wear the Culture</h2>
        <p className="text-neutral-600 mb-8">Streetwear built for everyday movement.</p>
        <a
          href="/shop"
          className="inline-block bg-black text-white px-8 py-3 rounded-full"
        >
          Shop the Collection
        </a>
      </section>
    </div>
  )
}
