import React from 'react'
import '../App.css';
import logo from '../ResearchULogo.png';

function Home(){
    return(
     <div className = 'Home'>
         <div class='container'>
         <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
            Find research opportunities here on ResearchU! Get involved
            in your school community, build reputation for your career, develop
            written and oral communication skills, and advance academic
            achievement by partaking in academic research!
            </p>
         </header>
         </div>
     </div>
    );
}

export default Home;