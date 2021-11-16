import { useHistory } from "react-router-dom";

const EmailVerificationSuccess = () => {
    const history = useHistory();

    return (
        <div className='content-container'>
            <h1>Success!</h1>
            <p>
                Thanks for verifying your email, now you can use all the features!
            </p>
            <button onClick={() => history.push('/ResearchU/StudentInfoPage')}>Go to home page</button>
        </div>

    )
};

export default EmailVerificationSuccess;