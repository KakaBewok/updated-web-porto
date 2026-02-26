import Image from "next/image";
import { profileData } from "../data/data";

function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-bg-primary">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Label */}
        <p className="text-sm tracking-widest text-text-tertiary uppercase mb-4">
          About
        </p>
        <div className="w-12 h-px bg-border-strong mb-12" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Photo */}
          <div className="lg:col-span-4">
            <div className="aspect-[4/5] relative overflow-hidden bg-bg-secondary">
              <Image
                src={profileData.photo}
                alt={profileData.name}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 33vw"
                unoptimized
              />
            </div>
          </div>

          {/* Bio */}
          <div className="lg:col-span-8 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-semibold text-text-primary tracking-tight mb-8 leading-tight">
              A developer who cares about
              <br className="hidden md:block" />
              craft, clarity, and code quality.
            </h2>

            <div className="space-y-5 text-text-secondary leading-relaxed max-w-2xl">
              <p>{profileData.intro}</p>
              <p>
                Currently working as a Back End Developer at PT. Voltras
                International, handling payment gateway integrations and
                mission-critical financial systems. On the side, I build
                freelance web projects through Calaraya.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-10 border-t border-border">
              <div>
                <p className="text-3xl md:text-4xl font-semibold text-text-primary tracking-tight">
                  2+
                </p>
                <p className="text-sm text-text-tertiary mt-1">
                  Years Experience
                </p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-semibold text-text-primary tracking-tight">
                  8+
                </p>
                <p className="text-sm text-text-tertiary mt-1">
                  Projects Delivered
                </p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-semibold text-text-primary tracking-tight">
                  16
                </p>
                <p className="text-sm text-text-tertiary mt-1">
                  Certifications
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
