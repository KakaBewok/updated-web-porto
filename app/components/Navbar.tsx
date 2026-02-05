"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Profile", href: "#profile" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? "bg-white border-b-8 border-black shadow-[0_8px_0px_0px_rgba(0,0,0,1)]"
          : "bg-white border-b-4 border-black"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a
            href="#profile"
            className="text-2xl font-black text-black uppercase tracking-tight hover:text-purple-600 transition-colors"
          >
            Rizal /{'>'}
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-2 text-black font-black uppercase text-sm border-4 border-transparent hover:border-black hover:bg-yellow-300 transition-all duration-150"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Hamburger Button */}
          <button
            className="relative md:hidden w-12 h-12 flex items-center justify-center border-4 border-black bg-yellow-300 hover:bg-pink-400 transition-colors"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          >
            {/* Menu Icon */}
            <Menu
              className={`
                absolute w-7 h-7 text-black transition-all duration-300
                ${
                  isMobileMenuOpen
                    ? "opacity-0 scale-50 rotate-90"
                    : "opacity-100 scale-100 rotate-0"
                }
              `}
            />

            {/* Close Icon */}
            <X
              className={`
                absolute w-7 h-7 text-black transition-all duration-300
                ${
                  isMobileMenuOpen
                    ? "opacity-100 scale-100 rotate-0"
                    : "opacity-0 scale-50 -rotate-90"
                }
              `}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`
          md:hidden overflow-hidden transition-all duration-300 ease-in-out
          ${
            isMobileMenuOpen
              ? "max-h-96 opacity-100"
              : "max-h-0 opacity-0"
          }
        `}
      >
        <div className="bg-white border-t-4 border-black px-4 py-4 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-black font-black uppercase text-sm py-3 px-4 border-4 border-black bg-cyan-300 hover:bg-pink-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
