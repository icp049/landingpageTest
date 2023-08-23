import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import styles from './Landingpagenavbar.module.css';

const Landingpagenavbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);

  return (
    <div className={styles.header}>
      <nav className={styles.navbar}>
        
        <div className={styles.hamburger} onClick={handleClick}>
          {click ? (
            <FaTimes size={30} style={{ color: '#ffffff' }} />
          ) : (
            <FaBars size={30} style={{ color: '#ffffff' }} />
          )}
        </div>
        <ul className={click ? `${styles['nav-menu']} ${styles.active}` : styles['nav-menu']}>
          <li className={styles['nav-item']}>
            <a href='/' onClick={closeMenu}>Home</a>
          </li>
          <li className={styles['nav-item']}>
            <a href='#about' onClick={closeMenu}>About</a>
          </li>
          <li className={styles['nav-item']}>
            <a href='#projects' onClick={closeMenu}>Projects</a>
          </li>
          <li className={styles['nav-item']}>
            <a href='#resume' onClick={closeMenu}>Online Resume</a>
          </li>
          <li className={styles['nav-item']}>
            <a href='#imahe' onClick={closeMenu}>Imahe</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Landingpagenavbar;
