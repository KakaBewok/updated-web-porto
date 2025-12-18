"use client";

// import { useEffect, useState } from "react";
// import { Menu, X } from "lucide-react";

// function Navbar() {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const navLinks = [
//     { name: "Profile", href: "#profile" },
//     { name: "Portfolio", href: "#portfolio" },
//     { name: "Experience", href: "#experience" },
//     { name: "Education", href: "#education" },
//     { name: "Contact", href: "#contact" },
//   ];

//   return (
//     <nav
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//         isScrolled ? "bg-white shadow-lg" : "bg-white/90 backdrop-blur-md"
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           <a
//             href="#profile"
//             className="text-xl font-bold bg-linear-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent"
//           >
//             Noprizal
//           </a>

//           <div className="hidden md:flex space-x-8">
//             {navLinks.map((link) => (
//               <a
//                 key={link.name}
//                 href={link.href}
//                 className="text-gray-700 hover:text-gray-900 transition-colors font-medium"
//               >
//                 {link.name}
//               </a>
//             ))}
//           </div>

//           <button
//             className="md:hidden p-2"
//             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//           >
//             {isMobileMenuOpen ? (
//               <X className="w-6 h-6 text-gray-900" />
//             ) : (
//               <Menu className="w-6 h-6 text-gray-900" />
//             )}
//           </button>
//         </div>
//       </div>

//       {isMobileMenuOpen && (
//         <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
//           <div className="px-4 py-4 space-y-3">
//             {navLinks.map((link) => (
//               <a
//                 key={link.name}
//                 href={link.href}
//                 onClick={() => setIsMobileMenuOpen(false)}
//                 className="block text-gray-700 hover:text-gray-900 transition-colors font-medium py-2"
//               >
//                 {link.name}
//               </a>
//             ))}
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// }

// export default Navbar;

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg" : "bg-white/90 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a
            href="#profile"
            className="text-xl font-bold bg-linear-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent"
          >
            Noprizal
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-gray-900 transition-colors font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Hamburger Button */}
          <button
            className="relative md:hidden w-10 h-10 flex items-center justify-center"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          >
            {/* Menu Icon */}
            <Menu
              className={`
                absolute w-6 h-6 text-gray-900 transition-all duration-500
                ${
                  isMobileMenuOpen
                    ? "opacity-0 scale-75 rotate-90"
                    : "opacity-100 scale-100 rotate-0"
                }
              `}
            />

            {/* Close Icon */}
            <X
              className={`
                absolute w-6 h-6 text-gray-900 transition-all duration-500
                ${
                  isMobileMenuOpen
                    ? "opacity-100 scale-100 rotate-0"
                    : "opacity-0 scale-75 -rotate-90"
                }
              `}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu (Smooth Animation) */}
      <div
        className={`
          md:hidden overflow-hidden transition-all duration-500 ease-in-out
          ${
            isMobileMenuOpen
              ? "max-h-96 opacity-100 translate-y-0"
              : "max-h-0 opacity-0 -translate-y-2"
          }
        `}
      >
        <div className="bg-white border-t border-gray-200 shadow-lg px-4 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-gray-700 hover:text-gray-900 transition-colors font-medium py-2"
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
