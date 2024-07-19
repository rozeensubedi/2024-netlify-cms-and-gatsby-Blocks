import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import Header from "../components/header/header"; 
import Footer from "../components/footer/footer"; 
import AboutUsWrapper from "../components/about-us/about-us-wrapper"; 
import { graphql } from "gatsby";

const AboutUsPage = ({ data }) => (
  <Layout>
    <Header data={data} />
    <AboutUsWrapper data={data} />
    <Footer data={data} />
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
  }
`;

export default AboutUsPage;
