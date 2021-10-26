import React, { useState, useEffect } from 'react';
import ResearchResult from './../components/ResearchResult';

function Home(){
    const [school, setSchool] = useState('');
    const [department, setDepartment] = useState('');
    const [professor, setProfessor] = useState('');
    //Need to add a useState for button

    useEffect(() => {
        console.log(`school is: ${school}`);
    }, [school])

    useEffect(() => {
        console.log(`department is: ${department}`);
    }, [department])

    useEffect(() => {
        console.log(`professor is: ${professor}`);
    }, [professor])

    let dataJSON = `
    [
        {
        "postID": 1,
        "name": "Amino Acid Research",
        "professor": "John Dalton",
        "school": "Emory University",
        "schoolLogo": "https://www.fleetio.com/assets/images/blog/emory-logo.png",
        "department": "Chemistry",
        "postBody": "We invite students from both 4-year and 2-year universities, as well as students from community colleges to apply. For most labs, only completion of freshmen chemistry and lab is required. Organic classes and lab are required for some, but not all organic labs.",
        "isOnline": false,
        "location": "201 Dowman Dr, Atlanta, GA 30322",
        "activePost": true,
        "semester": "Spring 2022",
        "dateRange": "2022/01/10-2022/05/15",
        "timeRange": "16:00-20:00",
        "isPaid": false,
        "payAmount": 0,
        "requirements": {
          "gpa": 3.5,
          "isGrad": false,
          "year": "third-year",
          "prerequisites": "Freshmen Chemistry",
          "major": "Chemistry"
        }
      },

      {
        "postID": 2,
        "name": "Photocatalysis Research",
        "professor": "Antoine Lavoisier",
        "school": "Georgia Institute of Technology",
        "schoolLogo": "https://brand.gatech.edu/sites/default/files/inline-images/GeorgiaTech_RGB.png",
        "department": "Chemistry",
        "postBody": "Certain chromophores, such as dithiocarbonates and trithiocarbonates, effectively absorb light within the visible spectrum. With the right chemistry, these species may fragment to form an active radical species that can initiate the radical polymerization of olefins in a controlled fashion. Students on this project will study the phenomenology of LED-light driven photopolymerization at cold temperatures using monomers that are stubborn to polymerize under the same conditions at higher temperatures.",
        "isOnline": true,
        "location": "North Ave NW, Atlanta, GA 30332",
        "activePost": true,
        "semester": "Summer 2022",
        "dateRange": "2022/06/01-2022/08/15",
        "timeRange": "08:00-16:00",
        "isPaid": true,
        "payAmount": 7500,
        "requirements": {
          "gpa": 3.75,
          "isGrad": true,
          "year": "first-year",
          "prerequisites": "Principles of Reactivity",
          "major": "Chemistry"
        }
      },


      {
        "postID": 3,
        "name": "Solar Energy Conversion Research",
        "professor": "Joseph Priestley",
        "school": "Georgia State University",
        "schoolLogo": "https://commkit.gsu.edu/files/2019/07/logoLine3-RGB-e1563220704572.jpg",
        "department": "Chemistry",
        "postBody": "In this project students will synthesize new purely organic sensitizer molecules with phosphonate/carboxylate surface binding groups. Once synthesized students will characterize the compound using UV-Vis spectroscopy, steady-state and time-resolved emission, and cyclic voltammetry. The dyes will then be incorporated into a self-assembled bilayer and we will measure upconverted emission (on ZrO2) and photocurrent generation (on TiO2) from the bilayer film.",
        "isOnline": false,
        "location": "145 Piedmont Ave SE, Atlanta, GA 30303",
        "activePost": true,
        "semester": "Spring 2022",
        "dateRange": "2022/01/10-2022/05/15",
        "timeRange": "14:00-17:00",
        "isPaid": true,
        "payAmount": 5000,
        "requirements": {
          "gpa": 4.0,
          "isGrad": false,
          "year": "fourth-year",
          "prerequisites": "Organic Chemistry and Organometallic Chemistry",
          "major": "Chemistry"
        }
      }
    ]
    `;
    let data1 = JSON.parse(dataJSON);
    // console.log(data1);

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
                            {/* <div className="search_box bd-grid">
                                <input type="text" className="input_search" value={school} onChange={e => setSchool(e.target.value)} placeholder="University" />
                                <input type="text" className="input_search" value={department} onChange={e => setDepartment(e.target.value)} placeholder="Department: Math, Biology, CS..." />
                                <input type="text" className="input_search" value={professor} onChange={e => setProfessor(e.target.value)} placeholder="Professor" />
                                <button className="search_btn"><i className="fas fa-search"></i></button>
                            </div> */}
                            {/* {data1.map((item) => (
                              <ResearchResult result={item} key={item.postID}/>
                            ))} */}
                        {/* <p className="home__description">Find research opportunities here on ResearchU! Get involved in your school community, build reputation for your career, develop written and oral communication skills, and advance academic achievement by partaking in academic research!</p> */}
                    </div>
                    <div className="home_container">
                        <div className="search-bar">Search Bar
                            <div className= "">
                              {/* Create search bar here */}
                            </div>
                        </div>
                        
                        <div class="filters">Filters
                            <div className= "">
                              {/* Create filters  here */}
                            </div>
                        </div>
                        <div class="cards">
                            <div class="card">Card 1</div>
                            <div class="card">Card 2</div>
                            <div class="card">Card 3</div>
                        </div>
                        
                        
                    </div>
                </div>
            </section>
        </>
    );
}

export default Home;