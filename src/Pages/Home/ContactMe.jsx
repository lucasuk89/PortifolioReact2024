import React, { useState } from "react";

export default function ContactMe() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    topic: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://www.lucasfmdev.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Your email has been sent");
        alert("Your email has been sent");
      } else {
        console.error("Erro ao enviar email");
        alert("An error occurred while sending your email");
      }
    } catch (error) {
      console.error("Erro ao enviar o email", error);
      alert("An error occurred while sending your email");
    }
  };

  return (
    <section id="Contact" className="contact--section">
      <div className="sub--title">
        <p className="sub-title">Get in Touch</p>
        <h2>Contact Me</h2>
        <p className="text-lg">
          If you'd like to discuss further, please don't hesitate to get in
          touch.
        </p>
      </div>
      <form className="contact--form--container" onSubmit={handleSubmit}>
        <div className="container">
          <label htmlFor="first-name" className="contact--label">
            <span className="text-md">First Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="firstName"
              id="first-name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </label>
          <label htmlFor="last-name" className="contact--label">
            <span className="text-md">Last Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="lastName"
              id="last-name"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </label>
          <label htmlFor="email" className="contact--label">
            <span className="text-md">Email</span>
            <input
              type="email"
              className="contact--input text-md"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
          <label htmlFor="phone-number" className="contact--label">
            <span className="text-md">Phone Number</span>
            <input
              type="tel"
              className="contact--input text-md"
              name="phoneNumber"
              id="phone-number"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
          </label>
          <label htmlFor="choose-topic" className="contact--label">
            <span className="text-md">Choose a topic</span>
            <select
              id="choose-topic"
              className="contact--input text-md"
              name="topic"
              value={formData.topic}
              onChange={handleChange}
              required
            >
              <option value="">Select One...</option>
              <option value="Front-End">Front-End</option>
              <option value="Back-End">Back-End</option>
              <option value="Design Ux/Ui">Design Ux/Ui</option>
            </select>
          </label>
          <label htmlFor="message" className="contact--label">
            <span className="text-md">Message</span>
            <textarea
              className="contact--input text-md"
              id="message"
              rows="8"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Type your message..."
            />
          </label>
          <label htmlFor="checkbox" className="checkbox--label">
            <input
              type="checkbox"
              required
              name="checkbox"
              id="checkbox"
              onChange={handleChange}
            />
            <span className="text-sm">I accept the terms</span>
          </label>
          <button
            type="submit"
            className="btn btn-primary contact--form--btn"
            //onClick={() => alert("Thanks for contact me")}
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}
