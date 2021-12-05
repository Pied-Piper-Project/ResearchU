import React, { useState, useEffect } from 'react';
import { tempData } from "./ExampleResearchPosts";
import { tempData1 } from "./ExampleProfile";

function SearchBar( {setData, setAllData, setToggleResults} ){
    const data = [];

    const [school, setSchool] = useState('');
    const [keyword, setKeyword] = useState('');
    //Need to add a useState for button

    const getResults = async () => {
        try {
            const result = await fetch('/api/research/', {
                method: 'get',
                // body: JSON.stringify({ school, keyword }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            data = await result.json();
        } catch(error) {
            console.log(error);
            setData(tempData);
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
