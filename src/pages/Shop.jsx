import ProductCard from "../components/ProductCard"
import products from "../data/products"

export default function Shop() {
  return (
    <div className="min-h-screen bg-neutral-100">
      {/* Shop Header */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-14">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
          SHOP THE DROP
        </h2>
        <p className="text-neutral-600 max-w-xl">
          Culture meets street credibility. Limited pieces only.
        </p>
      </section>

      {/* Products */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          {products.map(product => (
            <div key={product.id} className="relative">
              {/* Graffiti Name */}
              <span className="absolute -top-6 left-2 z-10 rotate-[-8deg] bg-pink-600 text-white text-xs font-extrabold px-4 py-1 rounded-lg shadow-xl tracking-widest">
                DROP
              </span>

              {/* Floating Product */}
              <div className="transition-transform duration-00 hover:-translate-y-4">
                <ProductCard product={product} />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
