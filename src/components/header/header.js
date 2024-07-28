import React, { useEffect, useState } from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { GiHamburgerMenu } from "react-icons/gi";
import * as styles from "./header.module.css";

const Header = ({ data }) => {
  const [logo, setLogo] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false); 

  useEffect(() => {
    if (data && data.siteLogo && data.siteLogo.edges) {
      const logoNode = data.siteLogo.edges.find(
        (edge) => edge.node.frontmatter.logoImage
      );
      if (logoNode) {
        setLogo(logoNode.node);
      }
    }
  }, [data]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className={styles.siteHeader}>
      <div className={styles.wrapper}>
        <div className={styles.headerLeftContent}>
          {logo && (
            <Link to="/">
              {logo.frontmatter.logoImage ? (
                <GatsbyImage
                  image={getImage(logo.frontmatter.logoImage)}
                  alt="Logo"
                  loading="eager"
                  className={styles.logoImage}
                />
              ) : (
                <h2>{logo.frontmatter.logoTitle}</h2>
              )}
            </Link>
          )}
        </div>

        {/* className={styles.headerTopContent} */}
        <nav className={`${styles.headerTopContent} ${menuOpen ? styles.open : ""}`} >
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about-us">About us</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/page-2">Pricing</Link>
            </li>
          </ul>
        </nav>


        <div className={styles.headerRightContent}>
          <form>
            <input
              type="text"
              className="search-input"
              placeholder="Search for anything"
            />
          </form>
          <div>
            <button className={styles.sectionButton}>Get Started</button>
          </div>
          <div className={styles.hamburgerMenu} onClick={toggleMenu}>
            <GiHamburgerMenu />
          </div>
        </div>

        
        <div className={`${styles.slideInNav} ${menuOpen ? styles.slideInNavActive : ""}`}>
          <button className={styles.closeButton} onClick={closeMenu}>
          <GiHamburgerMenu />
          </button>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about-us">About us</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/page-2">Pricing</Link>
            </li>
          </ul>
        </div>

      </div>
    </header>
  );
};

export default Header;

