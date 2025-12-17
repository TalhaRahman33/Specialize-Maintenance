import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import GoToTop from '../components/GoToTop'
import SerAr from './components/SerAr'

const page = () => {
  return (
    <div>
    <Navbar />



   <div className="page-content">

    <SerAr />


   </div>









    <Footer />

    <GoToTop />
    </div>
  )
}

export default page
