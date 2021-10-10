import React, { useState, useEffect } from 'react';


function Home(){
    const [school, setSchool] = useState('');
    const [department, setDepartment] = useState('');
    const [professor, setProfessor] = useState('');

    useEffect(() => {
        console.log(`school is: ${school}`);
    }, [school])

    useEffect(() => {
        console.log(`department is: ${department}`);
    }, [department])

    useEffect(() => {
        console.log(`professor is: ${professor}`);
    }, [professor])

    return(
        <>
            <section className="home" id="home">
                <div className="home__container bd-container">
                    <div className="home__img">
                        <img src="assets/img/home.png" alt="" />
                    </div>
                    <div className="home__data">
                        <h1 className="home__title">Research is just a click away!</h1>  
                        {/* <a href="#" class="button">Get Started</a> */}
                            <div className="search_box bd-grid">
                                <input type="text" className="input_search" value={school} onChange={e => setSchool(e.target.value)} placeholder="University" />
                                <input type="text" className="input_search" value={department} onChange={e => setDepartment(e.target.value)} placeholder="Department: Math, Biology, CS..." />
                                <input type="text" className="input_search" value={professor} onChange={e => setProfessor(e.target.value)} placeholder="Professor" />
                                <div className="search_btn"><i className="fas fa-search"></i></div>
                            </div>
                        <p className="home__description">FIND research opportunities here on ResearchU! Get involved in your school community, build reputation for your career, develop written and oral communication skills, and advance academic achievement by partaking in academic research!</p>
                    </div>             
                </div>
            </section>
        </>
    );
}

export default Home;