import React, { Fragment } from "react"
import AboutUsCard from "./about-us-card"

function AboutUsWrapper({ data }) {
  return (
    <div id="about-us-wrapper">
      {data.aboutUsInfo.edges.map(({ node }, index) => {
        if (node.frontmatter.aboutUsTitle != null) {
          return (
            <Fragment key={index}>
              <span className="sub-title">{node.frontmatter.aboutUsSemiTitle}</span>
              <h3>{node.frontmatter.aboutUsTitle}</h3>
              <p>
                {node.frontmatter.aboutUsDescription}
              </p>
            </Fragment>
          )
        }
      })}
      <AboutUsCard data={data}/>
    </div>
  )
}

export default AboutUsWrapper
