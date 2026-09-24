import React from "react";
import { ArrowUpRight, Play } from "lucide-react";
import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-preview">
        <div className="preview-window">
          <span></span><span></span><span></span>
        </div>
        <div className="preview-content">
          <strong>{project.title}</strong>
          <small>{project.category}</small>
        </div>
      </div>

      <div className="project-body">
        <div className="project-heading">
          <div>
            <h3>{project.title}</h3>
            <span>{project.category}</span>
          </div>
          <Link className="icon-link" to={project.demo} title="Open live demo">
            <ArrowUpRight size={20} />
          </Link>
        </div>

        <p>{project.description}</p>

        <div className="tags">
          {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
        </div>

        <Link className="demo-button" to={project.demo}>
          <Play size={17} fill="currentColor" /> Open Live Demo
        </Link>
      </div>
    </article>
  );
}