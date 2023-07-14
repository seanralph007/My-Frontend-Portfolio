import React from "react";
import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container container">
        <div className="footer-social">
          <a
            href="https://www.twitter.com/Ifeanyi_arochim"
            rel="noopener noreferrer"
            className="footer-social-link"
            target="_blank"
          >
            <i className="bx bxl-twitter"></i>
          </a>
          <a
            href="https://www.instagram.com/ifeanyi_mindset"
            rel="noopener noreferrer"
            className="footer-social-link"
            target="_blank"
          >
            <i className="bx bxl-instagram"></i>
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

        <span className="footer-copy">Designed & Built by Ifeanyi Ezeugwu</span>
      </div>
    </footer>
  );
};
