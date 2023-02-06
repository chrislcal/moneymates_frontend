// Import components for
import Getinstitutions from './components/nordigen/Getinstitutions';
import { Router, Route, Link, NavLink } from 'react-router-dom';
import './App.css';

function App() {





  return (
    <Router>
      <Route exact path="/" component={Feed}/>
    </Router>

    
  );
}

export default App;
