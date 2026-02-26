import { ArrowDown } from "lucide-react";
import { profileData, socialLinks } from "../data/data";

function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center relative bg-bg-primary"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8 w-full py-32">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <p className="text-sm tracking-widest text-text-tertiary uppercase mb-6 animate-fade-in-up">
            Software Developer
          </p>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold text-text-primary tracking-tight leading-[1.05] mb-6 animate-fade-in-up animation-delay-100">
            {profileData.name}
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-text-secondary font-light leading-relaxed mb-10 max-w-2xl animate-fade-in-up animation-delay-200">
            {profileData.tagline}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-start gap-4 mb-16 animate-fade-in-up animation-delay-300">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-text-primary text-text-inverse text-sm font-medium tracking-wide hover:bg-accent transition-colors"
            >
              View Work
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-border-strong text-text-primary text-sm font-medium tracking-wide hover:border-text-primary transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-5 animate-fade-in-up animation-delay-400">
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
                className="text-text-muted hover:text-text-primary transition-colors"
                aria-label={link.label}
              >
                <link.icon className="w-[18px] h-[18px]" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-text-muted hover:text-text-secondary transition-colors"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
}

export default Hero;
