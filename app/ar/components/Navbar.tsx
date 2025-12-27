"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import styles from './navbar.module.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const lang = 'ar';

  const texts = {
    ar: {
      home: 'الرئيسية',
      about: 'حول',
      services: 'الخدمات',
      portfolio: 'المحفظة'
    },
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const switchLang = () => {
    if (pathname) {
      router.push(`/en${pathname.replace(/^\/ar/, '')}`);
    }
  };

  const isActive = (path: string): boolean => {
    if (!pathname) return false;
    return pathname === path || pathname.startsWith(path + '/');
  };

  return (
    <nav className={styles.navbarAr}>
      <div className={styles.navbarContainerAr}>
        <div className={styles.logoAr}>
          <Link href="/ar/home">
            <img src="/images/logoo.png" alt="Logo" />
          </Link>
        </div>
        <div className={styles.menuToggleAr} onClick={toggleMenu}>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </div>
        <ul className={`${styles.navMenuAr} ${menuOpen ? styles.navMenuOpenAr : ''}`}>
          <li className={isActive('/ar/home') ? styles.active : ''}>
            <Link href="/ar/home" onClick={() => setMenuOpen(false)}>
              {texts.ar.home}
              <span className={styles.underlineAr}></span>
            </Link>
          </li>
          <li className={isActive('/ar/about') ? styles.active : ''}>
            <Link href="/ar/about" onClick={() => setMenuOpen(false)}>
              {texts.ar.about}
              <span className={styles.underlineAr}></span>
            </Link>
          </li>
          <li className={isActive('/ar/services') ? styles.active : ''}>
            <Link href="/ar/services" onClick={() => setMenuOpen(false)}>
              {texts.ar.services}
              <span className={styles.underlineAr}></span>
            </Link>
          </li>
          <li className={isActive('/ar/portfolio') ? styles.active : ''}>
            <Link href="/ar/portfolio" onClick={() => setMenuOpen(false)}>
              {texts.ar.portfolio}
              <span className={styles.underlineAr}></span>
            </Link>
          </li>
        </ul>
        <div className={styles.langSwitchAr} onClick={switchLang}>
          English
        </div>
      </div>
    </nav>
  );
};

export default Navbar;