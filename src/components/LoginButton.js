import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { BiLogIn } from 'react-icons/bi'

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button onClick={() => loginWithRedirect()} className="loginbtn">
    <span><BiLogIn style={{fontSize: "40px"}}/></span>
    </button>;
};

export default LoginButton;