import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import * as styles from "./banner.module.css";

const Banner = () => {
  const data = useStaticQuery(graphql`
    query {
      bannerInformation: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/content/banner/banner-content.md/" } }) {
        edges {
          node {
            frontmatter {
              bannerSubtitle
              bannerTitle
              bannerDescription
              bannerImage {
                childImageSharp {
                  gatsbyImageData(width: 600)
                }
              }
            }
          }
        }
      }
    }
  `);

 
  const bannerData = data.bannerInformation.edges[0]?.node.frontmatter;
  const image = bannerData ? getImage(bannerData.bannerImage) : null;

  return (
    <div className={styles.siteBannersection}>
       <div className={styles.bannerContainer}>
       <div className={styles.wrapper}>
        <div className={styles.bannerLeftcontnet}>
          {bannerData && (
            <>
              <span>{bannerData.bannerSubtitle}</span>
              <h2>{bannerData.bannerTitle}</h2>
              <p>{bannerData.bannerDescription}</p>
              <Link to="/about-us" className={styles.sectionButton}>About us</Link>
            </>
          )}
        </div>

        <div className={styles.bannerRightcontnet}>
          {image && (
            <GatsbyImage alt={bannerData.bannerTitle} image={image} loading="eager" />
          )}
        </div>
      </div>
       </div>
    </div>
  );
};

export default Banner;




























































