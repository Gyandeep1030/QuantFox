import React from "react";
import styles from "./MissionSection.module.css";

const MissionSection = () => {
  return (
    <section className={styles.mission}>
      <h2>Our <span>Mission</span></h2>
      <p>
        At <strong>QuantFox LLP</strong>, our mission is to revolutionize the stock market 
        experience through intelligent analytics, automation, and transparency.  
        We aim to empower every investor and trader with tools that simplify 
        complex financial decisions.
      </p>

      <div className={styles.stats}>
        <div>
          <h3>5+</h3>
          <p>Years Experience</p>
        </div>
        <div>
          <h3>10K+</h3>
          <p>Active Users</p>
        </div>
        <div>
          <h3>100+</h3>
          <p>Market Tools</p>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
