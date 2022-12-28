import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";

const Contact = () => {
    return (
        <section>
            <div id="contact-container">
                <div className="contact-title">
                    <h5 className="subtitle">stay in touch!</h5>
                </div>
                <div className="contact-grid">
                    <div className="contact-grid-top">
                        <div className="contact-grid-left">
                            <label for="message">message</label>
                            <textarea type="textarea" rows="12" cols="40" />
                        </div>
                        <div className="contact-grid-right">
                            <div className="contact-grid-images">
                                <div className="postcard-image"></div>
                            </div>
                            <div className="contact-grid-info">
                                <label for="name">name</label>
                                <input type="text" name="name" id="name" />
                                <label for="email">email</label>
                                <input type="text" name="email" id="email" />
                            </div>
                        </div>
                    </div>
                    <div className="contact-grid-bottom">
                        <FontAwesomeIcon icon={faPaperPlane} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;