import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { useState } from 'react';
import { send } from 'emailjs-com';

const Contact = () => {

    const [toSend, setToSend] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (event) => {
        setToSend({ ...toSend, [event.target.name]: event.target.value })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        send(
            'service_xwqikrd',
            'template_6shhw9l',
            toSend,
            "rvAi4crKU09YPToat"
        ).then((res) => {
            console.log("Success!", res.status, res.text);
        }, (err) => {
            console.log("Failed.", err);
        })
    }
    return (
        <section>
            <div id="contactme"></div>
            <div id="contact-container">
                <div className="contact-title">
                    <h5 className="subtitle">stay in touch!</h5>
                </div>
                <div className="contact-grid">
                    <div className="contact-grid-top">
                        <div className="contact-grid-left">
                            <label for="message">message</label>
                            <textarea type="textarea" name="message" rows="12" cols="40" onChange={handleChange} />
                        </div>
                        <div className="contact-grid-right">
                            <div className="contact-grid-images">
                                <div className="postcard-image"></div>
                            </div>
                            <div className="contact-grid-info">
                                <label for="name">name</label>
                                <input type="text" name="name" id="name" onChange={handleChange} />
                                <label for="email">email</label>
                                <input type="text" name="email" id="email" onChange={handleChange} />
                            </div>
                        </div>
                    </div>
                    <div className="contact-grid-bottom">
                        <FontAwesomeIcon icon={faPaperPlane} onClick={handleSubmit} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;