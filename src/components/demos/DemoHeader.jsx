import React from "react";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

export default function DemoHeader({ title, description }) {
  return (
    <div className="demo-header">
      <div className="container demo-header-inner">
        <Link className="back-link" to="/"><ArrowLeft size={18}/> Back to Portfolio</Link>
        <div>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
        <span className="live-badge"><span></span> LIVE DEMO</span>
      </div>
    </div>
  );
}