"use client";

import { Instagram, Linkedin, Github, Mail } from "lucide-react";
import { profileData } from "../data/data";
import Image from "next/image";

function Hero() {
  return (
    <section
      id="profile"
      className="min-h-screen flex items-center justify-center px-4 py-24 bg-yellow-300 relative overflow-hidden"
    >
      {/* Bold geometric background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* <div className="absolute top-90 right-10 w-72 h-72 bg-cyan-400 border-8 border-black -rotate-12"></div> */}
        {/* <div className="absolute top-40 left-10 w-64 h-64 bg-pink-400 border-8 border-black rotate-12"></div> */}
        {/* <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-lime-400 border-8 border-black -rotate-6"></div> */}
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="flex flex-col items-center gap-8 md:gap-12">
          {/* Profile Photo */}
          <div className="relative">
            <div className="rotate-3 w-44 h-44 md:w-64 md:h-64 overflow-hidden border-8 border-black bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <Image
                width={256}
                height={256}
                unoptimized
                src={profileData.photo}
                alt={profileData.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Profile Info */}
          <div className="flex-1 text-center max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-lime-300 border-4 border-black mb-6 font-bold">
              <span className="w-3 h-3 bg-black"></span>
              <span className="text-sm font-black text-black uppercase tracking-wide">
                Available for opportunities
              </span>
            </div>

            {/* Name */}
            <h1 className="text-5xl md:text-7xl font-black mb-4 text-black uppercase tracking-tight">
              {profileData.name}
            </h1>

            {/* Role */}
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-1 w-12 bg-black"></div>
              <h2 className="text-2xl md:text-3xl font-black text-black uppercase">
                {profileData.role}
              </h2>
              <div className="h-1 w-12 bg-black"></div>
            </div>

            {/* Description */}
            <p className="text-base md:text-xl text-black leading-relaxed mb-10 max-w-2xl mx-auto font-bold">
              {profileData.intro}
            </p>

            {/* Tech Stack */}
            <div className="mb-10">
              <div className="flex flex-wrap justify-center gap-3">
                {profileData.techStack.map((tech, index) => (
                  <div
                    key={index}
                    className="px-3 md:px-4 py-2 md:py-2.5 bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-150 flex items-center gap-2 cursor-pointer"
                  >
                    <Image
                      src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech
                        .toLowerCase()
                        .replace(".", "")
                        .replace(" ", "")}//${tech
                        .toLowerCase()
                        .replace(".", "")
                        .replace(" ", "")}-original.svg`}
                      alt={tech}
                      width={24}
                      height={24}
                      className="w-4 md:w-6 h-4 md:h-6"
                      onError={(e) => {
                        e.currentTarget.src = `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech
                          .toLowerCase()
                          .replace(".js", "js")
                          .replace(" ", "")}//${tech
                          .toLowerCase()
                          .replace(".js", "js")
                          .replace(" ", "")}-plain.svg`;
                      }}
                    />
                    <span className="text-xs md:text-sm font-black text-black uppercase">
                      {tech}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-4">
              <a
                href={profileData.socials.instagram}
                className="p-3 md:p-4 bg-pink-500 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-150"
                aria-label="Instagram"
              >
                <Instagram className="w-6 md:w-7 h-6 md:h-7 text-white" />
              </a>

              <a
                href={profileData.socials.linkedin}
                className="p-3 md:p-4 bg-blue-600 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-150"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 md:w-7 h-6 md:h-7 text-white" />
              </a>

              <a
                href={profileData.socials.github}
                className="p-3 md:p-4 bg-black border-4 border-black shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-150"
                aria-label="GitHub"
              >
                <Github className="w-6 md:w-7 h-6 md:h-7 text-white" />
              </a>

              <a
                href={`mailto:${profileData.socials.email}`}
                className="p-3 md:p-4 bg-purple-600 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-150"
                aria-label="Email"
              >
                <Mail className="w-6 md:w-7 h-6 md:h-7 text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
