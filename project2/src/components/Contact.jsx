import Phone from "../assets/phone-icon.png" 
import MailTo from "../assets/mail-icon.png" 

export default function Contact({img, name, number, email}) {

    return (
        <article className="contact-card">
                <img 
                    src={img}
                    alt="Photo of Mr. Whiskerson"
                />
                <h3>{name}</h3>
                <div className="info-group">
                    <img 
                        src={Phone}
                        alt="phone icon" 
                    />
                    <p>{number}</p>
                </div>
                <div className="info-group">
                    <img 
                        src={MailTo}
                        alt="mail icon"
                    />
                    <p>{email}</p>
                </div>
        </article>
    )
}