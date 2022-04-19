import React from 'react'
 import {Outlet} from "react-router-dom"
 import Tavnav from './Tavnav'
function Tabs() {
  return (
    <div className='tabs'>
      <Tavnav/>
      <Outlet></Outlet>
    </div>
    
  )
}

export default Tabs