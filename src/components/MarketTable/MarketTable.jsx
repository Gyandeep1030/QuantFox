import React from "react";
import styles from "./MarketTable.module.css";

const MarketTable = () => {
  const stocks = [
    { ticker: "TSLA", name: "Tesla, Inc.", price: "$256.40", change: "+5.60 (2.23%)", gain: true },
    { ticker: "NVDA", name: "NVIDIA Corporation", price: "$460.18", change: "-8.92 (-1.90%)", gain: false },
    { ticker: "DIS", name: "The Walt Disney Company", price: "$85.32", change: "+0.15 (0.18%)", gain: true },
  ];

  return (
    <section className={styles.watchlist}>
      <h2>My Watchlist</h2>
      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Ticker</th>
              <th>Company</th>
              <th>Price</th>
              <th>Change</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {stocks.map((stock, index) => (
              <tr key={index}>
                <td>{stock.ticker}</td>
                <td>{stock.name}</td>
                <td>{stock.price}</td>
                <td className={stock.gain ? styles.gain : styles.loss}>{stock.change}</td>
                <td><button className={styles.viewBtn}>View</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default MarketTable;
