import React, {useContext} from 'react'
import { MainContext } from './App'
import Profile from './Profile'

function Page() {
    const data = useContext(MainContext)
  return (
    <div>
        <h2>Page</h2>
        <h4>Username : {data.username}</h4>
        <Profile/>
    </div>
  )
}

export default Page