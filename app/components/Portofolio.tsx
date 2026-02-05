"use client";

import { ExternalLink, ChevronRight } from "lucide-react";
import { portfolioProjects } from "../data/data";
import Image from "next/image";

function Portfolio() {
  return (
    <section
      id="portfolio"
      className="py-20 bg-white relative overflow-hidden border-t-8 border-black"
    >
      {/* Bold geometric background shapes */}
      {/* <div className="absolute top-20 left-0 w-96 h-96 bg-cyan-300 border-8 border-black rotate-45 opacity-30"></div> */}
      {/* <div className="absolute bottom-20 right-0 w-96 h-96 bg-pink-300 border-8 border-black -rotate-12 opacity-30"></div> */}

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 px-4">
          <h2 className="text-5xl md:text-6xl font-black text-black uppercase mb-4 tracking-tight">
            Portfolio
          </h2>
          <p className="text-black text-center mb-4 max-w-2xl mx-auto text-base md:text-lg font-bold">
            A collection of web applications and systems I&apos;ve built using
            modern technologies
          </p>
          
          {/* Mobile swipe indicator */}
          <div className="md:hidden flex items-center justify-center gap-2 text-black font-black text-sm uppercase mt-4">
            <span>Swipe to see more</span>
            <ChevronRight className="w-5 h-5 animate-pulse" />
          </div>
        </div>

        {/* Mobile: Horizontal Carousel */}
        <div className="md:hidden relative">
          <div className="overflow-x-auto scrollbar-hide snap-x snap-mandatory flex gap-4 px-4 pb-4">
            {portfolioProjects.map((project, index) => (
              <div
                key={index}
                className="snap-center shrink-0 w-[85vw] max-w-[340px] group relative bg-white border-6 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
              >
                {/* Image Container */}
                <div className="relative h-56 w-full overflow-hidden bg-gray-200 border-b-6 border-black">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Title */}
                  <h3 className="text-xl font-black text-black mb-2 line-clamp-1 uppercase">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-black mb-4 leading-relaxed text-sm line-clamp-2 min-h-12 font-bold">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.slice(0, 4).map((tech, idx) => (
                        <div key={idx}>
                          <span className="px-2.5 py-1 bg-yellow-300 border-3 border-black text-black text-xs font-black flex items-center gap-1.5 uppercase">
                            <Image
                              src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech
                                .toLowerCase()
                                .replace(".", "")
                                .replace(" ", "")}//${tech
                                .toLowerCase()
                                .replace(".", "")
                                .replace(" ", "")}-original.svg`}
                              alt={tech}
                              width={200}
                              height={200}
                              className="w-3.5 h-3.5"
                              onError={(e) => {
                                const fallbackUrl = `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech
                                  .toLowerCase()
                                  .replace(".js", "js")
                                  .replace(" ", "")}//${tech
                                  .toLowerCase()
                                  .replace(".js", "js")
                                  .replace(" ", "")}-plain.svg`;
                                if (e.currentTarget.src !== fallbackUrl) {
                                  e.currentTarget.src = fallbackUrl;
                                }
                              }}
                            />
                            {tech}
                          </span>
                        </div>
                      ))}
                      {project.techStack.length > 4 && (
                        <span className="px-2.5 py-1 bg-black text-white text-xs font-black uppercase">
                          +{project.techStack.length - 4}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Preview Button */}
                  <a
                    href={project.previewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer inline-flex items-center justify-center gap-2 w-full px-5 py-3 bg-lime-400 border-4 border-black font-black text-sm uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                  >
                    <span>Preview</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tablet & Desktop: Grid Layout */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {portfolioProjects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white border-6 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-4px] hover:translate-y-[-4px] transition-all duration-200"
            >
              {/* Image Container */}
              <div className="relative h-56 w-full overflow-hidden bg-gray-200 border-b-6 border-black">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Title */}
                <h3 className="text-xl md:text-2xl font-black text-black mb-2 line-clamp-1 uppercase">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-black mb-4 leading-relaxed text-sm md:text-base line-clamp-2 min-h-12 font-bold">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.slice(0, 4).map((tech, idx) => (
                      <div key={idx}>
                        <span className="px-2.5 py-1 bg-yellow-300 border-3 border-black text-black text-xs font-black flex items-center gap-1.5 uppercase">
                          <Image
                            src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech
                              .toLowerCase()
                              .replace(".", "")
                              .replace(" ", "")}//${tech
                              .toLowerCase()
                              .replace(".", "")
                              .replace(" ", "")}-original.svg`}
                            alt={tech}
                            width={200}
                            height={200}
                            className="w-3.5 h-3.5"
                            onError={(e) => {
                              const fallbackUrl = `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech
                                .toLowerCase()
                                .replace(".js", "js")
                                .replace(" ", "")}//${tech
                                .toLowerCase()
                                .replace(".js", "js")
                                .replace(" ", "")}-plain.svg`;
                              if (e.currentTarget.src !== fallbackUrl) {
                                e.currentTarget.src = fallbackUrl;
                              }
                            }}
                          />
                          {tech}
                        </span>
                      </div>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="px-2.5 py-1 bg-black text-white text-xs font-black uppercase">
                        +{project.techStack.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                {/* Preview Button */}
                <a
                  href={project.previewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer inline-flex items-center justify-center gap-2 w-full px-5 py-3 bg-lime-400 border-4 border-black font-black text-sm uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-150"
                >
                  <span>Preview</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom CSS for hiding scrollbar */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}

export default Portfolio;
