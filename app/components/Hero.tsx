"use client";

import { Instagram, Linkedin, Github, Mail } from "lucide-react";
import { profileData } from "../data/data";
import Image from "next/image";

function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-22 bg-linear-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-20 right-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"
          style={{ animation: "blob 7s infinite" }}
        ></div>
        <div
          className="absolute top-40 left-10 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"
          style={{ animation: "blob 7s infinite 2s" }}
        ></div>
        <div
          className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"
          style={{ animation: "blob 7s infinite 4s" }}
        ></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="flex flex-col items-center gap-8 md:gap-12">
          {/* Profile Photo */}
          <div className="relative group">
            {/* Animated ring */}
            <div className="absolute inset-0 bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-lg opacity-40 group-hover:opacity-60 transition-opacity duration-300 animate-pulse"></div>

            {/* Photo container */}
            <div className="relative">
              <div className="w-44 h-44 md:w-64 md:h-64 rounded-full overflow-hidden border-2 border-white shadow-xl group-hover:scale-105 transition-transform duration-300 bg-linear-to-br from-gray-100 to-gray-200">
                <Image
                  width={100}
                  height={100}
                  unoptimized
                  src={profileData.photo}
                  alt={profileData.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Profile Info */}
          <div className="flex-1 text-center max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-linear-to-r from-blue-50 to-purple-50 border border-blue-100 rounded-full mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span className="text-sm font-medium text-gray-700">
                Available for opportunities
              </span>
            </div>

            {/* Name with linear */}
            <h1 className="text-4xl md:text-6xl font-bold mb-3 bg-linear-to-r from-gray-900 via-gray-800 to-gray-600 bg-clip-text text-transparent">
              {profileData.name}
            </h1>

            {/* Role with accent */}
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-12 bg-linear-to-r from-transparent to-gray-300"></div>
              <h2 className="text-xl md:text-2xl font-semibold text-gray-700">
                {profileData.role}
              </h2>
              <div className="h-px w-12 bg-linear-to-l from-transparent to-gray-300"></div>
            </div>

            {/* Description */}
            <p className="text-sm md:text-lg text-gray-400 leading-relaxed mb-10 max-w-2xl mx-auto">
              {profileData.intro}
            </p>

            {/* Tech Stack */}
            <div className="mb-10">
              <div className="flex flex-wrap justify-center gap-3">
                {profileData.techStack.map((tech, index) => (
                  <div key={index} className="group relative">
                    <div className="absolute inset-0 bg-linear-to-r from-blue-400 to-purple-400 rounded-xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-300"></div>
                    <div className="relative px-3 md:px-4 py-2 md:py-2.5 bg-white border-2 border-gray-100 hover:border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 flex items-center gap-2 group-hover:-translate-y-1 cursor-pointer">
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
                      <span className="text-xs md:text-sm font-medium text-gray-700 group-hover:text-gray-900">
                        {tech}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-4">
              <a
                href={profileData.socials.instagram}
                className="group relative p-4 bg-linear-to-br from-pink-500 to-rose-600 text-white rounded-2xl hover:shadow-xl hover:shadow-pink-500/50 hover:-translate-y-1 transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6 relative z-10" />
                <div className="absolute inset-0 bg-linear-to-br from-pink-400 to-rose-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
              </a>

              <a
                href={profileData.socials.linkedin}
                className="group relative p-4 bg-linear-to-br from-blue-600 to-blue-700 text-white rounded-2xl hover:shadow-xl hover:shadow-blue-500/50 hover:-translate-y-1 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6 relative z-10" />
                <div className="absolute inset-0 bg-linear-to-br from-blue-500 to-blue-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
              </a>

              <a
                href={profileData.socials.github}
                className="group relative p-4 bg-linear-to-br from-gray-800 to-gray-900 text-white rounded-2xl hover:shadow-xl hover:shadow-gray-500/50 hover:-translate-y-1 transition-all duration-300"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6 relative z-10" />
                <div className="absolute inset-0 bg-linear-to-br from-gray-700 to-gray-800 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
              </a>

              <a
                href={`mailto:${profileData.socials.email}`}
                className="group relative p-4 bg-linear-to-br from-purple-600 to-purple-700 text-white rounded-2xl hover:shadow-xl hover:shadow-purple-500/50 hover:-translate-y-1 transition-all duration-300"
                aria-label="Email"
              >
                <Mail className="w-6 h-6 relative z-10" />
                <div className="absolute inset-0 bg-linear-to-br from-purple-500 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
