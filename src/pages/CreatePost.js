import React from 'react';
import ManuallyCreatePost from '../components/ManuallyCreatePost';
import UploadPosts from '../components/UploadPosts';

const CreatePost = () => {
    return(
        <>
            {/* <div className= "">
                <UploadPosts/>
            </div> */}
            <div className= "">
                <UploadPosts/>
                {/* <ManuallyCreatePost/> */}
            </div>
        </>
    );
}

export default CreatePost;
