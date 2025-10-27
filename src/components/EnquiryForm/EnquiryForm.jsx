import React, { useState } from "react";
import styles from "./EnquiryForm.module.css";
import { sendEmail } from "../../assets/emailService";

const EnquiryForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await sendEmail(formData);
      alert("✅ Email sent successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        address: "",
        message: "",
      });
      onClose();
    } catch (error) {
      console.error("Email sending failed:", error);
      alert("❌ Failed to send email. Please try again later.");
    }
    setLoading(false);
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h2>Enquiry Form</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label>Phone</label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div className={styles.formGroup}>
            <label>Address</label>
            <input
              type="text"
              name="address"
              placeholder="Enter your full address"
              value={formData.address}
              onChange={handleChange}
            />
          </div>

          <div className={styles.formGroup}>
            <label>Message</label>
            <textarea
              name="message"
              placeholder="Tell us about your inquiry..."
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.buttons}>
            <button type="submit" className={styles.submitBtn} disabled={loading}>
              {loading ? "Sending..." : "Submit"}
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
