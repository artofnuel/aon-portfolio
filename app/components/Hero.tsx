"use client";
import React from "react";
import Socials from "./Socials";
import Link from "next/link";
import { motion } from "framer-motion";
import HeroImg from "./HeroImg";
import Typed from "./Typed";
import { TypeAnimation } from "react-type-animation";
import useMyStore from "../store/mystate";

const Hero = () => {
  const { falseNav } = useMyStore();

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
      className="w-full h-full flex flex-col gap-5"
      // onClick={falseNav}
    >
      <div className="flex flex-col md:flex-row gap-5">
        <motion.div className="w-full md:w-2/3 h-auto md:h-[400px] bg-bkg drop-shadow-lg rounded-sm p-4 md:p-8 flex justify-start items-center">
          <h1 className="text-white font-light text-lg md:text-4xl md:leading-[50px]">
            <span className="">
              Hi There! <br />I am a Frontend Web Developer.
            </span>
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

      <div className="w-full h-auto md:h-[100px] flex flex-col md:flex-row justify-between gap-5">
        <div className="w-full md:w-2/3 flex flex-col md:flex-row gap-5">
          <motion.div
            variants={heroVariant}
            initial="hidden2"
            whileInView="slider"
            viewport={{ once: true }}
            className="w-full md:w-1/2 h-auto md:h-[100px] bg-bkg p-8 flex flex-col md:flex-row gap-5 justify-between items-center rounded-sm"
          >
            <h2 className="text-3xl font-light text-white">My Projects!</h2>
            <motion.p variants={heroVariant} whileHover="hover">
              <Link
                className="p-2 bg-white text-primary rounded-md"
                href="/projects"
              >
                See more
              </Link>
            </motion.p>
          </motion.div>

          <motion.div
            variants={heroVariant}
            initial="hidden2"
            whileInView="slider"
            viewport={{ once: true }}
            className="w-full md:w-1/2 h-auto md:h-[100px] bg-bkg p-8 flex flex-col md:flex-row gap-5 justify-between items-center rounded-sm"
          >
            <h2 className="text-3xl font-light text-white">My Skills?</h2>
            <motion.p variants={heroVariant} whileHover="hover">
              <TypeAnimation
                sequence={[
                  "Reactjs", // Types 'One'
                  1000, // Waits 1s
                  "Nextjs", // Deletes 'One' and types 'Two'
                  1000, // Waits 2s
                  "Tailwindcss", // Deletes 'One' and types 'Two'
                  1000, // Waits 2s
                  "Zustand", // Deletes 'One' and types 'Two'
                  1000, // Waits 2s
                  "Sanity.io", // Deletes 'One' and types 'Two'
                  1000, // Waits 2s
                  "Framer Motion", // Deletes 'One' and types 'Two'
                  1000, // Waits 2s
                  "Git", // Deletes 'One' and types 'Two'
                  1000, // Waits 2s
                  "Wordpress", // Deletes 'One' and types 'Two'
                  1000, // Waits 2s
                  // () => {
                  //   console.log("Sequence completed");
                  // },
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                speed={15}
                deletionSpeed={15}
                className="italic font-bold text-[#F59E0B] text-xl md:text-3xl"
              />
            </motion.p>
          </motion.div>
        </div>
        <Socials />
      </div>
    </motion.div>
  );
};

export default Hero;
