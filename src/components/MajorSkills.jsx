import React, { useState, useEffect } from "react";
import { my_data } from "../data";
import { motion } from "framer-motion";
import Iconify from "@iconify/iconify"; // Re-import Iconify

// A sleek, local Skeleton component that matches your app's UI
const SkillSkeleton = () => (
  <div className="w-full animate-pulse my-2">
    <div className="h-4 bg-[#1e2d3d] rounded w-3/4 mb-2"></div>
    <div className="h-3 bg-[#1e2d3d] rounded w-full"></div>
  </div>
);

export default function MajorSkills() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // This line tells Iconify to scan the component and render the icons
    Iconify.scan();

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, [loading]); // Re-run effect if loading state changes

  // ... (rest of the component logic is the same)
  const smoothVal = 2;
  const generateRange = (upto) => (
    <span>
      {[...Array(Math.ceil(upto / smoothVal)).keys()].map((_, i) => (
        <span key={i}>#</span>
      ))}
    </span>
  );

  const generateRemainder = (upto) => (
    <span>
      {[...Array(50 - Math.ceil(upto / smoothVal)).keys()].map((_, i) => (
        <span key={i}>&nbsp;</span>
      ))}
    </span>
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  if (loading) {
    return (
      <div className="w-full flex justify-around">
        <div className="flex flex-col gap-5 w-5/12">
          {[...Array(5)].map((_, i) => <SkillSkeleton key={i} />)}
        </div>
        <div className="flex flex-col gap-5 w-5/12">
          {[...Array(5)].map((_, i) => <SkillSkeleton key={i} />)}
        </div>
      </div>
    );
  }

  return (
    <motion.div
      className="w-full flex justify-around"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="flex flex-col gap-5 w-5/12">
        {my_data.major_webdev_skills &&
          my_data.major_webdev_skills.map((skill, i) => (
            <motion.div variants={itemVariants} key={i}>
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
            </motion.div>
          ))}
      </div>
      <div className="flex flex-col gap-5 w-5/12">
        {my_data.major_prog_skills &&
          my_data.major_prog_skills.map((skill, i) => (
            <motion.div variants={itemVariants} key={i}>
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
            </motion.div>
          ))}
      </div>
    </motion.div>
  );
}