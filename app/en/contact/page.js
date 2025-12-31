import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Contact from './components/Contact'
import GoToTop from '../components/GoToTop'
import Whatsappbtn from '../components/Whatsappbtn'

const page = () => {
  return (
    <div>
      <Navbar />


<Contact />

      <Footer />
      <GoToTop />
      <Whatsappbtn />
    </div>
  )
}

export default page
