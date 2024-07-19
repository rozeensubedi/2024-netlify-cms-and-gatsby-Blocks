import React from 'react'
import { Link } from "gatsby";
import * as styles from "./header.module.css"



function Navbar() {
  return (
    <div className={styles.headermiddlecontent}>
        <nav>
            <ul>
              <Link to="/"></Link>
            
              <Link to="/about">About us</Link>
              <Link to="/services">Service</Link>
              <Link to="/blog">Blog</Link>
              <Link to="/page-2">Page</Link>
            </ul>
          </nav>
          
    </div>
    
  )
}

export default Navbar