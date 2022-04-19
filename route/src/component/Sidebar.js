import React from 'react'
import {Link} from "react-router-dom"

function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebar__items'>
       <Link to="/dashboard">Dashboard</Link>
       <Link to="/tabs">tabs demo</Link>
       <Link to="/setting">setting</Link>
      </div>
    </div>
  )
}

export default Sidebar