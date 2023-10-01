"use client";
import React, { useState } from "react";
import image from "../asset/profile.jpg";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const Page = () => {
  return (
    <div className="w-full h-[90vh] lg:h-[85vh] flex flex-col lg:flex-row gap-5 overflow-hidden p-4">
      <div className="w-full lg:w-1/2 h-full bg-bkg text-white relative">
        <div className="w-full h-full p-8 flex flex-col justify-center text-2xl">
          <h1 className="text-3xl">
            Hi There, I'm
            <br />
            <span className="text-4xl font-bold text-primary italic uppercase">
              Emmanuel Inua
            </span>
          </h1>
          <p className="italic uppercase">
            <span className="text-4xl font-bold text-primary">
              Front End Developer
            </span>
            <br />
            <span className="text-4xl font-bold text-primary">
              Photographer
            </span>
            <br />
            <span className="text-4xl font-bold text-primary">
              Digital Artist
            </span>
          </p>
          <p className="pt-10">
            Let's check out my
            <Link
              href="/projects"
              className="text-4xl font-bold text-primary mt-2 pl-2 uppercase underline underline-offset-8"
            >
              projects!
            </Link>
          </p>
        </div>
      </div>
      <div className="w-full lg:w-1/2 h-full object-cover object-top">
        <Image
          src={image}
          width={1000}
          height={1000}
          alt="my image"
          className="w-full h-full object-cover object-center"
        />
      </div>
    </div>
  );
};

export default Page;
