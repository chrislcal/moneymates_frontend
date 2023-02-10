import { PanelGroup, Panel } from 'rsuite';
import { SlUser, SlUserFemale } from "react-icons/sl";
import '../styles/home.css';



const Home = () => (
  <PanelGroup accordion defaultActiveKey={1} bordered>
    <Panel header="Available Balance (NOK 20 000)" eventKey={1} id="panel1" >
      <p className='panel-contents'>NOK 20 000</p>
    </Panel>
    <Panel header="Total Balance (NOK 100 000)" eventKey={2} id="panel2" >
      <p className='panel-contents'>NOK 100 000</p>
    </Panel>
    <Panel header="Goals (2)" eventKey={3} id="panel3" >
     
      <p className='panel-contents'>Ayia Napa</p>
      <p className='panel-contents'>New couch</p>
    </Panel>
    <Panel header="Accounts (3)" eventKey={4} id="panel4" >
      <p className='panel-contents'>Hubby's savings account</p>
      <p className='panel-contents'>My salary account</p>
      <p className='panel-contents'>Hubby's secret account</p>
    </Panel>
    <Panel header="People (3)" eventKey={5} id="panel5" >
      <SlUser />
      <SlUserFemale />
      <SlUser />
    </Panel>
  </PanelGroup>
);

export default Home;