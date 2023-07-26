import React from "react";
// import { Link } from "react-router-dom";

const Social = () => {
  return (
    <div className="home-social">
      <a
        href="https://www.twitter.com/Ifeanyi_arochim"
        rel="noopener noreferrer"
        className="home-social-icon"
        target="_blank"
      >
        <i className="uil uil-twitter-alt"></i>
      </a>
      {/* <a
        href="https://www.instagram.com/ifeanyi_mindset"
        rel="noopener noreferrer"
        className="home-social-icon"
        target="_blank"
      >
        <i className="uil uil-instagram"></i>
      </a> */}
      <a
        href="https://www.github.com/Ify01"
        rel="noopener noreferrer"
        className="home-social-icon"
        target="_blank"
      >
        <i className="uil uil-github-alt"></i>
      </a>
      <a
        href="https://www.linkedin.com/in/ezeugwu-ifeanyi-1a996a15b"
        rel="noopener noreferrer"
        className="home-social-icon"
        target="_blank"
      >
        <i className="uil uil-linkedin-alt"></i>
      </a>
    </div>
  );
};

export default Social;
