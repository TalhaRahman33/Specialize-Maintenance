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


const page = () => {
  return (
         <div>
          <Navbar />
    
          <div className="page-content">
    
    
          <Spacialization />
          <AboutComp />
           <Services />
          <OurValue />
          <Mission />
         
          <Callus />
          <Projects />
          <Blogs />
          <Testimonials />
    
    
    
    
            </div>
    
            <Footer />
            <GoToTop />
    
          </div>
  )
}

export default page
