import React from "react";
import styles from "./WhoWeAre.module.css";
import { Link } from "react-router-dom";

const WhoWeAre = () => {
  return (
    <section className={styles.aboutus_section}>
      <div className={styles.container}>
        <div className={styles.row}>
          {/* Left Image */}
          <div className={styles.imageWrapper}>
            <img
              src="https://pridecons.com/assetsweb/images/upload/startup-about-us-01.jpg"
              alt="About Us"
              className={styles.image}
            />
          </div>

          {/* Right Content */}
          <div className={styles.contentWrapper}>
            <div className={styles.contentInner}>
              <div className={styles.separator}></div>
              <h2 className={styles.title}>Who We Are</h2>
              <p className={styles.description}>
                Pride Trading Consultancy Pvt. Ltd. is a possibilities committed
                to making fair, holistic, and financial recommendations accessible
                to all traders and investors. As a trusted share trading consultant,
                we are one of the few organizations providing research and information
                on Indian capital markets, primarily based on Technical Analysis,
                and we enjoy a strong reputation among investors, brokers, and researchers.
                <br />
                <br />
                Our team is skilled, with experienced analysts dedicated to helping
                clients make informed investment decisions. Through our stock market
                investment consultancy services, we strive for excellence in every trade.
                We have been operating in this industry for the past seven years, under
                the leadership of <strong>Ms. Apeksha Bansal</strong>, the founder of our
                company and a <strong>SEBI Registered Research Analyst</strong>.
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
