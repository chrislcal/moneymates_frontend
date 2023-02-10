import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/NavBar";
import { State } from "./components/State";
import Profile from "./components/Profile";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Gettoken from "./components/nordigen/Gettoken";
import Institutions from "./components/nordigen/Institutions";
import Loading from "./components/nordigen/Loading";
import Main from "./components/Main";

function App() {
  return (
      <Router>
        <Switch>
          <Route exact path="/" component={State} />
          <Route exact path="/get-token" component={Gettoken} />
          <Route exact path="/loading" component={Loading} />
          <Route exact path="/institutions" component={Institutions} />
        </Switch>
      </Router>
    
  );
}

export default App;
