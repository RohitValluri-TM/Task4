import React, {useContext} from 'react'
import {MainContext} from './App';

function SideNav() {
    const data = useContext(MainContext)
  return (
    <div>
        <h2>SideNav</h2>
        <h4>Active Profile Id : {data.activeProfileId}</h4>
    </div>
  )
}

export default SideNav