import { Instagram, Mail } from "lucide-react";
import { contactInfo } from "../data/data";

function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-gray-900 text-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Let&apos;s Work Together
        </h2>
        <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto">
          I&apos;m always open to discussing new projects, creative ideas, or
          opportunities to be part of your vision. Feel free to reach out!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={`mailto:${contactInfo.email}`}
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-gray-900 rounded-xl hover:shadow-2xl hover:scale-105 transition-all text-lg font-bold"
          >
            <Mail className="w-5 h-5" />
            Send Email
          </a>

          <a
            href={contactInfo.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-linear-to-r from-pink-500 to-rose-500 text-white rounded-xl hover:shadow-2xl hover:scale-105 transition-all text-lg font-bold border-2 border-white"
          >
            <Instagram className="w-5 h-5" />
            Instagram
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
