import React from 'react';
import { useHistory } from 'react-router-dom'

const Footer = () => {

    const history = useHistory()

    const goHome = (section) => {
        history.push(`/?section=${section}`);
        console.log(section)
    }

    return (
        <div className="footer" id="footer-section">
            <div className="footer--column">
                <div className="footer--column--wrapper">
                    <div className="footer--column--logo">
                        <img
                            onClick={() => {
                                window.location = "/";
                            }}
                            src="/assets/local-it-logo.png" alt="footer-logo" />
                    </div>
                    <p className="footer--text1">
                        Professionally seize cross functional meta-services rather than sticky relationships. Quickly reintermediate worldwide.
                    </p>
                    <p classname="footer--text2">
                        All Right Reserved by Infinite Solutions Copyright ©2020
                    </p>
                </div>
            </div>
            <div className="footer--row">
                <div className="footer--row--column">
                    <ul>
                        <li><span className="footer--column--title">Useful Links</span></li>
                        <li onClick={() => goHome("start-section")}>Home</li>
                        <li onClick={() => goHome("theapp-section")}>The App</li>
                        <li onClick={() => goHome("local-section")}>Are you a Local Business?</li>
                        <li onClick={() => goHome("whoweare-section")}>Who we are?</li>
                    </ul>
                </div>
                <div className="footer--row--column">
                    <ul>
                        <li><span className="footer--column--title">Need Help?</span></li>
                        <li>Faqs</li>
                        <li>Privacy</li>
                        <li>Policy</li>
                        <li>Support</li>
                        <li>Terms</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer;