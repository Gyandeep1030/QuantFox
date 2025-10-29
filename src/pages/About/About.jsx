import React from "react";
import styles from "./About.module.css";
import MissionSection from "../../components/MissionSection/MissionSection";
import TeamSection from "../../components/TeamSection/TeamSection";
import WhoWeAre from "../../components/WhoWeAre/WhoWeAre";
import Illustration from "../../assets/Image/Illustration-img.png"

import { GrCertificate } from "react-icons/gr";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaWallet } from "react-icons/fa";
const About = () => {
  return (
    <>
    <h1 className={styles.aboutH1}>About Quant<span>Fox</span></h1>
    <div className={styles.separator}></div>
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
                <FaPeopleGroup className={styles.iconMain}/>
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
                <GrCertificate className={styles.iconMain}/>
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
                <FaWallet className={styles.iconMain}/>
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
              src={Illustration}
              alt="Illustration"
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </section>

      <MissionSection />
      <TeamSection />
    </>
  );
};

export default About;
