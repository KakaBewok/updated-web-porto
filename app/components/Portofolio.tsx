"use client";

import { Code2, ExternalLink, Sparkles } from "lucide-react";
import { portfolioProjects } from "../data/data";
import Image from "next/image";

// function Portfolio() {
//   return (
//     <section
//       id="portfolio"
//       className="py-20 px-4 bg-linear-to-br from-gray-100 via-gray-50 to-gray-100"
//     >
//       <div className="max-w-6xl mx-auto">
//         <h2 className="text-4xl font-bold bg-linear-to-r from-gray-900 via-gray-800 to-gray-700 bg-clip-text text-transparent mb-4 text-center">
//           Portfolio
//         </h2>
//         <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto text-lg">
//           A collection of web applications and systems I&apos;ve built using
//           modern technologies
//         </p>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {portfolioProjects.map((project, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-md shadow-md overflow-hidden border border-gray-200 hover:shadow-md hover:scale-105 transition-all duration-300 cursor-pointer"
//             >
//               <div className="relative h-44 w-full bg-linear-to-br from-gray-300 to-gray-400 overflow-hidden">
//                 <Image
//                   src={project.imageUrl}
//                   alt={project.title}
//                   fill
//                   className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
//                 />
//               </div>

//               <div className="p-4">
//                 <h3 className="text-lg font-bold text-gray-900 mb-2">
//                   {project.title}
//                 </h3>
//                 <p className="text-gray-700 mb-3 leading-relaxed text-sm line-clamp-2">
//                   {project.description}
//                 </p>

//                 <div className="mb-3">
//                   <div className="flex flex-wrap gap-1.5">
//                     {project.techStack.map((tech, idx) => (
//                       <span
//                         key={idx}
//                         className="px-2 py-1 bg-linear-to-r from-gray-100 to-gray-200 text-slate-700 rounded text-xs font-medium flex items-center gap-1"
//                       >
//                         <Image
//                           src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech
//                             .toLowerCase()
//                             .replace(".", "")
//                             .replace(" ", "")}//${tech
//                             .toLowerCase()
//                             .replace(".", "")
//                             .replace(" ", "")}-original.svg`}
//                           alt={tech}
//                           width={200}
//                           height={200}
//                           className="w-3 h-3"
//                           onError={(e) => {
//                             e.currentTarget.src = `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech
//                               .toLowerCase()
//                               .replace(".js", "js")
//                               .replace(" ", "")}//${tech
//                               .toLowerCase()
//                               .replace(".js", "js")
//                               .replace(" ", "")}-plain.svg`;
//                           }}
//                         />
//                         {tech}
//                       </span>
//                     ))}
//                   </div>
//                 </div>

//                 <a
//                   href={project.previewUrl}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="inline-flex items-center gap-2 px-4 py-2 bg-linear-to-r from-gray-900 to-gray-800 text-white rounded-lg hover:shadow-md hover:scale-105 transition-all duration-300 font-medium text-sm w-full justify-center"
//                 >
//                   Preview
//                   <ExternalLink className="w-3.5 h-3.5" />
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

function Portfolio() {
  return (
    <section className="py-20 px-4 bg-linear-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 left-0 w-96 h-96 bg-blue-100 rounded-full filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-purple-100 rounded-full filter blur-3xl opacity-20"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-gray-900 via-gray-800 to-gray-700 bg-clip-text text-transparent mb-4">
            Portfolio
          </h2>
          <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto text-md md:text-lg">
            A collection of web applications and systems I&apos;ve built using
            modern technologies
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioProjects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-lg overflow-hidden border border-gray-100 shadow-lg hover:shadow-lg transition-all duration-500 hover:-translate-y-2"
            >
              {/* Image Container */}
              <div className="relative h-56 w-full overflow-hidden bg-linear-to-br from-gray-100 to-gray-200">
                {/* Overlay linear */}
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>

                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Title */}
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 line-clamp-1">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-4 leading-relaxed text-xs md:text-sm line-clamp-2 min-h-10">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.slice(0, 4).map((tech, idx) => (
                      <div key={idx} className="group/tech relative">
                        <div className="absolute inset-0 bg-linear-to-r from-blue-400 to-purple-400 rounded-lg opacity-0 group-hover/tech:opacity-15 blur transition-opacity duration-300"></div>
                        <span className="relative px-2.5 py-1 bg-linear-to-br from-gray-50 to-gray-100 border border-gray-200 hover:border-gray-300 text-gray-700 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-all duration-300">
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
                      <span className="px-2.5 py-1 bg-gray-100 text-gray-600 rounded-lg text-xs font-medium">
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
                  className="cursor-pointer group/btn inline-flex items-center justify-center gap-2 w-full px-5 py-3 bg-linear-to-r from-blue-600 to-green-600 text-white rounded-lg font-semibold text-sm shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-3000"
                >
                  <span>Preview</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              {/* Decorative corner */}
              <div className="absolute top-0 left-0 w-20 h-20 bg-linear-to-br from-blue-500/10 to-transparent rounded-br-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
