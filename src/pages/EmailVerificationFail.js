import { useHistory } from "react-router-dom";

const EmailVerificationFail = () => {
    const history = useHistory();

    return (
        <div className='content-container'>
            <h1>Uh oh...</h1>
            <p>
                Something went wrong while trying to verify your email.
            </p>
            <button onClick={() => history.push('/SignUp')}>Back to sign up</button>
        </div>

    );
};

export default EmailVerificationFail;