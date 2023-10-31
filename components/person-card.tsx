"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";

interface propsType {
  companyName: string;
  desc: string;
  img: string;
  name: string;
  designation: string;
  linkedin: string;
  github: string;
}

const PersonCard: React.FC<propsType> = ({
  companyName,
  desc,
  img,
  name,
  designation,
  linkedin,
  github
}) => {
  return (
    <div data-aos="zoom-in-up">
      <div className="border border-accent p-8 h-[450px] flex flex-col justify-between">
        <h2 className="text-3xl text-accent">{companyName}</h2>
        <p>{desc}</p>

        <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <a
          className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href={linkedin}
          target="_blank"
        >
          <BsLinkedin />
        </a>

        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href={github}
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </motion.div>

        {/* <div className="flex gap-4">
          <Image
            className="grayscale rounded-full"
            src={img}
            height={50}
            width={50}
            alt="user"
          />

          <div>
            <h2>{name}</h2>
            <p className="text-gray-500">{designation}</p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default PersonCard;