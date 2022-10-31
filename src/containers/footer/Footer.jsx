import React from "react";
import "./footer.css";
import logo from "../../assets/logos/logo_white.svg"

const Footer = () => {
    return (
        <div className="bw__footer section__padding">
            <div className="bw__footer-heading">
                <h1 className="gradient__text">Do you want to contact me?</h1>
            </div>
            <div className="bw__footer-btn">
                <p>Contact Me</p>
            </div>
            <div className="bw__footer-links">
                <div className="bw__footer-links_logo">
                    <img src={logo} alt="logo"/>
                    <p>Im Städtchen 7, 3235 Erlach</p>
                </div>
                <div className="bw__footer-links_div">
                    <h4>Social Medias</h4>
                    <p>Twitch</p>
                    <p>Twitter</p>
                    <p>Instagram</p>
                    <p>Youtube</p>
                </div>
                <div className="bw__footer-links_div">
                    <h4>Company</h4>
                    <p>Terms & Conditions</p>
                    <p>Privacy Policy</p>
                    <p>Contact</p>
                </div>
                <div className="bw__footer-links_div">
                    <h4>Get in touch</h4>
                    <p>Im Städtchen 7, 3235 Erlach</p>
                    <p>078 802 52 23</p>
                    <p>demierre.brendan@gmail.com</p>
                </div>
            </div>
            <div className="bw__footer-copyright">
                <p>© 2022 Brendan Demierre. All rights reserved</p>
            </div>
        </div>
    )
}

export default Footer