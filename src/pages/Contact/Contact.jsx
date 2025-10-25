import React, { useState } from "react";
import styles from "./Contact.module.css";

// Font Awesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);

    // Example: send form data to backend or email API
    alert("Message sent successfully!");

    setFormData({
      fullName: "",
      email: "",
      phone: "",
      address: "",
      message: "",
    });
  };

  return (
    <section className={styles.contactSection}>
      <div className={styles.headerContainer}>
        <div className={styles.headerText}>
          <p className={styles.title}>Contact QuantFox - LLP</p>
          <p className={styles.subtitle}>
            We'd love to hear from you. Please fill out the form below or
            contact us using the information provided.
          </p>
        </div>
      </div>

      <div className={styles.gridContainer}>
        {/* Left Column */}
        <div className={styles.leftColumn}>
          <h2 className={styles.sectionHeading}>Get in Touch Directly</h2>
          <div className={styles.linksContainer}>
            <a className={styles.contactLink} href="mailto:quantfox7@gmail.com">
              <div className={styles.linkContent}>
                <div className={styles.iconWrapper}>
                  <FontAwesomeIcon icon={faEnvelope} size="lg" />
                </div>
                <p className={styles.contactText}>quantfox7@gmail.com</p>
              </div>
              <button className={styles.linkButton}>Email</button>
            </a>

            <a className={styles.contactLink} href="tel:+91 93117 28534">
              <div className={styles.linkContent}>
                <div className={styles.iconWrapper}>
                  <FontAwesomeIcon icon={faPhone} size="lg" />
                </div>
                <p className={styles.contactText}>+91 93117 28534</p>
              </div>
              <button className={styles.linkButton}>Call</button>
            </a>
            <a className={styles.contactLink} href="tel:+919654825156">
              <div className={styles.linkContent}>
                <div className={styles.iconWrapper}>
                  <FontAwesomeIcon icon={faPhone} size="lg" />
                </div>
                <p className={styles.contactText}>+919654825156</p>
              </div>
              <button className={styles.linkButton}>Call</button>
            </a>

            <a
              className={styles.contactLink}
              href="https://www.facebook.com/profile.php?id=61582559970439"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={styles.linkContent}>
                <div className={styles.iconWrapper}>
                  <FontAwesomeIcon icon={faFacebook} size="lg" />
                </div>
                <p className={styles.contactText}>Facebook</p>
              </div>
              <button className={styles.linkButton}>Visit</button>
            </a>

            <a
              className={styles.contactLink}
              href="https://www.instagram.com/quantfoxllp/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={styles.linkContent}>
                <div className={styles.iconWrapper}>
                  <FontAwesomeIcon icon={faInstagram} size="lg" />
                </div>
                <p className={styles.contactText}>Instagram</p>
              </div>
              <button className={styles.linkButton}>Follow</button>
            </a>
          </div>
        </div>

        {/* Right Column */}
        <div className={styles.rightColumn}>
          <h2 className={styles.sectionHeading}>Send Us a Message</h2>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="fullName">Full Name</label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                placeholder="John Doe"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="phone">Phone Number</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+1 (555) 987-6543"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="address">Address</label>
              <input
                id="address"
                name="address"
                type="text"
                placeholder="123 Main St, City, Country"
                value={formData.address}
                onChange={handleChange}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Write your message here..."
                rows="4"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>

            <button type="submit" className={styles.submitButton}>
              <span>Send Message</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
