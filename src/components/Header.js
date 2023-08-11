import React from 'react';
import logo from '../assets/logo.svg'

export default function Header() {
  return (
    <div className='py-8'>
      <div className='container mx-auto'>
      <div className='flex justify-between items-center'>
        <a href='#'>
          <img src={logo} alt='' />
        </a>
        <button className='btn btn-sm transition-all duration-300'>Work with me</button>
      </div>
      </div>
    </div>
  )
}
