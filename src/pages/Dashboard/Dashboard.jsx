import React from "react";
import styles from "./Dashboard.module.css";

const Dashboard = () => {
  return (
    <div>
      <h2>Dashboard</h2>
      <div className={styles.grid}>
        <div className={styles.box}>Portfolio</div>
        <div className={styles.box}>Watchlist</div>
        <div className={styles.box}>Orders</div>
        <div className={styles.box}>Reports</div>
      </div>
    </div>
  );
};

export default Dashboard;
