import React, {useContext} from 'react'
import { MainContext } from './App'

function TopNav() {
    const data = useContext(MainContext)
  return (
    <div>
        <h2>TopNav</h2>
        <h4>Title : {data.title}</h4></div>
  )
}

export default TopNav