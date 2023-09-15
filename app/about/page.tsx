import React from "react";
import image from "../asset/profile.jpg";
import Image from "next/image";

const page = () => {
  return (
    <div className="w-full h-[85vh] flex">
      <div className="w-1/2 h-full bg-[#1d1c1c]">Hi</div>
      <div className="w-1/2 h-full">
        <Image
          src={image}
          width={1000}
          height={1000}
          alt="my image"
          className="object-cover object-top w-full h-full aspect-auto"
        />
      </div>
    </div>
  );
};

export default page;
