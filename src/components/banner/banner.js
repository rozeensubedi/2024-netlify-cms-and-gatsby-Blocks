import React, { useEffect, useState, Fragment } from "react"
import * as styles from "./banner.module.css"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

function Banner({ data }) {
  const [banner, bannerContent] = useState([])

  useEffect(() => {
    let newInfo = []
    data.bannerInformation.edges.forEach(({ node }) => {
      if (node.frontmatter.bannerTitle != null) {
        newInfo.push(node)
      }
    })
    bannerContent(newInfo)
  }, [])

 

  return (
    <div className={styles.siteBannersection}>
      <div className={styles.wrapper}>
        <div className={styles.bannerLeftcontnet}>
          {banner.length > 0 && (
            <Fragment>
              <span>{banner[0].frontmatter.bannerSubtitle}</span>
              <h2>{banner[0].frontmatter.bannerTitle}</h2>
              <p>{banner[0].frontmatter.bannerDescription}</p>
            </Fragment>
          )}
          <button className={styles.sectionButton} >About us</button>
        </div>

        <div className={styles.bannerRightcontnet}>
          {banner.length > 0 && (
            <GatsbyImage
              alt="hello"
              image={getImage(banner[0].frontmatter.bannerImage)}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default Banner
