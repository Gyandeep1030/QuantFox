import React from "react";
import styles from "./EnquiryForm.module.css";

const EnquiryForm = ({ onClose }) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h2>Consultation Inquiry</h2>
        <form>
          <div className={styles.formGroup}>
            <label>Name</label>
            <input type="text" placeholder="Enter your name" required />
          </div>

          <div className={styles.formGroup}>
            <label>Email</label>
            <input type="email" placeholder="Enter your email" required />
          </div>

          <div className={styles.formGroup}>
            <label>Phone</label>
            <input type="tel" placeholder="Enter your phone number" required />
          </div>

          <div className={styles.formGroup}>
            <label>Message</label>
            <textarea placeholder="Tell us about your inquiry..." rows="3" />
          </div>

          <div className={styles.buttons}>
            <button type="submit" className={styles.submitBtn}>
              Submit
            </button>
            <button type="button" onClick={onClose} className={styles.cancelBtn}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EnquiryForm;
