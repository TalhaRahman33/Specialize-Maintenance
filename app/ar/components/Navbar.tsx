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
    router.push(`/en${pathname.replace(/^\/ar/, '')}`);
  };

  return (
    <nav className={styles.navbar} dir="rtl">
      <div className={styles.navbarContainer}>
        <div className={styles.logo}>
          <Link href="/ar/home">
            <img src="/images/logoo.png" alt="Logo" />
          </Link>
        </div>
        <div className={styles.menuToggle} onClick={toggleMenu}>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </div>
        <ul className={`${styles.navMenu} ${menuOpen ? styles.navMenuOpen : ''}`}>
          <li><Link href="/ar/home" onClick={() => setMenuOpen(false)}>{texts.ar.home}</Link></li>
          <li><Link href="/ar/about" onClick={() => setMenuOpen(false)}>{texts.ar.about}</Link></li>
          <li><Link href="/ar/services" onClick={() => setMenuOpen(false)}>{texts.ar.services}</Link></li>
          <li><Link href="/ar/portfolio" onClick={() => setMenuOpen(false)}>{texts.ar.portfolio}</Link></li>
        </ul>
        <div className={styles.langSwitch} onClick={switchLang}>
          English
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
