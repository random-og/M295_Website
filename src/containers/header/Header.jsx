import React from "react";
import "./header.css";
import logo  from "../../assets/logos/logo_white_large.png"
import people  from "../../assets/people.png"

const Header = () => {
    return (
        <div className="gpt3__header section__padding" id="home">
            <div className="gpt3__header-content">
                <h1 className="gradient__text">Hello my name is Brendan and welcome to my personal website</h1>
                <p>Maybe there's a happy little Evergreen that lives here. Here we're limited by the time we have. Sometimes you learn more from your mistakes than you do from your masterpieces. This is a happy place, little squirrels live here and play. Just make a decision and let it go. When things happen - enjoy them. They're little gifts.</p>
                <div className="gpt3__header-content__input">
                    <input type="email" placeholder="Your Email Address"/>
                    <button type="button">Contact Me</button>
                </div>
                <div className="gpt3__header-content__people">
                    <img src={people} alt="people"/>
                    <p>More than 1'600 people visited this website in the last 24 hours</p>
                </div>
            </div>
            <div className="gpt3__header-img">
                <img src={logo} alt="logo"/>
            </div>
        </div>
    )
}

export default Header