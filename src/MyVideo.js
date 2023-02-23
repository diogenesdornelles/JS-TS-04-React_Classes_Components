// Personalized styles
import './Video.css';
// JSX
import React from 'react';

function MyVideo(data) {
  return (<video className="flex w-full h-auto max-w-full border border-gray-200 rounded-lg p-4 sm:h-64 xl:h-96 2xl:h-96 sm:w-10/12 xl:w-9/12 2xl:w-7/12 m-auto" controls       autoPlay muted>
            <source src={data.message.item} type="video/mp4"></source>
              Your browser does not support the video tag.
          </video>);
}

export default MyVideo;
