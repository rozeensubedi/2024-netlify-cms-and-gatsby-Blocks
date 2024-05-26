import React from "react";
import * as styles from "./header.module.css";
import { Link } from "gatsby";

function Header() {
  return (
    <header className={styles.siteHeader}>
      <div className={styles.wrapper}>
        <div className="header-left-content">
          <img  alt="logo"/>
        </div>
        <div className={styles.headermiddlecontent}>
          <nav>
            <ul>
              <Link to="/"></Link>
              <Link to="/about">About us</Link>
              <Link to="/service">Service</Link>
              <Link to="/blog">Blog</Link>
              <Link to="/page">Page</Link>
            </ul>
          </nav>
        </div>
        <div className={styles.headerRightContent}>
          <form>
          <input type="text" className="search-input" placeholder="Search for anything"></input>
          </form>
          <button className={styles.sectionButton}>Get Started</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
