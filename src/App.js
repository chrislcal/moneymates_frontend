
import './App.css';
import React from 'react';

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
          <Route exact path="/" component={State} />
          <Route path="/home" component={Home}></Route>
          <Route path="/create-goals" component={CreateGoals}></Route>
          <Route path="/goals/:id" component={GoalsDisplay}></Route>
          <Route path="/goals" component={Goals}></Route>
          <Route path="/categories" component={CategoryCard} />
          <Route path="/get-token" component={Gettoken} />
          <Route path="/loading" component={Loading} />
          <Route path="/institutions" component={Institutions} />
        </Switch>
      </Router>
    
  );
}

export default App;
