import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { my_data } from "../data";
import { navlinks } from "../data/navlinks";
import "../styles/navbar.scss";
import navActions from "../reducers/navigation";

export default function () {
  const dispatch = useDispatch();
  const active = useSelector((store) => store.navigation);
  const navigateHandler = (navId) => dispatch(navActions.navigate(navId));
  return (
    <nav className=" flex justify-between h-11 items-center text-xs secondary-1 primary-bg-2">
      <div className="flex gap-9 h-full">
        <button onClick={(e) => navigateHandler(0)} className="px-7">
          _{my_data.firstName.toLowerCase().split(" ").join("-")}
        </button>
        <div className=" flex ml-20 h-full">
          {navlinks &&
            navlinks.map((navlink, i) => (
              <button
                key={i}
                onClick={(e) => navigateHandler(i)}
                className={
                  (i === active ? "navlink-active" : "") +
                  " h-full px-8 navlink hover:text-white"
                }
              >
                _{navlink}
              </button>
            ))}
        </div>
      </div>
      <div className="h-full">
        <button
          onClick={(e) => navigateHandler(4)}
          className={
            (active === 4 ? "navlink-active" : "") +
            " h-full contact-me-btn px-7 border-left hover:text-white"
          }
        >
          _contact-me
        </button>
      </div>
    </nav>
  );
}
