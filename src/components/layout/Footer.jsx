import React from "react";
import { Mail, Phone, MessageCircle } from "lucide-react";
import "./Footer.css";

export default function Footer() {
  const phone = "201004654410";
  const email = "mohamedgamalfarrag210@gmail.com";

  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <h3>Mohamed Gamal</h3>
          <p>Front-End Developer building responsive and functional React applications.</p>
        </div>
        <div className="footer-links">
          <a href={`mailto:${email}`}><Mail size={17}/> {email}</a>
          <a href={`tel:+20${phone.slice(2)}`}><Phone size={17}/> 01004654410</a>
          <a href={`https://wa.me/${phone}`} target="_blank" rel="noreferrer"><MessageCircle size={17}/> WhatsApp</a>
        </div>
      </div>
      <div className="container copyright">© {new Date().getFullYear()} Mohamed Gamal. Built with React.</div>
    </footer>
  );
}