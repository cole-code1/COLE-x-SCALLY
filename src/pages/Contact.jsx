import { Instagram, MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-neutral-100">
      {/* Hero */}
      <section className="bg-black text-white py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Get in Touch
          </h1>
          <p className="text-neutral-300 max-w-xl mx-auto">
            Orders, collaborations, or questions — reach us directly.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid sm:grid-cols-2 gap-10">

          {/* WhatsApp */}
          <a
            href="https://wa.me/254700401188"
            target="_blank"
            className="group bg-white rounded-2xl p-8 shadow-lg transition-all hover:-translate-y-2"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-green-600 text-white p-3 rounded-xl">
                <MessageCircle size={28} />
              </div>
              <h3 className="text-2xl font-bold">WhatsApp</h3>
            </div>
            <p className="text-neutral-600 mb-6">
              Fastest way to order and pay via M-Pesa.
            </p>
            <span className="font-semibold text-green-600 group-hover:underline">
              Chat with us →
            </span>
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com/CxStreetwear"
            target="_blank"
            className="group bg-white rounded-2xl p-8 shadow-lg transition-all hover:-translate-y-2"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-pink-600 text-white p-3 rounded-xl">
                <Instagram size={28} />
              </div>
              <h3 className="text-2xl font-bold">Instagram</h3>
            </div>
            <p className="text-neutral-600 mb-6">
              Follow drops, updates, and street culture visuals.
            </p>
            <span className="font-semibold text-pink-600 group-hover:underline">
              Visit Instagram →
            </span>
          </a>

        </div>
      </section>

      {/* Footer CTA */}
      <section className="pb-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Culture Meets Street Credibility</h2>
        <p className="text-neutral-600 mb-8">
          Built for everyday movement.
        </p>
      </section>
    </div>
  )
}
