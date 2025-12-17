"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import styles from './navbar.module.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const currentLang = pathname.startsWith('/ar') ? 'ar' : 'en';

  const texts = {
    en: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      portfolio: 'Portfolio'
    },
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const switchLang = () => {
    const newLang = currentLang === 'en' ? 'ar' : 'en';
    router.push(`/${newLang}${pathname.replace(/^\/(en|ar)/, '')}`);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <div className={styles.logo}>
          <Link href={`/${currentLang}/home`}>
            <img src="/images/logoo.png" alt="Logo" />
          </Link>
        </div>
        <div className={styles.menuToggle} onClick={toggleMenu}>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </div>
        <ul className={`${styles.navMenu} ${menuOpen ? styles.navMenuOpen : ''}`}>
          <li><Link href={`/${currentLang}/home`} onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link href={`/${currentLang}/about`} onClick={() => setMenuOpen(false)}>About</Link></li>
          <li><Link href={`/${currentLang}/services`} onClick={() => setMenuOpen(false)}>Services</Link></li>
          <li><Link href={`/${currentLang}/portfolio`} onClick={() => setMenuOpen(false)}>Portfolio</Link></li>
        </ul>
        <div className={styles.langSwitch} onClick={switchLang}>
          {currentLang === 'en' ? 'Arabic' : 'English'}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
