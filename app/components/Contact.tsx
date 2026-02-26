import { ArrowUpRight } from "lucide-react";
import { socialLinks } from "../data/data";

function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-bg-primary">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Label */}
        <p className="text-sm tracking-widest text-text-tertiary uppercase mb-4">
          Contact
        </p>
        <div className="w-12 h-px bg-border-strong mb-12" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left */}
          <div className="lg:col-span-7">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-text-primary tracking-tight leading-tight mb-6">
              Let&apos;s work
              <br />
              together.
            </h2>
            <p className="text-text-secondary leading-relaxed max-w-lg mb-10">
              I&apos;m always open to discussing new projects, creative ideas,
              or opportunities to be part of your vision. Feel free to reach
              out.
            </p>

            {/* Primary CTA */}
            <a
              href="mailto:rizalnov667@gmail.com"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-text-primary text-text-inverse text-sm font-medium tracking-wide hover:bg-accent transition-colors"
            >
              Send Email
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Right */}
          <div className="lg:col-span-5 flex flex-col justify-end">
            <div className="space-y-0">
              <p className="text-xs tracking-widest text-text-tertiary uppercase mb-6">
                Find me on
              </p>
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.label !== "Email" ? "_blank" : undefined}
                  rel={
                    link.label !== "Email"
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="group flex items-center justify-between py-4 border-b border-border hover:border-text-primary transition-colors"
                >
                  <span className="text-text-primary text-sm font-medium">
                    {link.label}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-text-muted group-hover:text-text-primary transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
