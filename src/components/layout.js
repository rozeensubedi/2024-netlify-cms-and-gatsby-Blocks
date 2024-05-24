/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
// import {  graphql } from "gatsby"
import Header from './header/header';
import OurServices from './our-services/our-services';
import Navbar from './header/navbar';


const Layout = ({ children }) => {
 return(
  <div>
    <Header/>
    <OurServices/>
    <Navbar/>
  </div>
 );
}

export default Layout
