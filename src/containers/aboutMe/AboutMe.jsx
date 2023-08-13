import React, {useState} from "react";
import "./aboutMe.css";
import avatar  from "../../assets/avatar.jpg"
import {RiArrowDownSLine, RiArrowUpSLine} from "react-icons/ri";

const AboutMe = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    return (
        <div className="bw__aboutme section__padding" id="aboutme">
            <div className="bw__aboutme-image">
                <img src={avatar} alt="Me"/>
            </div>
            <div className="bw__aboutme-content">
                <h4>Here a tiny part about me</h4>
                <h1 className="gradient__text">About Me</h1>
                <p>My name is Brendan Demierre and I'm in my 3rd year at IMS and I'm currently looking for an internship for my 4th year.</p>
                <h4>More about me</h4>
                {toggleMenu
                    ? <RiArrowDownSLine color="#fff" size={27} onClick={() => setToggleMenu(false)}/>
                    : <RiArrowUpSLine color="#fff" size={27} onClick={() => setToggleMenu(true)}/>
                }
                {toggleMenu &&(
                    <div className="bw__aboutme-content_ext scale-up-ver-top">
                        <div className="bw__aboutme-content_ext-div">
                            <p>Brendan Demierre</p>
                            <p>Zieglerstrasse 51,</p>
                            <p>3007 Bern</p>
                            <p>078 802 52 23</p>
                            <p>brendan.demierre@bwdbern.ch</p>
                        </div>
                        <div className="bw__aboutme-content_ext-div">
                            <h4>Personal data</h4>
                            <p>26 september 2004</p>
                            <p>St-Martin (FR), Swiss</p>
                        </div>
                        <div className="bw__aboutme-content_ext-div">
                            <h4>School</h4>
                            <p>2011 - 2012 --- Primary school (French) Vaulruz</p>
                            <p>2012 - 2017 --- Primary school (German) Erlach</p>
                            <p>2017 - 2020 --- Secondary school (German) Erlach</p>
                            <p>2020 - now --- IMS - Ecole d'informatique (German) Bern</p>
                        </div>
                        <div className="bw__aboutme-content_ext-div">
                            <h4>Apprenticeship (Not done yet completed)</h4>
                            <p>2020 - now --- BWD IMS Bern</p>
                            <p>Specification: Informatiker Applikationsentwickler EFZ</p>
                        </div>
                        <div className="bw__aboutme-content_ext-div">
                            <h4>Languages</h4>
                            <p>German --- Good knowledge</p>
                            <p>French --- Native language</p>
                            <p>Italian --- Good oral knowledge</p>
                            <p>English --- Good knowledge</p>
                        </div>
                        <div className="bw__aboutme-content_ext-div">
                            <h4>IT knowledge</h4>
                            <p>Programming languages --- C#, Java, Python, Bash, Ruby</p>
                            <p>Database --- MySQL</p>
                            <p>Website --- HTML, CSS, JS, PHP</p>
                        </div>
                        <div className="bw__aboutme-content_ext-div">
                            <h4>Anwender Kenntnisse</h4>
                            <p>Microsoft Office</p>
                            <p>Word, Excel, PowerPoint, Outlook, Teams</p>
                            <p>JetBrains suits</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default AboutMe