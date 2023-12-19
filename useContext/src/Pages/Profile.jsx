import React, { useContext, useEffect } from 'react'
import UserContext from '../Context/UserContext'

function Profile() {
    const {user}=useContext(UserContext)
  if(!user) return <h1>User is not logged</h1>
  
  return (
    <h1>Username is {user.username}</h1>
  )
}

export default Profile