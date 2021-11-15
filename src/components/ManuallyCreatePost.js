import {useState} from 'react';
import React from 'react';
import axios from 'axios';

function ManuallyCreatePost(){
    const [post, setPosts] = useState({
        name: "",
        professor: "Stockington",
        school: "",
        schoolLogo: "",
        department: "",
        isOnline: "",
        location: "",
        semester: "",
        date: "2021-11-09T12:32:02Z",
        timeRange: "16:00-20:00",
        payAmount: NaN,
        gpa: NaN,
        prerequisites: "",
        postBody: "",
        activePost: "",
        isPaid: "",
        isGrad: "",
        year: "",
    });

    const handleInput = (field) => (event) => {
        let {value} = event.target
        if (field === "isOnline"){
            if (value === post.isOnline){
                value = ""
            }
        }
        else if (field === "activePost"){
            if (value === post.activePost){
                value = ""
            }
        }
        else if (field === "isPaid"){
            if (value === post.isPaid){
                value = ""
            }
        }
        else if (field === "isGrad"){
            if (value === post.isGrad){
                value = ""
            }
        }
        else if (field === "year"){
            if (value === post.year){
                value = ""
            }
        }
        else if (field === "payAmount" || field === "gpa"){
            let p = value
            value = parseFloat(value, 10)
            if (isNaN(value) && p !== ""){
                alert('Your value for ' + field + ' was not valid. Please insert a number.')
                return
            }
        }

        setPosts({
            ...post,
            [field]: value,
        });
    };

    const submitFormHandler = (event) => {
        event.preventDefault();
        for (var [field, value] of Object.entries(post)){
            if (value === ""){
                alert('Error: ' + field + ' needs to be implemented')
                return
            }
            else if ((field === "gpa" || field === "payAmount") && isNaN(value)){
                alert('Error: ' + field + ' needs to be implemented')
                return
            }
        }
        const submitPost = async () => {
            const response  = await axios.post('/api/createpost', post);
        }
        submitPost();
    }

    return(
        <>
            <section className="about section bd-container" id="about">
                <h2 className="section-title">Create Post</h2>
                <div className ="createPost-wrapper">
                    <div className ="createPost-content">
                        <h2>Create a new post:</h2>
                        <form className ="createPost-form" onSubmit = {submitFormHandler}>
                        <label className ="createPost-label" for="name">Research Topic:</label>
                        <input type="text" id="name" name="name" onChange = {handleInput("name")}/>
                        <label className ="createPost-label" for="school">School Name:</label>
                        <input type="text" id="school" name="school" onChange = {handleInput("school")}/>
                        <label className ="createPost-label" for="schoolLogo">Insert School url here:</label>
                        <input type="text" id="schoolLogo" name="schoolLogo" onChange = {handleInput("schoolLogo")}/>
                        <label className ="createPost-label"  for="department">Department:</label>
                        <input type="text" id="department" name="department" onChange = {handleInput("department")}/>
                        <label className ="createPost-label"  for="isOnline">In-Person or Remote:</label>
                        <div className = "filter__container">
                            <div className="school-filter">
                                <input type="radio" id="isOnline" className="filter__boxes" value = "true"
                                    onClick = {handleInput("isOnline")} checked = {post.isOnline === "true"}/> Remote
                                <input type="radio" id="isOnline" className = "filter__boxes" value = "false"
                                    onClick = {handleInput("isOnline")} checked = {post.isOnline === "false"}/> In-Person
                            </div>
                        </div>
                        <label className ="createPost-label"  for="location">Location:</label>
                        <input type="text" id="location" name="location" onChange = {handleInput("location")}/>
                        <label className ="createPost-label"  for="activePost">Active Post:</label>
                        <div className = "filter__container">
                            <div className="school-filter">
                                <input type="radio" id="activePost" className="filter__boxes" value = "true"
                                    onClick = {handleInput("activePost")} checked = {post.activePost === "true"}/> Active
                                <input type="radio" id="activePost" className = "filter__boxes" value = "false"
                                    onClick = {handleInput("activePost")} checked = {post.activePost === "false"}/> Inactive
                            </div>
                        </div>
                        <label className ="createPost-label"  for="semester">Semester:</label>
                        <input type="text" id="semester" name="semester" onChange = {handleInput("semester")}/>
                        <label className ="createPost-label"  for="isPaid">Are students paid?:</label>
                        <div className = "filter__container">
                            <div className="school-filter">
                                <input type="radio" id="isPaid" className="filter__boxes" value = "true"
                                    onClick = {handleInput("isPaid")} checked = {post.isPaid === "true"}/> Yes
                                <input type="radio" id="isPaid" className = "filter__boxes" value = "false"
                                    onClick = {handleInput("isPaid")} checked = {post.isPaid === "false"}/> No
                            </div>
                        </div>
                        <label className ="createPost-label"  for="payAmount">Pay Amount (number only):</label>
                        <input type="text" id="payAmount" name="payAmount" onChange = {handleInput("payAmount")}/>
                        <label className ="createPost-label"  for="gpa">GPA (number only):</label>
                        <input type="text" id="gpa" name="gpa" onChange = {handleInput("gpa")}/>
                        <label className ="createPost-label"  for="isGrad">Is for grad students:</label>
                        <div className = "filter__container">
                            <div className="school-filter">
                                <input type="radio" id="isGrad" className="filter__boxes" value = "true"
                                    onClick = {handleInput("isGrad")} checked = {post.isGrad === "true"}/> Yes
                                <input type="radio" id="isGrad" className = "filter__boxes" value = "false"
                                    onClick = {handleInput("isGrad")} checked = {post.isGrad === "false"}/> No
                            </div>
                        </div>
                        <label className ="createPost-label"  for="activePost">Year of College Preferred:</label>
                        <div className = "filter__container">
                            <div className="school-filter">
                                <input type="radio" id="year" className="filter__boxes" value = "Freshman"
                                    onClick = {handleInput("year")} checked = {post.year === "Freshman"}/> Freshman
                                <input type="radio" id="year" className = "filter__boxes" value = "Sophomore"
                                    onClick = {handleInput("year")} checked = {post.year === "Sophomore"}/> Sophomore
                                <input type="radio" id="year" className = "filter__boxes" value = "Junior"
                                    onClick = {handleInput("year")} checked = {post.year === "Junior"}/> Junior
                                <input type="radio" id="year" className = "filter__boxes" value = "Senior"
                                    onClick = {handleInput("year")} checked = {post.year === "Senior"}/> Senior
                                <input type="radio" id="year" className = "filter__boxes" value = "Graduate"
                                    onClick = {handleInput("year")} checked = {post.year === "Graduate"}/> Graduate
                            </div>
                        </div>
                        <label className ="createPost-label"  for="prerequisites">Prerequisites:</label>
                        <input type="text" id="prerequisites" name="prerequisites" onChange = {handleInput("prerequisites")}/>
                        <label className ="createPost-label"  for="postBody">Post Body (Write a description of the post here):</label>
                        <input type="text" id="postBody" name="postBody" onChange = {handleInput("postBody")}/>
                        <input type="submit"></input>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ManuallyCreatePost;
