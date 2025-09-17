import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skill from "./components/Skill";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="bg-gray-50 dark:bg-gray-950 text-gray-800 dark:text-gray-100 min-h-screen">
      {/* <Navbar /> */}
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
