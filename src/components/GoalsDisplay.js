import { useLocation } from "react-router-dom";

const GoalsDisplay = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const name = params.get("name");
  const description = params.get("description");

  return (
    <div>
      <h1 style={{ margin: "auto" }}>{name}</h1>
      <p style={{ margin: "auto" }}>{description}</p>
    </div>
  );
};

export default GoalsDisplay;
