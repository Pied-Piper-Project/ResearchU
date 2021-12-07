import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from 'axios';

const ForgotPasswordPage = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const [success, setSuccess] = useState(false);
    const [emailValue, setEmailValue] = useState('');
    const history = useHistory();

    const onsubmitClicked = async () => {
        try {
            await axios.put(`/api/ResearchU/forgot-password/${emailValue}`);
            setSuccess(true);
            setTimeout(() => {
                history.push('/SignIn');
            }, 3000);
        } catch (e) {
            setErrorMessage(e.message);
        }
    }

    return success ? (
        <section className="about section bd-container" id="about">
        <h2 className="section-title">Forgot Password</h2>
            <div className="signIn-wrapper">
                <div className="signIn-content">
            <h3 className = "selectPerm" >Success</h3>
            <p>Check your email for a reset link</p>
            </div>
            </div>
        </section>
    ) : (
        <section className="about section bd-container" id="about">
        <h2 className="section-title">Forgot Password</h2>
            <div className="signIn-wrapper">
                <div className="signIn-content">
        {/* <div className="content-container"> */}
            {/* <h1>Forgot Password</h1> */}
            <h3 className = "selectPerm perm2" >Enter your email and we'll send you a reset link</h3>
            {errorMessage && <div className="fail">{errorMessage}</div>}
            <input
                className = "field-margin field-style"
                value={emailValue}
                onChange= {e => setEmailValue(e.target.value)}
                placeholder="someone@gmail.com"/>
            <p></p>
            <button
             className = "field-margin button-style"
                disabled= {!emailValue}
                onClick={onsubmitClicked}
            >Send Reset Link</button>
        {/* </div> */}
        </div>
            </div>
        </section>
    )

}
export default ForgotPasswordPage