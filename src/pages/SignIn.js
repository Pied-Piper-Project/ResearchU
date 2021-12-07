import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { useToken } from "../auth/useToken";


const SignIn = () => {
    const [token, setToken] = useToken();
    const [errorMessage, setErrorMessage] = useState('');
    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
    const [signInAs, setSignInAs] = useState('');

    const history = useHistory();

    const onLogInClicked = async () => {
        const response = await axios.post('/api/ResearchU/SignIn', {
            email: emailValue,
            password: passwordValue,
            signin: signInAs
        });
        const { token } = response.data;
        setToken(token);
        if (signInAs === "Student"){
            history.push('/StudentInfoPage');
        }
        else if (signInAs === "Professor"){
            history.push('/ProfessorInfoPage');
        }
        else {
            history.push('/AdminInfoPage');
        }
    }

    return (
        <section className="about section bd-container" id="about">
        <h2 className="section-title">Sign In</h2>
            <div className="signIn-wrapper">
                <div className="signIn-content">
            {errorMessage && <div className="fail">{errorMessage}</div> }
            <input
            className = "field-margin field-style"
                value={emailValue}
                onChange={e => setEmailValue(e.target.value)}
                placeholder="Email"/>
            <p></p>
            <input
            className = "field-margin field-style"
                type="password"
                value={passwordValue}
                onChange={e => setPasswordValue(e.target.value)}
                placeholder="Password" />
            <p></p>
            <h3 className = "selectPerm" >Select what you want to sign in as:</h3>
            <div className="select-wrapper" >
            <div className="select-dropdown-subject">
            <select
                id = "mylist"
                value={signInAs}
                onChange={e => setSignInAs(e.target.value)}>
            <option>---Choose type---</option>
            <option>Student</option>
            <option>Professor</option>
            <option>Administrator</option>
            </select>
            </div>
            </div>
            <p></p>
            <button
                className = "field-margin button-style"
                disabled={!emailValue || !passwordValue || !signInAs}
                onClick={onLogInClicked}>Sign In</button>
            <hr className = "sepr"/>
            <button className = "btn-marg button-forget" onClick={() => history.push('/forgot-password')}>Forgot your password?</button>
            <p></p>
            <button className = "button-forget" onClick={() => history.push('/SignUp')}>Don't have an account? Sign Up!</button>
            </div>
            </div>
        </section>
    )
}

export default SignIn;
