import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { BiLogOut } from 'react-icons/bi'

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button className="logoutbtn" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      <span><BiLogOut style={{fontSize: "40px"}}/></span>
    </button>
  );
};

export default LogoutButton;