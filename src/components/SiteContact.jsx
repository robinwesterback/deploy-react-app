import React from "react";
import emailjs from 'emailjs-com';

export default function SiteContact() {

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('gmail', 'ROI Calculator', e.target, 'user_Txaw7fq4E3HUJKaPGauXW')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }

  return (
    <form onSubmit={sendEmail}>
      <label htmlFor="user_name">
        Name:
        <input type="text" id="user_name" name="user_name" required />
      </label>

      <label htmlFor="user_company">
        Company:
        <input type="text" id="user_company" name="user_company" />
      </label>

      <label htmlFor="user_email">
        E-mail:
        <input type="email" id="user_email" name="user_email" required />
      </label>

      <label htmlFor="user_phone">
        Phone:
        <input type="number" id="user_phone" name="user_phone" />
      </label>

      <label htmlFor="user_message">
        Message:
        <textarea id="user_message" name="user_message" required />
      </label>

      <button type="submit">Send</button>
    </form>
  );
}