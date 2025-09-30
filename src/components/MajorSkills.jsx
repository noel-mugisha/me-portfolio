import React from "react";
import { my_data } from "../data";
import Iconify from "@iconify/iconify";

export default function MajorSkills() {
  let smoothVal = 2;
  let generateRange = (upto) => {
    return (
      <span>
        {[...Array(Math.ceil(upto / smoothVal)).keys()].map(() => (
          <span>#</span>
        ))}
      </span>
    );
  };
  let generateRemainder = (upto) => {
    return (
      <span>
        {[...Array(50 - Math.ceil(upto / smoothVal)).keys()].map(() => (
          <span>&nbsp;</span>
        ))}
      </span>
    );
  };
  return (
    <div className="w-full flex justify-around">
      <div className="flex flex-col gap-5 w-5/12">
        {/* <h3 className=" font-bold mb-3 text-xs">// web_development</h3> */}
        {my_data.major_webdev_skills &&
          my_data.major_webdev_skills.map((skill, i) => (
            <div className="" key={i}>
              <p className="flex items-center gap-2">
                <i
                  className="iconify accent-6 text-lg"
                  data-icon={skill.icon}
                ></i>{" "}
                <span className="secondary-white text-xs">{skill.skill}</span>
              </p>
              <p className="pl-4">
                [
                <span className="text-[11px]">
                  {generateRange(skill.level)}
                  {generateRemainder(skill.level)}
                </span>
                ] <span className="accent-2">{skill.level}%</span>
              </p>
            </div>
          ))}
      </div>
      <div className="flex flex-col gap-5 w-5/12">
        {/* <h3 className=" font-bold mb-3 text-xs">// major_languages</h3> */}
        {my_data.major_prog_skills &&
          my_data.major_prog_skills.map((skill, i) => (
            <div className="" key={i}>
              <p className="flex items-center gap-2">
                <i
                  className="iconify accent-6 text-lg"
                  data-icon={skill.icon}
                ></i>{" "}
                <span className="secondary-white text-xs">{skill.skill}</span>
              </p>
              <p className="pl-4">
                [
                <span className="text-[11px]">
                  {generateRange(skill.level)}
                  {generateRemainder(skill.level)}
                </span>
                ] <span className="accent-2">{skill.level}%</span>
              </p>
            </div>
          ))}
      </div>
    </div>
  );
}
