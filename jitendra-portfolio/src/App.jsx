import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ParticlesBackground from "./components/ParticlesBackground"; // NEW Import

export default function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen relative">
      {/* Om Particles Background */}
      <ParticlesBackground />

      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
