import React, { useState } from "react";

const StudentProfile = () => {
    const StudentId = "619b019a8d604a2846bc6d84"
    const [school, setSchool] = useState("");
    const [email, setEmail] = useState("");
    const [major, setMajor] = useState('');
    const [minor, setMinor] = useState('');
    const [onCampus, setOnCampus] = useState(false);
    const [year, setYear] = useState('');
    const [gpa, setGpa] = useState(0.0);
    const [aboutThem, setAboutThem] = useState('');
    const getUserInfo = async() => {
        const user = await fetch (`/api/ResearchU/StudentProfile/${StudentId}`, {
        method: 'get',
        headers: {
            'Content-Type': 'application/json'
        }
        });
        const gotUser = await user.json()
        setSchool(gotUser[0].info.school)
        setEmail(gotUser[0].email)
        setMajor(gotUser[0].info.major)
        setMinor(gotUser[0].info.minor)
        if (gotUser[0].info.onCampus === true){
            setOnCampus("Yes")
        }
        else{
            setOnCampus("No")
        }
        setYear(gotUser[0].info.year)
        setGpa(gotUser[0].info.gpa)
        setAboutThem(gotUser[0].info.aboutThem)

    }
    getUserInfo()
    return (
    <section className="about section bd-container" id="about">
    <h2 className="section-title">Student Profile</h2>
    <div className="createPost-wrapper">
        <div className="createPost-content">
            <div className = "createPost-formTwo">
            <h2>School: </h2>
            <p className = "createPost-formTwoNormal"> {school} </p>
            </div>
            <div className = "createPost-formTwo">
            <h2>Email: </h2>
            <p className = "createPost-formTwoNormal"> {email} </p>
            </div>
            <div className = "createPost-formTwo">
            <h2>Major: </h2>
            <p className = "createPost-formTwoNormal"> {major} </p>
            </div>
            <div className = "createPost-formTwo">
            <h2>Minor: </h2>
            <p className = "createPost-formTwoNormal"> {minor} </p>
            </div>
            <div className = "createPost-formTwo">
            <h2>On Campus: </h2>
            <p className = "createPost-formTwoNormal"> {onCampus} </p>
            </div>
            <div className = "createPost-formTwo">
            <h2>Year: </h2>
            <p className = "createPost-formTwoNormal"> {year} </p>
            </div>
            <div className = "createPost-formTwo">
            <h2>GPA: </h2>
            <p className = "createPost-formTwoNormal"> {gpa} </p>
            </div>
            <div className = "createPost-formTwo">
            <h2>About Me: </h2>
            <p className = "createPost-formTwoNormal"> {aboutThem} </p>
            </div>
        </div>
    </div>
    </section>
    );
}

export default StudentProfile;