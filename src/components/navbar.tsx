import Link from 'next/link'
import React from 'react'

const navbar = () => {
  return ( <>
  <nav>
  <div className='flex fixed left-0 right-0 z-50 bg-slate-800 bg-opacity-65  items-center justify-between pt-5 pb-5 uppercase text-slate-100 '>
  <div className='flex-1 flex justify-center gap-7 '>
    <Link href='/' className='hover:text-custom-light hover:underline transition-all '>home</Link>
    <Link href='#about' className='hover:text-custom-light  hover:underline transition-all '>about</Link>
    <Link href='#services' className='hover:text-custom-light  hover:underline transition-all '>services</Link>
  </div>
  <div className='text-custom-p mr-12  hidden sm:block outline-dotted p-4 hover:outline-custom-cream hover:outline  hover:text-custom-cream  transition-all '>
    <Link href='contact'>contact us</Link>
  </div>
</div>
  </nav>
  </>
    
  )
}

export default navbar