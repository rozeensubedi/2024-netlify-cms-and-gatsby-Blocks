import React, { useEffect, useState, Fragment } from "react"
import * as styles from "./header.module.css"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

function Header({ data }) {
  const [logo, setLogo] = useState([])

  useEffect(() => {
    let newInfo = []
    data.siteLogo.edges.forEach(({ node }) => {
      if (node.frontmatter.logoTitle != null) {
        newInfo.push(node)
      }
    })
    setLogo(newInfo)
  }, [])

  return (
    <header className={styles.siteHeader}>
      <div className={styles.wrapper}>
        <div className={styles.headerleftcontent}>
          {logo.length > 0 && (
            <Fragment>
              {logo[0].frontmatter.logoImage != null && (
                <GatsbyImage alt="Image" image={getImage(logo[0].frontmatter.logoImage)} />
              )}

              {logo[0].frontmatter.logoImage == null && (
                <h2>{logo[0].frontmatter.logoTitle}</h2>
              )}
            </Fragment>
          )}
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
            <input
              type="text"
              className="search-input"
              placeholder="Search for anything"
            ></input>
          </form>
          <button className={styles.sectionButton}>Get Started</button>
        </div>
      </div>
    </header>
  )
}

export default Header

