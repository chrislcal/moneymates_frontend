import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CreateGoals from "./components/CreateGoals";
import GoalsDisplay from "./components/GoalsDisplay";
import progressbar from "./components/ProgressBar";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/CreateGoals" component={CreateGoals} />
        <Route exact path="/GoalsDisplay" component={GoalsDisplay} />
        <Route exact path="/ProgressBar" component={progressbar} />'
      </Switch>
    </Router>
  );
}

export default App;





