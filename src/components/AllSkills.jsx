import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Local skeleton components for a consistent loading look
const SkeletonBadge = () => (
  <div className="h-[25px] w-24 bg-[#1e2d3d] rounded animate-pulse"></div>
);

const SkeletonGroup = () => (
  <div className="mb-6 w-full">
    <div className="h-3 bg-[#1e2d3d] rounded w-1/3 mb-3 animate-pulse"></div>
    <div className="flex flex-wrap gap-2">
      {[...Array(6)].map((_, i) => <SkeletonBadge key={i} />)}
    </div>
  </div>
);

export default function AllSkills() {
  const [loading, setLoading] = useState(true);

  // Simulate a loading period for a better UX
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  // Animation variants for Framer Motion
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Each skill group will animate in one after another
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

  // Show skeleton loader while loading
  if (loading) {
    return (
      <div className="w-full">
        <SkeletonGroup />
        <SkeletonGroup />
        <SkeletonGroup />
        <SkeletonGroup />
        <SkeletonGroup />
        <SkeletonGroup />
      </div>
    );
  }

  // Show animated content after loading
  return (
    <motion.div
      className="w-full"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="mb-6" variants={itemVariants}>
        <p className="mb-2 text-xs font-bold">
          // frontend frameworks and libraries{" "}
        </p>
        <p className="flex flex-wrap gap-2">
          <img
            className=" h-[25px]"
            src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"
          />
          <img
            className=" h-[25px]"
            src="https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white"
          />
          <img
            className=" h-[25px]"
            src="https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white"
          />
          <img
            className=" h-[25px]"
            src="https://img.shields.io/badge/threejs-black?style=for-the-badge&logo=three.js&logoColor=white"
          />
          <img
            className=" h-[25px]"
            src="https://img.shields.io/badge/angular-%23DD0031.svg?style=for-the-badge&logo=angular&logoColor=white"
          />
          <img
            className=" h-[25px]"
            src="https://img.shields.io/badge/CodeIgniter-%23EF4223.svg?style=for-the-badge&logo=codeIgniter&logoColor=white"
          />
          <img
            className=" h-[25px]"
            src="https://img.shields.io/badge/jquery-%230769AD.svg?style=for-the-badge&logo=jquery&logoColor=white"
          />
          <img
            className=" h-[25px]"
            src="https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=mui&logoColor=white"
          />
          <img
            className=" h-[25px]"
            src="https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white"
          />
          <img
            className=" h-[25px]"
            src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white"
          />
        </p>
      </motion.div>

      <motion.div className="mb-6" variants={itemVariants}>
        <p className="mb-2 text-xs font-bold">
          // backend frameworks and libraies
        </p>
        <p className="flex flex-wrap gap-2">
          <img src="https://img.shields.io/badge/spring-%236DB33F.svg?style=for-the-badge&logo=spring&logoColor=white" />
          <img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" />
          <img src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB" />
          <img src="https://img.shields.io/badge/DJANGO-REST-ff1709?style=for-the-badge&logo=django&logoColor=white&color=ff1709&labelColor=gray" />
          <img src="https://img.shields.io/badge/flask-%23000.svg?style=for-the-badge&logo=flask&logoColor=white" />
          <img src="https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens" />
          <img src="https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white" />
          <img src="https://img.shields.io/badge/Socket.io-black?style=for-the-badge&logo=socket.io&badgeColor=010101" />
          <img src="https://img.shields.io/badge/opencv-%23white.svg?style=for-the-badge&logo=opencv&logoColor=white" />
        </p>
      </motion.div>

      <motion.div className="mb-6" variants={itemVariants}>
        <p className="mb-2 text-xs font-bold">// mobile frameworks</p>
        <p className="flex flex-wrap gap-2">
          <img src="https://img.shields.io/badge/Flutter-%2302569B.svg?style=for-the-badge&logo=Flutter&logoColor=white" />
          <img src="https://img.shields.io/badge/react_native-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" />
        </p>
      </motion.div>

      <motion.div className="mb-6" variants={itemVariants}>
        <p className="mb-2 text-xs font-bold">// ML</p>
        <p className="flex flex-wrap gap-2">
          <img src="https://img.shields.io/badge/numpy-%23013243.svg?style=for-the-badge&logo=numpy&logoColor=white" />
          <img src="https://img.shields.io/badge/pandas-%23150458.svg?style=for-the-badge&logo=pandas&logoColor=white" />
          <img src="https://img.shields.io/badge/cvzone-%23013243.svg?style=for-the-badge&logo=numpy&logoColor=white" />
        </p>
      </motion.div>

      <motion.div className="mb-6" variants={itemVariants}>
        <p className="mb-2 text-xs font-bold">// design</p>
        <p className="flex flex-wrap gap-2">
          <img src="https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white" />
          <img src="https://img.shields.io/badge/Adobe%20XD-470137?style=for-the-badge&logo=Adobe%20XD&logoColor=#FF61F6" />
          <img src="https://img.shields.io/badge/adobe%20illustrator-%23FF9A00.svg?style=for-the-badge&logo=adobe%20illustrator&logoColor=white" />
          <img src="https://img.shields.io/badge/blender-%23F5792A.svg?style=for-the-badge&logo=blender&logoColor=white" />{" "}
        </p>
      </motion.div>

      <motion.div className="mb-6" variants={itemVariants}>
        <p className="mb-2 text-xs font-bold">// operating systems</p>
        <p className="flex flex-wrap gap-2">
          <img src="https://img.shields.io/badge/Windows-0078D6?style=for-the-badge&logo=windows&logoColor=white" />
          <img src="https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black" />
          <img src="https://img.shields.io/badge/Kali-268BEE?style=for-the-badge&logo=kalilinux&logoColor=white" />
          <img src="https://img.shields.io/badge/Ubuntu-E95420?style=for-the-badge&logo=ubuntu&logoColor=white" />
          <img src="https://img.shields.io/badge/-Zorin%20OS-%2310AAEB?style=for-the-badge&logo=zorin&logoColor=white" />
          <img src="https://img.shields.io/badge/-RaspberryPi-C51A4A?style=for-the-badge&logo=Raspberry-Pi" />
        </p>
      </motion.div>
    </motion.div>
  );
}