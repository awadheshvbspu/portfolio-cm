import React from 'react';
import {motion} from 'framer-motion';

import { fadeIn } from '../variants';
import img1 from '../assets/portfolio-img1.png';
import img2 from '../assets/portfolio-img2.png'
import img3 from '../assets/portfolio-img3.png'

export default function Work() {
  return (
    <div className='section' id='work'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row gap-x-10'>
          <motion.div
          variants={fadeIn('right', 0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once:false, amount:0.3}}
          
           className='flex-1 flex flex-col gap-y-12 mb-10 mg:mb-0'>
            {/* text */}
            <div>
              <h2 className='h2 leading-tight text-accent'>My Latest <br/> Work.</h2>
              <p className='max-w-sm mb-16'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <button className='btn btn-sm'>View all Projects</button>
            </div>
          <div  className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'>
            </div>
              <img src={img1} alt='' className='group-hover:scale-125 transition-all duration-500'/>
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'><span className='text-gradient'>
              UX/UI Design
              </span></div>
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3xl text-white' >Project Title</span>
              </div>
          </div>
          </motion.div>
          <motion.div 
          variants={fadeIn('left', 0.2)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once:false, amount:0.3}}
          
          className='flex-1 flex flex-col gap-y-10'>
          <div  className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'>
            </div>
              <img src={img2} alt='' className='group-hover:scale-125 transition-all duration-500'/>
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'><span className='text-gradient'>
              Development
              </span></div>
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3xl text-white' >Project Title</span>
              </div>
          </div>
          <div  className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'>
            </div>
              <img src={img3} alt='' className='group-hover:scale-125 transition-all duration-500'/>
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'><span className='text-gradient'>
              UX/UI Design
              </span></div>
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3xl text-white' >Project Title</span>
              </div>
          </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
