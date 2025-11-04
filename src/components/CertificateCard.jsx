import React from "react";
import "../styles/certificateCard.scss";

export default function CertificateCard({ certificate }) {
  return (
    <div className="certificate-card-v2">
      {/* Shine effect overlay */}
      <div className="card-shine"></div>

      {/* Image Container */}
      <div className="card-image-container">
        <img
          src={certificate.previewImg}
          alt={certificate.title}
          className="card-background-image"
        />
        
        {/* Gradient Overlay */}
        <div className="card-overlay-gradient"></div>
      </div>

      {/* Year Badge */}
      <div className="card-badge">{certificate.year}</div>

      {/* Content */}
      <div className="card-content">
        <h3 className="card-title">{certificate.title}</h3>
        <p className="card-issuer">
          Issued by {certificate.issuer}
        </p>
      </div>
    </div>
  );
}