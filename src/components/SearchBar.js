import React, { useState, useEffect } from 'react';

function SearchBar(){

    const [school, setSchool] = useState('');
    const [keyword, setKeyword] = useState('');
    //Need to add a useState for button

    useEffect(() => {
    console.log(`school is: ${school}`);
    }, [school])

    useEffect(() => {
    console.log(`keyword is: ${keyword}`);
    }, [keyword])


    return(
        <div className="search_box bd-grid">
            <input type="text" className="input_school" value={school} onChange={e => setSchool(e.target.value)} placeholder="University" />
            <input type="text" className="input_keyword" value={keyword} onChange={e => setKeyword(e.target.value)} placeholder="Keyword: Math, Amino Acids, CS, etc..." />
            <button className="search_btn"><i className="fas fa-search"></i></button>
        </div>
    )
}

export default SearchBar;
