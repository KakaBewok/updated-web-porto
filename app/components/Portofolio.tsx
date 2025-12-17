"use client";

import { ExternalLink } from "lucide-react";
import { portfolioProjects } from "../data/data";
import Image from "next/image";

function Portfolio() {
  return (
    <section
      id="portfolio"
      className="py-20 px-4 bg-linear-to-br from-gray-100 via-gray-50 to-gray-100"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold bg-linear-to-r from-gray-900 via-gray-800 to-gray-700 bg-clip-text text-transparent mb-4 text-center">
          Portfolio
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto text-lg">
          A collection of web applications and systems I&apos;ve built using
          modern technologies
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioProjects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-md shadow-md overflow-hidden border border-gray-200 hover:shadow-md hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <div className="relative h-44 w-full bg-linear-to-br from-gray-300 to-gray-400 overflow-hidden">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-700 mb-3 leading-relaxed text-sm line-clamp-2">
                  {project.description}
                </p>

                <div className="mb-3">
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-linear-to-r from-gray-100 to-gray-200 text-slate-700 rounded text-xs font-medium flex items-center gap-1"
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
                          width={200}
                          height={200}
                          className="w-3 h-3"
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

                <a
                  href={project.previewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-linear-to-r from-gray-900 to-gray-800 text-white rounded-lg hover:shadow-md hover:scale-105 transition-all duration-300 font-medium text-sm w-full justify-center"
                >
                  Preview
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
