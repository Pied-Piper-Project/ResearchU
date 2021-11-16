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

    const history = useHistory();

    const onLogInClicked = async () => {
        const response = await axios.post('/api/ResearchU/SignIn', {
            email: emailValue,
            password: passwordValue
        });
        const { token } = response.data;
        setToken(token);
        history.push('/ResearchU/StudentInfoPage');
    }

    return (
        <div className="content-container">
            <h1>Sign In</h1>
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
            <button
                disabled={!emailValue || !passwordValue}
                onClick={onLogInClicked}>Sign In</button>
            <hr />
            <button onClick={() => history.push('/ResearchU/forgot-password')}>Forgot your password?</button>
            <p></p>
            <button onClick={() => history.push('/ResearchU/SignUp')}>Don't have an account? Sign Up!</button>
        </div>
    )
}

export default SignIn;