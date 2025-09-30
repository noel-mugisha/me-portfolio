import React from "react";
import { my_data } from "../data";
import "../styles/projectCard.scss";

export default function ProjectCard({ project, index }) {
  let tech = my_data.techs.find((tech) => project.tech.includes(tech.tech));
  return (
    <div key={index} className="w-[30%] mr-3">
      <p>
        <span className="text-xs accent-6">Project #</span>
        <span className="text-xs secondary-1">
          {" "}
          // _{project.name.toLowerCase()}
        </span>
      </p>
      <div className="mt-2 h-[12.5rem] rounded-lg relative overflow-hidden card-border">
        <i
          className={`${tech.icon} bg-[#86E1F9] input-color font-[600] px-1 rounded-[5px] absolute right-2.5 top-2.5`}
        ></i>
        <div className="h-[45%] w-full input-bg overflow-hidden">
          <img
            src="/assets/images/projectSample.jpg"
            alt=""
            className=" object-cover"
          />
        </div>
        <div className="h-[55%] w-full input-bg card-border-top p-4">
          <p className="secondary-1 text-xs">{project.smallDesc}</p>
          <a
            href={project.gitLink}
            target="_blank"
            className="btn-default flex w-28 gap-1 font-light px-[12px] py-[5px] rounded-lg text-[10px] my-3"
          >
            <i className="ri-github-line"></i> view-project
          </a>
        </div>
      </div>
    </div>
  );
}
