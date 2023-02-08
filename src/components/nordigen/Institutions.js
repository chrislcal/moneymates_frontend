import "../../styles/styles.css";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

const Institutions = () => {
  const [institutions, setInstitutions] = useState(null);
  const [selectedBank, setSelectedBank] = useState(null);

  const history = useHistory();

  useEffect(() => {
    const getInstitutions = async () => {
      const request = await fetch("http://localhost:3000/institutions", {
        method: "GET",
        headers: {
          "content-type": "application/json",
        },
      });

      const response = await request.json();
      setInstitutions(response.flat());
    };
    getInstitutions();
  }, []);

  const handleInstitutionClick = async (id) => {
    setSelectedBank(id);
    const request = await fetch("http://localhost:3000/save-institution-id", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ id }),
    });

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
          <div className="bankItemContainer" key={institution.id}
            onClick={() => handleInstitutionClick(institution.id)}>
            <p className="institutionLabel">{institution.name}</p>
            <img className="bankLogo" src={institution.logo} />
          </div>
        ))}
    </div>
  );
};

export default Institutions;


