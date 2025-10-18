import React from "react";
import styles from "./StockCard.module.css";
import { Link } from "react-router-dom";

const StockCard = ({ stock }) => {
  return (
    <Link to={`/company/${stock.symbol}`} className={styles.card}>
      <div className={styles.row}>
        <div>
          <div className={styles.symbol}>{stock.symbol}</div>
          <div className={styles.name}>{stock.name}</div>
        </div>
        <div style={{ textAlign: "right" }}>
          <div className={styles.price}>₹{stock.price}</div>
          <div className={stock.change > 0 ? styles.pos : styles.neg}>
            {stock.change > 0 ? "+" : ""}{stock.change}%
          </div>
        </div>
      </div>
    </Link>
  );
};

export default StockCard;
