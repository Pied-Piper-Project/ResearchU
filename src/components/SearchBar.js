import React, { useState, useEffect } from 'react';
import { tempData } from "./ExampleResearchPosts";
import { tempData1 } from "./ExampleProfile";

function SearchBar( {setData, setAllData, setToggleResults} ){
    let data = [];

    const [school, setSchool] = useState('');
    const [keyword, setKeyword] = useState('');
    //Need to add a useState for button

    const getResults = async () => {
        try {
            if(school === "" && keyword === "")
                var result = await fetch(`/api/research`);
            else if(school === "")
                var result = await fetch(`/api/searchkeyword/${keyword}`);
            else if(keyword === "")
                var result = await fetch(`/api/searchschool/${school}`);
            else
                var result = await fetch(`/api/searchboth/${school}/${keyword}`);
            data = await result.json();
            setData(data)
            setAllData(data);
            console.log(data);

        } catch(error) {
            console.log(error);
            setAllData(tempData);
            console.log(tempData);
        }
    };

    const showResults = () => {
        setToggleResults(true);
    };

    const buttonClickAction = () => {
        showResults();
        getResults();
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
            <button className="search_btn" onClick={() => buttonClickAction()}><i className="fas fa-search"></i></button>
        </div>
    )
}

export default SearchBar;
