import React from "react";
import { my_data } from "../../data";
import CertificateCard from "../../components/CertificateCard";
import FakeScroller from "../../components/FakeScroller";
import { motion } from "framer-motion";

export default function CertificatesViewer() {
  return (
    <div className="h-full flex-1 text-sm secondary-1 flex-col gap-0 overflow-hidden flex">
      <div className="w-full border-bottom h-[43.7px] flex-shrink-0">
        <button className="flex h-full justify-center px-3 items-center border-right hover:bg-transparent text-sm">
          <span>my-certificates</span>
          <i className="ri-close-fill ml-14"></i>
        </button>
      </div>
      <div className="w-full h-full flex flex-1 justify-between overflow-hidden">
        <div className="h-full overflow-auto p-8 flex-1 no-scrollbar">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: { staggerChildren: 0.1 },
              },
            }}
          >
            {my_data.certificates.map((cert, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { y: 20, opacity: 0 },
                  visible: { y: 0, opacity: 1 },
                }}
              >
                <CertificateCard certificate={cert} />
              </motion.div>
            ))}
          </motion.div>
        </div>
        <FakeScroller />
      </div>
    </div>
  );
}