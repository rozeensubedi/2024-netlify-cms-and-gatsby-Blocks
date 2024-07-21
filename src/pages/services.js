import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import OurServices from "../components/our-services/our-services";
import Header from "../components/header/header"; 
import Footer from "../components/footer/footer"; 

import OurServiceBanner from "../components/banner/our-service-banner";
import { graphql } from "gatsby";

const ServicesPage = ({ data }) => (
  <Layout>
    <Header data={data} /> 
    <OurServiceBanner data={data} />
    <OurServices data={data} />
    <Footer data={data} /> 
  </Layout>
);

export const Head = () => <Seo title="Our Services" />;

export const query = graphql`
  query {
    serviceInfo: allMarkdownRemark {
      edges {
        node {
          frontmatter {
            serviceTitle
            serviceDescription
          }
        }
      }
    }
    testimonialInfo: allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
            link
            content
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
  }
`;

export default ServicesPage;
