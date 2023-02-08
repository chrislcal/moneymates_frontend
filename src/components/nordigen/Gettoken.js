import '../../styles/styles.css';
import { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom';

const GetToken = () => {
  const [status, setStatus] = useState(null);
  const history = useHistory();

  const getToken = async () => {

    try {
      const request = await fetch("http://localhost:3000/get-token");
      checkTokenStatus();

    } catch (error) {
      console.log(error);
    }
  };

  const checkTokenStatus = async () => {
    try {
      const request = await fetch("http://localhost:3000/check-token-status",
      {
        method: "get",
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
        }
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
      <h2 id="connectToBankHeader">Connect to bank</h2>
      <p id='connectParagraph'>
      Connect to obtain a list of available financial institutions. 
      Our bank connections are facilitated by Nordigen, an Account Information Service Provider 
      that is fully compliant with the Payment Services Directive 2 (PSD2) 
      and regulated by the Financial and Capital Market Commission (FKTK) and
      the Financial Conduct Authority (FCA). To establish a connection with Nordigen, 
      authorization from your bank's institution is mandatory. 
      The information obtained through this connection is strictly governed by the terms and regulations 
      set forth by the respective financial institution.
      </p>
      <button id="connectBtn" onClick={getToken}>Connect</button>
    </div>
  );
};

export default GetToken;
