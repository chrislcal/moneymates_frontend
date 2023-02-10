import "../../styles/styles.css";
import axios from 'axios';
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { NavBar } from "../NavBar";

const GetToken = () => {
  const [status, setStatus] = useState(null);
  const history = useHistory();

  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();

  useEffect(() => {

    const getAccessToken = async() => {
      try{
        
        const accessToken = await getAccessTokenSilently();
        
      } catch(error) {
        console.log(error);
      }
    }

    getAccessToken();
    
  }, [])


  const getToken = async () => {
    try {


      const request = await fetch("http://localhost:3001/get-token", {
        method: 'GET',
        headers: {
          "token": await getAccessTokenSilently()
        }
      });

      checkTokenStatus();
    } catch (error) {
      console.log(error);
    }
  };

  const checkTokenStatus = async () => {
    try {
      const request = await fetch("http://localhost:3001/check-token-status", {
        method: "GET",
        headers: {
          "token": await getAccessTokenSilently()
        },
      });

      const response = await request.json();
      setStatus(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (status && status.status === true) {
      history.push("/institutions");
    }
  }, [status, history]);

  return (
    
    <div className="bankContainer">
      <NavBar/>
      <h2 id="connectToBankHeader">Connect to bank</h2>
      <p id="connectParagraph">
        Connect to obtain a list of available financial institutions. Our bank
        connections are facilitated by Nordigen, an Account Information Service
        Provider that is fully compliant with the Payment Services Directive 2
        (PSD2) and regulated by the Financial and Capital Market Commission
        (FKTK) and the Financial Conduct Authority (FCA). To establish a
        connection with Nordigen, authorization from your bank's institution is
        mandatory. The information obtained through this connection is strictly
        governed by the terms and regulations set forth by the respective
        financial institution.
      </p>
      <button id="connectBtn" onClick={getToken}>
        Connect
      </button>
    </div>
  );
};

export default GetToken;
