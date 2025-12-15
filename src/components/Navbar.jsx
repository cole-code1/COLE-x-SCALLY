import { NavLink } from "react-router-dom"
import {
  ShoppingBag,
  Instagram,
  MessageCircle,
  Menu,
  X
} from "lucide-react"
import { useState, useRef } from "react"
import logo from "../assets/images/logo.png"

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const touchStartX = useRef(0)

  const links = [
    { to: "/", label: "Home" },
    { to: "/shop", label: "Shop" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ]

  // Swipe handlers
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e) => {
    const deltaX = e.changedTouches[0].clientX - touchStartX.current
    if (deltaX < -60) setOpen(false) // swipe left to close
  }

  return (
    <>
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white border-b">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

          {/* Mobile menu */}
          <button className="md:hidden" onClick={() => setOpen(true)}>
            <Menu className="w-6 h-6" />
          </button>

          {/* Logo */}
          <NavLink to="/">
            <img src={logo} alt="Brand Logo" className="h-23 w-36" />
          </NavLink>

          {/* Desktop links */}
          <div className="hidden md:flex space-x-8 text-sm font-medium">
            {links.map(link => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `font-semibold transition
                  ${isActive ? "text-black" : "text-neutral-600 hover:text-black"}`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Icons */}
          <div className="flex gap-3">
            <ShoppingBag className="w-5 h-5" />
            <Instagram className="w-5 h-5" />
            <MessageCircle className="w-5 h-5" />
          </div>
        </div>
      </nav>

      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300
        ${open ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        onClick={() => setOpen(false)}
      />

      {/* Drawer Sidebar */}
      <aside
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        className={`fixed top-0 left-0 h-full w-72 bg-white z-50
        transform transition-transform duration-300 ease-out
        ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b">
          <img src={logo} className="w-28" />
          <button onClick={() => setOpen(false)}>
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Nav links */}
        <div className="flex flex-col p-6 space-y-4 text-lg font-medium">
          {links.map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className="text-neutral-700 hover:text-black transition"
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Bottom Social Icons */}
        <div className="absolute bottom-6 left-0 w-full px-6">
          <div className="flex justify-around border-t pt-4">
            <a
              href="https://instagram.com/yourbrand"
              target="_blank"
              className="p-3 rounded-full bg-pink-100 text-pink-600"
            >
              <Instagram />
            </a>

            <a
              href="https://wa.me/254700401188"
              target="_blank"
              className="p-3 rounded-full bg-green-100 text-green-600"
            >
              <MessageCircle />
            </a>

            <NavLink
              to="/shop"
              onClick={() => setOpen(false)}
              className="p-3 rounded-full bg-neutral-100 text-black"
            >
              <ShoppingBag />
            </NavLink>
          </div>
        </div>
      </aside>
    </>
  )
}
