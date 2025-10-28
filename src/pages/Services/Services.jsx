import React from "react";
import styles from "./Services.module.css";
import { Link } from "react-router-dom";
import FloatingContact from "../../components/FloatingContact/FloatingContact";

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
    name: "Basic Plan",
    desc: "Ideal for beginners who want to explore market insights and build a foundation in investment knowledge.",
    price: "₹2499/3 month",
  },
  {
    name: "Premium Plan",
    desc: "Get advanced analytics, personalized recommendations, and direct access to our expert advisors.",
    price: "20% commission on profit",
  },
  {
    name: "Enterprise Plan",
    desc: "Tailored for corporates and serious investors needing deep research, risk analysis, and 24/7 consultation.",
    price: "Custom Pricing",
  },
];

const Services = () => {
  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>
          Expert Financial Services Tailored For You
        </h1>
        <p className={styles.heroSubtitle}>
          Unlock your financial potential with our data-driven insights and personalized strategies.
          We provide a comprehensive suite of services to guide you through the complexities of the market.
        </p>
      </section>

      {/* Services Grid */}
      <section className={styles.grid}>
        {services.map((service, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.icon}>
              <span className="material-symbols-outlined">{service.icon}</span>
            </div>
            <h3 className={styles.cardTitle}>{service.title}</h3>
            <p className={styles.cardDesc}>{service.desc}</p>
            <a href="#" className={styles.learnMore}>
              Learn More →
            </a>
          </div>
        ))}
      </section>

      {/* Plans Section */}
      <section className={styles.plans}>
        <h2 className={styles.plansTitle}>Our <span>Plans</span></h2>
        <p className={styles.plansSubtitle}>
          Choose the plan that suits your financial goals and investment strategy.
        </p>

        <div className={styles.plansGrid}>
          {plans.map((plan, index) => (
            <div key={index} className={styles.planCard}>
              <h3 className={styles.planName}>{plan.name}</h3>
              <p className={styles.planDesc}>{plan.desc}</p>
              <p className={styles.planPrice}>{plan.price}</p>
            </div>
          ))}
        </div>

        <Link to="/plans" className={styles.plansButton}>
          More About Plans
        </Link>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>Ready to Grow Your Wealth?</h2>
          <p className={styles.ctaText}>
            Take the next step towards your financial future by getting in touch with our experts today.
          </p>
          <Link to="/contact" className={styles.ctaButton}>
            Book Free Consultation
          </Link>
        </div>
      </section>

      

      <FloatingContact />
    </main>
  );
};

export default Services;
