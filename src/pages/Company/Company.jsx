import React from "react";
import { useParams } from "react-router-dom";
import mockStocks from "../../api/mockStocks";
import styles from "./Company.module.css";

const Company = () => {
  const { symbol } = useParams();
  const stock = mockStocks.find(s => s.symbol === symbol) || { symbol, name: "Unknown", price: 0, change: 0 };

  return (
    <div className={styles.companyContainer}>
      <h2 className={styles.heading}>
        {stock.name} — {stock.symbol}
      </h2>
      <p className={styles.price}>
        Price: ₹{stock.price} ({stock.change > 0 ? "+" : ""}{stock.change}%)
      </p>
      <div className={styles.detailsCard}>
        <p>[Company details / charts / historical data placeholder]</p>
      </div>
    </div>
  );
};

export default Company;
