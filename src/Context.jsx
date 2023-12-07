import React, { useState } from 'react'

const Context = ({children}) => {

    let[name,setName]=useState("")

    const upName=(val)=>{
        setName(val);
    };


  return (
    <data.provider value={{name,upName}}>{children}</data.provider>
  )
}

export default Context