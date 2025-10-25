import React, { useState } from "react";
import { createPortal } from "react-dom";
import styles from "./FloatingContact.module.css";
import { FaPhoneAlt } from "react-icons/fa";
import EnquiryForm from "../EnquiryForm/EnquiryForm";

const FloatingContact = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenForm = () => setIsOpen(true);
  const handleCloseForm = () => setIsOpen(false);

  return (
    <>
      <div className={styles.floatingContainer}>
        <div className={styles.iconWrapper}>
          <FaPhoneAlt className={styles.phoneIcon} />
        </div>
        <div className={styles.contactBox}>
          <p className={styles.phoneText}>+91 9654825156</p>
          <button onClick={handleOpenForm} className={styles.consultBtn}>
            Consult Now
          </button>
        </div>
      </div>

      {isOpen &&
        createPortal(
          <EnquiryForm onClose={handleCloseForm} />,
          document.getElementById("EnquiryForm")
        )}
    </>
  );
};

export default FloatingContact;
