import React from "react";
import "./header.css";
import Typewriter from "./Typewriter";

import logo  from "../../assets/OIG.png"

const Header = () => {
    return (
        <div className="bw__header section__padding" id="home">
            <div className="bw__header-content">
                <h1 className="gradient__text">
                    <Typewriter className="unselectable" text="Welcome on my personal Website." delay={300} infinite/>
                </h1>
            </div>
        </div>
    )
}

export default Header