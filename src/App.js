import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CreateGoals from "./components/CreateGoals"
import GoalsDisplay from './components/GoalsDisplay';
import progressbar from './components/ProgressBar';
import Navbar from './components/NavBar';



function App() {
  return (
    <Router>
      <Switch>
        <Route path="/CreateGoals" component={CreateGoals}/>
        <Route path="/GoalsDisplay" component={GoalsDisplay}/>
        <Route path="/ProgressBar" component={progressbar}/>'
        <Navbar />
      </Switch>
    </Router>
  );
}

export default App; 


