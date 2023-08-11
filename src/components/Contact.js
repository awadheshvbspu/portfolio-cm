import React from 'react';
import {motion} from 'framer-motion';
import { fadeIn } from '../variants';

export default function Contact() {
  return (
    <div className='section py-16 lg:section' id='contact'>
      <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row '>
        <motion.div className='flex-1 flex items-center'
        variants={fadeIn('right', 0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once:false, amount:0.3}}
        >
          <div>
            <h4 className='tetx-xl uppercase text-accent font-medium mb-2 tracking-wide'>Get in Touch</h4>
            <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>Let's Work <br/> together!</h2>
          </div>
        </motion.div>
        <motion.form 
        variants={fadeIn('left', 0.5)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once:false, amount:0.3}}
        className='flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start'>
        <input type='text' className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all' placeholder='Your Name' />
        <input type='email' className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all ' placeholder='Your Email' />
        <textarea className='bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none' placeholder='Your Message'></textarea>
        <button className='btn btn-lg'>Send Message</button>
        </motion.form>
      </div>
      </div>
    </div>
  )
}
