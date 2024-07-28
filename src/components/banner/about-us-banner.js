import React from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";
import * as styles from "./banner.module.css"; 

const AboutUsBanner = () => {
  const data = useStaticQuery(graphql`
    query {
      aboutUsBannerContent: markdownRemark(fileAbsolutePath: { regex: "/content/banner/aboutUsBanner-content.md/" }) {
        frontmatter {
          bannerSubtitle
          bannerTitle
          bannerDescription
          bannerImage {
            childImageSharp {
              gatsbyImageData(width: 600, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
            }
          }
        }
      }
    }
  `);

  const { bannerSubtitle, bannerTitle, bannerDescription, bannerImage } = data.aboutUsBannerContent.frontmatter;
  const image = getImage(bannerImage);

  return (
    <div className={styles.siteBannersection}>
       <div className={styles.bannerContainer}>
       <div className={styles.wrapper}>
        <div className={styles.bannerLeftcontnet}>
          <span>{bannerSubtitle}</span>
          <h2>{bannerTitle}</h2>
          <p>{bannerDescription}</p>
          <Link to="/about-us" className={styles.sectionButton}>About us</Link> 
        </div>

        <div className={styles.bannerRightcontnet}>
          <GatsbyImage alt={bannerTitle} image={image} loading="eager"/>
        </div>
      </div>
       </div>
    </div>
  );
};

export default AboutUsBanner;


























