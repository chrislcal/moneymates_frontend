import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Gettoken from "./components/nordigen/Gettoken";
import Institutions from "./components/nordigen/Institutions";
import Loading from "./components/nordigen/Loading";


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/get-token" component={Gettoken}/>
        <Route exact path="/loading" component={Loading}/>
        <Route exact path="/institutions" component={Institutions}/>
      </Switch>
    </Router>
  );
}

export default App;


