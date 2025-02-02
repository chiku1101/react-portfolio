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


const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">


    <div className="fixed top-0 -z-10 h-full w-full">


    <div class="relative h-full w-full bg-black"></div>

    </div>



      <div className="container mx-auto px-8">
      <Navbar />
      <Hero />
      <About />
      <Technologies />
      <Experience />
      <Projects />
      <Certifications />
      <Contact />
      <Footer />
      <ScrollButton />
    
      
     



        </div> 
      
    </div>
  );
};

export default App;