import React, { useState } from 'react';
import { MdViewColumn, MdTableRows, MdDateRange } from "react-icons/md";
import { GrLocation } from "react-icons/gr";

import { BiStar } from "react-icons/bi";
import { useHistory } from "react-router-dom";
import SignIn from "../pages/SignIn";
import {useUser} from '../auth/useUser';
import { useToken } from '../auth/useToken';
import axios from 'axios';
import { collapseTextChangeRangesAcrossMultipleVersions } from 'typescript';
import jQuery from 'jquery'
import $ from 'jquery';
import { tempData1 } from "./ExampleProfile";

function AppliedPosts({ result }) {
  const [isOpen, setIsOpen] = useState(false);
  const [token, setToken] = useToken();



  let user = useUser();


  const icon1 = <MdTableRows />
  const icon2 = <MdTableRows />
  const icon3 = <BiStar />
  const iconLocation = <GrLocation />
  const iconData = <MdDateRange />




    const [statusID, setStatus] = useState("Check");
    var arr = result.applicants
    var studentID= user;
    var index = 0;
    var results;

  const statusCheck = async() => {
    /*for(var k = 0; k < arr.length; k++){
        if(arr[k][0] == studentID){
            index = k;
            results = arr[index][1];
  }
}*/
for (var k = 0; k < user.appliedPosts.length; k++)
    if(user.appliedPosts[k].includes(result._id)){
      results = user.appliedPosts[k][1]

      if(results === 0 || results === "0"){
        setStatus("Accepted")


      }else if(results === 2 || results === "2"){
        setStatus("Rejected")

              }else if(results === 1 || results === "1"){
        setStatus("Pending")

      }
    }
    else {
      index = index + 1;
      if (index === user.appliedPosts.length){
      alert("Have Not Applied! Go Back To Result Tab To Apply!");
      index = 0;
      }
    }
  }


  const history = useHistory();



  return (
    <html>
    <body>
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
              {result.major.map((item) => (
                <div className="tags" key={item}>
                  <h5>{item}</h5>
                </div>
              ))}
            </>
          </div>


          <div className="fiveone">
          <div>
            <button className="buttonCardApplied view" onClick={() => setIsOpen(!isOpen)}>Details</button>
            </div>


            <button id="id1" className="buttonCardApplied status" onClick={() => {
                statusCheck()
              }
            }>{statusID}</button>


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
</body>
    </html>

)

}



export default AppliedPosts;
