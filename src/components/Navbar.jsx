import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="bg-gradient-to-r from-black via-gray-900 to-black text-white
"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-white">
            allgrab<span className="text-blue-600">.in</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <Link to="/" className="hover:text-blue-600">
              Home
            </Link>
            <Link to="/about" className="hover:text-blue-600">
              about
            </Link>
            <Link to="/PrivacyPolicy" className="hover:text-blue-600">
              Privacy-Policy
            </Link>
            <Link to="/contact" className="hover:text-blue-600">
              Contact
            </Link>
          </div>

          {/* Mobile Button */}
          <button className="md:hidden" onClick={() => setOpen(!open)}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black shadow-lg">
          <Link
            onClick={() => setOpen(false)}
            className="block px-4 py-3 border-b"
            to="/"
          >
            Home
          </Link>
          <Link
            onClick={() => setOpen(false)}
            className="block px-4 py-3 border-b"
            to="/about"
          >
            About
          </Link>
          <Link
            onClick={() => setOpen(false)}
            className="block px-4 py-3 border-b"
            to="/PrivacyPolicy"
          >
            Privacy-Policy
          </Link>
          <Link
            onClick={() => setOpen(false)}
            className="block px-4 py-3"
            to="/contact"
          >
            Contact-us
          </Link>
        </div>
      )}
    </nav>
  );
}
