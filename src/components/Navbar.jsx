import { NavLink, useLocation } from "react-router-dom"
import {
  ShoppingBag,
  Instagram,
  MessageCircle,
  Menu,
  X
} from "lucide-react"
import { useEffect, useRef, useState } from "react"
import logo from "../assets/images/logo.png"

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const touchStartX = useRef(0)

  const links = [
    { to: "/", label: "Home" },
    { to: "/shop", label: "Shop" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ]

  /* Auto close on route change */
  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  /* Swipe to close (right drawer) */
  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX
  }

  const onTouchEnd = (e) => {
    const deltaX = e.changedTouches[0].clientX - touchStartX.current
    if (deltaX > 70) setOpen(false)
  }

  return (
    <>
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 bg-white border-b">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

          {/* Logo */}
          <NavLink to="/">
            <img
              src={logo}
              alt="Brand Logo"
              className="h-12 w-auto glow-light"
            />
          </NavLink>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8 text-sm font-semibold">
            {links.map(link => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `relative px-2 py-1 transition
                  ${isActive
                    ? "text-black after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-black"
                    : "text-neutral-600 hover:text-black"}`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu */}
          <button
            className="md:hidden p-2"
            onClick={() => setOpen(true)}
            aria-label="Open Menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* BACKDROP */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300
        ${open ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        onClick={() => setOpen(false)}
      />

      {/* RIGHT DRAWER */}
      <aside
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        className={`fixed top-0 right-0 h-full w-72 z-50
        bg-neutral-950 text-white
        transform transition-transform duration-500
        [transition-timing-function:cubic-bezier(.22,1,.36,1)]
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-white/10">
          <img
            src={logo}
            alt="Brand Logo"
            className="w-28 invert glow-dark"
          />
          <button onClick={() => setOpen(false)} aria-label="Close Menu">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Links */}
        <div className="flex flex-col p-6 space-y-4 text-lg font-medium">
          {links.map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `px-4 py-2 rounded-lg transition
                ${isActive
                  ? "bg-white text-black"
                  : "text-white/80 hover:bg-white/10"}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Bottom Icons */}
        <div className="absolute bottom-6 w-full px-6">
          <div className="flex justify-around border-t border-white/10 pt-4">
            <a
              href="https://instagram.com/yourbrand"
              target="_blank"
              className="p-3 rounded-full bg-pink-600/20 text-pink-400"
            >
              <Instagram />
            </a>

            <a
              href="https://wa.me/254700401188"
              target="_blank"
              className="p-3 rounded-full bg-green-600/20 text-green-400"
            >
              <MessageCircle />
            </a>

            <NavLink
              to="/shop"
              className="p-3 rounded-full bg-white/10 text-white"
            >
              <ShoppingBag />
            </NavLink>
          </div>
        </div>
      </aside>
    </>
  )
}
