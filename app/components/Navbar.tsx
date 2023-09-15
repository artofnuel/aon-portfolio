"use client";
import Image from "next/image";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

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
      className="w-full mx-auto p-4 md:p-7 md:px-12"
    >
      <nav className="h-full flex justify-between items-center relative text-[#F59E0B]">
        <Link href="/">
          <h1 className="font-bold text-lg md:text-4xl">
            Emmanuel Inua <span className="text-[#1d1c1c]">.</span>
          </h1>
        </Link>
        <ul className="hidden md:flex gap-5 text-xl text-[#1d1c1c]">
          <li className="p-2">
            <Link href="/about">About</Link>
          </li>
          <li className="p-2">
            <Link href="/skillset">Skillset</Link>
          </li>
          <li className="p-2">
            <Link href="/projects">Projects</Link>
          </li>
          <li className="p-2">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>

        <div
          onClick={handleNav}
          className="w-6 h-6 flex justify-center items-center md:hidden"
        >
          {nav == true ? (
            <motion.div
              variants={toggleVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="w-6 h-6 rounded-full border-2 border-[#F59E0B] flex justify-center items-center"
            >
              <div className="w-2 h-2 bg-[#1d1c1c] rounded-full"></div>
            </motion.div>
          ) : (
            <AnimatePresence>
              <motion.div
                variants={toggleVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="w-6 h-6 border-2 border-[#F59E0B] rounded-sm flex justify-center items-center"
              >
                <div className="w-2 h-2 bg-[#1d1c1c] rounded-sm"></div>
              </motion.div>
            </AnimatePresence>
          )}
        </div>
        {nav && (
          <AnimatePresence>
            <motion.div
              variants={toggleVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="absolute bg-[#1d1c1c] w-full h-[85px] flex justify-center items-center inset-0 top-11 rounded-sm md:hidden"
            >
              <span className="absolute bg-[#1d1c1c] w-6 h-6 right-0 -top-3 rounded-t-full"></span>
              <ul className="flex justify-center items-center gap-3 text-base text-white/70 font-normal">
                <li className="p-2">
                  <Link href="/about">About</Link>
                </li>
                <li className="p-2">Skillset</li>
                <li className="p-2">Projects</li>
                <li className="p-2">Contact</li>
              </ul>
            </motion.div>
          </AnimatePresence>
        )}
      </nav>
    </motion.header>
  );
};

export default Navbar;
