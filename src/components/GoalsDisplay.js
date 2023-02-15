import ProgressBar from "./ProgressBar";
import axios from 'axios'
import { useEffect, useState, useCallback } from "react";
import { useAuth0 } from "@auth0/auth0-react";



const GoalsDisplay = (props) => {

  const id = props.match.params.id
  const {getAccessTokenSilently} = useAuth0(); 

  // States
  const [goal, setGoal] = useState([])
  const [bankData, setBankData] = useState([])


  const populateGoal = useCallback(async (id) => {

    try {
      const res = await fetch(`http://localhost:3001/goals/${id}`, {
        method: 'GET', 
        headers: {
          token: await getAccessTokenSilently()
        }
      });

      const response = await res.json()
      setGoal(response)
      

      const request = await fetch('http://localhost:3001/universal', {
        headers: {
          token: await getAccessTokenSilently()
        }
      });

      const data = await request.json();
      setBankData(data);

      
    } catch (error) {
      console.error(error)
    }
  }, [getAccessTokenSilently])
  

  useEffect(() => {

    populateGoal(id)

  }, [populateGoal, id])
  

  console.log(bankData);


 
  let displayedGoal;

  if(goal && bankData) {
      displayedGoal = goal.map((goal) => {

          const goalId = goal[0];
          const goalAccount = goal[4];
          const goalSum = goal[3];
          const goalName = goal[1];
          const goalDescription = goal[2];

          const selectedAccount = bankData.find(account => account.details.product === goalAccount);
          const balance = selectedAccount ? selectedAccount.balances.balanceAmount.amount : 0;
          const percentage = (balance / goalSum) * 100;

          return (
            <div>
              <h1 style={{ margin: "auto" }}>{goalName}</h1>
              <p style={{ margin: "auto" }}>{goalDescription}</p>
            <div className="progress-bar">
              <ProgressBar bgcolor={testData.bgcolor} completed={percentage.toFixed(2)} />
            </div>
          </div>
            )
      })
      
    }


  let testData = { bgcolor: "#5D1788"};



  return (
    <div>
      {displayedGoal}
    </div>
  );
};

export default GoalsDisplay;
