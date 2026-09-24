import React from "react";
import { Mail, Phone, MessageCircle } from "lucide-react";
import SectionTitle from "../common/SectionTitle";

export default function Contact() {
  const email = "mohamedgamalfarrag210@gmail.com";
  const whatsapp = "201004654410";

  return (
    <section id="contact" className="section section-alt">
      <div className="container">
        <SectionTitle eyebrow="04 — Contact" title="Let's build something useful" text="You can contact me directly by email, phone or WhatsApp." />
        <div className="contact-grid">
          <a className="contact-card" href={`mailto:${email}`}>
            <Mail />
            <div><span>Email</span><strong>{email}</strong></div>
          </a>
          <a className="contact-card" href="tel:+201004654410">
            <Phone />
            <div><span>Phone</span><strong>01004654410</strong></div>
          </a>
          <a className="contact-card whatsapp" href={`https://wa.me/${whatsapp}`} target="_blank" rel="noreferrer">
            <MessageCircle />
            <div><span>WhatsApp</span><strong>Message me directly</strong></div>
          </a>
        </div>
      </div>
    </section>
  );
}