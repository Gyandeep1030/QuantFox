import React from "react";
import styles from "./WhyChooseUs.module.css";

const WhyChooseUs = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.headingBlock}>
            <div className={styles.separator}></div>
            <h2>Why Choose Us</h2>
            <p className={styles.lead}>
              Transparency — At QuantFox LLP, we believe in transparent
              services rather than hiding anything.
            </p>
          </div>

          <div className={styles.cards}>
            {/* Card 1 */}
            <div
              className={`${styles.card} ${styles.cardPrimary}`}
              style={{
                backgroundImage:
                  "url('https://pridecons.com/assetsweb/images/upload/service-card-box-07.png')",
              }}
            >
              <div className={styles.cardHeader}>
                <i className="far fa-lightbulb"></i>
                <span>Innovation</span>
              </div>
              <div className={styles.cardBody}>
                <p>
                  Our team is always working on innovative ideas, researching
                  market trends, economic reforms, and staying updated with the
                  latest opportunities.
                </p>
                <a href="#" className={styles.moreLink}>
                  <i className="fas fa-long-arrow-alt-right"></i> More information
                </a>
              </div>
            </div>

            {/* Card 2 */}
            <div
              className={`${styles.card} ${styles.cardRed}`}
              style={{
                backgroundImage:
                  "url('https://pridecons.com/assetsweb/images/upload/service-card-box-08.png')",
              }}
            >
              <div className={styles.cardHeader}>
                <i className="fas fa-dollar-sign"></i>
                <span>Affordable Pricing</span>
              </div>
              <div className={styles.cardBody}>
                <p>
                  At QuantFox, you will get world-class financial insights and
                  services at affordable pricing.
                </p>
                <a href="#" className={styles.moreLink}>
                  <i className="fas fa-long-arrow-alt-right"></i> More information
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.right}>
          <img
            src="https://pridecons.com/assetsweb/images/upload/startup-why-us-img.png"
            alt="Why Choose Us"
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
