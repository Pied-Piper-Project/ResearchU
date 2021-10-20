import React from 'react'
import contactImg from '../images/contact.png'

const Contact = () => {
    return(
        <>
            <section className="send section" id = "contact">
                <div className="send__container bd-container bd-grid">
                    <div className="send__content">
                        <h2 className="section-title-center send__title">Contact US</h2>
                        <p className="send__description">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        <form action="">
                            <div className="send__direction">
                                <input type="text" placeholder="Your email address" className="send__input"/>
                                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className="button sendButton">Send</a>
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