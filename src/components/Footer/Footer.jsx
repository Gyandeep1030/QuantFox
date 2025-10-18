import React from "react";
import styles from "./Footer.module.css";
import Quantfox from "../../assets/Quantfox.png"; // 👈 replace this path with your actual logo file

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.container}>
      {/* ---- Brand Section ---- */}
      <div className={styles.brand}>
        <div className={styles.logo}>
          <img src={Quantfox} alt="Quantfox LLP Logo" />
          <h2>Quantfox <span>LLP</span></h2>
        </div>
        <p>Your trusted partner in stock market analysis and insights.</p>
      </div>

      {/* ---- Quick Links ---- */}
      <div className={styles.links}>
        <h4>Quick Links</h4>
        <a href="#">Home</a>
        <a href="#">Markets</a>
        <a href="#">Portfolio</a>
        <a href="#">Premium</a>
      </div>

      {/* ---- Contact Info ---- */}
      <div className={styles.contact}>
        <h4>Contact Us</h4>
        <p>
          Email: <a href="mailto:quantfox7@gmail.com">quantfox7@gmail.com</a>
        </p>
        <p>
          Phone: <a href="tel:+919876543210">+91 98765 43210</a>
        </p>
        <p>Address: Noida, India</p>
      </div>
    </div>

    <div className={styles.bottomBar}>
      <p>© 2025 Quantfox LLP. All Rights Reserved.</p>
      <div className={styles.policyLinks}>
        <a href="#">Terms of Service</a>
        <a href="#">Privacy Policy</a>
      </div>
    </div>
  </footer>
);

export default Footer;
