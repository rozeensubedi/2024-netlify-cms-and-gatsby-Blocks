import React from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";
import * as styles from "./banner.module.css"; 

const BlogBanner = () => {
  const data = useStaticQuery(graphql`
    query {
      blogBannerContent: markdownRemark(fileAbsolutePath: { regex: "/content/banner/blogBanner-content.md/" }) {
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

  const { bannerSubtitle, bannerTitle, bannerDescription, bannerImage } = data.blogBannerContent.frontmatter;
  const image = getImage(bannerImage);

  return (
    <div className={styles.siteBannersection}>
      <div className={styles.wrapper}>
        <div className={styles.bannerLeftcontnet}>
          <span>{bannerSubtitle}</span>
          <h2>{bannerTitle}</h2>
          <p>{bannerDescription}</p>
          <Link to="/blog" className={styles.sectionButton}>Read our blog</Link>
        </div>

        <div className={styles.bannerRightcontnet}>
          <GatsbyImage alt={bannerTitle} image={image} />
        </div>
      </div>
    </div>
  );
};

export default BlogBanner;
