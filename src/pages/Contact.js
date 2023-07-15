import React from "react";
import CTiger from "../Images/ctiger.webp";
import "../"

function Contact() {
    return (
        <section className="contact">
            <div className="leftSide" style={{backgroundImage: `url(${CTiger})`}}
            ></div>
            <div className="rightSide">
            <h1>Contact Us</h1>
                <form
                   id="contact-form"
                   action="index.html"
                   onSubmit="return validationForm()"
                   method="post"
                >
                <input
                    type="text"
                    className="contact-text"
                    placeholder="Your Full Name.."
                />
                <input
                    type="email"
                    className="contact-text"
                    placeholder="Your Email (someone@example.com)"
                />
  
                {/* <label htmlFor="trainer">Personal Trainer</label> */}
                <select id="trainer" name="personal trainer">
                    <option value="null">Choose Your Personal Trainer</option>
                    <option value="pt-1">Chris Bumstead</option>
                    <option value="pt-2">Elika Bang</option>
                    <option value="pt-3">Priscila Montoya</option>
                </select>
  
                <textarea 
                    className="contact-text" 
                    placeholder="Write something.."
                />
                <input type="submit" value="Submit"/>
                </form>
            </div>
        </section>
    );
}
export default Contact;