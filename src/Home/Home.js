import React from 'react'
import NavBar from '../Components/Navbar'
import Praveen from '../Components/praveen'
import Footer from '../Components/Footer'
import Skills from '../Components/Skills'
import Work from '../Components/Work'
import Resume from '../Components/Resume'
import Contact from '../Components/Contact'


function Home(admin) {
  return (
    <div>
    <NavBar admin={admin}/>
    <Praveen/>
    <Skills/>
    <Work/>
    <Resume/>
    <Contact/>
    <Footer/>
    </div>
    
  )
}

export default Home
