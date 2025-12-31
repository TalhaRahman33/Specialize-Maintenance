import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import GoToTop from '../components/GoToTop'
import Projects from './components/Projects'
import Whatsappbtn from '../components/Whatsappbtn'


const page = () => {
  return (
    <div>
     <Navbar />


 <Projects />

     <Footer />
     <GoToTop />
     <Whatsappbtn />
    </div>
  )
}

export default page
