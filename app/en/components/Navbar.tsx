"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import styles from './navbar.module.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const currentLang = pathname?.startsWith('/ar') ? 'ar' : 'en';

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
    if (pathname) {
      router.push(`/${newLang}${pathname.replace(/^\/(en|ar)/, '')}`);
    }
  };

  const isActive = (path: string): boolean => {
    if (!pathname) return false;
    return pathname === path || pathname.startsWith(path + '/');
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
          <li className={isActive(`/${currentLang}/home`) ? styles.active : ''}>
            <Link href={`/${currentLang}/home`} onClick={() => setMenuOpen(false)}>
              Home
              <span className={styles.underline}></span>
            </Link>
          </li>
          <li className={isActive(`/${currentLang}/about`) ? styles.active : ''}>
            <Link href={`/${currentLang}/about`} onClick={() => setMenuOpen(false)}>
              About
              <span className={styles.underline}></span>
            </Link>
          </li>
          <li className={isActive(`/${currentLang}/services`) ? styles.active : ''}>
            <Link href={`/${currentLang}/services`} onClick={() => setMenuOpen(false)}>
              Services
              <span className={styles.underline}></span>
            </Link>
          </li>
          <li className={isActive(`/${currentLang}/portfolio`) ? styles.active : ''}>
            <Link href={`/${currentLang}/portfolio`} onClick={() => setMenuOpen(false)}>
              Portfolio
              <span className={styles.underline}></span>
            </Link>
          </li>
        </ul>
        <div className={styles.langSwitch} onClick={switchLang}>
          {currentLang === 'en' ? 'Arabic' : 'English'}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;