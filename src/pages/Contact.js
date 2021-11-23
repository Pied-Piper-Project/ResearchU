import React from 'react';
import contactImg from '../images/contact.png';

const Contact = () => {
    return(
        <>
            <section className="send section" id = "contact">
                <div className="send__container bd-container bd-grid glass">
                    <div className="send__content">
                        <h2 className="section-title-center send__title">Contact US</h2>
                        <p className="send__description">If you have any questions or suggestions about the website, send us your email address so that we can get in contact with you!</p>
                        <form action="">
                            <div className="send__direction">
                                <input type="text" placeholder="Your email address" className="send__input"/>
                                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className="button sendButton">Send</a>
                            </div>
                        </form>
                        <p className="send__description">Alternatively, you can fill out our feedback form!</p>
                        <form action="">
                            <div>
                                <a href="https://docs.google.com/forms/d/e/1FAIpQLSc19J90IYJI4fhFWHKqwSE21e_gS546t3sGTcw1iGiUUD03Cg/viewform?usp=sf_link" className="button sendButtonTwo">Feedback</a>
                            </div>
                        </form>
                    </div>

                    <div className="send__img">
                        <img src={contactImg}  alt='logo' />
                    </div>
                </div>
            </section>
        </>
    );
}

export default Contact;