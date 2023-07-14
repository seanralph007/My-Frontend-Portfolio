import "./App.css";
import Certificates from "./components/Certificates/Certificates";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import { Footer } from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
// import Services from "./components/services/Services";
import Skills from "./components/skills/Skills";
import Scroll from "./components/scroll/Scroll";
import Projects from "./components/projects/Projects";
// import { AnimatePresence, motion } from "framer-motion";

function App() {
  return (
    <div>
      <Header />

      <main className="main">
        <Home />
        <About />
        <Projects/>
        <Skills />
        {/* <Services /> */}
        <Certificates />
        <Contact />
      </main>
      <Footer />
      <Scroll />
    </div>
  );
}

export default App;
