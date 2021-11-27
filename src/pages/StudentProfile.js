import React, { useState, useEffect} from "react";

import axios from 'axios';
import { get } from "react-scroll/modules/mixins/scroller";

const StudentProfile = async (StudentId) => {
    const user = await fetch (`/api/ResearchU/StudentProfile/${StudentId}`, {
    });
    console.log(user)
    return (
        <div>
            {user}
        </div>
    );
}

export default StudentProfile;