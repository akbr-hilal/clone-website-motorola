import React from 'react'

function MenuLinks({ item }) {
  return (
    <>
      <div key={item.id}>
        <h5 className='text-white fw-bold mb-5'>{item.title}</h5>
        <div>
          <ul className='p-0'>
            {item.item.map(item => (
              <li className='text-white mb-1'>{item.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default MenuLinks