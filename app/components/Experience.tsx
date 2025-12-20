"use client";

import { experienceData } from "../data/data";
import Image from "next/image";

function Experience() {
  return (
    <section
      id="experience"
      className="py-20 px-4 bg-linear-to-b from-white to-gray-50 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full filter blur-3xl opacity-30 -z-0"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-50 rounded-full filter blur-3xl opacity-30 -z-0"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-gray-900 via-gray-800 to-gray-700 bg-clip-text text-transparent mb-3">
            Professional Experience
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-md md:text-lg">
            My journey through various roles and projects
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-1 bg-linear-to-b from-blue-200 via-purple-200 to-pink-200"></div>

          <div className="space-y-12">
            {experienceData.map((exp, index) => (
              <div key={index} className="relative group">
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-8.25 top-8 w-5 h-5 bg-linear-to-r from-blue-400 to-purple-400 rounded-full border-4 border-white shadow-lg transform -translate-x-1/2 group-hover:scale-125 transition-transform duration-300 z-10">
                  <span className="absolute inset-0 bg-blue-400 rounded-full animate-ping opacity-75"></span>
                </div>

                {/* Experience Card */}
                <div className="md:ml-20 bg-white border border-gray-100 hover:border-gray-200 rounded-md p-6 md:p-8 shadow-lg hover:shadow-md transition-all duration-300 group-hover:-translate-y-1">
                  {/* Header */}
                  <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4 mb-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 bg-linear-to-br from-blue-500 to-green-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shrink-0">
                          {exp.company.charAt(0)}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-1">
                            {exp.position}
                          </h3>
                          <p className="text-md md:text-lg text-gray-500 font-semibold flex items-center gap-2">
                            {exp.company}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="w-fit inline-flex items-center gap-2 px-4 py-2 bg-linear-to-r from-slate-50 to-slate-100 border border-blue-100 rounded-full">
                      <svg
                        className="w-4 h-4 text-blue-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      <span className="text-xs md:text-sm font-semibold text-gray-700">
                        {exp.period}
                      </span>
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {exp.techStack.map((tech, idx) => (
                        <div key={idx} className="group/tech relative">
                          <div className="absolute inset-0 bg-linear-to-r from-blue-400 to-purple-400 rounded-lg opacity-0 group-hover/tech:opacity-20 blur transition-opacity duration-300"></div>
                          <span className="relative px-2 md:px-3 py-1.5 md:py-2 bg-linear-to-br from-gray-50 to-gray-100 hover:from-white hover:to-gray-50 border border-gray-200 hover:border-gray-300 text-gray-700 rounded-lg text-xs md:text-sm font-medium flex items-center gap-2 transition-all duration-300 group-hover/tech:-translate-y-0.5 cursor-default">
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
                  <div className="mb-6 p-4 bg-linear-to-br from-slate-100 to-slate-50 border border-blue-100 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <svg
                        className="w-5 h-5 text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                      <h4 className="text-sm font-bold text-blue-900 tracking-wide">
                        Project
                      </h4>
                    </div>
                    <p className="text-xs md:text-sm text-gray-700 font-medium leading-relaxed">
                      {exp.project}
                    </p>
                  </div>

                  {/* Achievements */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <h4 className="text-sm font-bold text-gray-700 uppercase tracking-wide">
                        Key Achievements
                      </h4>
                    </div>
                    <ul className="space-y-3">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="shrink-0 w-4 h-4 bg-linear-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white text-xs font-bold mt-0.5">
                            ✓
                          </span>
                          <span className="text-xs md:text-sm text-gray-500 leading-relaxed group-hover/item:text-gray-900 transition-colors">
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
