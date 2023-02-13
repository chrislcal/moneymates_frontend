import ProgressBar from './ProgressBar';
import { useHistory } from 'react-router-dom';
import {useEffect, useState} from 'react';
import { useAuth0 } from '@auth0/auth0-react';

import '../styles/goals.css';

function Goals() {
    const {user, getAccessTokenSilently} = useAuth0();

    const [goals, setGoals] = useState([]);

    useEffect(() => {
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
    }, []);

    console.log(goals);

   
    const testData = { bgcolor: "#5D1788", completed: 90 };
    let history = useHistory();

   
    
    const handleAddGoal = () => {
        history.push('/create-goals');
    }

    return (
        <div className="goals-container">

            <div className="goal-card">
                <div className="progress-bar">
                    <ProgressBar bgcolor={testData.bgcolor} completed={testData.completed} />
                </div>
                <h1 className="goal-name">Aiya Napa</h1>

                <div className="goal-description">
                    <p>Go Ayia Napa daddyboys!</p>
                </div>
            </div>
            <button className="add-goal-button" onClick={handleAddGoal}>
                Add new goal
            </button>
        </div>
    )
}

export default Goals;