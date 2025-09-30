import { Resizable } from "re-resizable";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { my_data } from "../../data";
import projectsTechActions from "../../reducers/projectsTech";

export default function MainNav() {
  const projectsTech = useSelector((state) => state.projectsTech);
  let dispatch = useDispatch();
  const [isPanelOpen, setisPanelOpen] = React.useState(true);

  let isTechChecked = (tech) => {
    return (
      <i
        className={`ri-checkbox-${
          projectsTech.includes(tech) ? "fill" : "blank-line"
        }`}
      ></i>
    );
  };
  let filterTech = (tech) => {
    dispatch(projectsTechActions.update(tech));
  };
  return (
    <Resizable
      className="h-full border-right text-xs"
      defaultSize={{ width: "259px" }}
      minWidth={"245px"}
      maxWidth={"280px"}
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
      <button
        className={
          "focus:outline-none w-full border-bottom text-left flex pl-3 h-11 items-center text-white "
        }
        onClick={(e) => setisPanelOpen(!isPanelOpen)}
      >
        <i
          className={
            (isPanelOpen ? "ri-arrow-down-s-fill" : "ri-arrow-right-s-fill") +
            " text-base mr-2"
          }
        ></i>

        <span> projects</span>
      </button>
      <div
        className={
          (isPanelOpen ? "block h-auto" : "hidden h-0") +
          " flex flex-col pl-3 secondary-1 py-3 gap-2 text-[15px]"
        }
      >
        {my_data.techs &&
          my_data.techs.map((tech, i) => (
            <button
              className="flex items-center gap-2 focus:outline-none"
              key={i}
              onClick={(e) => filterTech(tech.tech)}
            >
              {isTechChecked(tech.tech)}
              <i className={`${tech.icon} ml-4`}></i>
              {tech.tech}
            </button>
          ))}
      </div>
    </Resizable>
  );
}
