import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import GoToTop from '../components/GoToTop'
import Projects from '../portfolio/components/Projects'



const page = () => {
  return (
    <div>
     <Navbar />

      <Projects />


     <Footer />
     <GoToTop />
    </div>
  )
}

export default page
