import React from 'react'
import { Carousel } from 'react-bootstrap';

function CarouselItem ({ item }) {
  return (
    <>
        <Carousel.Item interval={2000} key={item.id}>
          <div className="d-flex justify-content-center">
              <img
              src={item.lg}
              alt={item.title}
              className='img-carousel image-full'
              />
              <img
              src={item.xs}
              alt={item.title}
              className='img-carousel image-mobile'
              />
          </div>
          <Carousel.Caption className="text-center">
            <h3 className='m-0 fw-bold text-lg md:text-3xl md:text-start'>{item.title}</h3>
            <div className='w-auto'>
              <p className='text-xs md:text-base md:text-start'>{item.desc}</p>
            </div>
            <div className='flex justify-center md:justify-start'>
              <button className='md:mb-52 btn btn-light rounded-pill'><span className='text-xs md:text-base'>{item.buttonName}</span></button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
    </>
  )
}

export default CarouselItem