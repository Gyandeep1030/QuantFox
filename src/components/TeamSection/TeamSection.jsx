import React from "react";
import styles from "./TeamSection.module.css";
// import ceo from "../../assets/ceo.jpg";
// import cto from "../../assets/cto.jpg";
// import analyst from "../../assets/analyst.jpg";

const TeamSection = () => {
  return (
    <section className={styles.team}>
      <h2>Meet Our <span>Team</span></h2>

      <div className={styles.members}>
        <div className={styles.card}>
          {/* <img src={ceo} alt="CEO" /> */}
          <h3>Sameer</h3>
          <p>CEO & Founder</p>
        </div>

        <div className={styles.card}>
          {/* <img src={cto} alt="CTO" /> */}
          <h3>Tanmay kumar</h3>
          <p>CTO & Lead Developer</p>
        </div>

        <div className={styles.card}>
          {/* <img src={analyst} alt="Analyst" /> */}
          <h3>Priya Sharma</h3>
          <p>Senior Market Analyst</p>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
