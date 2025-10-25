import React from "react";
import styles from "./About.module.css";
import MissionSection from "../../components/MissionSection/MissionSection";
import TeamSection from "../../components/TeamSection/TeamSection";
const About = () => {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.content}>
          <h1>Empowering Your Financial Future</h1>
          <p>
            QuantFox is a smart investing platform that helps people make
            data-driven investment decisions and maximize their profits through
            advanced analytics and intelligent insights
          </p>
          <button>Explore Our Platform</button>
        </div>
      </section>
      <MissionSection />
      <TeamSection />
    </>
  );
};

export default About;
