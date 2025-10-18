import React from "react";
import styles from "./Services.module.css";

const Services = () => {
  const services = [
    { title: "Live Quotes", desc: "Stream live quotes and alerts." },
    { title: "Portfolio", desc: "Track your holdings." },
    { title: "Signals", desc: "Buy/sell suggestions." }
  ];

  return (
    <div>
      <h2>Our Services</h2>
      <div className={styles.grid}>
        {services.map(s => (
          <div key={s.title} className={styles.card}>
            <h4>{s.title}</h4>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
