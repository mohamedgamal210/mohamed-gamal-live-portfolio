import React from "react";
import SectionTitle from "../common/SectionTitle";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <SectionTitle eyebrow="01 — About" title="Building useful interfaces, not static mockups" text="I focus on clean component architecture, responsive layouts and interactions that actually work." />
        <div className="about-grid">
          <div className="about-copy">
            <p>
              I am Mohamed Gamal, a Front-End Developer with a background in
              commerce and accounting. I combine business understanding with
              practical web development to create interfaces that are easy to
              use and maintain.
            </p>
            <p>
              My portfolio projects are intentionally functional: you can add
              products to a cart, manage tasks, play a game and filter a
              business dashboard directly from this website.
            </p>
          </div>
          <div className="about-facts">
            <div><strong>React</strong><span>Component-based UI</span></div>
            <div><strong>JavaScript</strong><span>Interactive logic</span></div>
            <div><strong>Responsive</strong><span>Desktop & mobile</span></div>
            <div><strong>ERP</strong><span>Business workflow experience</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}