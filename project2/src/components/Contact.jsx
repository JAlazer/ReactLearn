import Phone from "../assets/phone-icon.png" 
import MailTo from "../assets/mail-icon.png" 

export default function Contact(props) {
    let image = props.img
    let name = props.name
    let phoneNumber = props.number 
    let email = props.email

    return (
        <article className="contact-card">
                <img 
                    src={image}
                    alt="Photo of Mr. Whiskerson"
                />
                <h3>{name}</h3>
                <div className="info-group">
                    <img 
                        src={Phone}
                        alt="phone icon" 
                    />
                    <p>{phoneNumber}</p>
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