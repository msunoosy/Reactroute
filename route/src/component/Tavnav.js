import React from 'react'
import { Link,useLocation } from "react-router-dom"

function Tavnav() {

    const location = useLocation()

    return (
        <div className='tab-nav'>
            <Link to="/tabs/tab1" className={location.pathname==='/tabs/tab1'?'tab_active':''} >Tab1</Link>
            <Link to="/tabs/tab2" className={location.pathname==='/tabs/tab2'?'tab_active':''}>Tab2</Link>
            <Link to="/tabs/tab3" className={location.pathname==='/tabs/tab3'?'tab_active':''}>Tab3</Link>
        </div>
    )
}

export default Tavnav