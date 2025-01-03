import Whiskerson from "../assets/mr-whiskerson.png"
import Phone from "../assets/phone-icon.png" 
import MailTo from "../assets/mail-icon.png" 

export default function Contact() {
    return (
        <article className="contact-card">
                <img 
                    src={Whiskerson}
                    alt="Photo of Mr. Whiskerson"
                />
                <h3>Mr. Whiskerson</h3>
                <div className="info-group">
                    <img 
                        src={Phone}
                        alt="phone icon" 
                    />
                    <p>(212) 555-1234</p>
                </div>
                <div className="info-group">
                    <img 
                        src={MailTo}
                        alt="mail icon"
                    />
                    <p>mr.whiskaz@catnap.meow</p>
                </div>
        </article>
    )
}