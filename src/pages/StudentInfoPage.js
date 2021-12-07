import React, { useState, useEffect} from "react";
import { useHistory } from "react-router-dom";
import { useToken } from "../auth/useToken";
import { useUser } from "../auth/useUser";
import axios from 'axios';

const StudentInfoPage = () => {
    const user = useUser();
    const [token, setToken] = useToken();

    const {id, email, isVerified, info} = user;

    const history = useHistory();

    const [school, setSchool] = useState(info.school || '');
    const [major, setMajor] = useState(info.major || '');
    const [minor, setMinor] = useState(info.minor || '');
    const [onCampus, setOnCampus] = useState(info.onCampus || false);
    const [year, setYear] = useState(info.year || '');
    const [gpa, setGpa] = useState(info.gpa || 0.0);
    const [aboutThem, setAboutThem] = useState(info.aboutThem || '');

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

            const response = await axios.put(`/api/ResearchU/StudentInfoPage/${id}`, {
                school,
                major,
                minor,
                onCampus,
                year,
                gpa,
                aboutThem,
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
        history.push('/SignIn');
    }

    const resetValues = () => {
        setSchool(info.school);
        setMajor(info.major);
        setMinor(info.minor);
        setOnCampus(info.onCampus);
        setYear(info.year);
        setGpa(info.gpa);
        setAboutThem(info.aboutThem);
    }

    //jsx for component
    return (
        <section className="about section bd-container" id="about">
        {/* <h2 className="section-title">Sign In</h2> */}
            <div className="profile-wrapper ">
                <div className="signIn-content">
        {/* <div className="content-container"> */}
            <h1>Info for: {email}</h1>
            {!isVerified && <div className="fail"> You won't be able to make any changes until you verify your email.</div>}
            {showSuccessMessage && <div className="success">Successfully saved user data!</div>}
            {showErrorMessage && <div className="fail">Uh oh... something went wrong and we couldn't save changes</div>}
            <label>
                School:
                <input
                className = "field-margin field-style profile-style"
                    onChange={e => setSchool(e.target.value)}
                    value={school} />
            </label>
            <p></p>
            <label>
                Major:
                <input
                className = "field-margin field-style profile-style"
                    onChange={e => setMajor(e.target.value)}
                    value={major} />
            </label>
            <p></p>
            <label>
                Minor:
                <input
                className = "field-margin field-style profile-style"
                    onChange={e => setMinor(e.target.value)}
                    value={minor} />
            </label>
            <p></p>
            <label>
                Are you on campus?
                <input
                className = "field-margin field-style profile-style"
                    onChange={e => setOnCampus(e.target.value)}
                    value={onCampus} />
            </label>
            <p></p>
            <label>
                Year:
                <input
                className = "field-margin field-style profile-style "
                    onChange={e => setYear(e.target.value)}
                    value={year} />
            </label>
            <p></p>
            <label>
                GPA:
                <input
                className = "field-margin field-style profile-style "
                    onChange={e => setGpa(e.target.value)}
                    value={gpa} />
            </label>
            <p></p>
            <label>
                About:
                <input
                className = "field-margin field-style profile-style "
                    onChange={e => setAboutThem(e.target.value)}
                    value={aboutThem} />
            </label>
            <hr />
            <div className ="profile-grid">
            <button className = "field-margin button-style saveChanges" onClick={saveChanges}>Save Changes</button>
            <button  className = "field-margin button-style resetValues" onClick={resetValues}>Reset Values</button>
            <button  className = "field-margin button-style logOut" onClick={logOut}>Log Out</button>
            </div>
            
            </div>
            </div>
        </section>
    );


}
export default StudentInfoPage;
