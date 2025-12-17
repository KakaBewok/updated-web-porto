import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Portfolio from "./components/Portofolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Education />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}
