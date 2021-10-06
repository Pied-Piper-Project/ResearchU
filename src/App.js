import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, About, Home} from "./components";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/About" exact component={() => <About />} />
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
