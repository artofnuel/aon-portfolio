"use client";
import Image from "next/image";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import useMyStore from "../store/mystate";

const Navbar = () => {
  const { isOpen, toggleNav, falseNav } = useMyStore();

  const navVariants = {
    hidden: {
      opacity: 0,
      y: "-100vh",
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const toggleVariants = {
    hidden: {
      opacity: 0,
      scale: 0,
      transition: {
        duration: 0.5,
      },
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.5,
      transition: {
        duration: 0.8,
      },
    },
  };
  return (
    <motion.header
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className="w-full mx-auto p-4 md:p-7 md:px-12 bg-white"
    >
      <nav className="h-full flex justify-between items-center relative text-primary">
        <Link onClick={falseNav} href="/">
          <h1 className="font-bold text-lg md:text-4xl">
            Emmanuel Inua <span className="text-bkg font-medium">.</span>
          </h1>
        </Link>
        <ul className="hidden md:flex gap-5 text-xl text-bkg font-medium">
          <li className="p-2 hover:text-2xl hover:text-primary hover:-translate-y-1 transition-all duration-300 ease-in-out">
            <Link onClick={falseNav} href="/about">
              About
            </Link>
          </li>
          <li className="p-2 hover:text-2xl hover:text-primary hover:-translate-y-1 transition-all duration-300 ease-in-out">
            <Link onClick={falseNav} href="/projects">
              Projects
            </Link>
          </li>
          <li className="p-2 px-5 bg-bkg font-medium text-white rounded-md hover:text-2xl hover:text-primary hover:-translate-y-1 transition-all duration-300 ease-in-out">
            <Link onClick={falseNav} href="/contact">
              Contact
            </Link>
          </li>
        </ul>

        <div
          onClick={toggleNav}
          className="w-6 h-6 flex justify-center items-center md:hidden"
        >
          <AnimatePresence>
            {isOpen == true ? (
              <motion.div
                variants={toggleVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="w-6 h-6 rounded-full border-2 border-primary flex justify-center items-center"
              >
                <div className="w-2 h-2 bg-bkg font-medium rounded-full"></div>
              </motion.div>
            ) : (
              <motion.div
                variants={toggleVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="w-6 h-6 border-2 border-primary rounded-sm flex justify-center items-center"
              >
                <div className="w-2 h-2 bg-bkg font-medium rounded-sm"></div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={toggleVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="absolute bg-bkg font-medium w-full h-[85px] flex justify-center items-center inset-0 top-11 rounded-sm md:hidden"
            >
              <span className="absolute bg-bkg font-medium w-6 h-6 right-0 -top-3 rounded-t-full"></span>
              <ul className="flex justify-center items-center gap-3 text-base text-white/70 font-normal">
                <li className="p-2">
                  <Link onClick={falseNav} href="/about">
                    About
                  </Link>
                </li>
                <li className="p-2">
                  <Link onClick={falseNav} href="/projects">
                    Projects
                  </Link>
                </li>
                <li className="p-2">
                  <Link onClick={falseNav} href="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Navbar;
