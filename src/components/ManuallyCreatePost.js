import React from 'react';

function ManuallyCreatePost(){
    return(
        <>
            <section className="about section bd-container" id="about">
                <h2 className="section-title">Create Post</h2>
                <div className ="createPost-wrapper">
                    <div className ="createPost-content">
                        <h2>Create a new post:</h2>
                        <form className ="createPost-form">
                        <label className ="createPost-label" for="fname">First name:</label>
                        <input type="text" id="fname" name="fname"/>
                        <label className ="createPost-label"  for="fname">Last Name:</label>
                        <input type="text" id="fname" name="fname"/>
                        <label className ="createPost-label"  for="fname">Example:</label>
                        <input type="text" id="fname" name="fname"/>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ManuallyCreatePost;
