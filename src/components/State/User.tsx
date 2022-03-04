// useState Future Value (imp)

import React, { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};

export default function User() {
  // When user visits our website the user shouldnt be loggedIn by default it should be null
  // We should also set the user State to null when user logs out
  const [user, setUser] = useState<AuthUser | null>(null);
  const handleLogin = () => {
    // user provid AuthUser values but lets hard code it
    // TS gives me error that initial value is null and you setting an object ==> For this we use to specify the type of useState hook and will not rely on type inference
    setUser({ name: "Haseeb", email: "abdul.haseeb@rnssol.com" });
  };
  const handleLogout = () => {
    setUser(null);
  }
  return (
    <div>
      <button onClick={handleLogin}></button>
      <button onClick={handleLogout}></button>

      {/* optional chaining operator is if value not found it shouldnt give undefined but show value of another type */}
      {/* <div>User name is {user.name}</div> */}
      
      <div>User name is {user?.name}</div>
      <div>User email is{user?.email}</div>
    </div>
  );
}
