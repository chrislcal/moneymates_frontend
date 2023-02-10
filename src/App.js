
import "bootstrap/dist/css/bootstrap.min.css";
import { State } from "./components/State";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Gettoken from "./components/nordigen/Gettoken";
import Institutions from "./components/nordigen/Institutions";
import Loading from "./components/nordigen/Loading";
import CreateGoals from './components/CreateGoals';
import GoalsDisplay from './components/GoalsDisplay';
import CategoryCard from './components/CategoryCard.js';
import Home from './components/Home.js'
import Goals from './components/Goals.js'
import Header from "./components/Header";


function App() {
  return (
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/home" component={Home}></Route>
          <Route exact path="/create-goals" component={CreateGoals}></Route>
          <Route exact path="/goals-display" component={GoalsDisplay}></Route>
          <Route exact path="/goals" component={Goals}></Route>
          <Route exact path="/categories" component={CategoryCard} />
          <Route exact path="/" component={State} />
          <Route exact path="/get-token" component={Gettoken} />
          <Route exact path="/loading" component={Loading} />
          <Route exact path="/institutions" component={Institutions} />
        </Switch>
      </Router>
    
  );
}

export default App;
