"use client";
import React from "react";
import { HiOutlineMailOpen } from "react-icons/hi";
import { FaLinkedinIn } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { FiGithub } from "react-icons/fi";
import { motion } from "framer-motion";
import Link from "next/link";

const Socials = () => {
  const socialVariant = {
    hidden: {
      opacity: 0,
      translateX: 100,
    },
    visible: {
      opacity: 1,
      translateX: 0,
      transition: {
        duration: 0.5,
      },
    },
    hover: {
      translateY: -10,
      scale: 1.1,
      rotate: 360,
      transition: {
        duration: 0.5,
      },
    },
    hover2: {
      translateY: -10,
      scale: 1.1,
      transition: {
        duration: 0.5,
      },
    },
  };
  return (
    <>
      <motion.div
        variants={socialVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="w-full md:w-1/3 bg-bkg text-white rounded-sm p-8 md:p-4 flex flex-col md:flex-row justify-center items-center gap-5"
      >
        <div className="flex gap-5">
          <motion.a
            variants={socialVariant}
            whileHover="hover"
            href="mailto:artofnuel@gmail.com"
            className="p-2"
          >
            <HiOutlineMailOpen size={25} />
          </motion.a>
          <motion.a
            variants={socialVariant}
            whileHover="hover"
            href="https://www.twitter.com/artofnuel"
            className="p-2"
          >
            <RiTwitterXFill size={25} />
          </motion.a>
          <motion.a
            variants={socialVariant}
            whileHover="hover"
            href="https://www.linkedin.com/in/emmanuelinua/"
            className="p-2"
          >
            <FaLinkedinIn size={25} />
          </motion.a>
          <motion.a
            variants={socialVariant}
            whileHover="hover"
            href="https://github.com/artofnuel"
            className="p-2"
          >
            <FiGithub size={25} />
          </motion.a>
        </div>
        <motion.p variants={socialVariant} whileHover="hover2">
          <Link
            href="/resume.pdf"
            locale={false}
            className="p-2 bg-white text-[#F59E0B] rounded-md"
          >
            My Resume
          </Link>
        </motion.p>
      </motion.div>
    </>
  );
};

export default Socials;
