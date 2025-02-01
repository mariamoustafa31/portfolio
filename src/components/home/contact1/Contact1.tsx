/* eslint-disable @typescript-eslint/no-unused-vars */
import contact from '@/app/contact/page'
import { useRouter } from 'next/navigation';
import React from 'react'

const Contact1 = () => {
  const router = useRouter();

  const handleClick = () => {
    // Redirect to the desired page, for example, '/contact'
    router.push('/contact');
  };
    
  

  return (
    <section className="">
          <div className="justify-between items-center flex bg-slate-900 ">
    <div className="ml-20  space-y-4">
      <div>
        <h1 className=" text-white mt-24 mb-24 text-[55px] font-semibold ">
        Contact us for the service <br/> you want to use
          <span className=" text-custom-cream text-[30px] font-serif italic ">
          </span>
        </h1>
      </div>
    </div>
    <div>
    <button
    onClick={handleClick}
  className="px-8 py-4 mr-44 bg-custom-p text-white text-2xl font-semibold rounded-lg shadow-md font-sans
   hover:bg-slate-400 focus:outline-none focus:ring-2 focus:ring-custom-cream transition duration-300"
>
  Contact us 
</button>

      
    </div>
  </div>
</section>
  )
}

export default Contact1