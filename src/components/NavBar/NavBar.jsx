import React, { useState } from "react";
import styles from "./NavBar.module.css";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={styles.header}>
      {/* ---------- LEFT (Logo) ---------- */}
      <div className={styles.left}>
        <div className={styles.logo}>
          <img className={styles.icon} src={logo} alt="QuantFox logo" />
          <h1>
            Quant<span>Fox</span> - <strong>LLP</strong>
          </h1>
        </div>
      </div>

      {/* ---------- RIGHT (Nav Links) ---------- */}
      <nav className={`${styles.right} ${isMenuOpen ? styles.open : ""}`}>
        <NavLink to="/" onClick={closeMenu} className={({ isActive }) => (isActive ? styles.active : "")}>
          Home
        </NavLink>
        <NavLink to="/about" onClick={closeMenu} className={({ isActive }) => (isActive ? styles.active : "")}>
          About
        </NavLink>
        <NavLink to="/contact" onClick={closeMenu} className={({ isActive }) => (isActive ? styles.active : "")}>
          Contact
        </NavLink>
        <NavLink to="/services" onClick={closeMenu} className={({ isActive }) => (isActive ? styles.active : "")}>
          Services
        </NavLink>
        <NavLink to="/checkout" onClick={closeMenu} className={({ isActive }) => (isActive ? styles.active : "")}>
          Premium
        </NavLink>
      </nav>

      {/* ---------- MENU BUTTON ---------- */}
      <button className={styles.menuBtn} onClick={toggleMenu}>
        <span className="material-symbols-outlined">
          {isMenuOpen ? "close" : "menu"}
        </span>
      </button>
    </header>
  );
};

export default Navbar;
