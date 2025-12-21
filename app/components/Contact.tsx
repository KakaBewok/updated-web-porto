import { Mail, Instagram, Linkedin, Github, Send } from "lucide-react";
import { socialLinks } from "../data/data";

const Contact = () => {
  const findSocialLink = (label: string) => {
    return socialLinks.find((link) => link.label === label)?.href || "#";
  };

  return (
    <div className=" bg-gray-50">
      <section
        id="contact"
        className="relative py-15 px-4 bg-white text-gray-900 overflow-hidden"
      >
        {/* Animated Background Elements */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-green-200 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>

        <div className="max-w-5xl mx-auto relative z-10">
          {/* Header with Icon */}
          <div className="text-center mb-12">
            <h2 className="pb-1 text-4xl md:text-5xl font-bold mb-4 bg-linear-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">
              Let&apos;s Work Together
            </h2>

            <p className="text-sm md:text-lg text-gray-600 mb-4 max-w-2xl mx-auto leading-relaxed">
              I&apos;m always open to discussing new projects, creative ideas,
              or opportunities to be part of your vision. Feel free to reach
              out!
            </p>

            <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>Available for freelance work</span>
            </div>
          </div>

          {/* Primary CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <a
              href={findSocialLink("Email")}
              className="group relative inline-flex items-center justify-center gap-3 px-6 py-4 bg-gray-900 text-white rounded-xl font-bold text-md overflow-hidden transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <div className="absolute inset-0 bg-linear-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Mail className="w-5 h-5 relative z-10" />
              <span className="relative z-10">Send Email</span>
              <Send className="w-4 h-4 relative z-10 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all" />
            </a>

            <a
              href={findSocialLink("Instagram")}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 px-6 py-4 bg-linear-to-r from-pink-500 via-purple-500 to-rose-500 text-white rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <Instagram className="w-5 h-5" />
              <span>Instagram</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
