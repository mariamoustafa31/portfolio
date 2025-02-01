import React from 'react'
import { FaCss3, FaDatabase, FaPhp } from 'react-icons/fa';
import { FaHtml5, FaJs } from "react-icons/fa6";
import { IoLogoReact } from 'react-icons/io5';
import { PiFigmaLogoBold } from 'react-icons/pi';
import { RiTailwindCssFill } from 'react-icons/ri';

const skill = () => {
  return (<>
   
   <div className="mt-16 px-6 py-12 bg-gradient-to-r ">
      <h2 className="text-5xl text-center font-serif italic text-custom-cream mb-12">My Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
        {/* HTML Icon */}
        <div className="flex justify-center items-center p-6 bg-white rounded-full shadow-lg transition-all duration-300 hover:scale-110 ">
          <FaHtml5 className="text-orange-600 text-5xl" />
        </div>

        {/* CSS Icon */}
        <div className="flex justify-center items-center p-6 bg-white rounded-full shadow-lg transition-all duration-300 hover:scale-110">
          <FaCss3 className="text-blue-500 text-5xl" />
        </div>

        {/* JavaScript Icon */}
        <div className="flex justify-center items-center p-6 bg-white rounded-full shadow-lg transition-all duration-300 hover:scale-110">
          <FaJs className="text-yellow-500 text-5xl" />
        </div>

        {/* React Icon */}
        <div className="flex justify-center items-center p-6 bg-white rounded-full shadow-lg transition-all duration-300 hover:scale-110">
          <IoLogoReact className="text-blue-600 text-5xl" />
        </div>

        {/* Tailwind CSS Icon */}
        <div className="flex justify-center items-center p-6 bg-white rounded-full shadow-lg transition-all duration-300 hover:scale-110">
          <RiTailwindCssFill className="text-teal-400 text-5xl" />
        </div>

        {/* Figma Icon */}
        <div className="flex justify-center items-center p-6 bg-white rounded-full shadow-lg transition-all duration-300 hover:scale-110">
          <PiFigmaLogoBold className="text-purple-600 text-5xl" />
        </div>

        {/* Database Icon */}
        <div className="flex justify-center items-center p-6 bg-white rounded-full shadow-lg transition-all duration-300 hover:scale-110">
          <FaDatabase className="text-green-600 text-5xl" />
        </div>

        {/* PHP Icon */}
        <div className="flex justify-center items-center p-6 bg-white rounded-full shadow-lg transition-all duration-300 hover:scale-110">
          <FaPhp className="text-blue-700 text-5xl" />
        </div>
      </div>
    </div>
     



   
  </>
    
  )
}

export default skill