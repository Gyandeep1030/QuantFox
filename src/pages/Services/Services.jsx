import React, { useState } from "react";
import styles from "./Services.module.css";
import { Link } from "react-router-dom";

const services = [
  {
    icon: "analytics",
    title: "Research Analyst",
    desc: "Leverage our in-depth market analysis and data-driven insights to make informed decisions and stay ahead of market trends.",
  },
  {
    icon: "shield",
    title: "Risk Management",
    desc: "Implement robust strategies to mitigate financial risks and protect your valuable investments from market volatility.",
  },
  {
    icon: "route",
    title: "Financial Planning",
    desc: "Achieve your long-term wealth goals with personalized financial strategies and expert guidance tailored to your unique situation.",
  },
  {
    icon: "trending_up",
    title: "Stock Recommendations",
    desc: "Discover high-potential investment opportunities through our meticulous selection process and proprietary analytical models.",
  },
];

const plans = [
  {
    name: "Basic",
    desc: "Ideal for beginners who want to explore market insights and build a foundation in investment knowledge.",
    price: "₹2499 / 3 months",
  },
  {
    name: "Premium",
    desc: "Get advanced analytics, personalized recommendations, and direct access to our expert advisors.",
    price: "20% commission on profit",
  },
  {
    name: "QuantFox Black Enterprise",
    desc: "Tailored for corporates and serious investors needing deep research, risk analysis, and 24/7 consultation.",
    price: "Custom Pricing",
  },
];

const Services = () => {
  const [openService, setOpenService] = useState(null);
  const [openPlan, setOpenPlan] = useState(null);

  const toggleService = (index) => {
    setOpenService(openService === index ? null : index);
  };

  const togglePlan = (index) => {
    setOpenPlan(openPlan === index ? null : index);
  };

  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>Expert Financial Services Tailored For You</h1>
        <p className={styles.heroSubtitle}>
          Unlock your financial potential with our data-driven insights and personalized strategies.
        </p>
      </section>

      {/* Services Section */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Our <span>Services</span></h2>
        <div className={styles.dropdownList}>
          {services.map((service, index) => (
            <div key={index} className={styles.dropdownItem}>
              <button
                className={`${styles.dropdownButton} ${openService === index ? styles.active : ""}`}
                onClick={() => toggleService(index)}
              >
                <span className="material-symbols-outlined">{service.icon}</span>
                {service.title}
                <span className={styles.arrow}>
                  {openService === index ? "−" : "+"}
                </span>
              </button>
              {openService === index && (
                <div className={styles.dropdownContent}>
                  <p>{service.desc}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Plans Section */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Our <span>Plans</span></h2>
        <div className={styles.dropdownList}>
          {plans.map((plan, index) => (
            <div key={index} className={styles.dropdownItem}>
              <button
                className={`${styles.dropdownButton} ${openPlan === index ? styles.active : ""}`}
                onClick={() => togglePlan(index)}
              >
                {plan.name}
                <span className={styles.arrow}>
                  {openPlan === index ? "−" : "+"}
                </span>
              </button>
              {openPlan === index && (
                <div className={styles.dropdownContent}>
                  <p>{plan.desc}</p>
                  <p className={styles.planPrice}>{plan.price}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <Link to="/plans" className={styles.button}>
          More About Plans
        </Link>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className={styles.ctaContent}>
          <h2>Ready to Grow Your Wealth?</h2>
          <p>Take the next step towards your financial future by getting in touch with our experts today.</p>
          <Link to="/contact" className={styles.ctaButton}>
            Book Free Consultation
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Services;
