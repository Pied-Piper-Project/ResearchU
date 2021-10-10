import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, About, Home} from "./components";

function myButton() {
    var click = document.body
    click.classList.toggle("dark-theme")
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className ="change-theme">
          <button id="theme-button" onClick={myButton}> Night Mode </button>
        </div>
        <Router>
        <Navigation />
        <Switch>
          <Route path="/ResearchU" exact component={() => <Home />} />
          <Route path="/ResearchU/About" exact component={() => <About />} />
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
