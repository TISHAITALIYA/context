import React, { useContext } from 'react'

const Profile = () => {

    let{name}=useContext(data);

  return (
    <>
    <h1>user</h1>
    <h1>{name}</h1>
    </>
  )
}

export default Profile