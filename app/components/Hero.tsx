"use client";
import React from "react";
import Socials from "./Socials";
import Link from "next/link";
import { motion } from "framer-motion";
import HeroImg from "./HeroImg";
import Typed from "./Typed";

const Hero = () => {
  const heroVariant = {
    hidden: {
      opacity: 0,
      translateY: 0,
    },
    hidden2: {
      opacity: 0,
      translateX: -100,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
    slider: {
      opacity: 1,
      translateX: 0,
      transition: {
        duration: 0.5,
      },
    },
    hover: {
      translateY: -10,
      scale: 1.1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const imageVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const textVariant = {
    hidden: {
      opacity: 0,
    },
  };
  return (
    <motion.div
      variants={heroVariant}
      initial="hidden"
      animate="visible"
      className="w-full flex flex-col gap-5"
    >
      <div className="flex flex-col md:flex-row gap-5">
        <motion.div className="w-full md:w-2/3 h-auto md:h-[350px] bg-[#1d1c1c] drop-shadow-lg rounded-sm p-4 md:p-8 flex justify-start items-center">
          <h1 className="text-white font-light text-lg md:text-4xl md:leading-[50px]">
            <span className="">Hi There!!!</span>
            <br />
            I create aesthetic and functional
            <br />
            <Typed />
            <br />
            with unique technologies.
          </h1>
        </motion.div>
        <motion.div
          variants={imageVariants}
          className="w-full md:w-1/3 rounded-sm drop-shadow-lg"
        >
          <HeroImg />
        </motion.div>
      </div>
      <div className="h-auto md:h-[100px] flex flex-col md:flex-row justify-between gap-3">
        <motion.div
          variants={heroVariant}
          initial="hidden2"
          whileInView="slider"
          viewport={{ once: true }}
          className="w-full md:w-1/3 h-auto md:h-[100px] bg-[#1d1c1c] p-8 flex flex-col md:flex-row gap-5 justify-between items-center rounded-sm"
        >
          <h2 className="text-3xl font-light text-white">My Projects!</h2>
          <motion.p variants={heroVariant} whileHover="hover">
            <Link
              className="p-2 bg-white text-[#F59E0B] rounded-md"
              href="/projects"
            >
              See more
            </Link>
          </motion.p>
        </motion.div>
        <div className="hidden md:block md:w-1/3 invisible "></div>
        <Socials />
      </div>
    </motion.div>
  );
};

export default Hero;
