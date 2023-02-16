import "../../styles/Nordigen/styles.css"
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const Loading = () => {
  const history = useHistory();
  const [requisition, setRequisition] = useState(null);
  const [agreement, setAgreement ] = useState(null)
  const { getAccessTokenSilently } = useAuth0();

  useEffect(() => {


    const handleData = async() => {
      try{

        const accessToken = await getAccessTokenSilently();
        const request = await fetch(`${process.env.REACT_APP_API_URL}/save-agreement-id`, {
          method: 'GET',
          headers: {
          "token": await getAccessTokenSilently()
        }
        });
        const response = await request.json();
        setAgreement(response)

      } catch(error) {
        console.log(error);
      }
    }
    handleData();
  }, []);
  

  useEffect(() => {
    try {
      if (agreement) {
        const fetchRequisition = async () => {
          const accessToken = await getAccessTokenSilently();
          const request = await fetch(`${process.env.REACT_APP_API_URL}/save-requisition-id`, {
            method: 'GET',
            headers: {
            "token": await getAccessTokenSilently()
          }
          });
          const response = await request.json();
          setRequisition(response.link);
        };
        fetchRequisition();
      }
    } catch (error) {
      console.error(error.message)
    }
  }, [agreement]);

  useEffect(() => {
    if (requisition) {
      window.location.href = `${requisition}`;
    }
  }, [requisition, history]);

  console.log(requisition)
  return (
    <div className="loading">
      <div className="loading-spinner" />
    </div>
  );
};

export default Loading;
