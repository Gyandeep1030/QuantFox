import React from "react";
import styles from "./Footer.module.css";
import Quantfox from "../../assets/Quantfox.png";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp   } from "react-icons/fa";

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.container}>
      {/* ---- Brand Section ---- */}
      <div className={styles.brand}>
        <div className={styles.logo}>
          <img src={Quantfox} alt="Quantfox LLP Logo" />
          <h2>
            Quant<span>Fox</span>
          </h2>
        </div>
        <p>
          Your trusted partner in stock market analysis and financial insights.
        </p>
        <div className={styles.socials}>
          <a href="https://www.facebook.com/profile.php?id=61582559970439" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
            <FaFacebookF />
          </a>
          <a href="https://www.instagram.com/quantfoxllp/" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="#" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn />
          </a>
          <a href="#" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp />
          </a>
        </div>
      </div>

      {/* ---- Quick Links ---- */}
      <div className={styles.links}>
        <h4>Quick Links</h4>
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/plans">Plans</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>

      {/* ---- Services ---- */}
      <div className={styles.services}>
        <h4>Our Services</h4>
        <p>Research Analyst</p>
        <p>Risk Management</p>
        <p>Financial Planning</p>
        <p>Stock Recommendations</p>
      </div>

      {/* ---- Contact Info ---- */}
      <div className={styles.contact}>
        <h4>Contact Us</h4>
        <p>
          Email: <a href="mailto:quantfox7@gmail.com">quantfox7@gmail.com</a>
        </p>
        <p>
          Phone:{" "}
          <a href="tel:+919654825156">+91 96548 25156</a>,{" "}
          <a href="tel:+919311728534">+91 93117 28534</a>
        </p>
        <p>
          Address: <br />
          9, Kotla Vihar Phase II <br />
          New Delhi - 110043, India
        </p>
      </div>
    </div>

    {/* ---- Disclaimer ---- */}
    <div className={styles.disclaimer}>
      <p>
        Our past performance does not guarantee future performance. Investment in markets
        is subject to market risks. Despite all efforts for best research, clients should
        understand that investing in the market involves a risk of loss of both income and
        principal. Please ensure that you fully understand the risks involved before
        investing.
      </p>
    </div>

    {/* ---- Bottom Bar ---- */}
    <div className={styles.bottomBar}>
      <p>© 2025 QuantFox. All Rights Reserved.</p>
      <div className={styles.policyLinks}>
        <a href="#">Terms of Service</a>
        <a href="#">Privacy Policy</a>
      </div>
      <p>Design By ❤️ <strong>Quantfox</strong></p>
    </div>
  </footer>
);

export default Footer;
