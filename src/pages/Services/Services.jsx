import React, { useState } from "react";
import styles from "./Services.module.css";
import { Link } from "react-router-dom";

const services = [
  {
    icon: "analytics",
    title: "Research Analyst",
    desc: [
      "Leverage our in-depth market analysis and data-driven insights to make informed investment decisions.",
      "Get access to real-time analytics, custom reports, and trend forecasts tailored to your portfolio.",
      "Stay ahead of competitors with our proprietary market scanning tools and expert recommendations.",
      "Actionable strategies backed by verified data sources."
    ],
  },
  {
    icon: "shield",
    title: "Risk Management",
    desc: [
      "Identify, assess, and mitigate financial risks with our proven frameworks.",
      "Develop personalized strategies to protect your wealth from market volatility.",
      "Receive continuous monitoring and adaptive solutions to minimize exposure and maximize returns.",
      "Expert advisory on regulatory and compliance risks."
    ],
  },
  {
    icon: "route",
    title: "Financial Planning",
    desc: [
      "Achieve long-term financial security with custom wealth planning strategies.",
      "We analyze income, spending, and investments to design a holistic roadmap.",
      "Our advisors help optimize tax efficiency, retirement plans, and insurance coverage.",
      "Regular plan reviews for consistent financial growth."
    ],
  },
  {
    icon: "trending_up",
    title: "Stock Recommendations",
    desc: [
      "Get hand-picked stock recommendations backed by technical and fundamental analysis.",
      "Benefit from algorithmic screening and expert human insights combined.",
      "Track performance through regular updates, alerts, and in-depth reports.",
      "Transparent reports with success tracking metrics."
    ],
  },
  {
    icon: "group",
    title: "Portfolio Management",
    desc: [
      "Diversify and balance your portfolio with expert asset allocation strategies.",
      "We monitor, rebalance, and optimize your investments for consistent growth.",
      "Enjoy transparent reporting and real-time performance tracking."
    ],
  },
];

const Services = () => {
  const [openService, setOpenService] = useState(null);

  const toggleService = (index) => {
    setOpenService(openService === index ? null : index);
  };

  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>Expert Financial <span>Services</span> Tailored For You</h1>
        <p className={styles.heroSubtitle}>
          Unlock your financial potential with our data-driven insights and personalized strategies.
        </p>
      </section>

      {/* Services Section */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>
          Our <span>Services</span>
        </h2>
        <div className={styles.dropdownList}>
          {services.map((service, index) => (
            <div key={index} className={styles.dropdownItem}>
              <button
                className={`${styles.dropdownButton} ${openService === index ? styles.active : ""}`}
                onClick={() => toggleService(index)}
              >
                <span className="material-symbols-outlined">{service.icon}</span>
                {service.title}
                <span className={styles.arrow}>{openService === index ? "−" : "+"}</span>
              </button>

              {openService === index && (
                <div className={styles.dropdownContent}>
                  <ul>
                    {service.desc.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className={styles.ctaContent}>
          <h2>Ready to Grow Your Wealth?</h2>
          <p>
            Take the next step towards your financial future by getting in touch with our experts today.
          </p>
          <Link to="/contact" className={styles.ctaButton}>
            Book Free Consultation
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Services;
