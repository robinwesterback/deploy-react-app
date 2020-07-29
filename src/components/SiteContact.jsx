import React from "react";

export default function SiteContact() {
  return (
    <form>
      <label htmlFor="name">
        Name:
        <input type="text" id="name" name="name" required />
      </label>

      <label htmlFor="company">
        Company:
        <input type="text" id="company" name="company" />
      </label>

      <label htmlFor="email">
        E-mail:
        <input type="email" id="email" name="email" required />
      </label>

      <label htmlFor="phone">
        Phone:
        <input type="number" id="phone" name="phone" />
      </label>

      <label htmlFor="message">
        Message:
        <textarea id="message" name="message" required />
      </label>

      <button type="submit">Send</button>
    </form>
  );
}