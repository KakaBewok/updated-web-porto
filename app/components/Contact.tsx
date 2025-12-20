import React from "react";
import {
  Mail,
  Instagram,
  Linkedin,
  Github,
  Send,
  Sparkles,
} from "lucide-react";

const contactInfo = {
  email: "noprizal@example.com",
  instagram: "https://instagram.com/noprizal",
  linkedin: "https://linkedin.com/in/noprizal",
  github: "https://github.com/noprizal",
};

const Contact = () => {
  const socialLinks = [
    {
      name: "Instagram",
      icon: Instagram,
      href: contactInfo.instagram,
      color: "from-purple-500 via-pink-500 to-rose-500",
      hoverColor: "hover:shadow-pink-500/30",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: contactInfo.linkedin,
      color: "from-blue-500 to-blue-600",
      hoverColor: "hover:shadow-blue-500/30",
    },
    {
      name: "GitHub",
      icon: Github,
      href: contactInfo.github,
      color: "from-gray-700 to-gray-900",
      hoverColor: "hover:shadow-gray-500/30",
    },
  ];

  return (
    <div className=" bg-gray-50">
      <section
        id="contact"
        className="relative py-20 px-4 bg-white text-gray-900 overflow-hidden"
      >
        {/* Animated Background Elements */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-200 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-200 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>

        <div className="max-w-5xl mx-auto relative z-10">
          {/* Header with Icon */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-linear-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              Let's Work Together
            </h2>

            <p className="text-lg md:text-xl text-gray-600 mb-4 max-w-2xl mx-auto leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision. Feel free to reach out!
            </p>

            <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>Available for freelance work</span>
            </div>
          </div>

          {/* Primary CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href={`mailto:${contactInfo.email}`}
              className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-gray-900 text-white rounded-xl font-bold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-lg"
            >
              <div className="absolute inset-0 bg-linear-to-r from-pink-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Mail className="w-5 h-5 relative z-10" />
              <span className="relative z-10">Send Email</span>
              <Send className="w-4 h-4 relative z-10 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all" />
            </a>

            <a
              href={contactInfo.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-linear-to-r from-pink-500 via-purple-500 to-rose-500 text-white rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-lg"
            >
              <Instagram className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              <span>Instagram</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
