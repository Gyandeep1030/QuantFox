import React from "react";
import styles from "./StockTicker.module.css";

const StockTicker = ({ items = [] }) => {
  return (
    <div className={styles.ticker}>
      <div className={styles.marquee}>
        {items.concat(items).map((it, idx) => (
          <div key={idx} className={styles.item}>
            <strong>{it.symbol}</strong>&nbsp;
            <span className={it.change > 0 ? styles.up : styles.down}>
              ₹{it.price} ({it.change > 0 ? "+" : ""}
              {it.change.toFixed(2)}%)
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StockTicker;
