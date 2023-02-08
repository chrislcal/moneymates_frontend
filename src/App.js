import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import Profile from "./components/Profile";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Gettoken from "./components/nordigen/Gettoken";
import Institutions from "./components/nordigen/Institutions";
import Loading from "./components/nordigen/Loading";

function App() {
  return (
    <div className="App">
      <Profile />
      <NavBar />
      <Banner />

      <Router>
        <Switch>
          <Route exact path="/get-token" component={Gettoken} />
          <Route exact path="/loading" component={Loading} />
          <Route exact path="/institutions" component={Institutions} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
