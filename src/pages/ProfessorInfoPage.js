import React, { useState, useEffect} from "react";
import { useHistory } from "react-router-dom";
import { useToken } from "../auth/useToken";
import { useUser } from "../auth/useUser";
import axios from 'axios';

const ProfessorInfoPage = () => {
    const user = useUser();
    const [token, setToken] = useToken();

    const {id, email, isVerified, info} = user;

    const history = useHistory();

    const [school, setSchool] = useState(info.school || '');
    const [onCampus, setOnCampus] = useState(info.onCampus || false);
    const [department, setDepartment] = useState(info.department || '');

    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [showErrorMessage, setShowErrorMessage] = useState(false);

    //hides after 3 seconds
    useEffect(() => {
        if (showSuccessMessage || showErrorMessage) {
            setTimeout(() => {
                setShowSuccessMessage(false);
                setShowErrorMessage(false);
            }, 3000);
        }
    }, [showSuccessMessage, showErrorMessage]);

    const saveChanges = async () => {

        try {

            const response = await axios.put(`/api/ResearchU/ProfessorInfoPage/${id}`, {
                school,
                onCampus,
                department
            }, {
                headers: { Authorization: `Bearer ${token}` }
            });

            const { token: newToken } = response.data;
            setToken(newToken);
            setShowSuccessMessage(true);
        } catch (error) {
            setShowErrorMessage(true);
        }
    }
    const logOut = () => {
        localStorage.removeItem('token');
        history.push('/ResearchU/SignIn');
    }

    const resetValues = () => {
        setSchool(info.school);
        setOnCampus(info.onCampus);
        setDepartment(info.department);
    }

    //jsx for component
    return (
        <div className="content-container">
            <h1>Info for {email}</h1>
            {!isVerified && <div className="fail"> You won't be able to make any changes until you verify your email.</div>}
            {showSuccessMessage && <div className="success">Successfully saved user data!</div>}
            {showErrorMessage && <div className="fail">Uh oh... something went wrong and we couldn't save changes</div>}
            <label>
                School:
                <input
                    onChange={e => setSchool(e.target.value)}
                    value={school} />
            </label>
            <p></p>
            <label>
                OnCampus:
                <input
                    onChange={e => setOnCampus(e.target.value)}
                    value={onCampus} />
            </label>
            <p></p>
            <label>
                Department:
                <input
                    onChange={e => setDepartment(e.target.value)}
                    value={department} />
            </label>
            <hr />
            <button onClick={saveChanges}>Save Changes</button>
            <p></p>
            <button onClick={resetValues}>Reset Values</button>
            <p></p>
            <button onClick={logOut}>Log Out</button>
        </div>
    );


}
export default ProfessorInfoPage;