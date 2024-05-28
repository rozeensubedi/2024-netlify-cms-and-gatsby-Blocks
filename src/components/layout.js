/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */
import React, {Fragment} from "react"
// import {  graphql } from "gatsby"
import GlobalStyles from '../styles/GlobalStyles'


const Layout = ({ children }) => {
 return(
<Fragment>
    <GlobalStyles/>
{children}
</Fragment>
 );
}

export default Layout
