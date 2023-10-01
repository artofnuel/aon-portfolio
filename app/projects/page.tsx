"use client";
import { getProjects } from "@/sanity/sanity-utils";
import React, { useState } from "react";
import useCarouselStore from "../store/myCarousel";
import { BiUpArrow, BiDownArrow } from "react-icons/bi";
import { PortableText } from "@portabletext/react";
import { motion, AnimatePresence } from "framer-motion";

const page = async () => {
  const { currentIndex, reset, next, prev } = useCarouselStore();
  const projects = await getProjects();
  const totalSlides = projects.length;

  const allProjects = projects[currentIndex];

  const nextSlide = () => {
    if (currentIndex === totalSlides - 1) {
      reset();
    } else {
      setTimeout(() => {
        next();
      }, 0);
    }
  };

  const prevSlide = () => {
    if (currentIndex === 0) {
      useCarouselStore.setState({ currentIndex: totalSlides - 1 });
    } else {
      setTimeout(() => {
        prev();
      }, 0);
    }
  };

  let colors = [
    "bg-[#80061f]",
    "bg-[#8848bf]",
    "bg-green-600",
    "bg-[#0405ff]",
    "bg-[#222222]",
  ];
  let texts = [
    "text-[#80061f]",
    "text-[#8848bf]",
    "text-green-600",
    "text-[#0405ff]",
    "text-[#222222]",
  ];

  const containerVariant = {
    hidden: { opacity: 0, translateY: -100, transition: { duration: 0.5 } },
    visible: { opacity: 1, translateY: 0, transition: { duration: 0.5 } },

    urlsHidden: {
      opacity: 0,
      translateY: 100,
    },
    urlsVisible: {
      opacity: 1,
      translateY: 0,
      transition: {
        delay: 0.7,
        duration: 1,
      },
    },

    imgHidden: {
      opacity: 0,
      translateX: 100,
    },
    imgVisible: {
      opacity: 1,
      translateX: 0,
      transition: {
        delay: 0.7,
        duration: 1,
      },
    },
  };

  return (
    <div className={`w-full h-auto mx-auto p-4 md:p-8 md:px-12`}>
      <AnimatePresence>
        <motion.div
          className={`${colors[currentIndex]} p-5 w-full h-auto py-10 md:h-[500px] rounded-md`}
          variants={containerVariant}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <div className="w-full h-full flex flex-col lg:flex-row justify-center gap-5">
            <div className="w-full flex flex-col gap-10">
              <div className="space-x-4">
                <button
                  onClick={nextSlide}
                  className={`bg-bkg ${texts[currentIndex]} text-2xl p-3 rounded-md`}
                >
                  <BiUpArrow />
                </button>
                <button
                  onClick={prevSlide}
                  className={`bg-white ${texts[currentIndex]} text-2xl p-3 rounded-md`}
                >
                  <BiDownArrow />
                </button>
              </div>
              <div className="w-full flex flex-col md:flex-row gap-5">
                <div className="w-full lg:w-1/2 flex flex-col gap-2 overflow-hidden lg:pr-10">
                  <h2 className="text-5xl font-bold text-white">
                    {allProjects.name}
                  </h2>
                  <ul className="w-full flex gap-3 overflow-x-scroll scrollbar-hide">
                    {allProjects.components.map((tech, index) => (
                      <li
                        className={`${texts[currentIndex]} p-2 px-5 whitespace-nowrap flex justify-center items-center rounded-md bg-white text-md font-medium`}
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <div className="w-full text-white text-lg">
                    <PortableText value={allProjects.content} />
                  </div>
                  <div className="flex gap-4 mt-4">
                    <button
                      className={`p-2 px-6 text-lg font-semibold rounded-md bg-white ${texts[currentIndex]}`}
                    >
                      Codebase
                    </button>
                    <button
                      className={`p-2 px-6 text-lg font-semibold rounded-md bg-white ${texts[currentIndex]}`}
                    >
                      Live View
                    </button>
                  </div>
                </div>
                <div className="w-full lg:w-1/2 flex  justify-center items-center">
                  <img
                    src={allProjects?.image}
                    alt=""
                    className="w-full aspect-auto rounded-md shadow-md"
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default page;
