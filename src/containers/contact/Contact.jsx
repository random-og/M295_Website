import React, {useRef} from "react";
import emailjs from '@emailjs/browser';
import "./contact.css";

export const Contact = () => {
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_p7giqlq', 'template_bkijf0k', form.current, 'j-RH3lYPPB9oieQ5C')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        document.getElementById("form").reset();
    };

    return (
        <div className="bw__contact section__margin" id="contact">
            <div className="bw__contact-heading">
                <h1 className="gradient__text">Contact Form</h1>
                <p>We don't really know where this goes - and I'm not sure we really care. It just happens - whether or not you worried about it or tried to plan it. Paint anything you want on the canvas. Create your own world. Use what you see, don't plan it. Put it in, leave it alone.</p>
            </div>
            <form
                id="form"
                ref={form}
                onSubmit={sendEmail}
                className="bw__contact-form"
            >
                <div className="bw__contact-form-input">
                    <input
                        type="text"
                        placeholder="Your name"
                        name="user_name"
                        required
                    />
                </div>
                <div className="bw__contact-form-input">
                    <input
                        type="email"
                        placeholder="Email"
                        name="user_email"
                        required
                    />
                </div>
                <div className="bw__contact-form-input">
                    <textarea
                        placeholder="Your message"
                        name="message"
                        required
                    />
                </div>
                <div className="bw__contact-form-btn">
                    <button
                        type="submit"
                    >Send message</button>
                </div>
            </form>
        </div>
    );
};

export default Contact;