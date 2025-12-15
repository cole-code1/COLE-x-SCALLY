 import { NavLink } from "react-router-dom"
import { Instagram, MessageCircle, Mail } from "lucide-react"
import logo from "../assets/images/logo.png"

export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-white">
      <div className="max-w-6xl mx-auto px-6 py-14 grid gap-10 md:grid-cols-4">

        {/* Brand */}
        <div className="space-y-4">
          <img src={logo} alt="Brand Logo" className="w-32 invert" />
          <p className="text-sm text-white/70 leading-relaxed">
            Premium fashion crafted with purpose. Designed for confidence,
            comfort, and everyday elegance.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="font-semibold mb-4">Navigate</h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li><NavLink to="/" className="hover:text-white">Home</NavLink></li>
            <li><NavLink to="/shop" className="hover:text-white">Shop</NavLink></li>
            <li><NavLink to="/about" className="hover:text-white">About</NavLink></li>
            <li><NavLink to="/contact" className="hover:text-white">Contact</NavLink></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="font-semibold mb-4">Support</h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li>Shipping & Returns</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>FAQs</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-4">Connect</h4>
          <div className="flex gap-4 mb-4">
            <a
              href="https://instagram.com/yourbrand"
              target="_blank"
              className="p-3 rounded-full bg-white/10 hover:bg-pink-600 transition"
            >
              <Instagram />
            </a>
            <a
              href="https://wa.me/254700401188"
              target="_blank"
              className="p-3 rounded-full bg-white/10 hover:bg-green-600 transition"
            >
              <MessageCircle />
            </a>
            <a
              href="mailto:info@yourbrand.com"
              className="p-3 rounded-full bg-white/10 hover:bg-blue-600 transition"
            >
              <Mail />
            </a>
          </div>
          <p className="text-sm text-white/60">info@yourbrand.com</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-4 text-center text-sm text-white/50">
        © {new Date().getFullYear()} Your Brand. All rights reserved.
      </div>
    </footer>
  )
}
