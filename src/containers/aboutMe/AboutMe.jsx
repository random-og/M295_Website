import React, {useState} from "react";
import "./aboutMe.css";
import me from "../../assets/WhatsApp_Video_2022-03-17_at_10.57_000.jpg"
import {RiArrowDownSLine, RiArrowUpSLine} from "react-icons/ri";

const AboutMe = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
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
                {toggleMenu
                    ? <RiArrowDownSLine color="#fff" size={27} onClick={() => setToggleMenu(false)}/>
                    : <RiArrowUpSLine color="#fff" size={27} onClick={() => setToggleMenu(true)}/>
                }
                {toggleMenu &&(
                    <div className="bw__aboutme-content_ext scale-up-ver-top">
                        <div className="bw__aboutme-content_ext-div">
                            <p>Brendan Demierre</p>
                            <p>Im Städtchen 7,</p>
                            <p>3235 Erlach</p>
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
                            <p>2011 - 2012 --- Ecole Primaire Vaulruz</p>
                            <p>2012 - 2017 --- Primarschule Erlach</p>
                            <p>2017 - 2020 --- Oberstufe Erlach</p>
                        </div>
                        <div className="bw__aboutme-content_ext-div">
                            <h4>Apprenticeship (Not done yet completed)</h4>
                            <p>2020 - 20.. --- BWD IMS Bern</p>
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