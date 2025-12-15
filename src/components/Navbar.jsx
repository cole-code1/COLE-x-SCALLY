import { NavLink } from "react-router-dom"
import { ShoppingBag, Instagram, MessageCircle, Menu, X } from "lucide-react"
import { useState } from "react"
import logo from "../assets/images/logo.png"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const links = [
    { to: "/", label: "Home" },
    { to: "/shop", label: "Shop" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ]

  return (
    <>
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white border-b">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>

          {/* Logo */}
          <NavLink to="/">
            <img src={logo} alt="YOUR BRAND Logo" className="h-23 w-36" />
          </NavLink>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
            {links.map(link => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `relative px-2 py-1 font-semibold transition-all duration-300
                  text-neutral-600 hover:text-gray-800
                  hover:shadow-lg hover:-translate-y-[2px] hover:scale-105
                  ${isActive ? "text-black" : ""}`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Icons */}
          <div className="flex items-center gap-3">
            <NavLink
              to="/shop"
              className="group p-2 rounded-full transition hover:bg-black hover:text-white"
            >
              <ShoppingBag className="w-5 h-5 group-hover:scale-110" />
            </NavLink>

            <a
              href="https://instagram.com/yourbrand"
              target="_blank"
              className="group p-2 rounded-full transition hover:bg-pink-600 hover:text-white"
            >
              <Instagram className="w-5 h-5 group-hover:scale-110" />
            </a>

            <a
              href="https://wa.me/254700401188"
              target="_blank"
              className="group p-2 rounded-full transition hover:bg-green-600 hover:text-white"
            >
              <MessageCircle className="w-5 h-5 group-hover:scale-110" />
            </a>
          </div>
        </div>
      </nav>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white z-50 transform transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="p-5 flex items-center justify-between border-b">
          <img src={logo} alt="logo" className="w-28" />
          <button onClick={() => setOpen(false)}>
            <X className="w-6 h-6" />
          </button>
        </div>

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
      </aside>
    </>
  )
}
