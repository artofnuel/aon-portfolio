import { getArt } from "@/sanity/sanity-utils";
import React from "react";
import "../../globals.css";
import Link from "next/link";

const Art = async () => {
  const arts = await getArt();
  const shuffledProjects = arts.sort(() => Math.random() - 0.5);

  // const firstSlice = shuffledProjects.slice(0, 3);
  // const secondSlice = shuffledProjects.slice(3, 6);
  // const thirdSlice = shuffledProjects.slice(6, 9);
  // const fourthSlice = shuffledProjects.slice(9, 12);

  return (
    <div className="w-full h-auto lg:h-[80vh] p-4 lg:p-8 lg:px-12 flex flex-col-reverse lg:flex-row gap-5">
      <div className="w-full h-[475px] lg:w-1/2 bg-bkg text-white p-4 lg:p-8 rounded-mg lg:rounded-l-md flex flex-col gap-5">
        <h1 className="text-3xl text-primary w-fit p-1 font-bold">ArtofNuel</h1>
        <blockquote className="text-base indent-5 italic">
          I am a Nigerian-based Digital Artist and Photographer whose art style
          is Realism bordering on impressionistic and surreal. With the aid of
          female muses and dramatic expressions, I dive deeper into the being I
          call self, reliving my experiences through my interpretation. I am
          always drawing inspiration from amazing artists all over the world to
          share my story.
        </blockquote>
        <div className="flex flex-col gap-3">
          <p>Want to connect with me on socials?</p>
          <ul className="flex gap-3 lg:gap-5 text-primary">
            <li>
              <a href="https://instagram.com/artofnuel">Instagram</a>
            </li>
            <li>
              <a href="">Twitter</a>
            </li>
            <li>
              <a href="">Foundation</a>
            </li>
            <li>
              <a href="">Objkt</a>
            </li>
          </ul>
          <Link
            href="contact"
            className="p-2 px-4 border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-md font-medium"
          >
            Contact
          </Link>
        </div>
      </div>
      <div className="w-full h-[500px] lg:w-1/2">
        <div className="columns-4 lg:columns-5 gap-0">
          {shuffledProjects.map((slice, sliceIndex) => (
            <div key={sliceIndex} className="">
              <div key={sliceIndex} className="">
                <img
                  className=""
                  src={slice.image}
                  alt={`Artwork ${sliceIndex + 1}`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Art;
