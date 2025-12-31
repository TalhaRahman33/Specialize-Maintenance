import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import GoToTop from '../components/GoToTop'
import SerAr from './components/SerAr'
import Whatsappbtn from '../components/Whatsappbtn'

const page = () => {
  return (
    <div>
    <Navbar />



   <div className="page-content">

    <SerAr />


   </div>









    <Footer />

    <GoToTop />
    <Whatsappbtn />
    </div>
  )
}

export default page
