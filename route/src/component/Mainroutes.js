import React from 'react'
import Dashboard from './Dashboard';
import Innerconntent from "./Innercontent"
import Tabs from './Tabs';
import Setting from './Setting';
import Tab1 from './Tab1';
import Tab2 from './Tab2';
import Tab3 from './Tab3';
import {
  Switch,
  Routes,
  Navigate,
  Route,
  Link
} from "react-router-dom";

function mainroutes() {
  return (
    <Routes>
      <Route path='/' element={<Innerconntent/>}>
      <Route path='/'element={<Navigate replace to ="dashboard"/>} />
      <Route path='/dashboard'element={<Dashboard/>} />
      <Route path='tabs' element={<Tabs/>}>
        <Route path='/tabs'element={<Navigate replace to ="tab1"/>} />
        <Route path='tab1' element={<Tab1/>}/>
        <Route path='tab2' element={<Tab2/>}/>
        <Route path='tab3' element={<Tab3/>}/>
      </Route>
      <Route path='/setting' element={<Setting/>} />
      </Route>
    </Routes>
  )
}

export default mainroutes