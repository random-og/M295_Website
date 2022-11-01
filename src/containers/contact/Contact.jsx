import React from "react";
import "./contact.css";

const Contact = () => {
    return (
        <div className="bw__contact section__margin" id="contact">
            <div className="bw__contact-heading">
                <h1 className="gradient__text">Don't hesitate to contact me</h1>
            </div>
            <div className="bw__contact-inputs">
                <form action="mailto:brendan.demierre@bwdbern.ch" method="POST">
                <div className="bw__contact-inputs_dropdown">
                    <label>Sex</label>
                    <select id="sex" name="sex">
                        <option value="" disabled selected hidden>Chose your sex</option>
                        <option value="male">male</option>
                        <option value="female">female</option>
                        <option value="divers">divers</option>
                    </select>
                </div>
            </form>
            </div>
        </div>
    )
}

export default Contact