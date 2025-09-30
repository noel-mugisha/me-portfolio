import { Resizable } from "re-resizable";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { my_data } from "../../data";
import contacts_panel_actions from "../../reducers/contacts_panel";
import personalinfo_panel_actions from "../../reducers/personalinfo_panel";
import education_panel_actions from "../../reducers/education_panel";
import active_persInfo_actions from "../../reducers/active_personalInfo";
import education_level_actions from "../../reducers/education_level";
import languages_panel_actions from "../../reducers/languages_panel";
import selected_skills_actions from "../../reducers/selected_skills";

export default function MainNav() {
  const contacts_panel_state = useSelector((state) => state.contacts_panel);
  const active_sidenav = useSelector((state) => state.active_sidenav);
  let selected_skills = useSelector((state) => state.selected_skills);
  const personalinfo_panel_state = useSelector(
    (state) => state.personalinfo_panel
  );
  const education_panel_state = useSelector((state) => state.education_panel);
  const languages_panel_state = useSelector((state) => state.languages_panel);
  const active_persInfo_state = useSelector((state) => state.active_persInfo);
  const education_level_state = useSelector((state) => state.education_level);

  const dispatch = useDispatch();
  let contacts_panel_switch = (state) =>
    dispatch(contacts_panel_actions.open(!contacts_panel_state));
  let personalInfo_panel_switch = (state) =>
    dispatch(personalinfo_panel_actions.open(!personalinfo_panel_state));
  let education_panel_switch = (state) =>
    dispatch(education_panel_actions.open(!education_panel_state));
  let languages_panel_switch = (state) =>
    dispatch(languages_panel_actions.open(!languages_panel_state));
  let active_persInfo_handler = (newstate) =>
    dispatch(active_persInfo_actions.setActive(newstate));
  let active_educationLevel_handler = (newstate) =>
    dispatch(education_level_actions.setActive(newstate));

  return (
    <Resizable
      className="h-full border-right text-xs"
      defaultSize={{ width: "224px" }}
      minWidth={"200px"}
      maxWidth={"220px"}
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
      {active_sidenav === 0 && (
        <div>
          <div>
            <button
              className="w-full border-bottom text-left flex pl-3 h-11 items-center text-md text-white opacity-90 hover:opacity-100"
              onClick={(e) => dispatch(selected_skills_actions.select(0))}
            >
              <i
                className={`ri-vip-diamond-${
                  selected_skills === 0 ? "fill" : "line"
                } text-sm mr-2`}
              ></i>
              <span> major_skills</span>
            </button>
            <button
              className="w-full border-bottom text-left flex pl-3 h-11 items-center text-md text-white opacity-90 hover:opacity-100"
              onClick={(e) => dispatch(selected_skills_actions.select(1))}
            >
              <i
                className={`ri-vip-diamond-${
                  selected_skills === 1 ? "fill" : "line"
                } text-sm mr-2`}
              ></i>
              <span> all_skills</span>
            </button>
          </div>
        </div>
      )}
      {active_sidenav === 1 && (
        <div>
          <div>
            <button
              className="w-full border-bottom text-left flex pl-3 h-11 items-center text-md text-white"
              onClick={(e) =>
                personalInfo_panel_switch(!personalinfo_panel_state)
              }
            >
              <i
                className={
                  (personalinfo_panel_state
                    ? "ri-arrow-down-s-fill"
                    : "ri-arrow-right-s-fill") + " text-base mr-2"
                }
              ></i>
              <span> personal-info</span>
            </button>
            <div
              className={
                (personalinfo_panel_state ? "block h-auto" : "hidden h-0") +
                " flex flex-col pl-4 secondary-1 py-3 text-sm"
              }
            >
              <button
                className={
                  "flex items-center gap-1 hover:text-white hover:opacity-80 " +
                  (active_persInfo_state === 0 ? "secondary-4" : "")
                }
                onClick={(e) => active_persInfo_handler(0)}
              >
                <i className="ri-arrow-drop-right-line text-3xl"></i>
                <i className="ri-folder-3-fill text-md -ml-1 mr-1 accent-3"></i>
                <span>bio</span>
              </button>
              <button
                className={
                  "flex items-center gap-1 hover:text-white hover:opacity-80 -mt-2 " +
                  (active_persInfo_state === 1 ? "secondary-4" : "")
                }
                onClick={(e) => active_persInfo_handler(1)}
              >
                <i className="ri-arrow-drop-right-line text-3xl"></i>
                <i className="ri-folder-3-fill text-md -ml-1 mr-1 accent-2"></i>
                <span>interests</span>
              </button>
              <button
                className={
                  "flex items-center gap-1 -mt-2 hover:text-white hover:opacity-80 " +
                  (active_persInfo_state === 2 ? "secondary-4" : "")
                }
                onClick={(e) => education_panel_switch(education_panel_state)}
              >
                <i
                  className={
                    (education_panel_state
                      ? "ri-arrow-drop-down-line"
                      : "ri-arrow-drop-right-line") + " text-3xl"
                  }
                ></i>
                <i className="ri-folder-3-fill text-md -ml-1 mr-1 secondary-3"></i>
                <span>education</span>
              </button>
              <div
                className={
                  (education_panel_state ? "h-auto block" : "hidden h-0") +
                  " pl-7 secondary-1"
                }
              >
                {my_data.education &&
                  my_data.education.map((education, i) => (
                    <button
                      key={i}
                      className={
                        "hover:text-white hover:opacity-80 " +
                        (education_level_state === i &&
                        active_persInfo_state === 2
                          ? "secondary-4"
                          : "")
                      }
                      onClick={(e) => {
                        active_persInfo_handler(2);
                        active_educationLevel_handler(i);
                      }}
                    >
                      <i className="ri-ball-pen-line"></i>
                      <span>
                        {" "}
                        {education.level.toLowerCase().split(" ").join("-")}
                      </span>
                    </button>
                  ))}
              </div>
            </div>
          </div>
          <div>
            {" "}
            <button
              className={
                "w-full border-bottom text-left flex pl-3 h-11 items-center text-white " +
                (personalinfo_panel_state ? "border-top" : "")
              }
              onClick={(e) => languages_panel_switch(languages_panel_state)}
            >
              <i
                className={
                  (languages_panel_state
                    ? "ri-arrow-down-s-fill"
                    : "ri-arrow-right-s-fill") + " text-base mr-2"
                }
              ></i>

              <span> languages</span>
            </button>
            <div
              className={
                (languages_panel_state ? "block h-auto" : "hidden h-0") +
                " flex flex-col pl-5 secondary-1 text-md py-3 gap-2"
              }
            >
              {my_data.languages &&
                my_data.languages.map((lang, i) => (
                  <p key={i} className="flex items-center gap-2">
                    <i className="ri-global-fill text-md"></i>
                    <span> {lang}</span>
                  </p>
                ))}
            </div>
          </div>
          <div>
            {" "}
            <button
              className={
                "w-full border-bottom text-left flex pl-3 h-11 items-center text-white " +
                (languages_panel_state ? "border-top" : "")
              }
              onClick={(e) => contacts_panel_switch(contacts_panel_state)}
            >
              <i
                className={
                  (contacts_panel_state
                    ? "ri-arrow-down-s-fill"
                    : "ri-arrow-right-s-fill") + " text-base mr-2"
                }
              ></i>

              <span> contacts</span>
            </button>
            <div
              className={
                (contacts_panel_state ? "block h-auto" : "hidden h-0") +
                " flex flex-col pl-5 secondary-1 text-md py-3 gap-2"
              }
            >
              <p className="flex items-center gap-2">
                <i className="ri-mail-fill text-md"></i> noelmugisha332@gmail.com
              </p>
              <p className="flex items-center gap-2">
                <i className="ri-phone-fill text-md"></i> +250793136798 
              </p>
            </div>
          </div>
        </div>
      )}
    </Resizable>
  );
}
