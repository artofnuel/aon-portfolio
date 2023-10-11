"use client";
import React, { useState } from "react";
import image from "../../asset/profile.jpg";
import Image from "next/image";
import Link from "next/link";

const AboutHero = () => {
  return (
    <div className="w-full h-auto md:h-[90vh] lg:h-[85vh] flex flex-col lg:flex-row gap-5 lg:gap-0 overflow-hidden p-4">
      <div className="w-full lg:w-1/2 h-full bg-bkg text-white relative rounded-md md:rounded-r-none">
        <div className="w-full h-full p-8 flex flex-col justify-center text-2xl">
          <h1 className="md:text-3xl">
            Hi There,
            <br className="block md:hidden" />
            <span className="md:px-2 md:text-4xl font-bold text-primary italic uppercase">
              Emmanuel Inua
            </span>
            <br className="block md:hidden" />
            at your service!
          </h1>
          <p className="italic uppercase">
            <span className="md:text-4xl font-bold text-primary">
              Front End Developer
            </span>
            <br />
            <span className="md:text-4xl font-bold text-primary">
              Photographer
            </span>
            <br />
            <span className="md:text-4xl font-bold text-primary">
              Digital Artist
            </span>
          </p>
          <p className="pt-10">
            Let&rsquo;s check out my
            <Link
              href="/projects"
              className="md:text-4xl font-bold text-primary mt-2 pl-2 uppercase underline underline-offset-8"
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
          className="w-full h-[350px] md:h-full object-cover object-top lg:object-top rounded-md md:rounded-l-none"
        />
      </div>
    </div>
  );
};

export default AboutHero;
