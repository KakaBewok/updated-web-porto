"use client";

import { experienceData } from "../data/data";
import Image from "next/image";

function Experience() {
  return (
    <section id="experience" className="py-20 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold bg-linear-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-12 text-center">
          Professional Experience
        </h2>

        <div className="space-y-12">
          {experienceData.map((exp, index: number) => (
            <div
              key={index}
              className="bg-linear-to-br from-gray-50 to-gray-100 border-2 border-gray-300 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">
                    {exp.position}
                  </h3>
                  <p className="text-lg text-gray-700 font-semibold">
                    {exp.company}
                  </p>
                </div>
                <span className="text-sm font-medium text-gray-700 bg-gray-200 px-4 py-2 rounded-full mt-2 md:mt-0">
                  {exp.period}
                </span>
              </div>

              <div className="mb-6">
                {/* <h4 className="text-sm font-semibold text-gray-700 mb-2">
                  Tech Stack
                </h4> */}
                <div className="flex flex-wrap gap-2">
                  {exp.techStack.map((tech, idx: number) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-linear-to-r from-gray-100 to-gray-200 text-slate-700 rounded-lg text-sm font-medium flex items-center gap-1.5"
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
                        width={16}
                        height={16}
                        className="w-4 h-4"
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

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-700 mb-2">
                  Project
                </h4>
                <p className="text-gray-700 font-medium text-md md:text-lg">
                  {exp.project}
                </p>
              </div>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-700 mb-3">
                  Responsibilities
                </h4>
                <ul className="space-y-2">
                  {exp.responsibilities.map((resp, idx: number) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-gray-600 mr-2 font-bold text-xs md:text-md">
                        •
                      </span>
                      <span className="text-gray-700 text-xs md:text-md">
                        {resp}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-gray-700 mb-3">
                  Key Achievements
                </h4>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, idx: number) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-gray-800 mr-2 text-xs md:text-md">
                        ✓
                      </span>
                      <span className="text-gray-700 font-medium text-xs md:text-md">
                        {achievement}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
