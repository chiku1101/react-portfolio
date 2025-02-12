import About from "./components/About";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import ScrollButton from "./components/ScrollButton";
import Technologies from "./components/Technologies";
import ScrollText from "./components/ScrollText"; // Add this import

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="relative h-full w-full bg-black"></div>
      </div>
      
      <div className="container mx-auto px-8">
        <Navbar />
        <Hero />
        <About />
        <Technologies />
        <Experience />
        <Projects />
      </div>

      {/* ScrollText component outside container for full-width effect */}
      <div className="w-full">
        <ScrollText />
      </div>

      <div className="container mx-auto px-8">
        <Certifications />
        <Contact />
        <Footer />
        <ScrollButton />
      </div>
    </div>
  );
};

export default App;