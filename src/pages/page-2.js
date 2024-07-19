import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Header from "../components/header/header"

import Footer from "../components/footer/footer"

const SecondPage = ({ data }) => (
  <Layout>
    <Header data={data} />
    

    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>

    <Footer data={data} />
  </Layout>
)

export const Head = () => <Seo title="Page Two" />

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
  }
`

export default SecondPage
