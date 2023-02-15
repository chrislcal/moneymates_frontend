

import ProgressBar from './ProgressBar';
import { useHistory } from 'react-router-dom';
import {useEffect, useState} from 'react';
import { useAuth0 } from '@auth0/auth0-react';

import '../styles/goals.css';

function Goals() {
    const {user, getAccessTokenSilently} = useAuth0();

    const [goals, setGoals] = useState([]);
    const [bankData, setBankData] = useState([]);
    const [selectedGoal, setSelectedGoal] = useState('');

    useEffect(() => {
        console.log('useffect ran')
        const getBalances = async() => {
            try {
                const request = await fetch('http://localhost:3001/universal', {
                    method: 'GET',
                    headers: {
                        token: await getAccessTokenSilently()
                    }
                });

                const data = await request.json();
                
                setBankData(data);
                console.log(data);

            } catch (error) {
                console.log(error)
            }
        }

        const getGoals = async() => {
            try {
                const request = await fetch('http://localhost:3001/get-goals', {
                    method: 'GET', 
                    headers: {
                        token: await getAccessTokenSilently()
                    }
                });
    
                const response = await request.json();
                setGoals(response);
    
            } catch (error) {
                console.log(error);
            }
        }
         getGoals()
         getBalances()
    }, []);

    console.log(goals);

    let history = useHistory();

    let allGoals;

    if(goals.length > 0 && bankData.length > 0) {
        allGoals = goals.map((goal) => {
            const goalId = goal[0];
            const goalAccount = goal[4];
            const goalSum = goal[3];
            const selectedAccount = bankData.find(account => account.details.product === goalAccount);
            const balance = selectedAccount ? selectedAccount.balances.balanceAmount.amount : 0;
            const percentage = (balance / goalSum) * 100;


            return(
                <div onClick={() => history.push(`/goals/${goalId}`)} className="goal-card" key={goalId}>
                <div className="progress-bar">
                    <ProgressBar bgcolor="#BDBDBD" completed={percentage.toFixed(2)} />
                </div>
                <h1 className="goal-name">{goal[1]}</h1>

                <div className="goal-description">
                    <p>{goal[2]}</p>
                </div>
            </div>
            )
        });
    }

    const handleAddGoal = () => {
        history.push('/create-goals', {goals});
    }


    return (
        <div className="goals-container">
            {allGoals}

            <button className="add-goal-button" onClick={handleAddGoal}>
                Add new goal
            </button>
        </div>
    )
}

export default Goals;
