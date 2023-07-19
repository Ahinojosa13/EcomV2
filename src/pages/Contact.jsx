import React, { useState } from "react";
import CTiger from "../Images/ctiger.webp";


function Contact() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [personalTrainer, setPersonalTrainer] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length === 0) {
      // Form is valid, perform submission or API call here
      console.log("Form submitted:", {
        fullName,
        email,
        personalTrainer,
        message,
      });

      // Reset form fields
      setFullName("");
      setEmail("");
      setPersonalTrainer("");
      setMessage("");
      setErrors({});
    } else {
      // Form has errors, update the errors state
      setErrors(validationErrors);
    }
  };

  const validateForm = () => {
    const errors = {};

    if (!fullName.trim()) {
      errors.fullName = "Full Name is required";
    }

    if (!email.trim()) {
      errors.email = "Email is required";
    }

    if (!personalTrainer) {
      errors.personalTrainer = "Please choose a personal trainer";
    }

    if (!message.trim()) {
      errors.message = "Message is required";
    }

    return errors;
  };
    return (
        <section className="contact">
            <div className="leftSide" style={{backgroundImage: `url(${CTiger})`}}/>
            <div className="rightSide">
            <h1>Contact Us</h1>
                <form
                   id="contact-form"
                   onSubmit={handleSubmit}
                >
                <input
                    type="text"
                    className="contact-text"
                    placeholder="Your Full Name.."
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                />
                {errors.fullName && <span className="error">{errors.fullName}</span>}
                <input
                    type="email"
                    className="contact-text"
                    placeholder="Your Email (someone@example.com)"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && <span className="error">{errors.email}</span>}

                {/* <label htmlFor="trainer">Personal Trainer</label> */}
                <select 
                    id="trainer" 
                    name="personal trainer" 
                    value={personalTrainer}
                    onChange={(e) => setPersonalTrainer(e.target.value)}
                >   
                    <option value="null">Choose Your Personal Trainer</option>
                    <option value="pt-1">Chris Bumstead</option>
                    <option value="pt-2">Elika Bang</option>
                    <option value="pt-3">Priscila Montoya</option>
                </select>
                {errors.personalTrainer && <span className="error">{errors.personalTrainer}</span>}
  
                <textarea 
                    className="contact-text" 
                    placeholder="Write something.."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                  {errors.message && <span className="error">{errors.message}</span>}
        
                <input type="submit" value="Submit"/>
                </form>
            </div>
        </section>
    );
}
export default Contact;