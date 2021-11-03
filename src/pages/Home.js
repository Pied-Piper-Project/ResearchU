import React, { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import ResearchResult from './../components/ResearchResult';
import OrderForm from './../components/OrderForm';
import FilterBar from "../components/FilterBar";
import { MdViewColumn, MdTableRows, MdDateRange } from "react-icons/md";


function Home(){
  // const data = [];

  const [data, setData] = useState([]);

  const icon1 = <MdTableRows/>
  const icon2 = <MdTableRows/>
    const [order, setOrder] = useState('');
    //Need to add a useState for button
    function handleChange(event){
        setOrder({value: event.target.value});
    }

  const [allData, setAllData] = useState(data);
  const generateMajorDataForDropdown = () => {
    return [...new Set(data.map((item) => item.major))];
  };

  const generateSemesterDataForDropdown = () => {
    return [...new Set(data.map((item) => item.semester))];
  };

  const handleFilterMajor = (year, gpa, major, isOnline, semester, fromDuration, toDuration) => {
    const filteredData = data.filter((item) => {
      if ((item.year === year || "" === year) && (item.major === major || "" === major) && (item.gpa <= gpa)
        && (item.isOnline === isOnline || "" === isOnline) && (item.semester === semester || "" === semester)
        ) { //(item.fromDuration === duration)
          console.log(isOnline)
        return item;
      }
    });

    setAllData(filteredData);
  };
    if(order.value === "Ascending"){
        allData.sort((a, b) => parseFloat(a.postID) - parseFloat(b.postID))
    }
    else{
        allData.sort((a, b) => parseFloat(b.postID) - parseFloat(a.postID))
    }

  return (
    <>
      <section className="home" id="home">
        <div className="home__container bd-container">
          <div className="home__img">
            {/* <img src="assets/img/home.png" alt="" /> */}
          </div>
          <div className="home__data">
            <h1 className="home__title">Research is just a click away!</h1>
          </div>
          <div className="home_container">
            <div className="search-bar">
              <div className="">
                <SearchBar setData={setData} setAllData={setAllData} />
              </div>
            </div>

            <div className="filters">
              <div className="">
                <div>
                  <FilterBar
                    majors={generateMajorDataForDropdown()}
                    semesters={generateSemesterDataForDropdown()}
                    onAllFilter={handleFilterMajor}
                  ></FilterBar>
                </div>
              </div>
            </div>

            <div className="cards-wrapper">
              <div className="listing">
                <h1>Results</h1>
                <div className="sorting">
                  <h1>Sort By:</h1>
                  <div className="select-dropdown">
                      <OrderForm update = {handleChange.bind(this)} cur={order.value}/>
                  </div>

                  <div className="sort-icon">

                    <div className="original-icon">{icon1}</div>
                    <div className="rotate-icon">{icon2}</div>

                  </div>

                </div>

              </div>
              {allData.map((item) => (
                <ResearchResult result={item} key={item.postID} />
              ))}
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

export default Home;