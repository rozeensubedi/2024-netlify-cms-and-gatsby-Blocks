import React, { useEffect, useState } from "react"
import "./footer.css"
// import { FaFontAwesome, FaTwitter } from "react-icons/fa"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function Footer({ data }) {
  const [footerInfo, setFooterInfo] = useState([])

  useEffect(() => {
    let newInfo = []
    data.footerInfo.edges.forEach(({ node }) => {
      if (node.frontmatter.footerTitle != null) {
        newInfo.push(node)
      }
    })
    setFooterInfo(newInfo)
  }, [])
  console.log(footerInfo)
  return (
    <footer>
      {footerInfo.length > 0 && (
        <div className="footer-wrapper">
          <div className="footer-content-wrapper">
            <div className="single-footer-widget single-footer-widget-4">
              <a href="#">
                <img />
                {footerInfo[0].frontmatter.footerTitle}
              </a>
              <p>{footerInfo[0].frontmatter.footerContent}</p>
              <ul className="social-link">
                {footerInfo[0].frontmatter.socialIcons.map((icon, index) => {
                  return (
                    <li key={index}>
                      <a href={icon.socialLink}>
                        <div
                          dangerouslySetInnerHTML={{
                            __html: icon.socialIconClass,
                          }}
                        />
                      </a>
                    </li>
                  )
                })}
              </ul>
            </div>
            {footerInfo[0].frontmatter.footerField.map((field, index) => {
              return (
                <div
                  key={index}
                  className="single-footer-widget single-footer-widget-2"
                >
                  <h3>{field.fieldTitle}</h3>
                  <ul className="footer-links-list">
                    {field.footerField.map((field, index) => {
                      return (
                        <li key={index}>
                          {/* <FontAwesomeIcon icon={field.fieldItemIcon} /> */}
                          <a href={field.fieldItemLink}>
                            {field.fieldItemName}
                          </a>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              )
            })}
          </div>
          <div className="footer-bottom-area">
            <div className="footer-bottom-child">
              <p>
                Copyright @ 2024 <strong>Rewy</strong> All rights reserved
                <a href="#">Envy Theme</a>
              </p>
            </div>
            <div className="footer-bottom-child">
              <ul>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Terms & Conditions</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </footer>
  )
}

export default Footer
