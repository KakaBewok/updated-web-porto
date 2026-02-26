"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  if (totalPages <= 1) return null;

  return (
    <div className="mt-14 flex justify-center items-center gap-2">
      {/* Previous */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Previous page"
        className={`w-10 h-10 flex items-center justify-center border transition-colors ${
          currentPage === 1
            ? "border-border text-text-muted cursor-not-allowed"
            : "border-border-strong text-text-primary hover:bg-bg-tertiary"
        }`}
      >
        <ChevronLeft className="w-4 h-4" />
      </button>

      {/* Page Numbers */}
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          aria-label={`Page ${page}`}
          aria-current={currentPage === page ? "page" : undefined}
          className={`w-10 h-10 flex items-center justify-center text-sm font-medium transition-colors ${
            currentPage === page
              ? "bg-text-primary text-text-inverse"
              : "border border-border text-text-secondary hover:border-border-strong hover:text-text-primary"
          }`}
        >
          {page}
        </button>
      ))}

      {/* Next */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="Next page"
        className={`w-10 h-10 flex items-center justify-center border transition-colors ${
          currentPage === totalPages
            ? "border-border text-text-muted cursor-not-allowed"
            : "border-border-strong text-text-primary hover:bg-bg-tertiary"
        }`}
      >
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  );
}

export default Pagination;
