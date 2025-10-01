import React from "react";
import { useSelector } from "react-redux";
import AllSkills from "../../components/AllSkills";
import FakeScroller from "../../components/FakeScroller";
import MajorSkills from "../../components/MajorSkills";

export default function Skills_Certificates_Viewer() {
  let active_sidenav = useSelector((state) => state.active_sidenav);
  let selected_skills = useSelector((state) => state.selected_skills);
  let active_panel =
    active_sidenav === 0
      ? selected_skills === 0
        ? "major_skills"
        : "all_skills"
      : "certificates";
  return (
    <div className="h-full border-right text-sm secondary-1 flex-col flex-1 gap-0 overflow-y-auto no-scrollbar">
      <div className="w-full border-bottom h-[43.7px] flex">
        <button className="flex h-full justify-center px-3 items-center border-right hover:bg-transparent text-sm">
          <span>{active_panel}</span>
          <i className="ri-close-fill ml-14"></i>
        </button>
      </div>
      <div className="w-full h-full flex flex-1">
        <div className="h-full flex-1 p-8">
          {active_panel === "major_skills" && <MajorSkills />}
          {active_panel === "all_skills" && <AllSkills />}
        </div>
        <FakeScroller />
      </div>
    </div>
  );
}
