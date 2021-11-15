import { useState } from "react";
import { useParams } from "react-router-dom";
import PasswordResetSuccess from './PasswordResetSuccess';
import PasswordResetFail from './PasswordResetFail';
import axios from "axios";

const PasswordResetLandingPage = () => {
    const [isSuccess, setIsSuccess] = useState(false);
    const [isFailure, setIsFailure] = useState(false);
    const [passwordValue, setPasswordValue] = useState('');
    const [confirmPasswordValue, setConfirmPasswordValue] = useState('');
    const { passwordResetCode } = useParams();
    
    const onResetClicked = async () => {
        
        try {

            await axios.put(`/api/ResearchU/studentProfile/${passwordResetCode}/reset-password`, {newPassword: passwordValue});
            setIsSuccess(true);

        } catch (e) {
            setIsFailure(true);
        }
    }

    if (isFailure) return <PasswordResetFail />
    if (isSuccess) return <PasswordResetSuccess />

    return (
        <div className="content-container">
            <h1>Reset Password</h1>
            <p>Please enter a new password</p>
            <input
                type='password'
                value={passwordValue}
                onChange={e => setPasswordValue(e.target.value)}
                placeholder="Password" />
            <p></p>
            <input
                type='password'
                value={confirmPasswordValue}
                onChange={e => setConfirmPasswordValue(e.target.value)}
                placeholder="Confirm Password" />
            <p></p>
            <button
                disabled={!passwordValue || !confirmPasswordValue || passwordValue !== confirmPasswordValue}
                onClick={onResetClicked}
            >Reset Password</button>
        </div>
    )
    
}
export default PasswordResetLandingPage