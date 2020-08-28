import React from 'react';

const Contact = () => {
    return (
        <div className="contacts">
            <span className="contacts--us">CONTACT US</span>
            <span className="contacts--title">Get In Touch</span>
            <span className="contacts--desc">
                Consectetur adipiscing elit, sed do eiusmod temport incididunt ut labore et dolor temprt incididunt ut labore dolore magna.
            </span>
            <div className="contacts--wrappers">
                <img src="/assets/call.png" alt="call" />
                <span>+1 878 878 7878</span>
            </div>
            <div className="contacts--wrappers">
                <img src="/assets/msg.png" alt="message" />
                <span>info@email.com</span>
            </div>
            <div className="contacts--wrappers">
                <img src="/assets/location.png" alt="location" />
                <span>
                    Нэст ахлах сургууль, Намъяанжүгийн гудамж 7а,
                    13р хороолол, 18-р хороо, Баянзүрх дүүрэг, Улаанбаатар хот
                </span>
            </div>
        </div>
    )
}

export default Contact;