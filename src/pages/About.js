import React from 'react'

const About = () => {
    return(
        <>
            <section className="about section bd-container" id="about">
                <h2 className="section-title">About Us</h2>
                <div className="about__container bd-grid">
                    <div className="about__data">
                        <img src="assets/img/value1.png" alt="" className="about__img"/>
                        <h3 className="about__title">Team Member 1</h3>
                        <span className="value__category">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500</span>
                    </div>

                    <div className="about__data">
                        <img src="assets/img/value1.png" alt="" className="about__img"/>
                        <h3 className="about__title">Team Member 2</h3>
                        <span className="value__category">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500</span>
                    </div>

                    <div className="about__data">
                        <img src="assets/img/value1.png" alt="" className="about__img"/>
                        <h3 className="about__title">Team Member 3</h3>
                        <span className="value__category">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500</span>
                    </div>
                     <div className="about__data">
                        <img src="assets/img/value1.png" alt="" className="about__img"/>
                        <h3 className="about__title">Team Member 4</h3>
                        <span className="value__category">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500</span>
                    </div>
                </div>
            </section>
        </>
    );
}

export default About;
