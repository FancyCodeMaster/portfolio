import React from 'react'
import { Link } from 'react-router-dom'

const RoutesCard = () => {
  return (
    <div>
      <h4><Link to='/'>Home</Link></h4>
      <h4><Link to='/education'>Education</Link></h4>
      <h4><Link to='/skills'>Skills</Link></h4>
      <h4><Link to='/projects'>Projects</Link></h4>
      <h4><Link to='/blogs'>Blogs</Link></h4>
    </div>
  )
}

export default RoutesCard
