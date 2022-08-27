import React from 'react'
import { Icon } from '@iconify/react';
import { Carousel } from 'react-bootstrap';

import Navbar from '../components/Navbar'
import { dataCarousel } from '../data/dataCarousel'
import CarouselItem from '../components/CarouselItem'
import Logo from '../assets/logo-2.png'
import MenuLinks from '../components/MenuLinks';
import MotoStylus from '../assets/handphone/moto-g-stylus.jpg'
import MotoG from '../assets/handphone/moto-g.jpg'
import { dataMenuLinks } from '../data/dataMenuLInks';

function Landing() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Carousel>
        {dataCarousel.map(item => (
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
        ))}
        </Carousel>
      </div>
      <div style={{ backgroundColor: '#001428' }}>
        <div className='row m-0 justify-between'>
          <div className='col-12 col-lg-5 flex px-2 px-lg-5' style={{ backgroundColor: 'rgb(9, 52, 78)'}}>
            <img src={MotoStylus} alt="Moto 5G Stylus" width='100px'/>
            <div className='flex items-center h-100 text-white'>
              <div>
                <h3>$150 Off</h3>
                <p><b>moto g stylus 5G (2021)</b> gives you the ultra-fast speed and built-in stylus you want. Skecth your big idea and share it on the post</p>
              </div>
            </div>
          </div>  
          <div className='col-12 col-lg-5 flex px-2 px-lg-5' style={{ backgroundColor: 'rgb(9, 52, 78)'}}>
            <div className='flex items-center h-100 text-white'>
              <div>
                <h3>$100 Off</h3>
                <p>Move up to the <b>moto g stylus 5G</b>. Downloadd shows in sceonds, stream with no buffering, and video chat without lag - all thanks to the superfast connectivity of 5G*.</p>
              </div>
            </div>
            <img src={MotoG} alt="Moto G 5G" width='100px'/>
          </div>
        </div>
        <div className='py-20'>
          <h1 className='text-white text-center mb-3 text-xl md:text-4xl'>Can't find what you're looking for ?</h1>
          <div className='flex justify-center'>
            <div className='col-10 col-lg-6'>
              <input type="search" className='form-control'/>
            </div>
          </div>
        </div>
        <div className='py-2 px-3' style={{ backgroundColor: 'rgb(9, 52, 78)'}}>
          <p className='text-white md:px-20'>
            sale good from August 22, 2022 at 12:01 a.m. CST to August 31, 2022 at 11:59 p.m. CST or while supplies last and cannot be combined with other offers.
            <br />
            <br />
            * 5G service available with 5G plan. 5G network coverage required; available only in select areas; device not compatible with all 5G networks. Contact your service provider for details. Based on 5G sub-6GHz network connectivity, providing 125-360Mbps download speeds to the average user. Available with 5G service plan and 5G network coverage. See carrier for details.
            <br />
            <br />
            sale good from January 31, 2022 at 12:01 a.m. CST to February 06, 2022 at 11:59 p.m. CST or while supplies last and cannot be combined with other offers.
            <br />
            <br />
            ** Battery must be substantially depleted; charging rate slows as charging progresses. All battery life claims are approximate and based on the median user tested across a mixed use profile (which includes both usage and standby time) under optimal network conditions. Actual battery performance will vary and depends on many factors including signal strength, network and device settings, temperature, battery condition, and usage patterns. ** Orders must be placed by 12:00 PM CST for phone to arrive next day. No weekend delivery, see full details at checkout. ***Based on 5G sub-6GHz network connectivity, providing 125-360Mbps download speeds to the average user. Available with 5G service plan and 5G network coverage available in certain areas. All battery life claims are approximate and based on the median user tested across a mixed use profile (which includes both usage and standby time) under optimal network conditions. Actual battery performance will vary and depends on many factors including signal strength, network and device settings, temperature, battery condition, and usage patterns.
          </p>
        </div>
        <div className='py-10 px-3' >
          <div className='text-white flex md:px-20'>
            <h5 className='text-sm md:text-lg m-0'>Let's stay in touch</h5>
            <div className='flex ms-4'>
              <Icon icon="cib:facebook-f" color="white" width="20" className='scale-75 md:scale-100'/>
              <Icon icon="akar-icons:twitter-fill" color="white" width="20" className='ms-4 scale-75 md:scale-100'/>
              <Icon icon="teenyicons:instagram-solid" color="white" width="20" className='ms-4 scale-75 md:scale-100'/>
              <Icon icon="akar-icons:pinterest-fill" color="white" width="20" className='ms-4 scale-75 md:scale-100'/>
              <Icon icon="akar-icons:youtube-fill" color="white" width="20" className='ms-4 scale-75 md:scale-100'/>
              <Icon icon="akar-icons:tiktok-fill" color="white" width="20" className='ms-4 scale-75 md:scale-100'/>
            </div>
          </div>
        </div>
        <hr className='border-2 border-light m-0' />
        <div className='pt-20 px-3 pb-3'>
          <div className='md:px-20 block md:flex md:justify-between'>
            {dataMenuLinks.map(item => (
              <MenuLinks item={item} />
            ))}
          </div>
        </div>
        <hr className='border-2 border-light m-0' />
        <div className='pt-8 px-3 pb-3'>
          <div className='md:px-20'>
            <div className='text-white flex'>
              <div className='mr-6'> 
                USA
              </div>
              <div className='mr-6'>
                |  
              </div>
              <div>
                Change Location
              </div>
            </div>
            <div className='row m-0 justify-between mt-4'>
              <div className='col-12 col-lg-6'> 
                <img src={Logo} alt="Logo Motorola" className='mb-2' width='160px' />
                <div className='text-white'>
                  <p>	&copy; 2022 Motorola Mobility LLC. All Rights Reserved</p>
                  <p>MOTOROLA, the Stylized M Logo, MOTO and the MOTO family of marks are trademarks of Motorola Trademark Holdings, LLC. LENOVO is a trademark of Lenovo. All other trademarks are the property of their respective owners.</p>
                  <p>Welcome to Motorola. Shop our Android smartphones, including the new razr, edge+, moto g stylus, moto g power, and more.</p>
                  <p>All mobile phones are designed and manufactured by/for Motorola Mobility LLC, a wholly owned subsidiary of Lenovo.</p>
                  <p>Expedited shipping: Some orders with multiple products and with anticipated inventory won't be available for Expedited shipping, if you don't see the option at checkout, your order will be sent with normal ground delivery</p>
                </div>
              </div>
              <div className='col-12 col-lg-6'>
                <div className='text-white'>
                  <p>Theoretical max speeds based on 5G mmwave technology and eight channel carrier aggregation (8cc). Actual speeds vary based on many factors including network configuration, signal strength, network congestion, physical obstructions, and weather. 5G network coverage (available in certain areas in 2020, expanding after that).</p>
                  <p>Moto Care T&Cs -</p>
                  <p>* Exclusions and limitations apply. Please read the terms and conditions for details that include exclusions, limitations, how to make a claim, cancel coverage, and list of coverage providers. For a complete list of exclusions, read the detailed terms and conditions at https://www.motorola.com/us/legal/extended-warranty-07-2015.</p>
                  <p>† If you purchase Moto Care Accident Protection within 30 days of receiving your device, coverage begins on the date you purchased your device.</p>
                  <p>‡ Secure deposit required for advance exchange. Subject to device availability and terms. You will receive a certified refurbished, like-new device that has passed stringent software and hardware tests.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing