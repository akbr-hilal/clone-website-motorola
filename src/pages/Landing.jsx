import React from 'react'

import Navbar from '../components/Navbar'
import { dataCarousel } from '../data/dataCarousel'
import CarouselItem from '../components/CarouselItem'

function Landing() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        {dataCarousel.map(item => (
          <CarouselItem item={item} />
        ))}
      </div>
      <div className='row'>
        <div className='col-6 flex'>
          <img src="" alt="" />
          <div>
            <h3>$150 Off</h3>
            <p><b>moto g stylus 5G (2021)</b> gives you the ultra-fast speed and built-in stylus you want. Skecth your big idea and share it on the post</p>
          </div>
        </div>  
        <div className='col-6'>
          <img src="" alt="" />
          <div>
            <h3>$150 Off</h3>
            <p><b>moto g stylus 5G (2021)</b> gives you the ultra-fast speed and built-in stylus you want. Skecth your big idea and share it on the post</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing