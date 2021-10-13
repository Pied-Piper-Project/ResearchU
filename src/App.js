import './App.css';
import React, {useState} from 'react'
import {BrowserRouter as Router, Switch, Route} from  'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Navbar from './components/Navbar';
import Sidebar from './components/SideBar';




function App() {
  

  const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    };

  return (
    <Router>
       
      <Sidebar isOpen= {isOpen} toggle = {toggle}/>
      <Navbar toggle = {toggle}/>
      <Switch>
        
        <Route path = '/' exact component = {Home}/>
        <Route path = '/ResearchU'  component = {Home}/>
        <Route path = '/About'  component = {About}/>
        <Route path = '/Contact'  component = {Contact}/>
        <Route path = '/SignIn'  component = {SignIn}/>
        <Route path = '/SignUp'  component = {SignUp}/>
       
      </Switch>
    </Router>
  );
}

export default App;