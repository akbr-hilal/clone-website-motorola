import React, { useState } from 'react'
import { Icon } from '@iconify/react'

import logo from '../assets/icon.png'

const Navbar = () => {

  const [navDrop, setNavDrop] = useState(false)
  const links = [
    {
      id: 1,
      link: 'Shop Phones',
    },
    {
      id: 2,
      link: 'Compore Phones',
    },
    {
      id: 3,
      link: 'Accessories',
    },
    {
      id: 4,
      link: 'Smart Products',
    },
    {
      id: 5,
      link: 'Software',
    },
    {
      id: 6,
      link: 'Specials',
    }
  ]
  return (
    <>
      <div className='flex justify-between items-center w-full h-20 text-white bg-stone-900 sm:px-4 md:px-20 z-10'>
        <div 
          onClick={() => setNavDrop(!navDrop)}
          className='cursor-pointer hover:scale-125 md:hidden'
        >
          {navDrop ? <Icon icon="heroicons:x-mark-solid" color="white" width="24"  /> :  <Icon icon="heroicons:bars-3-bottom-left" color="white" width="24"  /> }
        </div>
        <div className='flex justify-center md:ml-0'>
          <img src={logo} alt="Motorola Logo" width='100px' />
        </div>
        <ul className='hidden md:flex p-0 justify-center items-center'>
          {links.map(({id, link}) => (
            <li key={id} className='px-4 cursor-pointer hover:scale-105 text-xs'>
              {link}
            </li>
          ))}
        </ul>
        <div className='flex justify-between w-20'>
          <Icon icon="icon-park-solid:people" color="white" width="20" className='cursor-pointer hover:scale-125'/>
          <Icon icon="eva:search-fill" color="white" width="20" className='cursor-pointer hover:scale-125' />
          <Icon icon="majesticons:shopping-cart" color="white" width="20" className='cursor-pointer hover:scale-125'/>
        </div>
      </div>
      {navDrop && (
        <ul className='flex flex-col justify-start items-start top-0 left-0 absolute w-full h-screen bg-gray-300 text-black mt-20 z-10'>
          {links.map(({id, link}) => (
            <li key={id} className='cursor-pointer px-6 py-4 text-xl flex justify-between w-full'>
              {link}
              <Icon icon="dashicons:arrow-down-alt2" color="black" width="32" />
            </li>
          ))}
          <div className='border-b-2 w-full border-gray-400'></div>
        </ul>
      )}  
    </>
  )
}

export default Navbar