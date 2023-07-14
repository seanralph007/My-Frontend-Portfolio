import React from "react";
// import tailwind from "../../images/Tailwind.png";
// import html from "../../images/html.png";
// import react from "../../images/React.png";
// import git from "../../images/git.jpg";
// import figma from "../../images/figma.png";

const Frontend = () => {
  return (
    <div className="skills-content">
      <h3 className="skills-title">Frontend developer</h3>
      <div className="skills-box">
        <div className="skills-group">
          <div className="skills-data">
            <div className="slider">
              <i className="bx bx-badge-check"></i>
            </div>

            <div>
              <h3 className="skill-name">HTML</h3>
            </div>
          </div>
          <div className="skills-data">
            <div className="slider">
              <i className="bx bx-badge-check"></i>
            </div>

            <div>
              <h3 className="skill-name">CSS|Tailwind</h3>
            </div>
          </div>
          <div className="skills-data">
            <div className="slider">
              <i className="bx bx-badge-check"></i>
            </div>

            <div>
              <h3 className="skill-name">JavaScript</h3>
            </div>
          </div>
        </div>

        <div className="skills-group">
          <div className="skills-data">
            <div className="slider">
              <i className="bx bx-badge-check"></i>
            </div>

            <div>
              <h3 className="skill-name">React</h3>
            </div>
          </div>
          <div className="skills-data">
            <div className="slider">
              <i className="bx bx-badge-check"></i>
            </div>

            <div>
              <h3 className="skill-name">Git</h3>
            </div>
          </div>
          <div className="skills-data">
            <div className="slider">
              <i className="bx bx-badge-check"></i>
            </div>

            <div>
              <h3 className="skill-name">Figma</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frontend;
