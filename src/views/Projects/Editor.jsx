import { Resizable } from "re-resizable";
import React from "react";
import FakeScroller from "../../components/FakeScroller";
import { my_data } from "../../data";
import ProjectCard from "../../components/ProjectCard";

export default function Editor() {
  // Directly use the projects from the data file
  const projectsToDisplay = my_data.projects;

  return (
    <Resizable
      className="h-full flex-1 text-sm secondary-1 flex-col gap-0 overflow-y-auto no-scrollbar"
      defaultSize={{ width: "calc(100% - 259px)" }} // Adjust width to fill space
      enable={{
        top: false,
        topLeft: false,
        left: false,
        right: true,
        bottom: false,
        bottomLeft: false,
        bottomRight: false,
        topRight: false,
      }}
    >
      <div className="w-full border-bottom h-[43.7px] flex">
        <button className="flex h-full justify-center px-3 items-center border-right hover:bg-transparent">
          <span>my-projects</span>
          <i className="ri-close-fill ml-10"></i>
        </button>
      </div>
      <div className="w-full h-full flex justify-between">
        {/* Updated padding from p-4 to p-8 for better spacing */}
        <div className="h-full overflow-auto p-8 flex-1 no-scrollbar">
          {/* Updated classes to align cards to the top-left */}
          <div className="flex items-start justify-start w-full gap-8 flex-wrap">
            {projectsToDisplay.length > 0 ? (
              projectsToDisplay.map((project, i) => (
                <ProjectCard project={project} key={i} index={i} />
              ))
            ) : (
              <p className="text-secondary-1">No projects to display yet.</p>
            )}
          </div>
        </div>
        <FakeScroller />
      </div>
    </Resizable>
  );
}