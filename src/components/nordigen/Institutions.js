import "../../styles/Nordigen/styles.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Institutions = () => {
  const [institutions, setInstitutions] = useState(null);
  const [selectedBank, setSelectedBank] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const history = useHistory();

  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    const getInstitutions = async () => {
      try {
        const accessToken = await getAccessTokenSilently();
        const domain = `${process.env.REACT_APP_AUTH0_DOMAIN}`;
        const user_id = user.sub;

        const { data: userData } = await axios.get(`https://${domain}/api/v2/users/${user_id}`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        const request = await fetch(`${process.env.REACT_APP_API_URL}/institutions`, {
          headers: {
            token: await getAccessTokenSilently(),
          },
        });

        if (!request.ok) {
          throw new Error("Failed to fetch institutions");
        }

        const response = await request.json();
        setInstitutions(response.flat());
      } catch (error) {
        console.log(error);
      }
    };

    getInstitutions();
  }, []);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredInstitutions = institutions
    ? institutions.filter((institution) =>
        institution.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  const handleInstitutionClick = async (id) => {
    setSelectedBank(id);
    const request = await fetch(`${process.env.REACT_APP_API_URL}/save-institution-id`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        token: await getAccessTokenSilently(),
      },
      body: JSON.stringify({ id }),
    });

    if (!request.ok) {
      throw new Error("Failed to save institution id");
    }

    const response = await request.json();
    if (response.status === "success") {
      history.push("/loading");
    }
  };

  return (
    <div>
      <h1 id="institutionSelectHeader">Select a bank</h1>
      <div className="searchBarContainer">
        <input
          className="searchBar"
          type="text"
          placeholder="Search for a bank..."
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>
      {filteredInstitutions &&
        filteredInstitutions.map((institution) => (
          <div
            className="bankItemContainer"
            key={institution.id}
            onClick={() => handleInstitutionClick(institution.id)}
          >
            <p className="institutionLabel">{institution.name}</p>
            <img className="bankLogo" src={institution.logo} alt={institution.name} />
          </div>
        ))}
    </div>
  );
};

export default Institutions;
