import React, {useContext} from 'react'
import { MainContext } from './App'
import Page from './Page'
import TopNav from './TopNav'

function Main() {
    const data = useContext(MainContext)
  return (
    <div>
        <h2>Main</h2>
        <h4>Title : {data.title}</h4>
        <h4>Username : {data.username}</h4>
        <TopNav/>
        <Page/>
    </div>
    
  )
}

export default Main