import React from "react";
import SectionTitle from "../common/SectionTitle";

const skills = ["React", "JavaScript", "HTML5", "CSS3", "Bootstrap", "React Router", "Git & GitHub", "Responsive Design", "REST API Basics", "ERP Workflows"];

export default function Skills() {
  return (
    <section id="skills" className="section section-alt">
      <div className="container">
        <SectionTitle eyebrow="02 — Skills" title="Tools I use to turn ideas into working products" />
        <div className="skill-list">
          {skills.map((skill, index) => (
            <div className="skill-item" key={skill}>
              <span>0{index + 1}</span>
              <strong>{skill}</strong>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}