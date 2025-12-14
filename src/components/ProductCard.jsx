export default function ProductCard({ product }) {
  const phone = "254700401188" // 👈 replace with your number

  const message = encodeURIComponent(
    `Hello, I want to order:\n\nProduct: ${product.name}\nPrice: KES ${product.price}`
  )

  return (
    <div className="bg-white rounded-2xl shadow p-4">
      <img src={product.image} className="rounded-xl mb-4" />
      <h3 className="font-medium">{product.name}</h3>
      <p className="text-neutral-600">KES {product.price}</p>

      <a
        href={`https://wa.me/${phone}?text=${message}`}
        target="_blank"
        className="mt-3 block text-center bg-green-600 text-white py-2 rounded-xl"
      >
        Order via WhatsApp
      </a>
    </div>
  )
}
