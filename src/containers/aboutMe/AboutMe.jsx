import React from "react";
import "./aboutMe.css";
import me from "../../assets/WhatsApp_Video_2022-03-17_at_10.57_000.jpg"

const AboutMe = () => {
    return (
        <div className="bw__aboutme section__padding" id="aboutme">
            <div className="bw__aboutme-image">
                <img src={me} alt="Me"/>
            </div>
            <div className="bw__aboutme-content">
                <h4>Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla...</h4>
                <h1 className="gradient__text">About Me</h1>
                <p>This is a fantastic little painting. Sometimes you learn more from your mistakes than you do from your masterpieces. We'll put a happy little sky in here. Use what you see, don't plan it. If there's two big trees invariably sooner or later there's gonna be a little tree. And maybe a little bush lives there. Tree trunks grow however makes them happy.</p>
                <h4>More about me</h4>
            </div>
        </div>
    )
}

export default AboutMe