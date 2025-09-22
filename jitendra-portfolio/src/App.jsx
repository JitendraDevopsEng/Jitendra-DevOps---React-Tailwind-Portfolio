import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ParticlesBackground from "./components/ParticlesBackground";

export default function App() {
  return (
    // bg-gray-900 hata diya, custom saffron background index.css handle karega
    <div className="min-h-screen relative app-overlay text-white">
      <ParticlesBackground /> {/* 👈 Agar particles use karna ho to rakh, warna hata de */}
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
