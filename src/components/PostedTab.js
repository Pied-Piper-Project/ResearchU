import React, { useState } from 'react';
import { MdViewColumn, MdTableRows, MdDateRange } from "react-icons/md";
import { GrLocation } from "react-icons/gr";
import { BiStar } from "react-icons/bi";
import { useHistory } from "react-router-dom";
import SignIn from "../pages/SignIn";
import {useUser} from '../auth/useUser';
import { useToken } from '../auth/useToken';
import axios from 'axios';
import StudentInfoPage from './../pages/StudentInfoPage';
import { collapseTextChangeRangesAcrossMultipleVersions } from 'typescript';


function PostedTab({ result }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOffline, setIsOffline] = useState(true);
  const [isOffline2, setIsOffline2] = useState(true);

  const [token, setToken] = useToken();

  let user = useUser();

  const [appliedText, setApplied] = useState("Apply");
  //if (user.appliedPosts.includes(result._id)){
    //setApplied("Applied")
 // }

  const icon1 = <MdTableRows />
  const icon2 = <MdTableRows />
  const icon3 = <BiStar />
  const iconLocation = <GrLocation />
  const iconData = <MdDateRange />

  const history = useHistory();
  




  return (
    <>

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


          <div className="five">
            <button className="buttonCard view" onClick={() => {
              if (setIsOpen2()==true){
                setIsOffline2(!isOffline2)
              }
              else{
                setIsOpen(!isOpen)
              }
            }}>Details</button>


            <button className="buttonCard apply" onClick={() => {
              if (setIsOpen()==true){
                setIsOffline(!isOffline)
              }
              else{
                setIsOpen2(!isOpen2)
              }
            }}>Applicants</button>

          </div>


          {(isOpen2 && isOffline2) && <div className="six">
            <div className="details-res">
            <h5 className= "pendingTwo" >Pending:</h5>
            {result.applicants.map((applic) => 
              <div className="detail-item">
                 {applic[0]}


              <div className="fourone">

                <button className="tagsProfile"   onClick={() => {
                  history.push('/StudentProfile')
                  }
                }>Profile</button>

                <button className="tagsAccept"  onClick={() => {
                  const studentID = applic[0]
                  const number = "0"
                  const post_id = result._id
                    const response = axios.put(`/api/ResearchU/applicantManage/${result._id}`, {
                      number,
                      studentID,
                      post_id,
                    });
                  //result.applicants.push([studentID, "0"])
                  }
                }>Accept</button>

                <button className="tagsReject" onClick={() => {
                  const studentID = applic[0]
                  const number = "2"
                  const post_id = result._id
                    const response = axios.put(`/api/ResearchU/applicantManage/${result._id}`, {
                      number,
                      studentID,
                      post_id,
                    });
                  //result.applicants.push([studentID, "2"])
                  
                }}>Reject</button>

              </div>

              </div>
)}



            </div>
          </div>}


          {(isOpen && isOffline) && <div className="six">
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

      </div>
    </>
  )
}

export default PostedTab;
