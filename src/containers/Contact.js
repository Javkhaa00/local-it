import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faPhoneAlt,
    faEnvelope,
    faMapMarkerAlt
} from '@fortawesome/free-solid-svg-icons'

const Contact = () => {
    return (
        <div className="contacts">
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
                    <FontAwesomeIcon icon={faMapMarkerAlt} size="lg" className="fontawesome" />
                    <span className="contacts--texts">
                        Нэст ахлах сургууль, Намъяанжүгийн гудамж 7а,
                        13р хороолол, 18-р хороо, Баянзүрх дүүрэг, Улаанбаатар хот
                    </span>
                </div>
            </div>
            <div className="contacts--phone">
                <div>
                    <img src="/assets/contact-pic.png" alt="phone" />
                </div>
            </div>
        </div>
    )
}

export default Contact;