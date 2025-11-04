import { Resizable } from "re-resizable";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import active_sidenav_actions from "../../reducers/active_sidenav";

export default function SideNav() {
  let dispatch = useDispatch();
  let active_sidenav = useSelector((state) => state.active_sidenav);
  let navs = [
    { title: "skills", icon: "ri-terminal-box-fill" },
    { title: "personal info", icon: "ri-user-4-fill" },
    { title: "certificates", icon: "ri-award-fill" },
  ];
  return (
    <Resizable
      defaultSize={{ width: "52px" }}
      maxWidth={"52px"}
      minWidth={"52px"}
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
      className="h-full border-right flex py-3 items-center flex-col gap-3 text-md"
    >
      {/* <i class="ri-file-2-fill secondary-white opacity-75"></i> */}
      {navs.map((nav, i) => (
        <i
          key={i}
          className={`${nav.icon} secondary-white ${
            i === active_sidenav ? "opacity-80" : "opacity-40 animate-bounce"
          } cursor-pointer hover:opacity-80`}
          title={nav.title}
          onClick={(e) => dispatch(active_sidenav_actions.setActive(i))}
        ></i>
      ))}
    </Resizable>
    // <section className="w-12 bg-yellow-400 h-full overflow-hidden resize block">
    //   Hello
    // </section>
  );
}
