import React from "react";
import styles from "./Checkout.module.css";

const Checkout = () => {
  const startPayment = async () => {
    /* Placeholder:
       - For Stripe: create a backend endpoint to create PaymentIntent -> return client_secret -> call stripe.confirmCardPayment(client_secret)
       - For Razorpay: create order on server, then load Razorpay checkout with order_id
       This file is intentionally kept frontend-only with placeholder UI.
    */
    alert("Payment integration placeholder. Integrate Stripe/Razorpay from backend and call SDK here.");
  };

  return (
    <div className={styles.wrap}>
      <h2>Checkout / Payment</h2>
      <div className={styles.card}>
        <p>Future-ready payment flow. Add your provider SDK and backend endpoints to complete.</p>
        <button onClick={startPayment} className={styles.btn}>Start Payment (Placeholder)</button>
      </div>
    </div>
  );
};

export default Checkout;
