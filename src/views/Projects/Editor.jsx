import { Resizable } from "re-resizable";
import React from "react";
import FakeScroller from "../../components/FakeScroller";
import { useSelector } from "react-redux";
import { my_data } from "../../data";
import ProjectCard from "../../components/ProjectCard";

export default function Editor() {
  const projectsTech = useSelector((state) => state.projectsTech);
  let filteredProjects = [];
  let remainingProjects = my_data.projects;
  for (var projectTech of projectsTech) {
    filteredProjects = [
      ...filteredProjects,
      ...remainingProjects.filter((project) =>
        project.tech.includes(projectTech)
      ),
    ];
    remainingProjects = [
      ...remainingProjects.filter(
        (project) => !project.tech.includes(projectTech)
      ),
    ];
  }

  return (
    <Resizable
      className="h-full flex-1 text-sm secondary-1 flex-col gap-0 overflow-hidden"
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
        <button className="flex h-full justify-center px-3 items-center border-right hover:bg-transparent hover:o">
          <span>{projectsTech.length > 0 ? projectsTech.join("_") : "_"}</span>
          <i className="ri-close-fill ml-10"></i>
        </button>
      </div>
      <div className="w-full h-full flex justify-between">
        <div className="h-full overflow-hidden p-4 flex-1">
          <div className="flex items-center flex-1 w-10/12 m-auto gap-6 flex-wrap mt-7">
            {filteredProjects &&
              filteredProjects.map((project, i) => (
                <ProjectCard project={project} key={i} index={i} />
              ))}
          </div>
        </div>
        <FakeScroller />
      </div>
    </Resizable>
  );
}
