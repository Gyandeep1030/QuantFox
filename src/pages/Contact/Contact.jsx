import React, { useState } from "react";
import styles from "./Contact.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import FloatingContact from "../../components/FloatingContact/FloatingContact";
import { FaHome } from "react-icons/fa";

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
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
      {/* Header */}
      <div className={styles.headerContainer}>
        <p className={styles.title}>Contact QuantFox LLP</p>
        <div className={styles.separator}></div>
        <p className={styles.subtitle}>
          We’d love to hear from you! Please fill out the form below or reach us
          through any of the methods listed.
        </p>
      </div>

      {/* Grid Layout */}
      <div className={styles.gridContainer}>
        {/* Left Column */}
        <div className={styles.leftColumn}>
          <h2 className={styles.sectionHeading}>Get in Touch Directly</h2>
          <div className={styles.linksContainer}>
            {/* Email */}
            <a className={styles.contactLink} href="mailto:quantfox7@gmail.com">
              <div className={styles.linkContent}>
                <div className={styles.iconWrapper}>
                  <FontAwesomeIcon icon={faEnvelope} size="lg" />
                </div>
                <p className={styles.contactText}>quantfox7@gmail.com</p>
              </div>
              <button className={styles.linkButton}>Email</button>
            </a>

            {/* Phone Numbers */}
            <a className={styles.contactLink} href="tel:+919311728534">
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
                <p className={styles.contactText}>+91 96548 25156</p>
              </div>
              <button className={styles.linkButton}>Call</button>
            </a>

            {/* Social Links */}
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

            {/* Address Section */}
            <section className={styles.addressSection}>
              <div className={styles.addressHeader}>
                <FaHome className={styles.homeIcon} />
                <p className={styles.addressHeading}>Address</p>
              </div>

              <div className={styles.addressContainer}>
                <div className={styles.addressRow}>
                  <span className={styles.label}>Address Line:</span>
                  <span className={styles.value}>
                    123, Quantum Tower, Sector 62
                  </span>
                </div>

                <div className={styles.addressRow}>
                  <span className={styles.label}>City:</span>
                  <span className={styles.value}>Noida</span>
                </div>

                <div className={styles.addressRow}>
                  <span className={styles.label}>State:</span>
                  <span className={styles.value}>Uttar Pradesh</span>
                </div>

                <div className={styles.addressRow}>
                  <span className={styles.label}>Pincode:</span>
                  <span className={styles.value}>201301</span>
                </div>
              </div>
            </section>
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
                placeholder="+91 98765 43210"
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
              Send Message
            </button>
          </form>
        </div>
      </div>

      <FloatingContact />
    </section>
  );
};

export default Contact;
