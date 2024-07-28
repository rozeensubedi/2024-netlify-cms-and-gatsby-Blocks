import React from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";
import * as styles from "./banner.module.css"; 

const OurServiceBanner = () => {
  
  const data = useStaticQuery(graphql`
    query {
      ourServiceBannerContent: markdownRemark(fileAbsolutePath: { regex: "/content/banner/ourServiceBanner-content.md/" }) {
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
  `);

  const { bannerSubtitle, bannerTitle, bannerDescription, bannerImage } = data.ourServiceBannerContent.frontmatter;
  const image = getImage(bannerImage);

  return (
    <div className={styles.siteBannersection}>
      <div className={styles.bannerContainer}>
      <div className={styles.wrapper}>
        <div className={styles.bannerLeftcontnet}>
          <span>{bannerSubtitle}</span>
          <h2>{bannerTitle}</h2>
          <p>{bannerDescription}</p>
          <Link to="/services" className={styles.sectionButton}>Our Services</Link> 
        </div>

        <div className={styles.bannerRightcontnet}>
        <GatsbyImage alt={bannerTitle} image={image} loading="eager"/>
          {/* <GatsbyImage alt={bannerTitle} image={image} loading="eager"/> */}
        </div>
      </div>

      </div>
      
    </div>
  );
};

export default OurServiceBanner;
