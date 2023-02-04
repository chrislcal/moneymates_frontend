import { useState } from "react";

const Gettoken = () => {
  const [token, setToken] = useState(null);

  const getAccessToken = async () => {
    try {
      const request = await fetch("http://localhost:3000/get-token");
      const response = await request.json();
      setToken(response);
      console.log(token);

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Connect to bank</h2>
      <button onClick={getAccessToken}>Connect</button>
    </div>
  );
};

export default Gettoken;
