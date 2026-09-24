import React from "react";
import { ArrowDown, Github, Linkedin, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
  const phone = "201004654410";
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div>
          <div className="status-pill"><span className="status-dot"></span> Available for freelance work</div>
          <p className="hero-kicker">Hello, I'm</p>
          <h1>Mohamed <span>Gamal</span></h1>
          <h2>Front-End Developer</h2>
          <p className="hero-text">
            I build responsive, component-based web applications with React,
            JavaScript and modern UI practices. Every project below includes a
            real interactive demo—not just a screenshot.
          </p>

          <div className="hero-actions">
            <a className="btn primary" href="#projects">View Live Projects <ArrowDown size={18}/></a>
            <a className="btn secondary" href={`https://wa.me/${phone}`} target="_blank" rel="noreferrer">
              <MessageCircle size={18}/> WhatsApp Me
            </a>
          </div>

          <div className="socials">
            <a href="mailto:mohamedgamalfarrag210@gmail.com">Email</a>
            <a href="https://github.com/" target="_blank" rel="noreferrer"><Github size={17}/> GitHub</a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><Linkedin size={17}/> LinkedIn</a>
          </div>
        </div>

        <div className="hero-card">
          <div className="code-line"><span>const</span> developer = {"{"}</div>
          <div className="code-line indent">name: <b>"Mohamed Gamal"</b>,</div>
          <div className="code-line indent">role: <b>"Front-End Developer"</b>,</div>
          <div className="code-line indent">stack: [<b>"React"</b>, <b>"JS"</b>, <b>"CSS"</b>],</div>
          <div className="code-line indent">focus: <b>"Functional UI"</b></div>
          <div className="code-line">{"};"}</div>
          <div className="terminal-cursor"></div>
        </div>
      </div>
    </section>
  );
}