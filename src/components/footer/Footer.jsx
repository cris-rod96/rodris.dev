import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='relative pt-10 '>
      <div className='flex items-center justify-center gap-3'>
        <div className='flex items-center gap-1 '>
          <h3 className='text-gray-500 text-lg'>Desarrollado por</h3>
          <NavLink
            to='https://github.com/cris-rod96'
            target='__blank'
            className='text-gray-300 hover:text-white transition-colors duration-300'
          >
            @cris-rod96
          </NavLink>
        </div>
      </div>
    </footer>
  )
}

export default Footer
