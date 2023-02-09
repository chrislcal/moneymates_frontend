import { PanelGroup, Panel } from 'rsuite';
import { SlUser, SlUserFemale } from "react-icons/sl";

const headerStyles = {
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: '#E0E0E2',
    color: '#5D1788',
    border: 'red'
}

const Home = () => (
  <PanelGroup accordion defaultActiveKey={1} bordered>
    <Panel header="Available Balance (NOK 20 000)" eventKey={1} id="panel1" style={headerStyles}>
      
      <p>NOK 20 000</p>
    </Panel>
    <Panel header="Total Balance (NOK 100 000)" eventKey={2} id="panel2" style={headerStyles}>
      
      <p>NOK 100 000</p>
    </Panel>
    <Panel header="Goals (2)" eventKey={3} id="panel3" style={headerStyles}>
     
      <p>Ayia Napa</p>
      <p>New couch</p>
    </Panel>
    <Panel header="Accounts (3)" eventKey={4} id="panel4" style={headerStyles}>
      
      <p>Hubby's savings account</p>
      <p>My salary account</p>
      <p>Hubby's secret account</p>
    </Panel>
    <Panel header="People (3)" eventKey={5} id="panel5" style={headerStyles}>
      
      <SlUser />
      <SlUserFemale />
      <SlUser />
    </Panel>
  </PanelGroup>
);

export default Home;