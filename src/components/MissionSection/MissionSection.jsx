import React, { useEffect, useRef, useState } from "react";
import styles from "./MissionSection.module.css";

const statsData = [
  { number: 5, suffix: "+", label: "Years Experience" },
  { number: 10000, suffix: "+", label: "Active Users" },
  { number: 100, suffix: "+", label: "Market Tools" },
];

const MissionSection = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 } // Trigger when 30% of the section is visible
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className={styles.mission}>
      <h2>
        Our <span>Mission</span>
      </h2>
      <p>
        At <strong>QuantFox LLP</strong>, our mission is to revolutionize the
        stock market experience through intelligent analytics, automation, and
        transparency. We aim to empower every investor and trader with tools
        that simplify complex financial decisions.
      </p>

      <div className={styles.stats}>
        {statsData.map((stat, index) => (
          <StatCard
            key={index}
            number={stat.number}
            suffix={stat.suffix}
            label={stat.label}
            animate={visible}
          />
        ))}
      </div>
    </section>
  );
};

const StatCard = ({ number, suffix, label, animate }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!animate) return;

    let start = 0;
    const duration = 1500; // in ms
    const increment = number / (duration / 16); // ~60fps
    const timer = setInterval(() => {
      start += increment;
      if (start >= number) {
        start = number;
        clearInterval(timer);
      }
      setCount(Math.floor(start));
    }, 16);

    return () => clearInterval(timer);
  }, [animate, number]);

  return (
    <div className={styles.card}>
      <h3>
        {count}
        {suffix}
      </h3>
      <p>{label}</p>
    </div>
  );
};

export default MissionSection;
