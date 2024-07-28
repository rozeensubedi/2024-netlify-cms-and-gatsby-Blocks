/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */
import React, {Fragment} from "react"
// import {  graphql } from "gatsby"
import GlobalStyles from '../styles/GlobalStyles'
import Banner from "./banner/banner";
import Header from "./header/header";
import Footer from "./footer/footer";



const Layout = ({ children, bannerData, data }) => {
    
 return(
<Fragment>
    <GlobalStyles/>
    <Header data={data} />
    {bannerData &&(
        < Banner bannerData={bannerData} />
    )}
    {children}
    <Footer data={data} />
</Fragment>
 );
}

export default Layout
