"use client";
import { getProjects } from "@/sanity/sanity-utils";
import React, { useState } from "react";
import { BiUpArrow, BiDownArrow } from "react-icons/bi";
import { PortableText } from "@portabletext/react";
import { motion, AnimatePresence } from "framer-motion";
import useCarouselStore from "@/app/store/myCarousel";

const ProjectHero = async () => {
  const { currentIndex, reset, next, prev } = useCarouselStore();
  const projects = await getProjects();
  const totalSlides = projects.length;

  const allProjects = projects[currentIndex];

  const nextSlide = (e) => {
    e.preventDefault();
    if (currentIndex === totalSlides - 1) {
      reset();
    } else {
      setTimeout(() => {
        next();
      }, 0);
    }
  };

  const prevSlide = (e) => {
    e.preventDefault();
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
    "hover:text-[#80061f] text-[#80061f]",
    "hover:text-[#8848bf] text-[#8848bf]",
    "hover:text-green-600 text-green-600",
    "hover:text-[#0405ff] text-[#0405ff]",
    "hover:text-[#222222] text-[#222222]",
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

  const colorIndex = currentIndex % colors.length;
  const textIndex = currentIndex % texts.length;

  return (
    <div className={`w-full h-auto mx-auto p-4 md:p-8 md:px-12`}>
      <AnimatePresence>
        <motion.div
          className={`${colors[colorIndex]} p-5 w-full h-auto py-10 md:h-[80vh] rounded-md`}
          variants={containerVariant}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <div className="w-full h-full flex flex-col lg:flex-row justify-center gap-5">
            <div className="w-full flex flex-col gap-10">
              <div className="space-x-4">
                <button
                  onClick={(e) => nextSlide(e)}
                  className={`bg-bkg ${texts[textIndex]} text-2xl p-3 rounded-md`}
                >
                  <BiUpArrow />
                </button>
                <button
                  onClick={(e) => prevSlide(e)}
                  className={`bg-white ${texts[textIndex]} text-2xl p-3 rounded-md`}
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
                        key={index}
                        className={`${textIndex} p-2 px-5 whitespace-nowrap flex justify-center items-center rounded-md bg-white text-md font-medium`}
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <div className="w-full text-white text-lg">
                    <PortableText value={allProjects.content} />
                  </div>
                  <div className="flex gap-4 mt-4">
                    <a
                      href={allProjects.github}
                      target="_blank"
                      no-referrer
                      className={`p-2 px-6 text-lg font-semibold rounded-md border-2 border-white text-white hover:bg-white ${textIndex} transition-all duration-500`}
                    >
                      Codebase
                    </a>
                    <a
                      href={allProjects.url}
                      target="_blank"
                      no-referrer
                      className={`p-2 px-6 text-lg font-semibold rounded-md border-2 border-white text-white hover:bg-white ${textIndex} transition-all duration-500`}
                    >
                      Live View
                    </a>
                  </div>
                </div>
                <div className="w-full lg:w-1/2 flex  justify-center items-center">
                  <img
                    src={allProjects.image}
                    alt={allProjects.name}
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

export default ProjectHero;
