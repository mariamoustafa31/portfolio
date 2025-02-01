
import { FaFacebookSquare } from 'react-icons/fa'
import { FaSquareTwitter } from 'react-icons/fa6'
import { TiSocialInstagram } from 'react-icons/ti'
import { TypeAnimation } from 'react-type-animation'
import Image from 'next/image'
const Hero = () => {
  return (
    <section className="hero">
            <div className="justify-between items-center flex ">
    <div className="ml-20 mt-24 space-y-4">
      <div>
        <h1 className=" text-white text-[70px] ">
          Hello, I&apos;m <br />
          <span className=" text-custom-cream text-[30px] font-serif italic ">
            <TypeAnimation
              sequence={["Maryam Moustafa", 1000, "Web developer ", 1000]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "2em", display: "inline-block" }}
              repeat={Infinity}
            />
          </span>
        </h1>
      </div>
      <div className=" ">
        <p className="max-w-[650px]  mb-6 text-gray-300 ">
          I’m a web developer with a strong focus on front-end
          development. I specialize in creating responsive, user-friendly
          websites using modern technologies.
        </p>
        <div className=''>
        <div className="flex space-x-4 mt-12  mb-6 text-cust  ">
          <a href="" className="text-gray-700 bg-slate-50">
            <FaSquareTwitter />
          </a>
          <a href="" className="text-gray-700 bg-slate-50">
            <FaFacebookSquare />
          </a>
          <a href="" className="text-gray-700 bg-slate-50">
            <TiSocialInstagram />
          </a>
        </div>

        <button
          className="px-5 py-3 bg-custom-p text-white font-medium rounded-lg shadow-md font-sans
hover:bg-slate-400 focus:outline-none focus:ring-2 focus:ring-custom-cream transition duration-300"
        >
          Work With Me
        </button>
        </div>
      </div>
    </div>
    <div>
    <Image 
        src="/imgs/Frame 3.png" 
        alt="An example image"
        className=' mt-28 hover:scale-110 transition-transform duration-300 mr-12 hidden sm:block'
        width={400} 
        height={250} 
      />
      
    </div>
  </div>
    </section>
  )
}

export default Hero