import React from "react";
import Image from "next/image";
import { getProfiles } from "@/sanity/sanity-utils";

const HeroImg = async () => {
  const allProfiles = await getProfiles();

  return (
    <div className="w-full h-[350px]">
      {allProfiles.map((profile) => (
        <Image
          key={profile._id}
          src={profile.image}
          alt={profile.name}
          width="800"
          height="800"
          className="object-cover object-top w-full h-full rounded-sm rounded-t-2xl"
        />
      ))}
    </div>
  );
};

export default HeroImg;
