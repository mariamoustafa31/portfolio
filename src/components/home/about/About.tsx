import React from 'react'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { motion } from 'framer-motion';
import Image from 'next/image'
import Skill from './skill';
const About = () => {
  return (
    <>
    <section id='about'>
        <div>
        <h1 className=' mt-44 text-[50px] justify-center items-center flex  font-semibold text-custom-light mb-6'> 
     About Me</h1>   
     <div className='mt-20 justify-between items-center flex' id='about'>
     <Image 
            src="/imgs/web-development.gif" 
            alt="An example image"
            className="rounded-full ml-14 "
            width={300} 
            height={300} 
          />
     <div className='max-w-4xl mx-14 '>

     <p className='text-[20px] leading-relaxed  text-slate-100'><span className='text-[30px] font-serif italic text-custom-cream' >
         I&apos;m a Front-End Developer </span> with expertise in HTML, CSS, JavaScript, React, Next.js, and Tailwind CSS,
    with a strong foundation in PHP, databases, and data structures.  I specialize in building responsive,
    user-friendly websites and applications,and I have experience in UI/UX design, 
    ensuring that every project is not only functional but also visually appealing.</p>
   </div>



   </div>
    </div>
    <div>
        <Skill/>
    </div>
    </section>
    </>
  )
}

export default About