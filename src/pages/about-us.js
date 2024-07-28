import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import Header from "../components/header/header"; 
import Footer from "../components/footer/footer"; 
import AboutUsWrapper from "../components/about-us/about-us-wrapper";
import AboutUsBanner from "../components/banner/about-us-banner";
import { graphql } from "gatsby";



const AboutUsPage = ({ data }) => (
  <Layout data={data}>
    <Seo title="About Us" />
    
    

    
    <AboutUsBanner data={data.aboutUsBannerContent.frontmatter} />
    
    
    <AboutUsWrapper data={data} />
    
  </Layout>
);

export const Head = () => <Seo title="About Us" />;

export const query = graphql`
  query {
    aboutUsInfo: allMarkdownRemark {
      edges {
        node {
          frontmatter {
            aboutUsTitle
            aboutUsSemiTitle
            aboutUsDescription
          }
        }
      }
    }
    aboutUsCardInfo: allMarkdownRemark {
      edges {
        node {
          frontmatter {
            aboutUsCardTitle
            aboutUsCardSemiTitle
            aboutUsCardDescription
            aboutUsCardFeaturedImage {
              childImageSharp {
                gatsbyImageData
              }
            }
            modularWidget {
              title
              semiTitle
            }
          }
        }
      }
    }
    siteLogo: allMarkdownRemark {
      edges {
        node {
          frontmatter {
            logoTitle
            logoImage {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
    footerInfo: allMarkdownRemark { 
      edges {
        node {
          frontmatter {
            footerTitle
            footerContent
            socialIcons {
              socialLink
              socialIconClass
            }
            footerField {
              fieldTitle
              footerField {
                fieldItemName
                fieldItemLink
              }
            }
          }
        }
      }
    }
      aboutUsBannerContent: markdownRemark(fileAbsolutePath: { regex: "/content/banner/aboutUsBanner-content.md/" }) {
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
`;


export default AboutUsPage;
