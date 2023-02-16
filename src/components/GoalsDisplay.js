import ProgressBar from "./ProgressBar";
import { useEffect, useState, useCallback } from "react";
import { useHistory } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import '../styles/goalsDisplay.css';
import { RiDeleteBinLine } from "react-icons/ri"; 



const GoalsDisplay = (props) => {

  const history = useHistory();
  
  const id = props.match.params.id
  const {getAccessTokenSilently} = useAuth0(); 

  // States
  const [goal, setGoal] = useState([]);
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
      setGoal([response])
      

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

  const deleteGoal = async (id) => {
    try {
      const request = await fetch(`http://localhost:3001/goals/${id}`, {
        method: 'DELETE', 
        headers: {
          token: await getAccessTokenSilently()
        }
      }) 

      history.push('/goals')
    } catch (error) {
      console.log(error)
    }
  }


 
  let displayedGoal;
  console.log(goal)

  if(goal && bankData.length) {
      displayedGoal = goal.map((goal) => {
          const selectedAccount = bankData.find(account => account.details.product === goal[0].account);
          console.log({selectedAccount})
          const balance = selectedAccount ? selectedAccount.balances.balanceAmount.amount : 0;
          console.log(balance)
          const percentage = (balance / goal[0].amount) * 100;
          console.log(percentage)

          let testData = { bgcolor: "#5D1788"};

          return (
            <div className="goal-display" key={goal.id} >
              <div className="progress-bar-rounded">
                <ProgressBar className="progressBarRounded" bgcolor={testData.bgcolor} completed={percentage.toFixed(2)} />
              </div>
              <div className="goal-header">
                <h1>{goal[0].name}</h1>
              </div>
              <div className="description">
                <p>{goal[0].description}</p>
              </div>
              <div className="saving-progress">
                <p><span className="bold">NOK{goal[0].amount}</span> / {balance}</p>
              </div>
              <div className="account-name">
                <p>Account: <span className="bold">{selectedAccount.details.product}</span></p>
              </div>
            <button className="delete-goal" onClick={() => deleteGoal(goal[0].id)}><RiDeleteBinLine /></button>
          </div>
            )
      }) 
    }

  return (
    <div >
      {displayedGoal}
    </div>
  );
};

export default GoalsDisplay;
