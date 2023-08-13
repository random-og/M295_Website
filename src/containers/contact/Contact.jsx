import React, {useState} from "react";
import "./contact.css";

const FORM_ENDPOINT = "https://public.herotofu.com/v1/ff7d53c0-5ad9-11ed-b82c-5d75eaa7ccff";

const Contact = () => {
    const [submitted, setSubmitted] = useState(false);
    const handleSubmit = () => {
        setTimeout(() => {
            setSubmitted(true);
        }, 100);
    };

    if (submitted) {
        return (
            <>
                <div className="text-2xl">Thank you!</div>
                <div className="text-md">We'll be in touch soon.</div>
            </>
        );
    }

    return (
        <div className="bw__contact section__margin" id="contact">
            <div className="bw__contact-heading">
                <h1 className="gradient__text">Contact Form</h1>
                <p>We don't really know where this goes - and I'm not sure we really care. It just happens - whether or not you worried about it or tried to plan it. Paint anything you want on the canvas. Create your own world. Use what you see, don't plan it. Put it in, leave it alone.</p>
            </div>
            <form
                action={FORM_ENDPOINT}
                onSubmit={handleSubmit}
                method="POST"
                target="_blank"
                className="bw__contact-form"
            >
                <div className="bw__contact-form-input">
                    <input
                        type="text"
                        placeholder="Your name"
                        name="name"
                        required
                    />
                </div>
                <div className="bw__contact-form-input">
                    <input
                        type="email"
                        placeholder="Email"
                        name="email"
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
                    >
                        Send a message
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Contact;