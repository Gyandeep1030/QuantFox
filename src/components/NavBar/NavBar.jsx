import React from "react";
import styles from "./NavBar.module.css";
import { NavLink } from "react-router-dom";
import logo from '../../assets/logo.png';

const Navbar = () => {
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <div className={styles.logo}>
          <img className={styles.icon} src={logo} alt="" />
          <h1>
            Quant<span>Fox</span> - <strong>LLP</strong>
          </h1>
        </div>
      </div>

      <nav className={styles.right}>
        <NavLink to="/" className={({isActive}) => isActive ? styles.active : ""}>Home</NavLink>
        <NavLink to="/about" className={({isActive}) => isActive ? styles.active : ""}>About</NavLink>
        <NavLink to="/contact" className={({isActive}) => isActive ? styles.active : ""}>Contact</NavLink>
        <NavLink to="/services" className={({isActive}) => isActive ? styles.active : ""}>Services</NavLink>
        <NavLink to="/checkout" className={({isActive}) => isActive ? styles.active : ""}>Premium</NavLink>
        <button className={styles.menuBtn}>
          <span className="material-symbols-outlined">menu</span>
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
