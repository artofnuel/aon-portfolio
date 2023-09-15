"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";

const Typed = () => {
  return (
    <>
      <TypeAnimation
        sequence={[
          "user interfaces", // Types 'One'
          1000, // Waits 1s
          "user experiences", // Deletes 'One' and types 'Two'
          1000, // Waits 2s
          () => {
            console.log("Sequence completed");
          },
        ]}
        wrapper="span"
        cursor={true}
        repeat={Infinity}
        speed={15}
        deletionSpeed={15}
        className="italic font-bold text-[#F59E0B] text-3xl md:text-5xl"
      />
    </>
  );
};

export default Typed;
