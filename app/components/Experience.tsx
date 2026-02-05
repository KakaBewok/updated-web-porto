"use client";

import { experienceData } from "../data/data";
import Image from "next/image";

function Experience() {
  return (
    <section
      id="experience"
      className="py-20 px-4 bg-pink-200 relative overflow-hidden border-t-8 border-black"
    >
      {/* Bold geometric background shapes */}
      {/* <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-300 border-8 border-black -rotate-12 opacity-40 z-0"></div> */}
      {/* <div className="absolute bottom-0 left-0 w-96 h-96 bg-lime-300 border-8 border-black rotate-6 opacity-40 z-0"></div> */}

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-black uppercase mb-3 tracking-tight">
            Professional Experience
          </h2>
          <p className="text-black max-w-2xl mx-auto text-base md:text-lg font-bold">
            My journey through various roles and projects
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-2 bg-black"></div>

          <div className="space-y-12">
            {experienceData.map((exp, index) => (
              <div key={index} className="relative group">
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-7 top-8 w-8 h-8 bg-yellow-400 border-4 border-black transform -translate-x-1/2 z-10"></div>

                {/* Experience Card */}
                <div className="md:ml-20 bg-white border-6 border-black p-6 md:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-4px] hover:translate-y-[-4px] transition-all duration-200">
                  {/* Header */}
                  <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4 mb-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-12 h-12 bg-black border-4 border-black flex items-center justify-center text-white font-black text-2xl shrink-0">
                          {exp.company.charAt(0)}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl md:text-2xl font-black text-black mb-1 uppercase">
                            {exp.position}
                          </h3>
                          <p className="text-base md:text-lg text-black font-bold flex items-center gap-2">
                            {exp.company}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="w-fit inline-flex items-center gap-2 px-4 py-2 bg-cyan-300 border-4 border-black font-black">
                      <svg
                        className="w-4 h-4 text-black"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      <span className="text-xs md:text-sm font-black text-black uppercase">
                        {exp.period}
                      </span>
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {exp.techStack.map((tech, idx) => (
                        <div key={idx}>
                          <span className="px-2 md:px-3 py-1.5 md:py-2 bg-lime-300 border-3 border-black text-black text-xs md:text-sm font-black flex items-center gap-2 uppercase">
                            <Image
                              src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech
                                .toLowerCase()
                                .replace(".", "")
                                .replace(" ", "")}//${tech
                                .toLowerCase()
                                .replace(".", "")
                                .replace(" ", "")}-original.svg`}
                              alt={tech}
                              width={16}
                              height={16}
                              className="w-5 h-5"
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
                    </div>
                  </div>

                  {/* Project */}
                  <div className="mb-6 p-4 bg-yellow-200 border-4 border-black">
                    <div className="flex items-center gap-2 mb-2">
                      <svg
                        className="w-5 h-5 text-black"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                      <h4 className="text-sm font-black text-black tracking-wide uppercase">
                        Project
                      </h4>
                    </div>
                    <p className="text-xs md:text-sm text-black font-bold leading-relaxed">
                      {exp.project}
                    </p>
                  </div>

                  {/* Achievements */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <h4 className="text-sm font-black text-black uppercase tracking-wide">
                        Key Achievements
                      </h4>
                    </div>
                    <ul className="space-y-3">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="shrink-0 w-5 h-5 bg-black flex items-center justify-center text-white text-xs font-black mt-0.5">
                            ✓
                          </span>
                          <span className="text-xs md:text-sm text-black leading-relaxed font-bold">
                            {achievement}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
