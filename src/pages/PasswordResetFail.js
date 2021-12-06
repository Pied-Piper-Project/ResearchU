import { useHistory } from "react-router-dom";

const PasswordResetFail = () => {
    const history = useHistory();

    return (
        <div className='content-container'>
            <h1>Uh oh...</h1>
            <p>
                Something went wrong while trying to reset your password.
            </p>
            <button onClick={() => history.push('/SignIn')}>Back to sign up</button>
        </div>

    );
};

export default PasswordResetFail;