import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "../../styles/styles.css";

const Loading = () => {
  const history = useHistory();
  const [agreement, setAgreement] = useState(null);
  const [requisition, setRequisition] = useState(null);

  useEffect(() => {
    const fetchAgreement = async () => {
      const request = await fetch("http://localhost:3000/save-agreement-id");
      const response = await request.json();
      setAgreement(response);
    };

    fetchAgreement();
  }, []);

  useEffect(() => {
    if (agreement) {
      const fetchRequisition = async () => {
        const request = await fetch("http://localhost:3000/save-requisition-id");
        const response = await request.json();
        setRequisition(response.link);
      };

      fetchRequisition();
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
