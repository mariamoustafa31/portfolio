import React from 'react'
import Image from 'next/image'
const Contact2 = () => {
  return (
    <section className="bg-gray-900 py-20"> 
      <div className="container mt-24 justify-between items-center flex  mx-auto px-4 text-slate-50">
      <div className="text-center md:text-left">
  <h2 className="text-3xl font-semibold italic mb-4">Get in Touch</h2>
  <div className='p-6 rounded-lg '>
    <form>
      <div className='my-3 mx-auto'>
        <input className='bg-black text-white w-full py-3 px-5 rounded-lg text-lg' type='text' placeholder='Your Name' />
      </div>
      <div className='my-3 mx-auto'>
        <input className='bg-black text-white w-full py-3 px-5 rounded-lg text-lg' type='email' placeholder='Your Email' />
      </div>
      <div className='my-3 mx-auto'>
        <input className='bg-black text-white w-full py-3 px-5 rounded-lg text-lg' type='text' placeholder='Your Phone' />
      </div>
      <div className='my-3 mx-auto'>
        <textarea className='bg-black text-white w-full py-3 px-5 rounded-lg text-lg' placeholder='Type message...'></textarea>
      </div>
      <button className="px-8 py-4 bg-custom-p  text-white font-medium rounded-3xl shadow-md font-sans hover:bg-slate-400 focus:outline-none focus:ring-2 focus:ring-custom-cream transition duration-300">Send Message</button>
    </form>
  </div>
</div>

        <div className=''>
          
           <Image src='/imgs/full-stack-development.gif'
           alt=''
           width={600}
           height={550}
           className='rounded-3xl'
           />
        </div>
      </div>
    </section>
  )
}

export default Contact2