import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useToken } from "../auth/useToken";
import axios from 'axios';

const SignUp = () => {
    const [token, setToken] = useToken();

    const [errorMessage, setErrorMessage] = useState('');
    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
    const [confirmPasswordValue, setConfirmPasswordValue] = useState('');
    const [signUpAs, setSignUpAs] = useState('');

    const history = useHistory();

    const onSignUpClicked = async () => {

        const response = await axios.post('/api/ResearchU/SignUp', {
            email: emailValue,
            password: passwordValue,
            signup: signUpAs
        });
 
        const { token } = response.data;
        setToken(token);
        history.push('/PleaseVerifyEmail');

    }

    return (
        <section className="about section bd-container" id="about">
        <h2 className="section-title">Sign Up</h2>
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
            <input
            className = "field-margin field-style"
                type="password"
                value={confirmPasswordValue}
                onChange={e => setConfirmPasswordValue(e.target.value)}
                placeholder="Confirm Password" />
            <p></p>
            <h3 className = "selectPerm" >Select what you want to sign in as:</h3>
            <div className="select-wrapper" >
            <div className="select-dropdown-subject">
            <select 
                id = "mylist"
                value={signUpAs}
                onChange={e => setSignUpAs(e.target.value)}>
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
                disabled={!emailValue || !passwordValue ||
                passwordValue !== confirmPasswordValue || !signUpAs
                }
                onClick={onSignUpClicked}>Sign Up</button>
            <hr className = "sepr" />
            <button  className = "button-forget" onClick={() => history.push('/SignIn')}>Already have an account? Log In!</button>
            </div>
            </div>
        </section>
    )
}

export default SignUp;
