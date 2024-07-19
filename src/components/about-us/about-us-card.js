import React, { Fragment, useState } from "react"
// import Card1 from '../../images/card-1.png';
import "./about-us.css"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import { IoMdCheckmark } from "react-icons/io"
import { useEffect } from "react"

function AboutUsCard({ data }) {
  const [info, setInfo] = useState([])
  useEffect(() => {
    let newInfo = []
    data.aboutUsCardInfo.edges.forEach(({ node }) => {
      if (node.frontmatter.aboutUsCardTitle != null) {
        newInfo.push(node)
      }
    })
    setInfo(newInfo)
  }, [])
  return (
    <Fragment>
      {info != 0 &&
        info.map((element, index) => {
          return (
            <div
              key={index}
              className={`about-us-card ${
                index > 0 && index % 2 != 0 ? "about-us-card-reverse" : ""
              }`}
            >
              <div className="about-us-card-content">
                <span className="sub-title">
                  {element.frontmatter.aboutUsCardSemiTitle}
                </span>
                <h2>{element.frontmatter.aboutUsCardTitle}</h2>
                <p>{element.frontmatter.aboutUsCardDescription}</p>
                {/* <span>Custom Components</span> */}
                {element.frontmatter.modularWidget != undefined &&
                  element.frontmatter.modularWidget.map((item, index) => {
                    return (
                      <div key={index} className="about-us-card-list">
                        <h3>
                          <IoMdCheckmark style={{ color: "orange" }} />{" "}
                          {item.title}
                        </h3>
                        <p>{item.semiTitle}</p>
                      </div>
                    )
                  })}
              </div>
              <div className="about-us-card-image">
                <GatsbyImage
                  image={getImage(element.frontmatter.aboutUsCardFeaturedImage)}
                  alt={element.frontmatter.aboutUsCardTitle}
                />
              </div>
            </div>
          )
        })}
    </Fragment>
  )
}

export default AboutUsCard
