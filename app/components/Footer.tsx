function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-bg-primary border-t border-border">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-muted tracking-wide">
            &copy; {currentYear} Noprizal. All rights reserved.
          </p>
          <a
            href="#hero"
            className="text-xs text-text-muted hover:text-text-secondary tracking-wide transition-colors"
          >
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
