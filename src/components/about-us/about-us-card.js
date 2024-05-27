import React, { Fragment } from "react"
// import Card1 from '../../images/card-1.png';
import './about-us.css';

function AboutUsCard({data}) {
  return (
   <Fragment>
    {data.aboutUsCardInfo.edges.map(({node}, index)=>{
      if(node.frontmatter.aboutUsCardTitle != null){
        <div key={index} className="about-us-card">
        <div className="about-us-card-content">
          <span className="sub-title">{node.frontmatter.aboutUsCardSemiTitle}</span>
          <h2>{node.frontmatter.aboutUsCardTitle}</h2>
          <p>
           {node.frontmatter.aboutUsCardDescription}
          </p>
          <span>Custom Components</span>
        </div>
        <div className="about-us-card-image">
              {/* <img src={Card1}/> */}
        </div>
      </div>
      }
    })}
   </Fragment>
  )
}

export default AboutUsCard
