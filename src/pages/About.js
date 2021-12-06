import headshot1 from '../images/headshot1.jpg'
import headshot2 from '../images/headshot2.jpg'
import headshot3 from '../images/headshot3.jpg'
import headshot4 from '../images/headshot4.jpg'
import headshot5 from '../images/headshot5.jpg'
import headshot6 from '../images/headshot6.jpg'
import headshot7 from '../images/headshot7.jpg'
import stockphoto from '../images/stockphoto.jpg'
import React from 'react'

const About = () => {
    return(
        <>

            <section className="about section bd-container" id="about">
                  <h3 className="section-title">Mission Statement</h3>
                <div className="mission__data glass">
                  <span className="about__title">Pied Piper aims to alleviate communication issues between students and professors through an accessible medium.</span>
                </div>
                  
                  <h2 className="section-title"></h2>
                  <h3 className="section-title">The Team</h3>

                <div className="about__container bd-grid">
                    <div className="about__data glass">
                        <h3 className="about__title">Product Owner</h3>
                        <img src={headshot5} alt="" className="about__img"/>
                        <h3 className="about__title">Abraham Arevelo</h3>
                        <p><span className="value__category">Contact:</span> abe.arevalo@emory.edu</p>
                    </div>

                    <div className="about__data glass">
                        <h3 className="about__title">Scrum Master</h3>
                        <img src={headshot2} alt="" className="about__img"/>
                        <h3 className="about__title">Abner Benitez</h3>
                        <p><span className="value__category">Contact:</span> abner.benitez@emory.edu</p>
                    </div>

                    <div className="about__data glass">
                        <h3 className="about__title">Development Team</h3>
                        <img src={headshot6} alt="" className="about__img"/>
                        <h3 className="about__title">Carol Tang</h3>
                        <p><span className="value__category">Contact:</span> carol.tang@emory.edu</p>
                    </div>

                     <div className="about__data glass">
                        <h3 className="about__title">Development Team</h3>
                        <img src={headshot3} alt="" className="about__img"/>
                        <h3 className="about__title">Matthew Moreno</h3>
                        <p><span className="value__category">Contact:</span> matt.moreno@emory.edu</p>

                    </div>

                    <div className="about__data glass">
                        <h3 className="about__title">Development Team</h3>
                       <img src={stockphoto} alt="" className="about__img"/>
                       <h3 className="about__title">Amin El Asery</h3>
                       <p><span className="value__category">Contact:</span> melaser@emory.edu</p>
                   </div>

                   <div className="about__data glass">
                      <h3 className="about__title">Development Team</h3>
                      <img src={headshot1} alt="" className="about__img"/>
                      <h3 className="about__title">Ender Schmidt</h3>
                      <p><span className="value__category">Contact:</span> elschm2@emory.edu</p>
                  </div>

                  <div className="about__data glass">
                      <h3 className="about__title">Development Team</h3>
                     <img src={headshot7} alt="" className="about__img"/>
                     <h3 className="about__title">Enoc Flores</h3>
                     <p><span className="value__category">Contact:</span> ehflore@emory.edu</p>
                 </div>

                 <div className="about__data glass">
                    <h3 className="about__title">Development Team</h3>
                    <img src={headshot4} alt="" className="about__img"/>
                    <h3 className="about__title">Kody Coppock</h3>
                    <p><span className="value__category">Contact:</span> kody.coppock@emory.edu</p>
                </div>

                </div>
            </section>
        </>
    );
}

export default About;
