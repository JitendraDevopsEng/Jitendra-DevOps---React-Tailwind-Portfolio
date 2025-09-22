import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="relative min-h-screen text-white">
      {/* 🌅 Animated Saffron Background */}
      <div className="absolute inset-0 bg-saffron-animated"></div>

      {/* 🌓 Overlay for readability */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* 🌐 Content */}
      <div className="relative z-10">
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
    </div>
  );
}
