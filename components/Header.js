import axios from "axios";
import { useState } from "react";
import styles from '../styles/Header.module.css';

function Header() {

  return (
    <header className={`${styles.headerSection} ${styles.py5} ${styles.bgDark}`}>
    <div className="container">
      <div className="row py-5">
        <div className="col-xs-12 col-md-10 col-lg-10">
          <h2 className={`${styles.heroTitle}`}>Transform Your Business with Data-Driven Solutions</h2>
          <p className={`${styles.heroSubtitle}`}>Streamline operations, automate processes, and engage your customers in new and meaningful ways.</p>
        </div>
      </div>
    </div>
    </header>
  );
};

export default Header;

