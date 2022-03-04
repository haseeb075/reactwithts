// useState Basic

import React, {useState} from 'react'

export default function LoggedIn() {
  
    const [isLoggedIn, setisLoggedIn] = useState(false)
    const handleLogin = () => {

        setisLoggedIn(true)
    }
    const handleLogout = () => {
        setisLoggedIn(false)
        // plain js 0 is treated as falsy value but TS doesnt let us do that
        // setisLoggedIn(0)

    }
    return (
    <div>
    <button onClick={handleLogin}></button>
    <button onClick={handleLogout}></button>
   
   <div>
       User is {isLoggedIn ? <p>Logged In</p> : <p>Logged Out</p>}
   </div>
    </div>
  )
}
