import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import PriceBanner from "../components/banner/price-banner";

import Pricing from "../components/pricing/pricing";

const SecondPage = ({ data }) => (
  <Layout data={data}>
    {/* <Header data={data} /> */}
    <PriceBanner data={data} />

   
    <Pricing data={data} />
    


    {/* <Footer data={data} /> */}
  </Layout>
);

export const Head = () => <Seo title="Page Two" />;

export const query = graphql`
  query {
    siteLogo: allMarkdownRemark {
      edges {
        node {
          frontmatter {
            logoTitle
            logoImage {
              childImageSharp {
                gatsbyImageData(width: 300)
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
              socialIconClass
              socialLink
            }
            footerField {
              fieldTitle
              footerField {
                fieldItemIcon
                fieldItemLink
                fieldItemName
              }
            }
          }
        }
      }
    }
    pricingInfo: allMarkdownRemark {
      edges {
        node {
          frontmatter {
            pricingTitle
            pricingDescription
          }
        }
      }
    }
    pricingCardInfo: allMarkdownRemark {
      edges {
        node {
          frontmatter {
            buttonText
            featureItems {
              featureType
              pricingFeatureContent
            }
            pricingCardPrice
            pricingCardSuffix
            pricingCardPrefix
            pricingCardTitle
          }
        }
      }
    }
      priceBannerContent: markdownRemark(fileAbsolutePath: { regex: "/content/banner/priceBanner-content.md/" }) {
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

export default SecondPage;











