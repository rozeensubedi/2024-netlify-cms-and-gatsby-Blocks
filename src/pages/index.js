import * as React from "react"
// import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

import Header from '../components/header/header';
import OurServices from '../components/our-services/our-services';
import Navbar from '../components/header/navbar';



const IndexPage = () => (
  <Layout>
      <Header/>
    <OurServices/>
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
