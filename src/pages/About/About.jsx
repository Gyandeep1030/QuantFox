import React from "react";
import styles from "./About.module.css";
import MissionSection from "../../components/MissionSection/MissionSection";
import TeamSection from "../../components/TeamSection/TeamSection";
import WhoWeAre from "../../components/WhoWeAre/WhoWeAre";
import FloatingContact from "../../components/FloatingContact/FloatingContact";
const About = () => {
  return (
    <>
    <h1 className={styles.aboutH1}>About QuantFox</h1>
      <section className={styles.hero}>
        <div className={styles.content}>
          
          <h2>Empowering Your Financial Future</h2>
          <p>
            QuantFox is a smart investing platform that helps people make
            data-driven investment decisions and maximize their profits through
            advanced analytics and intelligent insights
          </p>
          <button>Explore Our Platform</button>
        </div>
      </section>
      <WhoWeAre/>

      <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.row}>
          {/* Left Content */}
          <div className={styles.left}>
            <h2 className={styles.title}>Why Choose Us</h2>

            <div className={styles.iconInfo}>
              <div className={styles.icon}>
                <img
                  src="https://pridecons.com/assetsweb/images/upload/benefit-icon-10.svg"
                  alt="Professional Liability"
                />
              </div>
              <div className={styles.text}>
                <h5>Professional Liability</h5>
                <p>
                  Pride Trading is fully committed to making fair, holistic, and
                  top-quality financial recommendations.
                </p>
              </div>
            </div>

            <div className={styles.iconInfo}>
              <div className={styles.icon}>
                <img
                  src="https://pridecons.com/assetsweb/images/upload/benefit-icon-11.svg"
                  alt="Trustworthy Company"
                />
              </div>
              <div className={styles.text}>
                <h5>Trustworthy Company</h5>
                <p>
                  Pride Trading is the fastest growing firm with diligent effort,
                  acknowledged industry leadership, and deep experience.
                </p>
              </div>
            </div>

            <div className={styles.iconInfo}>
              <div className={styles.icon}>
                <img
                  src="https://pridecons.com/assetsweb/images/upload/benefit-icon-12.svg"
                  alt="Affordable Price"
                />
              </div>
              <div className={styles.text}>
                <h5>Affordable Price</h5>
                <p>
                  At Pride Trading, you will get desired services at affordable
                  prices.
                </p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className={styles.right}>
            <img
              src="https://pridecons.com/assetsweb/images/upload/vector-art-2.png"
              alt="Illustration"
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </section>

      <MissionSection />
      <TeamSection />
      <FloatingContact/>
    </>
  );
};

export default About;
