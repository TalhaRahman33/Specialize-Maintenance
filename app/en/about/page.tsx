import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import GoToTop from '../components/GoToTop'
import Spacialization from '../components/Spacialization'
import AboutComp from '../components/AboutComp'

const page = () => {
  return (
    <div>
     <Navbar />
    
       <div className="page-content">

      <Spacialization />
      <AboutComp />

       </div>



     <Footer />
     <GoToTop />  
    </div>
  )
}

export default page
