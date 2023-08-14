import React, { useState } from "react";
import "./navbar.css";
import { RiMenu3Line, RiCloseLine} from "react-icons/ri";
import logo from "../../assets/logos/logo_white.svg"
import test from '../../file/Brendan-Demierre_Files.zip';
import {RiCloseFill} from "react-icons/ri";
import { DisplaySettings } from "@mui/icons-material";


const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const [toggleLogin, setToggleLogin] = useState(false);
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
  
    // User Login info
    const database = [
      {
        username: "admin",
        password: "sml12345-"
      },

    ];
  
    const errors = {
      uname: "invalid username",
      pass: "invalid password"
    };
  
    const handleSubmit = (event) => {
      //Prevent page reload
      event.preventDefault();
      var width = window.innerWidth;
      
      if (width > 500) {
        var { uname, pass } = document.forms[0];
      }
      else {
        var { uname, pass } = document.forms[1];
      }
  
      // Find user login info
      const userData = database.find((user) => user.username === uname.value);
  
      // Compare user info
      if (userData) {
        if (userData.password !== pass.value) {
          // Invalid password
          setErrorMessages({ name: "pass", message: errors.pass });
        } else {
          setIsSubmitted(true);
        }
      } else {
        // Username not found
        setErrorMessages({ name: "uname", message: errors.uname });
      }
    };
  
    // Generate JSX code for error message
    const renderErrorMessage = (name) =>
      name === errorMessages.name && (
        <div className="error">{errorMessages.message}</div>
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
                  <div className="input-container">
                    <label>Username </label>
                    <input type="text" name="uname" required />
                    {renderErrorMessage("uname")}
                  </div>
                  <div className="input-container">
                    <label>Password </label>
                    <input type="password" name="pass" required />
                    {renderErrorMessage("pass")}
                  </div>
                  <div className="button-container">
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
                                <div className="input-container">
                                  <label>Username </label>
                                  <input type="text" name="uname" required />
                                  {renderErrorMessage("uname")}
                                </div>
                                <div className="input-container">
                                  <label>Password </label>
                                  <input type="password" name="pass" required />
                                  {renderErrorMessage("pass")}
                                </div>
                                <div className="button-container">
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