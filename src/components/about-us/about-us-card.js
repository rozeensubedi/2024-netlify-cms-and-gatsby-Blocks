import React, { Fragment } from "react"
// import Card1 from '../../images/card-1.png';
import './about-us.css';
import {getImage, GatsbyImage} from 'gatsby-plugin-image';

function AboutUsCard({data}) {
  console.log(data.aboutUsCardInfo);
  return (
   <Fragment>
    {data.aboutUsCardInfo.edges.map(({node}, index)=>{

      if(node.frontmatter.aboutUsCardTitle != null){
        return <div key={index} className="about-us-card">
        <div className="about-us-card-content">
          <span className="sub-title">{node.frontmatter.aboutUsCardSemiTitle}</span>
          <h2>{node.frontmatter.aboutUsCardTitle}</h2>
          <p>
           {node.frontmatter.aboutUsCardDescription}
          </p>
          <span>Custom Components</span>
          <div>
          <h3>{node.frontmatter.modularWidget.title}</h3>
          <p>{node.frontmatter.modularWidget.semiTitle}</p>
        </div>
        </div>
        <div className="about-us-card-image">
              <p>
              <GatsbyImage
              image={getImage(node.frontmatter.aboutUsCardFeaturedImage)}
              alt={node.frontmatter.title}
              />
              </p>
        </div>
        
      </div>
      }
    })}
   </Fragment>
  )
}

export default AboutUsCard
