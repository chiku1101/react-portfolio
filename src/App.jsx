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
import ScrollText from "./components/ScrollText";
import { useEffect } from "react";
import Lenis from "lenis";

const App = () => {
  useEffect(() => {
    // Initialize Lenis smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: "vertical",
      gestureDirection: "vertical",
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    // Set up RAF for Lenis
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    // Make lenis globally available
    window.lenis = lenis;

    // Start the animation frame loop
    requestAnimationFrame(raf);

    return () => {
      // Clean up
      lenis.destroy();
      window.lenis = null;
    };
  }, []);

  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="relative h-full w-full bg-black"></div>
      </div>
      
      <Navbar />
      
      <div className="container mx-auto px-8 pt-28">
        <Hero />
        <About id="about" />
        <Technologies id="technologies" />
        <Experience id="experience" />
        <Projects id="projects" />
      </div>

      {/* ScrollText component outside container for full-width effect */}
      <div className="w-full">
        <ScrollText />
      </div>

      <div className="container mx-auto px-8">
        <Certifications />
        <Contact id="contact" />
        <Footer />
        <ScrollButton />
      </div>
    </div>
  );
};

export default App;