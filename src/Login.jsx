import React, { useContext, useState } from 'react'

const Login = () => {

    let [name, setName] = useState("")
    let [upName] = useContext(data)

    return (
        <input type="text" onChange={(e) => setName(e.target.value)} />
<button onClick={()=>upName(name)}>Login</button>
    )
}

export default Login