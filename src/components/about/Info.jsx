import React from "react";
import NumberCounter from "number-counter";

const Info = () => {
  return (
    <div className="about-info grid">
      <div className="about-box">
        <i className="bx bx-award about-icon"></i>

        <h3 className="about-title">Experience</h3>
        <span className="about-subtitle">2+ Years Working</span>
      </div>

      <div className="about-box">
        <i className="bx bx-briefcase-alt about-icon"></i>

        <h3 className="about-title">Completed</h3>
        <span className="about-subtitle">
          <NumberCounter end={24} start={6} delay="4" postFix="+ Projects" />
        </span>
      </div>

      <div className="about-box">
        <i className="bx bxs-shield-plus  about-icon"></i>

        <h3 className="about-title">Hackathon</h3>
        <span className="about-subtitle">Appwrite</span>
      </div>
    </div>
  );
};

export default Info;
