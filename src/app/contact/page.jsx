import Image from "next/image";
import "./Contact.css";

const Contact = () => {
    return (
        <div className="contact-container">
            <div className="contact-img">
                <Image src="/contact.png" fill/>
            </div>
            <div className="contact-form">
                <form action="" className="contact-form-form">
                    <input type="text" placeholder="Full Name" />
                    <input type="text" placeholder="Email address" />
                    <input type="text" placeholder="Phone Number (Optional)" />
                    <textarea name="" placeholder="Message" id="" cols="30" rows="10" />
                    <button>Send</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;