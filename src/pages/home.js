import React from 'react';
import Safe from "react-safe";


class Home extends React.Component {
    // componentDidMount(){
    //     const script = document.createElement('script');
    //     script.src = "../../public/assets/main.js";
    //     script.async = true;
    //     document.head.appendChild(script);
        
    // }
    render() {
        
        return (
        
        <div>
            
                 {/* <!--------------- Scroll right ---------------> */}
        <a href="#" class="scrolltop" id="scroll-top">
            <i class='bx bx-up-arrow-alt scrolltop__icon'></i>
        </a>
        
        {/* <!--------------- Header ---------------> */}
        <header class="l-header " id="header">
            <nav class="nav bd-container">
                <a href="#" class="nav__logo">ResearchU</a>

                <div class="nav__menu" id="nav-menu">
                    <ul class="nav__list">
                        <li class="nav__item"><a href="#home" class="nav__link active-link">Home</a></li>
                        <li class="nav__item"><a href="#about" class="nav__link">About</a></li>
                        <li class="nav__item"><a href="#contact" class="nav__link">Contact</a></li>
                        <li><i class='bx bx-moon change-theme' id="theme-button"></i></li>
                    </ul>
                </div>

                <div class="nav__toggle" id="nav-toggle">
                    <i class='bx bx-menu-alt-right' ></i>
                </div>

                <a href="#" class="button button__header">Sign In</a>
            </nav>
        </header>

        <main class="l-main container2">
            {/* <!--------------- Home ---------------> */}
            <section class="home" id="home">
                <div class="home__container bd-container">
                    <div class="home__img">
                        <img src="assets/img/home.png" alt=""/>
                    </div>

                    

                    <div class="home__data">
                        <h1 class="home__title">Research is just a click away!</h1>
                        
                        {/* <!-- <a href="#" class="button">Get Started</a> --> */}
                        <div class="wrapper">
                            <div class="search_box bd-grid">
                                <input type="text" class="input_search" placeholder="Keyword: CS, Math, Physics..."/>
                                <input type="text" class="input_search" placeholder="University"/>
                                <input type="text" class="input_search" placeholder="Research Type"/>
                                <div class="search_btn"><i class="fas fa-search"></i></div>
                            </div>
                        </div>
                        <p class="home__description">Research helps restore and protect memory and enhances mathematic and problem-solving skills. Therefore, it prepares the mind for a better understanding of concepts and theories.</p>
                        
                    </div>  
                    
                    
                </div>
            </section>

            {/* <!--------------- About ---------------> */}
            <section class="about section bd-container" id="about">
                <h2 class="section-title">About Us</h2>
                <div class="about__container bd-grid">
                    <div class="about__data">
                        <img src="assets/img/value1.png" alt="" class="about__img"/>
                        <h3 class="about__title">Value 1</h3>
                        <span class="value__category">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500</span>
                    </div>

                    <div class="about__data">
                        <img src="assets/img/value1.png" alt="" class="about__img"/>
                        <h3 class="about__title">Value 2</h3>
                        <span class="value__category">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500</span>
                    </div>

                    <div class="about__data">
                        <img src="assets/img/value1.png" alt="" class="about__img"/>
                        <h3 class="about__title">Value 3</h3>
                        <span class="value__category">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500</span>
                    </div>
                     <div class="about__data">
                        <img src="assets/img/value1.png" alt="" class="about__img"/>
                        <h3 class="about__title">Value 4</h3>
                        <span class="value__category">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500</span>
                    </div>
                </div>
            </section>

            {/* <!--------------- Contact ---------------> */}
            <section class="send section" id = "contact">
                <div class="send__container bd-container bd-grid">
                    <div class="send__content">
                        <h2 class="section-title-center send__title">Contact US</h2>
                        <p class="send__description">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        <form action="">
                            <div class="send__direction">
                                <input type="text" placeholder="Your email address" class="send__input"/>
                                <a href="#" class="button">Send</a>
                            </div>
                        </form>
                    </div>

                    <div class="send__img">
                        <img src="assets/img/contact.png" alt=""/>
                    </div>
                </div>
            </section>

        </main>
            

        {/* <!--------------- Footer --------------->
        <!--========== FOOTER ==========--> */}
        <footer class="footer section">
            <p class="footer__copy">Made with love by the ResearchU team</p>
        </footer>
        

    
       
        </div>
        );
    }
}


export default Home;