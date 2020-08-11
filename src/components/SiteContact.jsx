import React, { useState } from "react";
import emailjs from 'emailjs-com';

export default function SiteContact() {
  const [emailValidation, setEmailValidation] = useState()  
  
  // sendEmail Allows the user to send Email with emailjs 
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('gmail', 'ROI Calculator', e.target, 'user_Txaw7fq4E3HUJKaPGauXW')
      .then((result) => {
        console.log(result.text)
        setEmailValidation(`Email Successfully Sent`);
      }, (error) => {
        console.log(error.text)
        setEmailValidation(`Email Failed to Send`)
        document.getElementById('email.message').className = "input-error-message";
      }
    );
  }

  return (
    <form onSubmit={sendEmail}>
      <label htmlFor="user_name">
        Name:
        <input type="text" id="user_name" name="user_name" maxLength="25" required />
      </label>

      <label htmlFor="user_company">
        Company:
        <input type="text" id="user_company" name="user_company" maxLength="25" />
      </label>

      <label htmlFor="user_email">
        E-mail:
        <input type="email" id="user_email" name="user_email" maxLength="40" required />
      </label>

      <label htmlFor="user_phone">
        Phone:
        <input type="number" id="user_phone" name="user_phone" maxLength="25" />
      </label>

      <label htmlFor="user_message">
        Message:
        <textarea id="user_message" name="user_message" maxLength="120" required />
      </label>

      <button type="submit">Send</button>
    
      <span id="email-message" className="input-success-message">{emailValidation}</span>
  
    </form>
  );
}