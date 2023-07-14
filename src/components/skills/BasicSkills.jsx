import React from "react";

const BasicSkills = () => {
  return (
    <div className="skills-content">
      <h3 className="skills-title">Basic Skills</h3>
      <div className="skills-box">
        <div className="skills-group">
          <div className="skills-data">
            <i className="bx bx-badge-check"></i>

            <div>
              <h3 className="skill-name">Team work</h3>
            </div>
          </div>
          <div className="skills-data">
            <i className="bx bx-badge-check"></i>

            <div>
              <h3 className="skill-name">Communication</h3>
            </div>
          </div>
        </div>

        <div className="skills-group">
          <div className="skills-data">
            <i className="bx bx-badge-check"></i>

            <div>
              <h3 className="skill-name">Adaptability</h3>
            </div>
          </div>

          <div className="skills-data">
            <i className="bx bx-badge-check"></i>

            <div>
              <h3 className="skill-name">Commitment</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicSkills;
