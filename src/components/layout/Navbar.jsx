import React, { useState } from "react";
import { Menu, X, Code2 } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const closeMenu = () => {
    setOpen(false);
  };

  // الرجوع للـ Home من أي صفحة
  const goHome = () => {
    closeMenu();

    if (location.pathname === "/") {
      window.history.replaceState(null, "", "/");
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      navigate("/");
    }
  };

  // الذهاب لأي Section من أي صفحة
  const goToSection = (id) => {
    closeMenu();

    if (location.pathname === "/") {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      navigate(`/#${id}`);
    }
  };

  return (
    <header className="navbar">
      <div className="container nav-inner">

        {/* Logo */}
        <button className="brand" onClick={goHome}>
          <span className="brand-icon">
            <Code2 size={20} />
          </span>

          <span>
            Mohamed<span className="accent">Gamal</span>
          </span>
        </button>

        {/* Mobile Button */}
        <button
          className="mobile-toggle"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>

        {/* Navigation */}
        <nav className={`nav-links ${open ? "open" : ""}`}>

          <button onClick={goHome}>
            Home
          </button>

          <button onClick={() => goToSection("about")}>
            About
          </button>

          <button onClick={() => goToSection("skills")}>
            Skills
          </button>

          <button onClick={() => goToSection("projects")}>
            Projects
          </button>

          <button onClick={() => goToSection("contact")}>
            Contact
          </button>

        </nav>
      </div>
    </header>
  );
}