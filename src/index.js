// JSX
import React from 'react';
// CSS
import './index.css';

import { createRoot } from 'react-dom/client'
// Element styled. Will be renderized

import MyNav from './MyNav';

import MyCarousel from './MyCarousel';

import MyVideo from './MyVideo';

import MyFooter from './MyFooter';

// eslint-disable-next-line no-unused-vars
import { Collapse } from 'flowbite'

import scrollReveal from './utils/scrollReveal';

import { CAROUSELS, VIDEOS } from './variables';


const nav = document.getElementById('nav-bar')
const root1 = createRoot(nav)
root1.render(<MyNav/>)

CAROUSELS.forEach(carousel => {
  const container = document.getElementById(carousel.id)
  const root = createRoot(container)
  const data = {
    items: carousel.items,
    text: carousel.text
  }
  root.render(<MyCarousel message={data}/>)
})


VIDEOS.forEach(video => {
  const container = document.getElementById(video.id)
  const root = createRoot(container)
  const data = {
    item: video.item,
  }
  root.render(<MyVideo message={data}/>)
})

const footer = document.getElementById('footer')
const root2 = createRoot(footer)
root2.render(<MyFooter/>)


const observed = '.observed'
const toggled = 'show'
const margin = '-300px'

scrollReveal(observed, toggled, margin)

  