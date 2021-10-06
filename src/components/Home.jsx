import React from 'react'
import logo from '../ResearchULogo.png';

function Home(){
    return(
        <>
            <section class="home" id="home">
                <div class="home__container bd-container">
                    <div class="home__img">
                        <img src="assets/img/home.png" alt="" />
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
                        <p class="home__description">Research helps restore and protect memory and enhances mathematic and problem-solving skills. Therefore, it prepares the mind for a better understanding of concepts and theories.</p>
                    </div>             
                </div>
            </section>
        </>
    );
}

export default Home;