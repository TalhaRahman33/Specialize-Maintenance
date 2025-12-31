import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import GoToTop from '../components/GoToTop'
import Ser from './components/Ser'
import Whatsappbtn from '../components/Whatsappbtn'


const page = () => {
  return (
    <div>
    <Navbar />



   <div className="page-content">

    <Ser />


   </div>









    <Footer />

    <GoToTop />
    <Whatsappbtn />
    </div>
  )
}

export default page
