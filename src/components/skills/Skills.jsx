import React from "react";
import "./Skills.css";
import Frontend from "./Frontend";
import BasicSkills from "./BasicSkills";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section-title">Skills</h2>
      <span className="section-subtitle">My technical level</span>

      <div className="skills-container container grid">
        <Frontend />

        <BasicSkills />
      </div>
    </section>
  );
};

export default Skills;
