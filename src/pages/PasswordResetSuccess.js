import { useHistory } from "react-router-dom";

const PasswordResetSuccess = () => {
    const history = useHistory();

    return (
        <div className='content-container'>
            <h1>Success!</h1>
            <p>
                 Your password has now be reset, now please log in with your new password.
            </p>
            <p></p>
            <button onClick={() => history.push('/SignIn')}>Sign In</button>
        </div>

    )
};

export default PasswordResetSuccess;