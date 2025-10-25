import React from "react";
import styles from "./WhatWeDo.module.css";

const services = [
  {
    title: "Wealth Creation",
    img: "https://pridecons.com/assetsweb/images/upload/info-box-18.jpg",
    bg: styles.darkOverlay,
    btnColor: "dark",
  },
  {
    title: "Value Research",
    img: "https://pridecons.com/assetsweb/images/upload/info-box-19.jpg",
    bg: styles.redOverlay,
    btnColor: "light",
  },
  {
    title: "Other Services",
    img: "https://pridecons.com/assetsweb/images/upload/info-box-20.jpg",
    bg: styles.blackOverlay,
    btnColor: "primary",
  },
];

const WhatWeDo = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.separator}></div>
          <h2>What We Do</h2>
          <p>
            Our goal is to enhance the value of your investment by deploying
            research-driven strategies.
          </p>
        </div>

        <div className={styles.cards}>
          {services.map((service, index) => (
            <div key={index} className={styles.card}>
              <img src={service.img} alt={service.title} className={styles.cardImg} />
              <div className={`${styles.cardOverlay} ${service.bg}`}>
                <div className={styles.cardContent}>
                  <h5>{service.title}</h5>
                  <div className={styles.btnGroup}>
                    <a href="#" className={`${styles.btn} ${styles.btnDark}`}>
                      More details
                    </a>
                    <a href="#" className={`${styles.iconBtn}`}>
                      <i className="fas fa-paper-plane"></i>
                    </a>
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
