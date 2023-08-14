import React from "react";
import "./header.css";
import Typewriter from "./Typewriter";

import logo  from "../../assets/logos/logo_white_large.png"

const Header = () => {
    return (
        <div className="bw__header section__padding" id="home">
            <div className="bw__header-content">
                <h1 className="gradient__text">
                    <Typewriter text="Welcome on my personal Website." delay={300} infinite />
                </h1>
            </div>
            <div className="bw__header-img">
                <img src={logo} alt="logo"/>
            </div>
        </div>
    )
}

export default Header