function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-sm text-gray-400">
          © {currentYear} Noprizal. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
