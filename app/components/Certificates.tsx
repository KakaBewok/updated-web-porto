"use client";

import { useState } from "react";
import Image from "next/image";
import { Award, Calendar, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { certificatesData } from "../data/data";

const ITEMS_PER_PAGE = 6;

function Certificates() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(certificatesData.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentCertificates = certificatesData.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const formatDate = (dateString: string | null) => {
    if (!dateString) return "No expiration";
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-US", {
      month: "long",
      year: "numeric",
    }).format(date);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Scroll to section header when page changes
    const element = document.getElementById("certificates");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="certificates"
      className="py-20 px-4 bg-yellow-100 relative overflow-hidden border-t-8 border-black"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-black uppercase mb-4 tracking-tight">
            Certificates
          </h2>
          <p className="text-black max-w-2xl mx-auto text-base md:text-lg font-bold">
            Showcasing my professional certifications and completed courses
          </p>
        </div>

        {/* Desktop & Mobile Grid: 1 per row on mobile, 2 per row on tablet, 3 per row on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {currentCertificates.map((cert) => (
            <div
              key={cert.id}
              className="bg-white border-6 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-4px] hover:translate-y-[-4px] transition-all duration-200 flex flex-col"
            >
              {/* Image Container */}
              <div className="relative h-60 md:h-56 w-full overflow-hidden bg-gray-200 border-b-6 border-black">
                <Image
                  src={cert.image_path}
                  alt={cert.title}
                  fill
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6 md:p-8 flex-1 flex flex-col">
                <div className="flex items-center gap-3 mb-3">
                  <Award className="w-5 h-5 md:w-6 md:h-6 text-black shrink-0" />
                  <h3 className="text-xl md:text-2xl font-black text-black uppercase line-clamp-2">
                    {cert.title}
                  </h3>
                </div>

                <p className="text-base md:text-lg text-black font-bold mb-4 flex-1">
                  {cert.issuing_organization}
                </p>

                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-sm font-bold text-black">
                    <Calendar className="w-4 h-4" />
                    <span className="uppercase">Issued: {formatDate(cert.issue_date)}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm font-bold text-black opacity-70">
                    <Calendar className="w-4 h-4" />
                    <span className="uppercase">Expires: {formatDate(cert.expiration_date)}</span>
                  </div>
                </div>

                <div className="p-4 bg-cyan-100 border-4 border-black mb-6">
                  <p className="text-sm md:text-base text-black font-bold leading-relaxed">
                    {cert.desc}
                  </p>
                </div>

                <button className="w-full py-3 bg-lime-400 border-4 border-black font-black text-sm md:text-base uppercase shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[4px] hover:translate-y-[4px] transition-all flex items-center justify-center gap-2 mt-auto">
                  Verify <ExternalLink className="w-4 h-4 md:w-5 md:h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-16 flex justify-center items-center gap-4">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`p-3 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all ${
                currentPage === 1
                  ? "bg-gray-200 cursor-not-allowed opacity-50 shadow-none translate-x-[2px] translate-y-[2px]"
                  : "bg-white hover:bg-pink-300 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] active:translate-x-[0px] active:translate-y-[0px] active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
              }`}
            >
              <ChevronLeft className="w-6 h-6 text-black" />
            </button>

            <div className="flex gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`w-12 h-12 border-4 border-black font-black text-lg transition-all ${
                    currentPage === page
                      ? "bg-black text-white shadow-none translate-x-[2px] translate-y-[2px]"
                      : "bg-white text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-pink-300 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`p-3 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all ${
                currentPage === totalPages
                  ? "bg-gray-200 cursor-not-allowed opacity-50 shadow-none translate-x-[2px] translate-y-[2px]"
                  : "bg-white hover:bg-pink-300 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] active:translate-x-[0px] active:translate-y-[0px] active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
              }`}
            >
              <ChevronRight className="w-6 h-6 text-black" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default Certificates;
