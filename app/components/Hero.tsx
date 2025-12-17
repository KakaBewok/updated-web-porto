"use client";

import { Instagram, Linkedin, Github, Mail } from "lucide-react";
import { profileData } from "../data/data";
import Image from "next/image";

function Hero() {
  return (
    <section
      id="profile"
      className="min-h-screen flex items-center justify-center px-4 py-20 bg-linear-to-br from-gray-50 via-gray-100 to-gray-50"
    >
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Profile Photo */}
          <div className="shrink-0">
            <div className="relative">
              <div className="absolute inset-0 bg-linear-to-r from-gray-800 to-gray-600 rounded-full blur-2xl opacity-30 animate-pulse"></div>
              <div className="relative w-40 h-40 md:w-60 md:h-60 rounded-full overflow-hidden border-2 border-white shadow-xs">
                <Image
                  src={profileData.photo}
                  alt={profileData.name}
                  width={100}
                  height={100}
                  unoptimized
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Profile Info */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-gray-900 via-gray-800 to-gray-700 bg-clip-text text-transparent mb-4">
              {profileData.name}
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-800 font-semibold mb-6">
              {profileData.role}
            </h2>
            <p className="text-md md:text-lg text-gray-400 mb-8 md:leading-relaxed leading-normal">
              {profileData.intro}
            </p>

            <div className="mb-8">
              <div className="flex flex-wrap justify-center md:justify-start gap-2 md:gap-3">
                {profileData.techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="cursor-pointer duration-600 px-4 py-2 bg-linear-to-r from-gray-100 to-gray-200 text-slate-700 rounded-lg text-sm font-medium hover:shadow-lg hover:scale-105 transition-all flex items-center gap-2"
                  >
                    <Image
                      unoptimized
                      src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech
                        .toLowerCase()
                        .replace(".", "")
                        .replace(" ", "")}//${tech
                        .toLowerCase()
                        .replace(".", "")
                        .replace(" ", "")}-original.svg`}
                      width={50}
                      height={50}
                      alt={tech}
                      className="w-5 h-5"
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
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex justify-center md:justify-start gap-4">
              <a
                href={profileData.socials.instagram}
                className="p-3 bg-linear-to-r from-pink-500 to-rose-500 text-white rounded-full hover:shadow-lg hover:scale-110 transition-all"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href={profileData.socials.linkedin}
                className="p-3 bg-linear-to-r from-blue-600 to-blue-500 text-white rounded-full hover:shadow-lg hover:scale-110 transition-all"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href={profileData.socials.github}
                className="p-3 bg-linear-to-r from-gray-800 to-gray-700 text-white rounded-full hover:shadow-lg hover:scale-110 transition-all"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href={`mailto:${profileData.socials.email}`}
                className="p-3 bg-linear-to-r from-gray-700 to-gray-600 text-white rounded-full hover:shadow-lg hover:scale-110 transition-all"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
