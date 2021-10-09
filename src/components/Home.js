import React from 'react'
import videoSource from "./../anim_logo.mp4";
function Home(){
    return(
        <>
            <section class="home" id="home">
                <div class="home__container bd-container">
                    <div class="home__img">
                        <img src="assets/img/home.png" alt="" />
                    </div>
                    <div class="video">
                        <video className="video_center" width={1000} height={250} autoPlay muted>
                            <source src={videoSource} type="video/mp4"/>
                        </video>
                    </div>
                    <div class="home__data">
                        <h1 class="home__title">Research is just a click away!</h1>  
                        {/* <a href="#" class="button">Get Started</a> */}
                            <div class="search_box bd-grid">
                                <input type="text" class="input_search" placeholder="Keyword: CS, Math, Physics..." />
                                <input type="text" class="input_search" placeholder="University" />
                                <input type="text" class="input_search" placeholder="Research Type" />
                                <div class="search_btn"><i class="fas fa-search"></i></div>
                            </div>
                        <p class="home__description">FIND research opportunities here on ResearchU! Get involved in your school community, build reputation for your career, develop written and oral communication skills, and advance academic achievement by partaking in academic research!</p>
                    </div>             
                </div>
            </section>
        </>
    );
}

export default Home;