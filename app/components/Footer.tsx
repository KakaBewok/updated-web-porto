import React from "react";
import { Mail, Instagram, Github, Linkedin, Heart } from "lucide-react";
import { socialLinks } from "../data/data";

const Footer = () => {
  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <div className=" bg-gray-950 flex flex-col">
      {/* Footer Component */}
      <footer className="relative bg-gradient-to-b from-gray-900 to-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Footer Content */}
          <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand Section */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg flex items-center justify-center font-bold text-xl">
                  N
                </div>
                <span className="text-2xl font-bold">Noprizal</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Creating innovative digital solutions and transforming ideas
                into reality. Let's build something amazing together.
              </p>
            </div>

            {/* Quick Links */}
            <div className="md:mx-auto">
              <h3 className="text-lg font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
                Quick Links
              </h3>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-sm flex items-center group"
                    >
                      <span className="w-0 group-hover:w-2 h-0.5 bg-pink-500 transition-all duration-200 mr-0 group-hover:mr-2"></span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & Social */}
            <div className="md:ml-auto">
              <h3 className="text-lg font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
                Connect With Me
              </h3>
              <div className="flex space-x-3 mb-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className={`w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-gray-700 ${social.color}`}
                    >
                      <Icon size={20} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 py-6">
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0">
              <p className="text-gray-400 text-sm">
                © 2024 Noprizal. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
