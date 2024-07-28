import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import "../css/index.css"
const Header = React.lazy(() => import("../components/header/header"))
const OurServices = React.lazy(() => import("../components/our-services/our-services"))
const AboutUsWrapper = React.lazy(() => import("../components/about-us/about-us-wrapper"))
const Pricing = React.lazy(() => import("../components/pricing/pricing"))
const Banner = React.lazy(() => import("../components/banner/banner"))
const Footer = React.lazy(() => import("../components/footer/footer"))
const BlogBanner = React.lazy(() => import("../components/banner/blog-banner"))



const IndexPage = ({ data }) => (
  // <Layout banner={data.bannerInformation.edges[0].node.frontmatter}>
  <Layout bannerData={[data.bannerInformation.edges[0]?.node.frontmatter,data.blogBannerContent.frontmatter]} data={data}>
    
   <React.Suspense fallback={<div>Loading...</div>}>
      <Seo title="Home" />     
      <AboutUsWrapper data={data} />
      <OurServices data={data} />
      <BlogBanner data={data.blogBannerContent.frontmatter} />
      <Pricing data={data} />
      
    </React.Suspense>
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
`










