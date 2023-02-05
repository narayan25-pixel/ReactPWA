import React from 'react'
import Client from '../../Components/ClientSection/Client'
import CopyRight from '../../Components/CopyrightSection/CopyRight'
import Footer from '../../Components/Footer/Footer'
import Hero from '../../Components/HeroSection/Hero'
import Navbar from '../../Components/Navbar/Navbar'
import About from '../About/About'
import Contact from '../Contact/Contact'
import Services from '../Services/Services'

export default function Home() {
  return (
    <div>
      <Navbar/>
      <div className='container'>
      <Hero/>
      <About/>
      <Services/>
      <Contact/>
      <Client/>
      </div>
      <Footer/>
      <CopyRight/>
    </div>
  )
}
