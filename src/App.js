import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Pages, AboutUs, Home} from "./components";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
        <Pages />
        <Switch>
          <Route path = "/" exact component={() => <Home />} />
          <Route path="/AboutUs" exact component={() => <AboutUs />} />
        </Switch>
        </Router>
        <p>
            Contact us by email at:
            abe.arrevalo@emory.edu
        </p>
      </header>
    </div>
  );
}

export default App;
