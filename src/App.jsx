import Hero from "./components/Hero";
import About from "./components/About";
import Skill from "./components/Skill";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-50">
      <Hero />
      <About />
      <Skill />
      <Projects />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
