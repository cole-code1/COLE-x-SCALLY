import { NavLink } from "react-router-dom"
import { ShoppingBag, Instagram, MessageCircle } from "lucide-react"
import logo from '../assets/images/logo.png' // proper import

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Brand / Logo */}
        <NavLink
          to="/"
        >
          <img src={logo} alt="YOUR BRAND Logo" className="h-23 w-36" />
        </NavLink>

        {/* Links */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
          {[
            { to: "/", label: "Home" },
            { to: "/shop", label: "Shop" },
            { to: "/about", label: "About" },
            { to: "/contact", label: "Contact" },
          ].map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `relative px-2 py-1 font-semibold cursor-pointer transition-all duration-300 text-neutral-600 hover:text-gray-800 hover:shadow-lg hover:translate-y-[-2px] hover:scale-105 ${isActive ? 'text-black' : ''}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Icons / CTA */}
        <div className="flex items-center gap-3">
          {/* Shop Icon */}
          <NavLink
            to="/shop"
            className="group p-2 rounded-full transition hover:bg-black hover:text-white"
          >
            <ShoppingBag className="w-5 h-5 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6" />
          </NavLink>

          {/* Instagram Icon */}
          <a
            href="https://instagram.com/yourbrand"
            target="_blank"
            className="group p-2 rounded-full transition hover:bg-pink-600 hover:text-white"
          >
            <Instagram className="w-5 h-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" />
          </a>

          {/* WhatsApp Icon */}
          <a
            href="https://wa.me/254700401188"
            target="_blank"
            className="group p-2 rounded-full transition hover:bg-green-600 hover:text-white"
          >
            <MessageCircle className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
          </a>
        </div>
      </div>
    </nav>
  )
}