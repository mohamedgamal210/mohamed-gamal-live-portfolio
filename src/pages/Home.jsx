import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Skills from "../components/sections/Skills";
import Projects from "../components/sections/Projects";
import Contact from "../components/sections/Contact";

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    // لو مفيش hash نرجع لأعلى الصفحة
    if (!location.hash) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      return;
    }

    // مثال: #about
    const id = location.hash.substring(1);

    // نستنى شوية لحد ما الـ sections تتعمل
    const timer = setTimeout(() => {
      const element = document.getElementById(id);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [location.pathname, location.hash]);

  return (
    <main>

      <section id="home">
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="contact">
        <Contact />
      </section>

    </main>
  );
}