import { useAuth0 } from "@auth0/auth0-react";
import {useEffect, useState} from 'react';
import { PanelGroup, Panel } from 'rsuite';
import { SlUser, SlUserFemale } from "react-icons/sl";
import '../styles/home.css';



const Home = () => {
  const { user, getAccessTokenSilently } = useAuth0();

  const [accountDetails, setBankDetails] = useState([]);
  const [balances, setBalances] = useState([]);

  useEffect(() => {
    if(!user?.sub) {
      return;
    }
    const saveAccounts = async() => {
      try {
        const request = await fetch('http://localhost:3001/save-accounts', {
          method: 'GET', 
          headers: {
            token: await getAccessTokenSilently()
          }
  
        });
        const response = await request.json();
    
      } catch (error) {
        console.log(error.message);
      }
    };
    
      const getDetails = async() => {
        try {
          const request = await fetch('http://localhost:3001/details', {
            method: 'GET',
            headers: {
              token: await getAccessTokenSilently()
            }
          });
          const details = await request.json();
          setBankDetails(details);
  
        } catch (error) {
          console.log(error);
        };
      }

      const getBalances = async() => {
        try {
          const request = await fetch('http://localhost:3001/balances', {
            method: 'GET',
            headers: {
              token: await getAccessTokenSilently()
            }
          });
          
          const balances = await request.json();
          setBalances(balances);
  
        } catch (error) {
          console.log(error.message)
        }
      }

      const executeFunctions = async () => {
        
          await saveAccounts()
          await Promise.all([getBalances(), getDetails()]);
        
      }

      executeFunctions()
      
    }, [user?.sub]); 

  

  // Defining accounts to be displayed 

    console.log("Details:", accountDetails);
    let displayedAccounts = accountDetails.map((element) => {
      return(<p key={element.details.bban} className='panel-contents'>{element.details.product}</p>)
    })
  

  // Setting balances 
 

  
    console.log("Balances:", balances);

    let checkingsBalance = balances[0]?.balanceAmount?.amount;

    let totalBalance = balances.map((element) => {
      return element.balanceAmount.amount
    }).reduce((acc, curr) => {
      return acc + curr
    }, 0);

  
    return (
      <PanelGroup accordion defaultActiveKey={1} bordered>
        <Panel header={`Balance checking account`} eventKey={1} id="panel1" >
         <p className='panel-contents'> NOK {checkingsBalance? parseFloat(checkingsBalance, 2) : '...'}</p>
        </Panel>
        <Panel header={`Total Balance`} eventKey={2} id="panel2" >
          <p className='panel-contents'>NOK {parseFloat(totalBalance, 2)}</p>
        </Panel>
        <Panel header="Goals (2)" eventKey={3} id="panel3" >
         
          <p className='panel-contents'>Ayia Napa</p>
          <p className='panel-contents'>New couch</p>
        </Panel>
        <Panel header={`Accounts (${accountDetails.length})`} eventKey={4} id="panel4" >
          {displayedAccounts}
        </Panel>
        <Panel header="People (3)" eventKey={5} id="panel5" >
          <SlUser />
          <SlUserFemale />
          <SlUser />
        </Panel>
      </PanelGroup>
      )
};

export default Home;