import React, {useContext} from 'react'
import { MainContext } from './App'

function Profile() {
    const data = useContext(MainContext)
  return (
    <div>
        <h2>Profile</h2>
        <h4>Username : {data.username}</h4></div>
  )
}

export default Profile