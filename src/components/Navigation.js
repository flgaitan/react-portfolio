import React from 'react'
import { NavLink } from 'react-router-dom'

function Navigation() {
  return (
    <div className='nav-links'>
      <NavLink to= "/">About Me</NavLink>
      <NavLink to= "/portfolio">Portfolio</NavLink>
      <NavLink to= "/contacts">Contacts</NavLink>
      <NavLink to= "/resume">Resume</NavLink>
    </div>
  )
}

export default Navigation