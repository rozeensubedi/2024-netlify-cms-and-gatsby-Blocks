import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

import Header from "../components/header/header"
import OurServices from "../components/our-services/our-services"
import Navbar from "../components/header/navbar"
import { graphql } from "gatsby"
import AboutUsWrapper from "../components/about-us/about-us-wrapper"
import Pricing from "../components/pricing/pricing"
import Banner from "../components/banner/banner"
import Footer from "../components/footer/footer"
import "../css/index.css"

const IndexPage = ({ data }) => (
  <Layout>
    <Header data={data} />
    <Banner data={data}/>
    <OurServices data={data} />
    <AboutUsWrapper data={data} />
    <Pricing data={data}/>
    <Footer data={data}/>
    <Navbar />
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage

export const query = graphql`
  query {
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
    serviceInfo: allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            serviceDescription
            serviceTitle
          }
        }
      }
    }
    aboutUsInfo: allMarkdownRemark {
      edges {
        node {
          frontmatter {
            aboutUsDescription
            aboutUsSemiTitle
            aboutUsTitle
          }
          id
        }
      }
    }
    aboutUsCardInfo: allMarkdownRemark {
      edges {
        node {
          frontmatter {
            aboutUsCardDescription
            aboutUsCardSemiTitle
            aboutUsCardTitle
            aboutUsCardFeaturedImage {
              childImageSharp {
                gatsbyImageData(aspectRatio: 1.5)
              }
            }
            modularWidget {
              semiTitle
              title
            }
          }
        }
      }
    }
    pricingInfo: allMarkdownRemark {
      edges {
        node {
          frontmatter {
            pricingDescription
            pricingTitle
          }
        }
      }
    }
    pricingCardInfo: allMarkdownRemark {
      edges {
        node {
          frontmatter {
            pricingCardPrice
            pricingCardSuffix
            pricingCardTitle
            pricingCardPrefix
            featureItems {
              pricingFeatureContent
              featureType
            }
            buttonText
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
            footerContent
            footerTitle
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
    bannerInformation: allMarkdownRemark {
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
`
