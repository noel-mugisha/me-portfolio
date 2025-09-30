import React from "react";
import bgBlurs from "../assets/bg-blurs.png";
import MacImgWindow from "../components/MacWindow";
import { my_data } from "../data";
import "../styles/welcome.scss";
import { motion } from "framer-motion";

export default function Welcome() {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      layout
      transition={{ duration: 0.5 }}
      className="flex-1 flex justify-center items-center overflow-hidden m-auto w-8/12"
    >
      <div className="w-5/12 secondary-white">
        <p className=" text-xs">Hellooo 👋. I'm</p>
        <h4 className=" text-5xl mt-3">{my_data.firstName}</h4>
        <p className=" text-lg mt-2 secondary-3">{my_data.proffession}</p>
        <p className=" text-xs mt-14 secondary-1">// welcome to my portfolio</p>
        <p className=" text-xs mt-1 secondary-1">
          // you can also visit my Github account
        </p>
        <p className="text-xs mt-1">
          <span className="secondary-3">const </span>
          <span className="secondary-2">githubLink </span>
          <span className="secondary-white">= </span>
          <a href={my_data.links.github} target="_blank" className="accent-3">
            "{my_data.links.github}"
          </a>
          <span className="secondary-white">;</span>
        </p>
      </div>
{/*       <div className="w-6/12 relative">
        <MacImgWindow
          img={my_data.img}
          img_name={my_data.firstName}
          styles="w-8/12 left-9 top-14 absolute z-10"
        />
        <img
          src={bgBlurs}
          alt="blurs"
          className="w-full blurs scale-y-150 scale-x-110"
        />
      </div> */}
    </motion.div>
  );
}
