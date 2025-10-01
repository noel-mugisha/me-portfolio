import React from "react";
import { useSelector } from "react-redux";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Welcome from "./Welcome";
import "remixicon/fonts/remixicon.css";
import AboutMe from "./AboutMe";
import ContactMe from "./ContactMe";
import Projects from "./Projects";

const subViews = [<Welcome />, <AboutMe />, <Projects />, "", <ContactMe />];

export default function Home() {
  const active = useSelector((store) => store.navigation);
  return (
    <>
      <div className="hidden h-screen lg:flex flex-col gap-0">
        <Navbar />
        {subViews[active]}
        <Footer />
      </div>
      <div className="h-screen lg:hidden flex flex-col gap-20 items-center justify-center w-9/12 m-auto">
        <p className="text-lg font-semibold secondary-4 ">Hello there 👋</p>
        <img
          src="/assets/images/smallScreenMaintenance.png"
          alt="small screen"
          className="md:w-8/12"
        />
        <p className="text-base accent-5 font-semibold text-center">
          Portfolio under <span className="accent-2">Maintenance</span>.
          ...
        </p>
      </div>
    </>
  );
}
