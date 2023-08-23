import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import styles from './Landingpagenavbar.module.css';

import logo from "../img/tosmos.png";

const Landingpagenavbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);

  return (
    <div className={styles.header}>
      <nav className={styles.navbar}>

      <div className={styles.logo}>
          <img src={logo} alt="Logo" />
        </div>
        
        
        <ul className={click ? `${styles['nav-menu']} ${styles.active}` : styles['nav-menu']}>
          <li className={styles['nav-item']}>
            <a href='/' onClick={closeMenu}>Home</a>
          </li>
          <li className={styles['nav-item']}>
            <a href='#about' onClick={closeMenu}>About</a>
          </li>
          <li className={styles['nav-item']}>
            <a href='#projects' onClick={closeMenu}>Features</a>
          </li>
          <li className={styles['nav-item']}>
            <a href='#resume' onClick={closeMenu}>Solutions</a>
          </li>
          <li className={styles['nav-item']}>
            <a href='#imahe' onClick={closeMenu}>Resources</a>
          </li>
        </ul>

        <button className = {styles.signIn}>
          Sign in
        </button>

        <button className = {styles.signUp}>
          Sign up
        </button>




        <div className={styles.hamburger} onClick={handleClick}>
          {click ? (
            <FaTimes size={30} style={{ color: '#ffffff' }} />
          ) : (
            <FaBars size={30} style={{ color: '#ffffff' }} />
          )}
        </div>



      </nav>
    </div>
  );
};

export default Landingpagenavbar;
