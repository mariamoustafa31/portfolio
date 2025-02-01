/* eslint-disable react/jsx-no-undef */

"use client";

import About from "@/components/home/about/About";
import Contact1 from "@/components/home/contact1/Contact1";
import Hero from "@/components/home/hero/Hero";
import Services from "@/components/home/services/Services";


const Home = () => {
  return (
    <main className="home">
        <Hero/>
        <About/>
        <Services/>
        <Contact1/>
    </main>
  );
};

export default Home;
