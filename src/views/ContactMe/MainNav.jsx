import { Resizable } from "re-resizable";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { my_data } from "../../data";
import contacts_panel_actions from "../../reducers/contacts_panel";
import personalinfo_panel_actions from "../../reducers/personalinfo_panel";

export default function MainNav() {
  const contacts_panel_state = useSelector((state) => state.contacts_panel);
  const personalinfo_panel_state = useSelector(
    (state) => state.personalinfo_panel
  );
  const languages_panel_state = useSelector((state) => state.languages_panel);

  const dispatch = useDispatch();
  let contacts_panel_switch = (state) =>
    dispatch(contacts_panel_actions.open(!contacts_panel_state));
  let personalInfo_panel_switch = (state) =>
    dispatch(personalinfo_panel_actions.open(!personalinfo_panel_state));

  return (
    <Resizable
      className="h-full border-right text-xs"
      defaultSize={{ width: "259px" }}
      minWidth={"245px"}
      maxWidth={"320px"}
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
      <button
        className={
          "w-full border-bottom text-left flex pl-3 h-11 items-center text-white "
        }
        onClick={(e) => personalInfo_panel_switch(personalinfo_panel_state)}
      >
        <i
          className={
            (personalinfo_panel_state
              ? "ri-arrow-down-s-fill"
              : "ri-arrow-right-s-fill") + " text-base mr-2"
          }
        ></i>

        <span>find-me-also-on</span>
      </button>
      <div
        className={
          (personalinfo_panel_state ? "block h-auto" : "hidden h-0") +
          " flex flex-col pl-5 secondary-1 text-md py-3 gap-2"
        }
      >
        {Object.keys(my_data.links).map((keyname, i) => (
          <p className="" key={i}>
            <a
              href={my_data.links[keyname]}
              className="flex items-center gap-2"
            >
              <i className={`ri-${keyname}-fill text-md`}></i> {keyname}
            </a>
          </p>
        ))}
      </div>
    </Resizable>
  );
}
