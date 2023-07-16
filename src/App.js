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
import { useState } from "react";
import { useEffect } from "react";
// import { AnimatePresence, motion } from "framer-motion";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      {loading ? (
        <div className="spinner-box">
          <div className="configure-border-1">
            <div className="configure-core"></div>
          </div>
          <div className="configure-border-2">
            <div className="configure-core"></div>
            <span>E.I</span>
          </div>
        </div>
      ) : (
        <>
          <Header />

          <main className="main">
            <Home />
            <About />
            <Projects />
            <Skills />
            <Certificates />
            <Contact />
          </main>
          <Footer />
          <Scroll />
        </>
      )}
    </div>
  );
}

export default App;
