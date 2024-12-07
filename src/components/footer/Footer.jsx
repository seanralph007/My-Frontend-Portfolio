import React from "react";
import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container container">
        <div className="footer-social">
          <a
            href="https://www.x.com/Ify_Ezeugwu"
            rel="noopener noreferrer"
            className="footer-social-link"
            target="_blank"
          >
            <i className="bx bxl-twitter"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/ezeugwu-ifeanyi-1a996a15b"
            rel="noopener noreferrer"
            className="footer-social-link"
            target="_blank"
          >
            <i className="uil uil-linkedin-alt"></i>
          </a>
          <a
            href="https://www.github.com/Ify01"
            rel="noopener noreferrer"
            className="footer-social-link"
            target="_blank"
          >
            <i className="bx bxl-github"></i>
          </a>
        </div>

        <div className="footer-copy-tel">Tel: +2347069200690</div>
        <span className="footer-copy">Designed & Built by Ifeanyi Ezeugwu</span>
      </div>
    </footer>
  );
};
