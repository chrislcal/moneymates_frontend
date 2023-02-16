import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import '../styles/creategoals.css';
import { useAuth0 } from '@auth0/auth0-react';


const CreateGoals = () => {

  const {getAccessTokenSilently} = useAuth0();
  const history = useHistory();

  const [accountDetails, setAccountDetails] = useState('');
  const [goalName, setGoalName] = useState("");
  const [goalDescription, setGoalDescription] = useState("");
  const [goalAmount, setGoalAmount] = useState('');
  const [selectedAccount, setSelectedAccount] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const getAccountDetails = async() => {
      try {
        const request = await fetch(`${process.env.REACT_APP_API_URL}/details`, {
          headers: {
            token: await getAccessTokenSilently()
          }
        });
        const response = await request.json();
        setAccountDetails(response);

      } catch (error) {
        console.log(error)
      }
    }
    getAccountDetails()

  }, []);

  let availableAccounts;
  if(accountDetails) {
    console.log(`accountDetails:`, accountDetails)
    
    availableAccounts = accountDetails.map((account) => {
      return (
        <option key={account.details.bban} value={account.details.product}>
          {account.details.product}
        </option>
      )
    })
  }

  async function handleClick() {
    try {
      const request = await fetch(`${process.env.REACT_APP_API_URL}/save-goal`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
          token: await getAccessTokenSilently()
        },
        body: JSON.stringify({
          name: goalName,
          description: goalDescription, 
          amount: goalAmount,
          account: selectedAccount
        })
      });
      const response = await request.json()
      
      if(response) {
        history.push("/goals");
      }

    } catch (error) {
      console.log(error);
      setErrorMessage(error.message);
    }
  }

  return (
    <div className="create-goal-container">

      <input
        className="name-input"
        type="text"
        placeholder="Name"
        onChange={(e) => setGoalName(e.target.value)}
      ></input>

      <textarea
        className="input-goal-description"
        type="text"
        placeholder="Description"
        onChange={(e) => setGoalDescription(e.target.value)}
      ></textarea>

      <input
        className="input-amount"
        type="number"
        placeholder="Amount"
        onChange={(e) => setGoalAmount(e.target.value)}
      ></input>

      <select
        className="select-account"
        value={selectedAccount}
        onChange={(e) => setSelectedAccount(e.target.value)}
      >
        {availableAccounts}
      </select>
      <button
        className="create-new-goal"
        type="button"
        onClick={handleClick}
      >
        Create goal
      </button>
    </div>
  );
};

export default CreateGoals;
