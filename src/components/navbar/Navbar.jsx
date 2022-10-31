import React, { useState } from "react";
import "./navbar.css";
import { RiMenu3Line, RiCloseLine} from "react-icons/ri";
import logo from "../../assets/logos/logo_white.svg"


const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    return (
        <div className="bw__navbar">
            <div className="bw__navbar-links">
                <div className="bw__navbar-links_logo">
                    <img src={logo} alt={logo}/>
                </div>
                <div className="bw__navbar-links_container">
                    <p><a href="#home">Home</a></p>
                    <p><a href="#aboutme">About me</a></p>
                    <p><a href="#projects">Projects</a></p>
                    <p><a href="#hobbies">Hobbies</a></p>
                    <p><a href="#blog">Contact</a></p>
                </div>
            </div>
            <div className="bw__navbar-sign">
                <p>Sign in</p>
                <button type="button">Sign up</button>
            </div>
            <div className="bw__navbar-menu">
                {toggleMenu
                ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)}/>
                : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)}/>
                }
                {toggleMenu &&(
                    <div className="bw__navbar-menu_container scale-up-center">
                        <div className="bw__navbar-menu_container-links">
                            <p><a href="#home">Home</a></p>
                            <p><a href="#aboutme">About me</a></p>
                            <p><a href="#projects">Projects</a></p>
                            <p><a href="#hobbies">Hobbies</a></p>
                            <p><a href="#blog">Contact</a></p>
                            <div className="bw__navbar-menu_container-links-sign">
                                <p>Sign in</p>
                                <button type="button">Sign up</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Navbar