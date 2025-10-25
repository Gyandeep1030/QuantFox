import React from "react";
import styles from "./WhoWeAre.module.css";
import { Link } from "react-router-dom";
import AboutUs from "../../assets/Image/startup-about-us-01.svg";

const WhoWeAre = () => {
  return (
    <section className={styles.aboutus_section}>
      <div className={styles.container}>
        <div className={styles.row}>
          {/* Left Image */}
          <div className={styles.imageWrapper}>
            <img src={AboutUs} alt="About Us" className={styles.image} />
          </div>

          {/* Right Content */}
          <div className={styles.contentWrapper}>
            <div className={styles.contentInner}>
              
              <h2 className={styles.title}>Who We Are</h2>
              <div className={styles.separator}></div>
              <p className={styles.description}>
                QuantFox LLP Pvt. Ltd. is a firm dedicated to empowering traders
                and investors through fair, data-driven, and insightful
                financial recommendations. As a trusted name in the share
                trading and investment consultancy space, we specialize in
                research and analysis of the Indian capital markets, driven
                primarily by advanced Technical Analysis and quantitative
                strategies.
                <br />
                <br />
                Our team comprises skilled and experienced market analysts
                committed to helping clients make well-informed and confident
                investment decisions. Through our stock market research and
                advisory services, we aim to bring precision, transparency, and
                consistency to every trade.
                <br />
                <br />
                QuantFox continues to grow under the visionary leadership of{" "}
                <strong>Mr. Sameer</strong>, our{" "}
                <strong>Founder and CEO</strong>, who upholds the values of
                compliance, integrity, and excellence across every aspect of our
                operations.
              </p>
              <Link to="/about" className={styles.btn}>
                More About Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
