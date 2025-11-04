import React from "react";
import "../styles/projectCard.scss";

export default function ProjectCard({ project, index }) {
  return (
    // Increased the card width and set a minimum width for responsiveness
    <div key={index} className="w-full md:w-[370px] min-w-[320px]">
      <p className="mb-2">
        <span className="text-sm accent-1 font-medium">Project #{index + 1}</span>
        <span className="text-sm secondary-1">
          {" "}
          // _{project.name.toLowerCase().replace(/ /g, "_")}
        </span>
      </p>
      {/* Increased card height and changed structure to flex-col */}
      <div className="h-[300px] rounded-lg relative overflow-hidden card-border flex flex-col bg-[#011627]">
        {/* Image container */}
        <div className="h-1/2 w-full overflow-hidden">
          <img
            // Use the project's image, or fall back to the default one
            src={project.img || "/assets/images/projectSample.jpg"}
            alt={project.name}
            className="h-full w-full object-cover object-top" // object-top focuses on the top of the image
          />
        </div>

        {/* Details and buttons container */}
        <div className="h-1/2 w-full card-border-top p-5 flex flex-col justify-between">
          <p className="secondary-1 text-sm">{project.smallDesc}</p>
          {/* Buttons container with updated styles */}
          <div className="flex gap-3 mt-3">
            <a
              href={project.gitLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-default text-xs font-medium flex items-center justify-center gap-2 px-4 py-2 rounded-lg"
            >
              <i className="ri-github-fill"></i> GitHub
            </a>
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-xs font-medium flex items-center justify-center gap-2 px-4 py-2 rounded-lg"
            >
              <i className="ri-external-link-line"></i> Visit Website
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}