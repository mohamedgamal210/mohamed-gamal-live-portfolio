import React from "react";
import SectionTitle from "../common/SectionTitle";
import ProjectCard from "../projects/ProjectCard";
import { projects } from "../../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionTitle
          eyebrow="03 — Live Projects"
          title="Click a project and use it"
          text="These are functional React demos built as separate routes. The buttons below open the actual working applications."
        />
        <div className="projects-grid">
          {projects.map((project) => <ProjectCard key={project.id} project={project} />)}
        </div>
      </div>
    </section>
  );
}