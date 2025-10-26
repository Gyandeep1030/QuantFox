import React, { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import styles from "./FloatingContact.module.css";
import { FaPhoneAlt } from "react-icons/fa";
import EnquiryForm from "../EnquiryForm/EnquiryForm";

const FloatingContact = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const offset = useRef({ x: 0, y: 0 });
  const floatingRef = useRef(null);

  useEffect(() => {
    // ✅ Set initial position (bottom-right with small gap)
    const gap = 25;
    const elem = floatingRef.current;
    if (elem) {
      const { offsetWidth, offsetHeight } = elem;
      setPosition({
        x: window.innerWidth - offsetWidth - gap,
        y: window.innerHeight - offsetHeight - gap,
      });
    }
  }, []);

  const handleOpenForm = () => setIsOpen(true);
  const handleCloseForm = () => setIsOpen(false);

  const startDrag = (e) => {
    e.preventDefault();
    setIsDragging(true);
    const clientX = e.clientX || e.touches?.[0]?.clientX;
    const clientY = e.clientY || e.touches?.[0]?.clientY;
    offset.current = {
      x: clientX - position.x,
      y: clientY - position.y,
    };
  };

  const duringDrag = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const clientX = e.clientX || e.touches?.[0]?.clientX;
    const clientY = e.clientY || e.touches?.[0]?.clientY;

    const elem = floatingRef.current;
    const gap = 10;
    const elemWidth = elem?.offsetWidth || 150;
    const elemHeight = elem?.offsetHeight || 100;

    let newX = clientX - offset.current.x;
    let newY = clientY - offset.current.y;

    // ✅ Keep within screen boundaries
    const maxX = window.innerWidth - elemWidth - gap;
    const maxY = window.innerHeight - elemHeight - gap;
    newX = Math.max(gap, Math.min(maxX, newX));
    newY = Math.max(gap, Math.min(maxY, newY));

    setPosition({ x: newX, y: newY });
  };

  const stopDrag = () => setIsDragging(false);

  useEffect(() => {
    window.addEventListener("mousemove", duringDrag);
    window.addEventListener("mouseup", stopDrag);
    window.addEventListener("touchmove", duringDrag);
    window.addEventListener("touchend", stopDrag);

    return () => {
      window.removeEventListener("mousemove", duringDrag);
      window.removeEventListener("mouseup", stopDrag);
      window.removeEventListener("touchmove", duringDrag);
      window.removeEventListener("touchend", stopDrag);
    };
  }, [duringDrag]);

  return (
    <>
      <div
        ref={floatingRef}
        className={styles.floatingContainer}
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
        onMouseDown={startDrag}
        onTouchStart={startDrag}
      >
        <div className={styles.iconWrapper}>
          <FaPhoneAlt className={styles.phoneIcon} />
        </div>
        <div className={styles.contactBox}>
          <p className={styles.phoneText}>+91 96548 25156</p>
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
