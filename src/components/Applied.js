import React, { useState } from 'react';
import { MdViewColumn, MdTableRows, MdDateRange } from "react-icons/md";
import { GrLocation } from "react-icons/gr";

import { BiStar } from "react-icons/bi";
import { useHistory } from "react-router-dom";
import SignIn from "../pages/SignIn";


function Applied({ result }) {
  const [isOpen, setIsOpen] = useState(false);

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
            <button className="buttonCardApplied accepted" onClick={() => setIsOpen(!isOpen)}>Accept</button>
            <button className="buttonCardApplied pending" onClick={() => { history.push('/ResearchU/SignIn') }}>Profile</button>
          </div>
          {isOpen && <div className="six">
            <div className="details-res">
              <div className="detail-item">
                <h5 className= "pendingTwo" >Pending:</h5>
                <p>Matthew Moreno</p>
                <p>Carol Tang</p>
                <p>Abraham Arevelo</p>
                <p>Kody Coppock</p>
              </div>


              <div className="detail-item">
                <h5 className= "acceptedTwo">Accepted:</h5>
                <p>Abner Benitez</p>
                <p>Enoc Flores</p>
              </div>
              <div className="detail-item">
                <h5 className= "rejectedTwo">Rejected:</h5>
                <p>Ender Schmidt</p>
                <p>Amin El Asery</p>
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

export default Applied;
