import React from 'react'
import styles from './Contact.module.css'
import {Link} from 'react-router-dom'
const index = () => {
    return (
        <div className="contact-section">
            <div className="container">
                <div className="contact-wrapper">
                    <h3>Let’s Make Something Great Together</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod 
                        tempor incididunt ut labore et t enim ad minim veniam, quis nostrud exercitation.
                    </p>
                    <form>
                        <div className="contact-form">
                            <input type="text" name="fullname" placeholder=" Name"/>
                            <input type="email" name="email" placeholder=" Email"/>
                        </div>
                        <div className="contact-form">
                            <input type="tel" name="phone" placeholder=" Phone#"/>
                            <input type="text" name="budget" placeholder=" Budget"/>
                        </div>
                        <div className={styles.formTextarea}>
                            <textarea name="message" placeholder=" Message"/>
                        </div>
                        <div className="action-button">
                                <Link className="btn-secondary">Hire Me</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default index;   