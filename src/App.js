import logo from './ResearchULogo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p id="right">
          About Us
        </p>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Find research opportunities here on ResearchU! Get involved
          in your school community, build reputation for your career, develop
          written and oral communication skills, and advance academic
          achievement by partaking in academic research!
        </p>
        <p>
          Contact us by email at:
          abe.arrevalo@emory.edu
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
