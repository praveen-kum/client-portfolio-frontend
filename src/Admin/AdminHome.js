import React from 'react'
import '../App.css'
import Profile from './profile'
import Work from './work'
import Resume from './experience'

import Footer from './footer'



function AdminHome() {
  return (
    <div>
   
    <Profile/>
    <Work/>
    <Resume/>
    <Footer/>
    </div>
    
  )
}

export default AdminHome
