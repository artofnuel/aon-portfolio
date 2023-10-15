import { getArt } from "@/sanity/sanity-utils";
import React from "react";
import "../../globals.css";

const Art = async () => {
  const arts = await getArt();
  const shuffledProjects = arts.sort(() => Math.random() - 0.5);

  const firstSlice = shuffledProjects.slice(0, 3);
  const secondSlice = shuffledProjects.slice(3, 6);
  const thirdSlice = shuffledProjects.slice(6, 9);
  const fourthSlice = shuffledProjects.slice(9, 12);

  return (
    <div className="w-full p-4 lg:p-8 lg:px-12 flex flex-col lg:flex-row">
      <div className="w-1/2">
        <h1>I did mention I am a Digital Artist.</h1>
      </div>
      <div className="w-1/2 p-4">
        <div className="columns-4">
          {[firstSlice, secondSlice, thirdSlice, fourthSlice].map(
            (slice, sliceIndex) => (
              <div key={sliceIndex} className="grid gap-4">
                {slice.map((art, index) => (
                  <div key={index} className="masonry-item">
                    <img
                      className="h-auto max-w-full rounded-lg"
                      src={art.image}
                      alt={`Artwork ${index + 1}`}
                    />
                  </div>
                ))}
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Art;
