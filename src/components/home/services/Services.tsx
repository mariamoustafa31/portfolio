import React from 'react'

const Services = () => {
  return (
    <section id='services'>
     <div>
      <div>
      <div className="px-4 py-8">
  <h1 className="m-32 text-4xl md:text-5xl font-semibold text-custom-light text-center">
    Services
  </h1>
  <div className="space-y-8 md:space-y-12 ml-14">
    <h2 className="text-3xl md:text-5xl  font-serif italic text-custom-cream">
      What I Do.
    </h2>
    <p className="text-[25px] max-w-3xl  text-slate-100 ">
    I specialize in creating intuitive UI/UX designs and developing scalable,
     high-performance websites and applications. My expertise spans both frontend and backend,
      ensuring seamless user experiences and robust functionality across all platforms.
    </p>
  </div>
</div>
          <div className="max-w-5xl mx-auto rounded-lg shadow-lg bg-light p-6">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-white">
    <div className="bg-custom-cream p-4 rounded-lg hover:bg-orange-200 text-black shadow-lg hover:scale-105 transition-all duration-200">
      <h3 className="text-[20px] font-semibold text-slate-100">Frontend development</h3>
      <p className='font-cairo italic'>focuses on creating the visual and interactive elements of a website or web application. 
        It involves HTML, CSS, and JavaScript to design and build user interfaces.</p>
    </div>
    <div className="bg-custom-cream p-4 rounded-lg hover:bg-orange-200 text-black shadow-lg hover:scale-105 transition-all duration-200">
      <h3 className="text-[20px] font-semibold text-slate-100">Backend development</h3>
      <p className='font-cairo italic'> deals with server-side logic, databases, and server management. It includes technologies like Node.js,
         PHP, Python, Ruby, and more to ensure the applications functionality and data processing.</p>
    </div>
    <div className="bg-custom-cream p-4 rounded-lg hover:bg-orange-200 text-black shadow-lg hover:scale-105 transition-all duration-200">
      <h3 className="text-[20px] font-semibold text-slate-100">UI/UX Design</h3>
      <p className='font-cairo italic'> It is about enhancing user satisfaction through usability, accessibility, 
        and pleasure provided in the interaction with a product. 
        UI focuses on the layout and design, while UX focuses on the overall experience.</p>
    </div>
  </div>
</div>

            
        </div>
      </div>
     
    </section>
    
  )
}

export default Services