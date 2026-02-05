import { Mail, Instagram, Linkedin, Github, Send } from "lucide-react";
import { socialLinks } from "../data/data";

const Contact = () => {
  const findSocialLink = (label: string) => {
    return socialLinks.find((link) => link.label === label)?.href || "#";
  };

  return (
    <div className="bg-white">
      <section
        id="contact"
        className="relative py-20 px-4 bg-lime-300 text-black overflow-hidden border-t-8 border-black"
      >
        {/* Bold geometric background shapes */}
        {/* <div className="absolute top-0 left-1/4 w-96 h-96 bg-pink-400 border-8 border-black rotate-45 opacity-30"></div> */}
        {/* <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-400 border-8 border-black -rotate-12 opacity-30"></div> */}

        <div className="max-w-5xl mx-auto relative z-10">
          {/* Header with Icon */}
          <div className="text-center mb-12">
            <h2 className="pb-1 text-5xl md:text-6xl font-black mb-4 text-black uppercase tracking-tight">
              Let&apos;s Work Together
            </h2>

            <p className="text-base md:text-lg text-black mb-4 max-w-2xl mx-auto leading-relaxed font-bold">
              I&apos;m always open to discussing new projects, creative ideas,
              or opportunities to be part of your vision. Feel free to reach
              out!
            </p>

            <div className="flex items-center justify-center gap-2 text-sm text-black font-black">
              <div className="w-3 h-3 bg-black"></div>
              <span className="uppercase">Available for freelance work</span>
            </div>
          </div>

          {/* Primary CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <a
              href={findSocialLink("Email")}
              className="group inline-flex items-center justify-center gap-3 px-6 py-4 bg-black text-white border-4 border-black font-black text-base uppercase shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-150"
            >
              <Mail className="w-5 h-5" />
              <span>Send Email</span>
              <Send className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>

            <a
              href={findSocialLink("Instagram")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-6 py-4 bg-pink-500 text-white border-4 border-black font-black text-base uppercase shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-150"
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
