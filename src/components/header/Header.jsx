import React, { useState } from "react";
import "./Header.css";

function Header() {
  // const [toggle, setToggle] = useState(false);

  window.addEventListener("scroll", function () {
    const header = this.document.querySelector(".header");
    // when the scroll is higher than 200 viewport
    if (this.scrollY >= 80) {
      header.classList.add("scroll-header");
    } else {
      header.classList.remove("scroll-header");
    }
  });

  const [activeNav, setActiveNav] = useState("#home");

  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav-logo">
          E I
        </a>

        <div className="nav-menu">
          <ul className="nav-list grid">
            <li className="nav-item">
              <a
                href="#home"
                onClick={() => setActiveNav("#home")}
                className={
                  activeNav === "#home" ? "nav-link active-link" : "nav-link"
                }
              >
                <i className="uil uil-estate nav-icon"></i>
                <div className="header-num">
                  <span>01. </span> Home
                </div>
              </a>
            </li>

            <li className="nav-item">
              <a
                href="#about"
                onClick={() => setActiveNav("#about")}
                className={
                  activeNav === "#about" ? "nav-link active-link" : "nav-link"
                }
              >
                <i className="uil uil-user nav-icon"></i>
                <div className="header-num">
                  <span>02. </span> About
                </div>
              </a>
            </li>

            <li className="nav-item">
              <a
                href="#skills"
                onClick={() => setActiveNav("#skills")}
                className={
                  activeNav === "#skills" ? "nav-link active-link" : "nav-link"
                }
              >
                <i className="uil uil-file nav-icon"></i>
                <div className="header-num">
                  <span>03. </span> Skills
                </div>
              </a>
            </li>

            <li className="nav-item">
              <a
                href="#certifications"
                onClick={() => setActiveNav("#certifications")}
                className={
                  activeNav === "#certifications"
                    ? "nav-link active-link"
                    : "nav-link"
                }
              >
                <i className="uil uil-briefcase-alt nav-icon"></i>
                <div className="header-num">
                  <span>04. </span> Certifications
                </div>
              </a>
            </li>

            <li className="nav-item">
              <a href="#project" className="nav-link">
                <i className="uil uil-scenery nav-icon"></i>
                <div className="header-num">
                  <span>05. </span> Works
                </div>
              </a>
            </li>

            <li className="nav-item">
              <a
                href="#contact"
                onClick={() => setActiveNav("#contact")}
                className={
                  activeNav === "#contact" ? "nav-link active-link" : "nav-link"
                }
              >
                <i className="uil uil-message nav-icon"></i>
                <div className="header-num">
                  <span>06. </span> Contact
                </div>
              </a>
            </li>
          </ul>
        </div>

        <div id="menuToggle">
          <input type="checkbox" />

          <span></span>
          <span></span>
          <span></span>

          <ul id="menu">
            <ul className="nav-list grid">
              <li className="nav-item">
                <a
                  href="#home"
                  onClick={() => setActiveNav("#home")}
                  className={
                    activeNav === "#home" ? "nav-link active-link" : "nav-link"
                  }
                >
                  <i className="uil uil-estate nav-icon"></i>
                  Home
                </a>
              </li>

              <li className="nav-item">
                <a
                  href="#about"
                  onClick={() => setActiveNav("#about")}
                  className={
                    activeNav === "#about" ? "nav-link active-link" : "nav-link"
                  }
                >
                  <i className="uil uil-user nav-icon"></i> About
                </a>
              </li>

              <li className="nav-item">
                <a
                  href="#skills"
                  onClick={() => setActiveNav("#skills")}
                  className={
                    activeNav === "#skills"
                      ? "nav-link active-link"
                      : "nav-link"
                  }
                >
                  <i className="uil uil-file nav-icon"></i> Skills
                </a>
              </li>

              <li className="nav-item">
                <a
                  href="#certifications"
                  onClick={() => setActiveNav("#certifications")}
                  className={
                    activeNav === "#certifications"
                      ? "nav-link active-link"
                      : "nav-link"
                  }
                >
                  <i className="uil uil-briefcase-alt nav-icon"></i>{" "}
                  Certifications
                </a>
              </li>

              <li className="nav-item">
                <a href="#project" className="nav-link">
                  <i className="uil uil-scenery nav-icon"></i> Portfolio
                </a>
              </li>

              <li className="nav-item">
                <a
                  href="#contact"
                  onClick={() => setActiveNav("#contact")}
                  className={
                    activeNav === "#contact"
                      ? "nav-link active-link"
                      : "nav-link"
                  }
                >
                  <i className="uil uil-message nav-icon"></i> Contact
                </a>
              </li>
            </ul>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
