import React, { useState } from 'react';
import { MdViewColumn, MdTableRows, MdDateRange } from "react-icons/md";
import { GrLocation } from "react-icons/gr";

import { BiStar } from "react-icons/bi";
import { useHistory } from "react-router-dom";
import SignIn from "../pages/SignIn";


function ResearchResult({ result }) {
  const [isOpen, setIsOpen] = useState(false);

  const icon1 = <MdTableRows />
  const icon2 = <MdTableRows />
  const icon3 = <BiStar />
  const iconLocation = <GrLocation />
  const iconData = <MdDateRange />

  const history = useHistory();
  // function handleClick() {
  //   history.push(SignIn);
  // }


  // ToDo: write function to display pay amount if it is paid

  // ToDo: write function to format timeRange
  return (
    <>
      {/* <h1>{result.name}</h1>
      <h3>School {result.school}</h3>
      <img src={result.schoolLogo} alt={result.school + "'s school logo"} />
      <h3>Academic Department {result.department}</h3>
      <h3>Professor {result.professor}</h3>
      <h3>Location: {result.location}</h3>
      <h3>Semester: {result.semester}</h3>
      <h3>Duration: {result.dateRange}</h3>
      <h3>Major: {result.major}</h3>
      <h3>Research is conducted between the hours of {result.timeRange}</h3>
      <h3>This is {result.isPaid ? "a paid" : "not a paid"} research opportunity</h3>
      <h3>This opportunity pays ${result.payAmount}</h3>
      <p>{result.postBody}</p>
      <p>This opportunity is {result.isOnline ? "online" : "offline"}</p> */}
      <div className="cards column">

        <div className="card column-item">
          <a>
            <img className="one" src={'//logo.clearbit.com/' + result.schoolLogo} alt={result.school + ' logo'} />
          </a>
          <div className="two">
            <h1>{result.name}</h1>
            <div className="details ">
              <div className="icon-posted">
                <div className="icon-date"> {iconData}</div>
                <h5>Posted: yesterday</h5> {/* We should fix this. Reseach Post skeleton does not have a field of postDate.*/}
              </div>
              <div className="icon-location">
                <div className="icon-loc"> {iconLocation}</div>
                <h5>{result.school}</h5>
              </div>
            </div>

          </div>
          <div className="three">
            {icon3}
          </div>
          <div className="four">
            <div className="tags">
              <h5>{result.semester}</h5>
            </div>
            <div className="tags">
              <h5>{result.isPaid ? "Paid" : "Not Paid"}</h5>
            </div>
            <div className="tags">
              <h5>{result.isOnline ? "Remote" : "In-person"}</h5>
            </div>
            <>
              {result.requirements.major.map((item) => (
                <div className="tags" key={item}>
                  <h5>{item}</h5>
                </div>
              ))}
            </>
          </div>
          <div className="five">
            <button className="buttonCard view" onClick={() => setIsOpen(!isOpen)}>View</button>
            <button className="buttonCard apply" onClick={() => { history.push('/ResearchU/SignIn') }}>Apply</button>
          </div>
          {isOpen && <div className="six">
            <div className="details-res">
              <div className="detail-item">
                <h5>Professor:</h5>
                <p>{result.professor}</p>
              </div>
              <div className="detail-item">
                <h5>Duration:</h5>
                <p>{result.date}</p>
              </div>
              <div className="detail-item">
                <h5>Location:</h5>
                <p>{result.location}</p>
              </div>
              <div className="detail-item">
                <h5>Hours:</h5>
                <p>Research is conducted between the hours of {result.timeRange}</p>
              </div>
              <div className="detail-item">
                <h5>Description:</h5>
                <p>{result.postBody}</p>
              </div>
            </div>
          </div>}
        </div>
        {/* <div className="card column-item ">Card 2</div>
          <div className="card column-item ">Card 3</div> */}
      </div>
    </>
  )
}

export default ResearchResult;
