import React from "react";
import useCarouselStore from "../store/myCarousel";

const Carousel = () => {
  const { currentIndex, next, prev } = useCarouselStore();
  return (
    <div>
      {currentIndex}
      <button onClick={next}>Up</button>
      <button onClick={prev}>Down</button>
    </div>
  );
};

export default Carousel;
