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
        history.push('/ResearchU/PleaseVerifyEmail');

    }

    return (
        <div className="content-container">
            <h1>Sign Up</h1>
            {errorMessage && <div className="fail">{errorMessage}</div> }
            <input
                value={emailValue}
                onChange={e => setEmailValue(e.target.value)}
                placeholder="Email"/>
            <p></p>
            <input
                type="password"
                value={passwordValue}
                onChange={e => setPasswordValue(e.target.value)}
                placeholder="Password" />
            <p></p>
            <input
                type="password"
                value={confirmPasswordValue}
                onChange={e => setConfirmPasswordValue(e.target.value)}
                placeholder="Confirm Password" />
            <p></p>
            <b>Select what you want to sign up as</b>
            <select 
                id = "mylist"
                value={signUpAs}
                onChange={e => setSignUpAs(e.target.value)}>
            <option>---Choose type---</option>
            <option>Student</option>
            <option>Professor</option>
            <option>Administrator</option>
            </select>
            <p></p>
            <button
                disabled={!emailValue || !passwordValue ||
                passwordValue !== confirmPasswordValue || !signUpAs
                }
                onClick={onSignUpClicked}>Sign Up</button>
            <hr />
            <button onClick={() => history.push('/ResearchU/SignIn')}>Already have an account? Log In!</button>
        </div>
    )
}

export default SignUp;
