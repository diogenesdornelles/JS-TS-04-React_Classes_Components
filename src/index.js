import React from 'react'
import './css/index.css'
import { createRoot } from 'react-dom/client'
import MyNav from './components/MyNav'
import MyCarousel from './components/MyCarousel'
import MyVideo from './components/MyVideo'
import MyFooter from './components/MyFooter'
import scrollReveal from './utils/scrollReveal'
import { CAROUSELS, VIDEOS } from './variables'

const container = document.getElementById('root')
const root = createRoot(container)
root.render(
  <>
  <div id="bg-services" className="fixed w-screen h-screen overflow-hidden"></div>
    <MyNav/>
    <main className="flex mb-24 flex-col md:mb-96">
        {CAROUSELS.map((carousel, index) => <MyCarousel key={index} items={carousel.items} text={carousel.text} id={carousel.id}/>)}
      <div id="videos" className="grid grid-cols-1">
        {VIDEOS.map((video, index) => <MyVideo key={index} item={video.item} id={video.id}/>)}
      </div>
      <a href="/sobre" id="btn-our-services" className="border-solid border-2 border-white text-white hover:backdrop-blur-sm focus:ring-4 focus:outline-none font-bold rounded-lg text-sm px-20 py-2.5 text-center mt-10 self-center md:text-3xl hover:w-10/12 transition-all ">Conheça mais sobre a empresa</a>
    </main>
    <MyFooter/></>
)

const observed = '.observed'
const toggled = 'show'
const margin = '-300px'

scrollReveal(observed, toggled, margin)
