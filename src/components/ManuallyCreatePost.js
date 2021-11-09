import {useState} from 'react';
import React from 'react';

function ManuallyCreatePost(){
    const [post, setPosts] = useState({
        name: "",
        professor: "Stockington",
        school: "",
        schoolLogo: "emory.edu",
        department: "",
        isOnline: false,
        location: "N/A",
        semester: "N/A",
        date: "2021-11-09T12:32:02Z",
        timeRange: "16:00-20:00",
        payAmount: 0,
        postBody: "N/A",
        activePost: false,
        isPaid: false,
        gpa: 0,
        isGrad: false,
        year: ["0"],
        prerequisites: [""],
        major: [""],
    });

    const AddItemsToYear = (value)=>{
        let list = post.year
        list.push(value)
        setPosts({
            ...post,
            ["year"]: list,
        });
    }

    const AddPreq = () =>{
        let list = post.prerequisites
        list.push("")
        setPosts({
            ...post,
            ["prerequisites"]: list,
        });
    }

    const remPreq = index => {
        let list = [...post.prerequisites]
        list.splice(index, 1)
        setPosts({
            ...post,
            ["prerequisites"]: list,
        });
    }

    const addMajor = () => {
        let list = post.major
        list.push("")
        setPosts({
            ...post,
            ["major"]: list,
        });
    }

    const remMajor = index => {
        let list = [...post.major]
        list.splice(index, 1)
        setPosts({
            ...post,
            ["major"]: list,
        });
    }

    const handleInput = (field) => (event) => {
        let {value} = event.target
        if (field === "isOnline" || field === "activePost" || field === "isPaid" || field === "isGrad"){
            if (value === "true"){
                value = true
            }
            else{
                value = false
            }
        }
        else if (field === "year"){
            let subVal = value
            if (post.year.includes("0")){
                post.year = []
            }
            else if (post.year.includes(subVal)){
                let index = post.year.indexOf(subVal)
                let list = post.year
                list.splice(index, 1)
                if (post.year.length === 0){
                    value = "0"
                    post.year = []
                }
                else{
                    setPosts({
                        ...post,
                        ["year"]: list,
                    });
                    return
                }
            }
        }
        else if (field === "payAmount" || field === "gpa"){
            let p = value
            value = parseFloat(value, 10)
            if (isNaN(value) && p !== ""){
                alert('Your value for ' + field + ' was not valid. Please insert a number.')
            }
        }
        if (value === "" && field != "school" && field != "department" && field != "isOnline"
            && field != "name" && field != "payAmount" && field != "gpa"){
            value = "N/A"
        }
        else if ((field == "payAmount" || field == "gpa") && isNaN(value)){
            value = 0
        }

        if (field === "year"){
            AddItemsToYear(value)
        }
        else{
        setPosts({
            ...post,
            [field]: value,
        });
        }
    };

    const handlePrereqInput = (e, index) => {
        const {name, value} = e.target
        let list = post.prerequisites
        list[index] = value
        setPosts({
            ...post,
            ["prerequisites"]: list,
        })

    };

    const handleMajorInput = (e, index) => {
        const {name, value} = e.target
        let list = post.major
        list[index] = value
        setPosts({
            ...post,
            ["major"]: list,
        })

    };

    const submitFormHandler = (event) => {
        event.preventDefault();
        if (event.nativeEvent.submitter.tagName === "BUTTON"){
            return
        }
        for (var [field, value] of Object.entries(post)){
            if (value === ""){
                if (field === "school" || field === "department" || field === "isOnline"
                    || field === "name"){
                    alert('Error: ' + field + ' needs to be implemented')
                    return
                }
                else{
                    value = "N/A"
                }
            }
            else if ((field === "gpa" || field === "payAmount") && isNaN(value)){
                alert('Error: ' + field + ' needs to be implemented')
                return
            }
        }
        console.log(post)
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
                                    onClick = {handleInput("isOnline")} checked = {post.isOnline === true}/> Remote
                                <input type="radio" id="isOnline" className = "filter__boxes" value = "false"
                                    onClick = {handleInput("isOnline")} checked = {post.isOnline === false}/> In-Person
                            </div>
                        </div>
                        <label className ="createPost-label"  for="location">Location:</label>
                        <input type="text" id="location" name="location" onChange = {handleInput("location")}/>
                        <label className ="createPost-label"  for="activePost">Active Post:</label>
                        <div className = "filter__container">
                            <div className="school-filter">
                                <input type="radio" id="activePost" className="filter__boxes" value = "true"
                                    onClick = {handleInput("activePost")} checked = {post.activePost === true}/> Active
                                <input type="radio" id="activePost" className = "filter__boxes" value = "false"
                                    onClick = {handleInput("activePost")} checked = {post.activePost === false}/> Inactive
                            </div>
                        </div>
                        <label className ="createPost-label"  for="semester">Semester:</label>
                        <input type="text" id="semester" name="semester" onChange = {handleInput("semester")}/>
                        <label className ="createPost-label"  for="isPaid">Are students paid?:</label>
                        <div className = "filter__container">
                            <div className="school-filter">
                                <input type="radio" id="isPaid" className="filter__boxes" value = "true"
                                    onClick = {handleInput("isPaid")} checked = {post.isPaid === true}/> Yes
                                <input type="radio" id="isPaid" className = "filter__boxes" value = "false"
                                    onClick = {handleInput("isPaid")} checked = {post.isPaid === false}/> No
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
                                    onClick = {handleInput("isGrad")} checked = {post.isGrad === true}/> Yes
                                <input type="radio" id="isGrad" className = "filter__boxes" value = "false"
                                    onClick = {handleInput("isGrad")} checked = {post.isGrad === false}/> No
                            </div>
                        </div>
                        <label className ="createPost-label"  for="activePost">Year of College Preferred:</label>
                        <div className = "filter__container">
                            <div className="school-filter">
                                <input type="radio" id="year" className="filter__boxes" value = "1"
                                    onClick = {handleInput("year")} checked = {post.year.includes("1")}/> Freshman
                                <input type="radio" id="year" className = "filter__boxes" value = "2"
                                    onClick = {handleInput("year")} checked = {post.year.includes("2")}/> Sophomore
                                <input type="radio" id="year" className = "filter__boxes" value = "3"
                                    onClick = {handleInput("year")} checked = {post.year.includes("3")}/> Junior
                                <input type="radio" id="year" className = "filter__boxes" value = "4"
                                    onClick = {handleInput("year")} checked = {post.year.includes("4")}/> Senior
                                <input type="radio" id="year" className = "filter__boxes" value = "5"
                                    onClick = {handleInput("year")} checked = {post.year.includes("5")}/> Graduate
                            </div>
                        </div>
                        <label className ="createPost-label"  for="prerequisites">Prerequisites:</label>
                        {post.prerequisites.map((x, i) => {
                            return(
                                <div>
                                <input type="text" id="prerequisites" name="prerequisites" value = {x} onChange = {e => handlePrereqInput(e, i)}/>
                                <div className="btn-box">
                                    {post.prerequisites.length !== 1 && <button
                                    onClick={() => remPreq(i)}>Remove</button>}
                                    {post.prerequisites.length - 1 === i && <button onClick={AddPreq}>Add</button>}
                                </div>
                                </div>
                        );})}
                        <label className ="createPost-label"  for="major">Majors:</label>
                        {post.major.map((x, i) => {
                            return(
                                <div>
                                <input type="text" id="major" name="major" value = {x} onChange = {e => handleMajorInput(e, i)}/>
                                <div className="btn-box">
                                    {post.major.length !== 1 && <button
                                    onClick={() => remMajor(i)}>Remove</button>}
                                    {post.major.length - 1 === i && <button onClick={addMajor}>Add</button>}
                                </div>
                                </div>
                        );})}
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
