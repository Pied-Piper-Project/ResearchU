
import React, { useState, useEffect, Component } from 'react';
import SearchBar from '../components/SearchBar';
// import { tempData } from "../components/ExampleResearchPosts";
import ResearchResult from './../components/ResearchResult';
import script from './../components/script';
import OrderForm from './../components/OrderForm';
import FilterBar from "../components/FilterBar";
import { MdViewColumn, MdTableRows, MdDateRange } from "react-icons/md";
import animatedLogo from "../images/logo.gif";
import $ from 'jquery';


function Home() {
  // const data = tempData;
  const [data, setData] = useState([]);



  const icon1 = <MdTableRows />
  const icon2 = <MdTableRows />
  const [order, setOrder] = useState('');
  //Need to add a useState for button
  function handleChange(event) {
    setOrder({ value: event.target.value });
  }

  const [allData, setAllData] = useState(data);
  const generateMajorDataForDropdown = () => {
    return ["Computer Science", "Chemistry", "Physics", "Mathematics"];
    // return [...new Set(data.map((item) => item.major))];
    //return [...new Set(data.map((item) => item.requirements.major.map((itemTwo, index) => itemTwo)))];
  };

//   const[research, setResearch] = useState({name: " "});
//     useEffect(() => {
//       const fetchData = async () => {
//         const result = await fetch(`api/research`);
//         const body = await result.json();
//         setResearch(body);
//       }
//   fetchData();
//   }, []);
//   const data = Array.from(research);

//   const icon1 = <MdTableRows/>
//   const icon2 = <MdTableRows/>
//   const [order, setOrder] = useState('');
//     //Need to add a useState for button
//     function handleChange(event){
//         setOrder({value: event.target.value});
//     }

//   const [allData, setAllData] = useState(data);
//   const generateMajorDataForDropdown = () => {
//     return [...new Set(data.map((item) => item.requirements.major))];
//   };

  const generateSemesterDataForDropdown = () => {
    return ["Fall 2021", "Spring 2022", "Fall 2022"];
    return [...new Set(data.map((item) => item.semester))];
  };

  const handleFilterMajor = (year, gpa, major, isOnline, semester, fromDate, toDate) => {
    const filteredData = data.filter((item) => {

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
      (fromDateObj <= item_fromDateObj || fromDate == "" || item.fromDate === "")
      && (item_toDateObj <= toDateObj || toDate === "" || item.toDate == "")) {
        return item;
      }
    });

    setAllData(filteredData);
  };

    if(order.value === "Ascending"){
        allData.sort((a, b) => parseFloat(a._id) - parseFloat(b._id))
    }
    else{
        allData.sort((a, b) => parseFloat(b._id) - parseFloat(a._id))
    }

  return (
    <>


      <section className="home" id="home">








        <div className="home__container bd-container">
          <div className="home__img">
            <img src={animatedLogo} alt="Animated ResearchU logo" />
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
          </div>
        </div>





        <div class="container">
	<div class="tab-slider--nav">
		<ul class="tab-slider--tabs">
			<li class="tab-slider--trigger active" rel="tab1">Tab 1</li>
			<li class="tab-slider--trigger" rel="tab2">Tab 2</li>
		</ul>
	</div>
	<div class="tab-slider--container">
		<div id="tab1" class="tab-slider--body">
			<h2>First Tab</h2>
			<p>Toggle switch style tab navigation. Currently only works with two tabs.</p>
			<p>Donec ullamcorper nulla non metus auctor fringilla. Donec ullamcorper nulla non metus auctor fringilla. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nullam id dolor id nibh ultricies vehicula ut id elit. Nulla vitae elit libero, a pharetra augue.</p>
		</div>
		<div id="tab2" class="tab-slider--body">
			<h2>Second Tab</h2>
			<p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras mattis consectetur purus sit amet fermentum. Nulla vitae elit libero, a pharetra augue. Cras mattis consectetur purus sit amet fermentum. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</p>
		</div>
	</div>
</div>


      </section>


    </>
  );
}

export default Home;
