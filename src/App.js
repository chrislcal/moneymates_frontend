// Import components for
import {Gettoken} from './components/nordigen/Gettoken'
import {Getinstitutions} from './components/nordigen/Getinstitutions';
import { Router, Route, Link, NavLink } from 'react-router-dom';
import './App.css';

function App() {





  return (
    <Router>
      <Route exact path="/Gettoken" component={Gettoken}/>
      <Route exact path="/Getinstitutions" component={Getinstitutions} />
    </Router>

    
  );
}

export default App;
