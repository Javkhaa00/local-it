import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faPhoneAlt,
    faEnvelope,
    faMapMarkerAlt
} from '@fortawesome/free-solid-svg-icons'

const Contact = () => {
    return (
        <div className="contacts" id="contact-section">
            <div className="contacts--text-wrapper">
                <span className="contacts--us">CONTACT US</span>
                <span className="contacts--title">Get In Touch</span>
                <span className="contacts--desc">
                    Consectetur adipiscing elit, sed do eiusmod temport incididunt ut labore et dolor temprt incididunt ut labore dolore magna.
                </span>
                <div className="contacts--wrappers">
                    <FontAwesomeIcon icon={faPhoneAlt} size="lg" className="fontawesome" />
                    <span className="contacts--texts">+1 878 878 7878</span>
                </div>
                <div className="contacts--wrappers" style={{ paddingBottom: "12px" }}>
                    <FontAwesomeIcon icon={faEnvelope} size="lg" className="fontawesome" />
                    <span className="contacts--texts">info@email.com</span>
                </div>
                <div className="contacts--wrappers" style={{ paddingBottom: "36px" }}>
                    <FontAwesomeIcon icon={faMapMarkerAlt} size="lg" className="fontawesome" style={{paddingRight: "26px"}} />
                    <span className="contacts--texts">
                        1750 13th St, Boulder, CO 80302
                    </span>
                </div>
            </div>
            <div className="contacts--phone">
                <div className="contacts--phone--img">
                    <img src="/assets/contact-pic.png" alt="phone" />
                </div>
                <div className="contacts--phone--circle1" />
                <div className="contacts--phone--circle2" />
            </div>
        </div>
    )
}

export default Contact;