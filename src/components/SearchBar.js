import React, { useState, useEffect } from 'react';
import { tempData } from "./ExampleResearchPosts";

function SearchBar( {setAllData} ){
    let data = [];

    const [school, setSchool] = useState('');
    const [keyword, setKeyword] = useState('');
    //Need to add a useState for button

    const getResults = async () => {
        try {
            if(school === "" && keyword === ""){
                var result = await fetch(`/api/research`);
                console.log("both were empty");
            }
            else if(school === ""){
                var result = await fetch(`/api/searchkeyword/${keyword}`);
                console.log("school is empty");
            }
            else if(keyword === ""){
                var result = await fetch(`/api/searchschool/${school}`);
                console.log("keyword is empty");
            }
            else{
                var result = await fetch(`/api/searchboth/${school}/${keyword}`);
                console.log("both are filled");
            } 
            data = await result.json();
            setAllData(data);
            console.log(data);

        } catch(error) {
            console.log(error);
            setAllData(tempData);
            console.log(tempData);
        }
    };

    useEffect(() => {
    console.log(`school is: ${school}`);
    }, [school])

    useEffect(() => {
    console.log(`keyword is: ${keyword}`);
    }, [keyword])

    return(
        <div className="search_box bd-grid glass">
            <input type="text" className="input_school" value={school} onChange={e => setSchool(e.target.value)} placeholder="University" />
            <input type="text" className="input_keyword" value={keyword} onChange={e => setKeyword(e.target.value)} placeholder="Keyword: Math, Amino Acids, CS, etc..." />
            <button className="search_btn" onClick={() => getResults()}><i className="fas fa-search"></i></button>
        </div>
    )
}

export default SearchBar;
