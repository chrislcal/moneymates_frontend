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
          const request = await fetch('http://localhost:3001/check-token-status', {
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
        <header>
          <h1 className="app-name">MoneyMates</h1>
          <Navbar hasLinkedBankAccount={hasBankToken}/>
          {user? (<LogoutButton/>):(<LoginButton/>)}
        </header>
     );
}
 
export default Header;