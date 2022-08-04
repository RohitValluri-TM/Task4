import React, {useContext} from 'react'
import {MainContext} from './App';
import Main from './Main';
import SideNav from './SideNav';

function Dashboard() {
    const data = useContext(MainContext)
  return (
    <div>
        <h2>Dashboard</h2>
        <h4>Title : {data.title}</h4>
        <h4>Username : {data.username}</h4>
        <h4>Active Profile Id : {data.activeProfileId}</h4>
        <SideNav/>
        <Main/>
    </div>
  )
}

export default Dashboard