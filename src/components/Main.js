import { useAuth0 } from "@auth0/auth0-react";
import Profile from "./Profile";
import { NavBar } from "./NavBar";
import { State } from "./State";
import { useEffect, useState } from "react";

const Main = () => {
  const { user, getAccessTokenSilently } = useAuth0();

  const [accounts, setAccounts] = useState(null);
  const [transactions, setTransactions] = useState("");
  
  const getAccounts = async() => {
    console.log('runing getaAccounts', user.sub)
    try {
      const request = await fetch('http://localhost:3001/save-accounts', {
        method: 'GET', 
        headers: {
          token: await getAccessTokenSilently()
        }

      });
      const response = await request.json();
      setAccounts(response);
    } catch (error) {
      console.error(error);
    }
  };
  
  useEffect(() => {
    if (user.sub) {
      getAccounts();
    }
  }, [user?.sub]); 
  

  return (
    <div className="App">
    <NavBar/>
    <Profile/>
    </div>
  );
};

export default Main;
