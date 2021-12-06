import React, { useState, useEffect} from 'react';
import SearchBar from '../components/SearchBar';

import ResearchResult from './../components/ResearchResult';
import AppliedPosts from './../components/AppliedPosts';
import PostedTab from './../components/PostedTab';
import OrderForm from './../components/OrderForm';
import FilterBar from "../components/FilterBar";
import { MdViewColumn, MdTableRows, MdDateRange } from "react-icons/md";
import animatedLogo from "../images/logo.gif";
import jQuery from 'jquery'
import $ from 'jquery';
import {useUser} from '../auth/useUser'



function Home() {


/*------------SCRIPT FOR TABS-----------*/

 $(document).ready(function() {

      // get tallest tab__content element
      var maxHeight = 0;

		$('.tab__content1').each(function() {
			maxHeight = $(this).outerHeight();
		});

      // set height of tabs + top offset
		$('[data-tabs]').css('height', maxHeight - 110 + 'px');
    $('[data-tabs]').css('max-height', maxHeight * 2 + 'px');
    $('[data-home_container]').css('height', maxHeight - 110 + 'px');
    $('[data-home_container]').css('max-height', maxHeight * 2 + 'px');



});

/*------------END OF SCRIPT FOR TABS-----------*/

  //const [data, setData] = useState([]);
  const [toggleResults, setToggleResults] = useState(false);
  const icon1 = <MdTableRows />
  const icon2 = <MdTableRows />
  const [order, setOrder] = useState('');
  const user = useUser();
    //Need to add a useState for button
    function handleChange(event){
        setOrder({value: event.target.value});
    }

  const [research, setResearch] = useState({name: " "});
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(`api/research`);
      const body = await result.json();
      setResearch(body);
    }
    fetchData();
  }, []);
  const [data, setData] = useState(Array.from(research));

  const [allData, setAllData] = useState(data);
  const generateMajorDataForDropdown = () => {
    return ["Computer Science", "Chemistry", "Physics", "Mathematics"];
  };

  const generateSemesterDataForDropdown = () => {
    return ["Fall 2021", "Spring 2022", "Fall 2022"];
    // return [...new Set(data.map((item) => item.semester))];
  };

  const handleFilterMajor = (year, gpa, major, isOnline, semester, fromDate, toDate) => {
    const filteredData = allData.filter((item) => {
      
      // Older stuff
      let item_fromDateObj = new Date(item.fromDate);
      let item_toDateObj = new Date(item.toDate);
      let fromDateObj = new Date(fromDate);
      let toDateObj = new Date(toDate);


      if ((item.year.includes(year) || 0 === year) && 
      (item.major.includes(major) || 0 === major.length) && 
      (item.gpa <= gpa) && 
      (item.isOnline === isOnline || "" === isOnline) && 
      (item.semester === semester || "" === semester) && 
      (fromDateObj <= item_fromDateObj || fromDate === "" || item.fromDate === "")
      && (item_toDateObj <= toDateObj || toDate === "" || item.toDate === "")) {
        return item;
      }
    });

    setData(filteredData);
  };
    if(order.value === "Ascending"){
        allData.sort((a, b) => parseFloat(a._id) - parseFloat(b._id))
    }
    else{
        allData.sort((a, b) => parseFloat(b._id) - parseFloat(a._id))
    }
  
    if (user != null){
  if (user.appliedPosts != null){
    return (
      <>
  
  
  <section className="home" id="home">
  
          <div className="home__container bd-container">
  
  
          <div className="disappearData2" style={ toggleResults ? {display: "none"} : {display: "grid"}}>
            <img src={animatedLogo} width="75%" height="75%"/>
          </div>
  
            <div className="home__data">
              <h1 className="home__title">Research a click away!</h1>
            </div>
  
            <div className="home_container_null">
  
  
              <div className="search-bar">
                <div className="">
                  <SearchBar setData={setData} setAllData={setAllData} setToggleResults={setToggleResults}/>
                </div>
              </div>
  
  
              <div data-homeContainer className="homeContainer" style={ toggleResults ? {display: "grid"} : {display: "none"}}>
  
                <div className="filters">
                  <div className="filter__container">
                    <div>
                      <FilterBar
                        majors={generateMajorDataForDropdown()}
                        semesters={generateSemesterDataForDropdown()}
                        onAllFilter={handleFilterMajor}
                      ></FilterBar>
                    </div>
                </div>
              </div>
  
            <div data-cardWrapper className="cardWrapper">
  
                        <div data-tabs class="tabs">
                           <div class="tab">
                              <input type="radio" name="tabgroup" id="tab-1" checked/>
                              <label for="tab-1">Result</label>
                                <div class="tab__content1">
                          {allData.map((item) => (
                            <ResearchResult result={item} key={item._id} />
                          ))}
                                </div>
                           </div>
  
                           
                                  
  
                           <div class="tab">
                              <input type="radio" name="tabgroup" id="tab-2"/>
                              <label for="tab-2">Applied</label>
                                <div class="tab__content">
                                {allData.map((item) => (
                                  <AppliedPosts result={item} key={item._id} />
                                ))}
                                </div>
                           </div>
  
                           
                 
  
  
  
                         {/*  <div class="tab">
                              <input type="radio" name="tabgroup" id="tab-3"/>
                              <label for="tab-3">Posted</label>
                                <div class="tab__content">
                                {allData.map((item) => (
                                  <PostedTab result={item} key={item._id} />
                                ))}
                                </div>
                           </div>
                                */}
  
  
  
                           <div className="sorting">
                                           <h1>Sort By:</h1>
                                           <div className="select-dropdown">
                                             <OrderForm update={handleChange.bind(this)} cur={order.value} />
                                           </div>
                                           <div className="sort-icon">
                                             <div className="original-icon">{icon1}</div>
                                             <div className="rotate-icon">{icon2}</div>
                                           </div>
                          </div>
                          </div>
                        </div>
  
  
            </div>
  
            <div className="disappearData" style={ toggleResults ? {display: "none"} : {display: "grid"}}>
  
            </div>
            </div>
          </div>
  </section>
  
      </>
    );
  }

  else if (user.createdPost != null){
    return (
      <>
  
  
  <section className="home" id="home">
  
          <div className="home__container bd-container">
  
  
          <div className="disappearData2" style={ toggleResults ? {display: "none"} : {display: "grid"}}>
            <img src="/ResearchU/static/media/logo.101fc9cd.gif" width="75%" height="75%"/>
          </div>
  
            <div className="home__data">
              <h1 className="home__title">Research a click away!</h1>
            </div>
  
            <div className="home_container_null">
  
  
              <div className="search-bar">
                <div className="">
                  <SearchBar setData={setData} setAllData={setAllData} setToggleResults={setToggleResults}/>
                </div>
              </div>
  
  
              <div data-homeContainer className="homeContainer" style={ toggleResults ? {display: "grid"} : {display: "none"}}>
  
                <div className="filters">
                  <div className="filter__container">
                    <div>
                      <FilterBar
                        majors={generateMajorDataForDropdown()}
                        semesters={generateSemesterDataForDropdown()}
                        onAllFilter={handleFilterMajor}
                      ></FilterBar>
                    </div>
                </div>
              </div>
  
            <div data-cardWrapper className="cardWrapper">
  
                        <div data-tabs class="tabs">
                           <div class="tab">
                              <input type="radio" name="tabgroup" id="tab-1" checked/>
                              <label for="tab-1">Result</label>
                                <div class="tab__content1">
                          {allData.map((item) => (
                            <ResearchResult result={item} key={item._id} />
                          ))}
                                </div>
                           </div>
  
                           {/*
                                  
  
                           <div class="tab">
                              <input type="radio" name="tabgroup" id="tab-2"/>
                              <label for="tab-2">Applied</label>
                                <div class="tab__content">
                                {allData.map((item) => (
                                  <AppliedPosts result={item} key={item._id} />
                                ))}
                                </div>
                           </div>
  
                           */
                 }
  
  
  
                         <div class="tab">
                              <input type="radio" name="tabgroup" id="tab-3"/>
                              <label for="tab-3">Posted</label>
                                <div class="tab__content">
                                {allData.map((item) => (
                                  <PostedTab result={item} key={item._id} />
                                ))}
                                </div>
                           </div>
                                
  
  
  
                           <div className="sorting">
                                           <h1>Sort By:</h1>
                                           <div className="select-dropdown">
                                             <OrderForm update={handleChange.bind(this)} cur={order.value} />
                                           </div>
                                           <div className="sort-icon">
                                             <div className="original-icon">{icon1}</div>
                                             <div className="rotate-icon">{icon2}</div>
                                           </div>
                          </div>
                          </div>
                        </div>
  
  
            </div>
  
            <div className="disappearData" style={ toggleResults ? {display: "none"} : {display: "grid"}}>
  
            </div>
            </div>
          </div>
  </section>
  
      </>
    );
  }

  else{

  
  return (
    <>


<section className="home" id="home">

        <div className="home__container bd-container">


        <div className="disappearData2" style={ toggleResults ? {display: "none"} : {display: "grid"}}>
          <img src="/ResearchU/static/media/logo.101fc9cd.gif" width="75%" height="75%"/>
        </div>

          <div className="home__data">
            <h1 className="home__title">Research a click away!</h1>
          </div>
          <div className="home_container_null">
            <div className="search-bar">
              <div className="">
                <SearchBar setData={setData} setAllData={setAllData} setToggleResults={setToggleResults}/>
              </div>
            </div>


            <div data-homeContainer className="homeContainer" style={ toggleResults ? {display: "grid"} : {display: "none"}}>

              <div className="filters">
                <div className="filter__container">
                  <div>
                    <FilterBar
                      majors={generateMajorDataForDropdown()}
                      semesters={generateSemesterDataForDropdown()}
                      onAllFilter={handleFilterMajor}
                    ></FilterBar>
                  </div>
              </div>

          <div data-cardWrapper className="cardWrapper">

                      <div data-tabs class="tabs">
                         <div class="tab">
                            <input type="radio" name="tabgroup" id="tab-1" checked/>
                            <label for="tab-1">Result</label>
                              <div class="tab__content1">
                        {allData.map((item) => (
                          <ResearchResult result={item} key={item._id} />
                        ))}
                              </div>
                         </div>

                         {/*
                                

                         <div class="tab">
                            <input type="radio" name="tabgroup" id="tab-2"/>
                            <label for="tab-2">Applied</label>
                              <div class="tab__content">
                              {allData.map((item) => (
                                <AppliedPosts result={item} key={item._id} />
                              ))}
                              </div>
                         </div>

                         */
               }



                       {/*  <div class="tab">
                            <input type="radio" name="tabgroup" id="tab-3"/>
                            <label for="tab-3">Posted</label>
                              <div class="tab__content">
                              {allData.map((item) => (
                                <PostedTab result={item} key={item._id} />
                              ))}
                              </div>
                         </div>
                              */}



                         <div className="sorting">
                                         <h1>Sort By:</h1>
                                         <div className="select-dropdown">
                                           <OrderForm update={handleChange.bind(this)} cur={order.value} />
                                         </div>
                                         <div className="sort-icon">
                                           <div className="original-icon">{icon1}</div>
                                           <div className="rotate-icon">{icon2}</div>
                                         </div>
                        </div>
                        </div>
                      </div>


          </div>

          <div className="disappearData" style={ toggleResults ? {display: "none"} : {display: "grid"}}>

          </div>
          </div>
        </div>
        </div>
</section>

    </>
  );
                            }
                          }
                          else{

  
  return (
    <>


<section className="home" id="home">

        <div className="home__container bd-container">


        <div className="disappearData2" style={ toggleResults ? {display: "none"} : {display: "grid"}}>
          <img src="/ResearchU/static/media/logo.101fc9cd.gif" width="75%" height="75%"/>
        </div>

          <div className="home__data">
            <h1 className="home__title">Research a click away!</h1>
          </div>
          <div className="home_container_null">
            <div className="search-bar">
              <div className="">
                <SearchBar setData={setData} setAllData={setAllData} setToggleResults={setToggleResults}/>
              </div>
            </div>


            <div data-homeContainer className="homeContainer" style={ toggleResults ? {display: "grid"} : {display: "none"}}>

              <div className="filters">
                <div className="filter__container">
                  <div>
                    <FilterBar
                      majors={generateMajorDataForDropdown()}
                      semesters={generateSemesterDataForDropdown()}
                      onAllFilter={handleFilterMajor}
                    ></FilterBar>
                  </div>
              </div>

          <div data-cardWrapper className="cardWrapper">

                      <div data-tabs class="tabs">
                         <div class="tab">
                            <input type="radio" name="tabgroup" id="tab-1" checked/>
                            <label for="tab-1">Result</label>
                              <div class="tab__content1">
                        {allData.map((item) => (
                          <ResearchResult result={item} key={item._id} />
                        ))}
                              </div>
                         </div>

                         {/*
                                

                         <div class="tab">
                            <input type="radio" name="tabgroup" id="tab-2"/>
                            <label for="tab-2">Applied</label>
                              <div class="tab__content">
                              {allData.map((item) => (
                                <AppliedPosts result={item} key={item._id} />
                              ))}
                              </div>
                         </div>

                         */
               }



                       {/*  <div class="tab">
                            <input type="radio" name="tabgroup" id="tab-3"/>
                            <label for="tab-3">Posted</label>
                              <div class="tab__content">
                              {allData.map((item) => (
                                <PostedTab result={item} key={item._id} />
                              ))}
                              </div>
                         </div>
                              */}



                         <div className="sorting">
                                         <h1>Sort By:</h1>
                                         <div className="select-dropdown">
                                           <OrderForm update={handleChange.bind(this)} cur={order.value} />
                                         </div>
                                         <div className="sort-icon">
                                           <div className="original-icon">{icon1}</div>
                                           <div className="rotate-icon">{icon2}</div>
                                         </div>
                        </div>
                        </div>
                      </div>


          </div>

          <div className="disappearData" style={ toggleResults ? {display: "none"} : {display: "grid"}}>

          </div>
          </div>
        </div>
        </div>
</section>

    </>
  );
                            }
}

export default Home;
