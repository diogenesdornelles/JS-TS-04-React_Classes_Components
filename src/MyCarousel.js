// My new component

// Personalized styles
import './Carousel.css';
// JSX
import React from 'react';

import { Carousel } from 'flowbite-react'

function MyCarousel(data) {
  return (
    <div id="image-container" className="flex flex-col w-11/12 h-56 md:flex-row sm:h-64 xl:h-96 2xl:h-96 sm:w-10/12 xl:w-9/12 2xl:w-7/12 m-auto">
        <Carousel slideInterval={5000}>
          {data.message.items.map(url => <img src={url} alt="..."/> )}
        </Carousel>
      <aside className="w-full h-fit p-4 backDroppedDark text-sm text-white font-bold md:w-5/12 md:h-96 md:text-base lg:text-xl d:w-1/4 md:pr-16">{data.message.text}</aside>
    </div>);
}

export default MyCarousel;
