import { useAuth0 } from "@auth0/auth0-react";
import {useEffect, useState} from 'react';
import { PanelGroup, Panel } from 'rsuite';
import { SlUser, SlUserFemale } from "react-icons/sl";
import '../styles/home.css';



const Home = () => {
  const { getAccessTokenSilently } = useAuth0();

  const [accountDetails, setBankDetails] = useState(0);
  const [balances, setBalances] = useState(0);

  useEffect(() => {
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
    getDetails()
  }, []);

  useEffect(() => {
    const getBalances = async() => {
      try {
        const request = await fetch('http://localhost:3001/balances', {
          method: 'GET',
          headers: {
            token: await getAccessTokenSilently()
          }
        });
        
        const data = await request.json();
        setBalances(data);

      } catch (error) {
        console.log(error.message)
      }
    }

    getBalances();
  }, []);


  // Defining accounts to be displayed 
  let displayedAccounts;

  if(accountDetails) {
    console.log("Details:", accountDetails);
    displayedAccounts = accountDetails.map((element) => {
      return(<p key={element.details.bban} className='panel-contents'>{element.details.product}</p>)
    })
  }

  // Setting balances 
  let checkingsBalance;
  let totalBalance;

  if(balances) {
    console.log("Balances:", balances);

    checkingsBalance = balances[0].balanceAmount.amount;

    totalBalance = balances.map((element) => {
      return element.balanceAmount.amount
    }).reduce((acc, curr) => {
      return acc + curr
    });
  }
  
  if(accountDetails && balances) {
    return (
      <PanelGroup accordion defaultActiveKey={1} bordered>
        <Panel header={`Balance checking account`} eventKey={1} id="panel1" >
         <p className='panel-contents'> NOK {parseFloat(checkingsBalance, 2)}</p>
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
  }

  
};

export default Home;