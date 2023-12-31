"use client";

import { Carousel } from "flowbite-react";

export default function PhotoCard() {
  return (
    <div className="sm:h-64 xl:h-80 2l:h-96">
      <Carousel slide={false}>
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
          alt="..."
        />
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
          alt="..."
        />
      </Carousel>
    </div>
  );
}
