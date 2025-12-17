import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import GoToTop from '../components/GoToTop'
import Ser from './components/Ser'


const page = () => {
  return (
    <div>
    <Navbar />



   <div className="page-content">

    <Ser />


   </div>









    <Footer />

    <GoToTop />
    </div>
  )
}

export default page
