import "../../styles/styles.css";
import axios from 'axios';
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Institutions = () => {
  const [institutions, setInstitutions] = useState(null);
  const [selectedBank, setSelectedBank] = useState(null);
  const [accessToken, setAccessToken] = useState(null);
  const history = useHistory();

  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    const getInstitutions = async () => {
      try {
        const accessToken = await getAccessTokenSilently();
        const domain = "dev-u5mawjni6mjjw103.us.auth0.com";
        const user_id = user.sub;
    
        const { data: userData } = await axios.get(
          `https://${domain}/api/v2/users/${user_id}`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        const request = await fetch('http://localhost:3001/institutions', {
          headers: {
            "token": await getAccessTokenSilently()
          }
        });

        if (!request.ok) {
          throw new Error('Failed to fetch institutions');
        }

        const response = await request.json();
        setInstitutions(response.flat());
      } catch(error) {
        console.log(error);
      }
    };

    getInstitutions();
  }, []);
  

  const handleInstitutionClick = async (id) => {
    setSelectedBank(id);
    const request = await fetch("http://localhost:3001/save-institution-id", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "token": await getAccessTokenSilently(),
      },
      body: JSON.stringify({ id }),
    });

    if (!request.ok) {
      throw new Error('Failed to save institution id');
    }

    const response = await request.json();
    if (response.status === "success") {
      history.push("/loading");
    }
  };

  return (
    <div>
      <h1 id="institutionSelectHeader">Select a bank</h1>
      {institutions &&
        institutions.map((institution) => (
          <div
            className="bankItemContainer"
            key={institution.id}
            onClick={() => handleInstitutionClick(institution.id)}
          >
            <p className="institutionLabel">{institution.name}</p>
            <img className="bankLogo" src={institution.logo} />
          </div>
        ))}
    </div>
  );
};

export default Institutions;
