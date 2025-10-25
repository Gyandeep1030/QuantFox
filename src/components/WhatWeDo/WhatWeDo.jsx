import React from "react";
import styles from "./WhatWeDo.module.css";
import { Link } from "react-router-dom";
import InfoBox18 from "../../assets/Image/info-box-18.svg"
import InfoBox19 from "../../assets/Image/info-box-19.svg"
import InfoBox20 from "../../assets/Image/info-box-20.jpg"

const services = [
  {
    title: "Wealth Creation",
    img: InfoBox18,
    overlay: styles.darkOverlay,
  },
  {
    title: "Value Research",
    img: InfoBox19,
    overlay: styles.darkOverlay,
  },
  {
    title: "Other Services",
    img: InfoBox20,
    overlay: styles.blackOverlay,
  },
];

const WhatWeDo = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>What We Do</h2>
          <div className={styles.separator}></div>
          <p>
            Our goal is to enhance the value of your investment by deploying
            research-driven strategies and data-backed insights that empower you
            to make smarter financial decisions.
          </p>
        </div>

        <div className={styles.cards}>
          {services.map((service, index) => (
            <div key={index} className={styles.card}>
              <img
                src={service.img}
                alt={service.title}
                className={styles.cardImg}
              />
              <div className={`${styles.cardOverlay} ${service.overlay}`}>
                <div className={styles.cardContent}>
                  <h5>{service.title}</h5>
                  <div className={styles.btnGroup}>
                    <Link to="/services" className={styles.btn}>
                      More Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
