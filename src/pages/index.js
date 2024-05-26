import * as React from "react"
// import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

import Header from '../components/header/header';
import OurServices from '../components/our-services/our-services';
import Navbar from '../components/header/navbar';
import { graphql } from "gatsby";



const IndexPage = ({data}) => (
 
  <Layout>
      <Header />
    <OurServices data ={data}/>
    <Navbar/>
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
query{
  testimonialInfo:   allMarkdownRemark {
    edges {
      node {
        frontmatter {
          title
          content
          link
        }
        id
      }
    }
  }
}
`;