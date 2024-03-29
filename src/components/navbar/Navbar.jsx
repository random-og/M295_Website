import React, { useState } from "react";
import "./navbar.css";
import { RiMenu3Line, RiCloseLine} from "react-icons/ri";
import logo from "../../assets/OIG.png"
import test from '../../file/Brendan-Demierre_Files.zip';
import {RiCloseFill} from "react-icons/ri";
import { SHA256 } from "crypto-js";


const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const [toggleLogin, setToggleLogin] = useState(false);
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
  
    const database = [
      {
        username: "admin",
        password: "87bf9996d5c320f3f3b18b6a2915ba1f8159c7f7b8ea469da336750bdd92d559"
      },

    ];
  
    const errors = {
      uname: "invalid username",
      pass: "invalid password"
    };
    
    const handleSubmit = (event) => {
      event.preventDefault();
      var width = window.innerWidth;
      
      if (width > 500) {
        var { uname, pass } = document.forms[0];
        var password = pass.value
      }
      else {
        var { uname, pass } = document.forms[1];
        var password = pass.value
      }
  
      const userData = database.find((user) => user.username === uname.value);

      let hashedPassword = SHA256(password).toString()

      if (userData) {
        if (userData.password !== hashedPassword) {
          setErrorMessages({ name: "pass", message: errors.pass });
        } else {
          setIsSubmitted(true);
        }
      } else {
        setErrorMessages({ name: "uname", message: errors.uname });
      }
    };
  
    const renderErrorMessage = (name) =>
      name === errorMessages.name && (
        <div className="bw__navbar-sign_container-input_error">{errorMessages.message}</div>
      );

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
                    <p><a href="#contact">Contact</a></p>
                </div>
            </div>
            <div className="bw__navbar-sign">
            {toggleLogin
                ? <button onClick={() => setToggleLogin(false)} type="button">Login</button>
                : <button onClick={() => setToggleLogin(true)} type="button">Login</button>
            }
            {toggleLogin && (
             <div className="bw__navbar-sign_container scale-up-center">
              <RiCloseFill className="bw__navbar-sign_container-close" size={27} onClick={() => setToggleLogin(false)}/>
                {isSubmitted ? 
                  <div>
                    <a
                      href={test}
                      download="Brendan-Demierre_Files"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <button>Download .zip file</button>
                  </a>
                </div>
                : 
                  <form onSubmit={handleSubmit}>
                    <div className="bw__navbar-sign_container-input">
                      <label>Username </label>
                      <input type="text" name="uname" required />
                      {renderErrorMessage("uname")}
                    </div>
                    <div className="bw__navbar-sign_container-input">
                      <label>Password </label>
                      <input type="password" name="pass" required />
                      {renderErrorMessage("pass")}
                    </div>
                    <div className="bw__navbar-sign_container-button">
                      <input type="submit" />
                    </div>
                </form>}
              </div>
            )}
                
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
                            {toggleLogin
                                ? <button onClick={() => setToggleLogin(false)} type="button">Login</button>
                                : <button onClick={() => setToggleLogin(true)} type="button">Login</button>
                            }
                            {toggleLogin && (
                            <div className="bw__navbar-menu_container-links-sign scale-up-center">
                              <RiCloseFill className="bw__navbar-menu_container-links-sign-close" size={27} onClick={() => setToggleLogin(false)}/>
                                {isSubmitted ? 
                                  <div>
                                    <a
                                      href={test}
                                      download="Brendan-Demierre_Files"
                                      target="_blank"
                                      rel="noreferrer"
                                    >
                                    <button>Download .zip file</button>
                                  </a>
                                </div>
                                : 
                                  <form onSubmit={handleSubmit}>
                                  <div className="bw__navbar-sign_container-input">
                                    <label>Username </label>
                                    <input type="text" name="uname" required />
                                    {renderErrorMessage("uname")}
                                  </div>
                                  <div className="bw__navbar-sign_container-input">
                                    <label>Password </label>
                                    <input type="password" name="pass" required />
                                    {renderErrorMessage("pass")}
                                  </div>
                                  <div className="bw__navbar-sign_container-button">
                                    <input type="submit" />
                                  </div>
                                </form>}
                              </div>
                            )}
                          </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Navbar