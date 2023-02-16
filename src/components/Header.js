import Navbar from "./Nav";
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import { useState, useEffect } from "react";




const Header = () => {

    const [hasBankToken, setHasBankToken] = useState(false);
    const {user, getAccessTokenSilently} = useAuth0();

    useEffect(() => {
        async function main() {
          const request = await fetch(`${process.env.REACT_APP_API_URL}/check-token-status`, {
            method: 'GET',
            headers: {
              "token": await getAccessTokenSilently()
            }
          });
    
          // Banktoken status
          const { status } = await request.json();
          setHasBankToken(status)
        }  
        main();
      }, [user, getAccessTokenSilently])


    

    
    return ( 
      <header className="headerwrapper">
      <div className="header">
        <h1 className="header__title">MoneyMates</h1>
      {user ? <LogoutButton /> : <LoginButton />}
      </div>
        <Navbar hasLinkedBankAccount={hasBankToken} />
      </header>
    
     );
}
 
export default Header;