import React from 'react'
import Navbar from '../components/Navbar'
import Spacialization from '../components/Spacialization'
import AboutComp from '../components/AboutComp'
import OurValue from '../components/OurValue'
import Mission from '../components/Mission'
import Services from '../components/Services'
import Callus from '../components/Callus'
import Projects from '../components/Projects'
import Blogs from '../components/Blogs'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'
import GoToTop from '../components/GoToTop'
import '../components/navbar.module.css'
import Hero from '../components/Hero'
import Partners from '../components/Partners'
import Lighting from '../components/Lighting'
import Topbar from '../components/Topbar'


const page = () => {
  return (
         <div>
          <Topbar />
          <Navbar />
    
          <div className="page-content">
    
    <Hero />
    
    
      
      
            <Services />
                <Partners />
          <AboutComp />
              
          <OurValue />
          <Mission />
    
          <Callus />
          <Projects />
          {/* <Blogs /> */}
              {/* <Spacialization /> */}
           <Lighting />
          <Testimonials />
    
    
   
    
            </div>
    
            <Footer />
            <GoToTop />
    
          </div>
  )
}

export default page
