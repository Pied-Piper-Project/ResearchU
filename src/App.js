import './App.css';
import React, {useState} from 'react'
import {BrowserRouter as Router, Switch, Route} from  'react-router-dom';
import {PrivateRoute} from "./auth/PrivateRoute";
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import StudentInfoPage from './pages/StudentInfoPage';
import PleaseVerifyEmailPage from './pages/PleaseVerifyEmailPage';
import EmailVerificationLandingPage from './pages/EmailVerificationLandingPage';
import PasswordResetLandingPage from './pages/PasswordResetLandingPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
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
        <Route path = '/ResearchU' exact component = {Home}/>
        <Route path = '/ResearchU/About' exact component = {About}/>
        <Route path = '/ResearchU/Contact' exact component = {Contact}/>
        <Route path = '/ResearchU/SignIn' exact component = {SignIn}/>
        <Route path = '/ResearchU/SignUp' exact component = {SignUp}/>
        <Route path = '/ResearchU/PleaseVerifyEmail' exact component = {PleaseVerifyEmailPage}/>
        <Route path = '/ResearchU/verify-email/:verificationString' exact component = {EmailVerificationLandingPage}/>
        <Route path = '/ResearchU/forgot-password' exact component = {ForgotPasswordPage}/>
        <Route path = '/ResearchU/reset-password/:passwordResetCode' exact component = {PasswordResetLandingPage}/>
        <PrivateRoute path = '/ResearchU/StudentInfoPage' exact component = {StudentInfoPage}/>

      </Switch>
    </Router>
  );
}

export default App;