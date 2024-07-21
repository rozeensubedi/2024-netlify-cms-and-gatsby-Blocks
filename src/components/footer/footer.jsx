import React, { useEffect, useState } from "react"
import "./footer.css"
import { FaFacebookF, FaTwitter, FaLinkedinIn, IoIosHome, IoPerson } from "react-icons/fa";
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

  const renderIcon = (iconClass) => {
    switch (iconClass) {
      case 'FaTwitter':
        return <FaTwitter />;
      case 'FaFacebook':
        return <FaFacebookF />;
      case 'FaLinkedin':
        return <FaLinkedinIn />;
      case 'IoIosHome':
        return <IoIosHome />;
        case 'IoPerson':
          return <IoPerson />;
      
      default:
        return null; 
    }
  };
  
  return (
    <footer>
      {footerInfo.length > 0 && (
        <div className="footer-wrapper">
          <div className="footer-content-wrapper">
            {/* <div className="column">
            <a href="#">
            <img src="/images/logo.png" alt="Logo" className="footer-logo" />
            </a>
            


            </div> */}
            <div className="column">
            <div className="single-footer-widget single-footer-widget-4">
              <a href="#">
              <img src="/images/logo.png" alt="Logo" className="footer-logo" />
                {footerInfo[0].frontmatter.footerTitle}
              </a>
              <p>{footerInfo[0].frontmatter.footerContent}</p>
              <ul className="social-link">
                {footerInfo[0].frontmatter.socialIcons.map((icon, index) => {
                  return (
                    <li key={index}>
                      <a href={icon.socialLink}>
                        <div
                          
                          // dangerouslySetInnerHTML={{
                          //   __html: icon.socialIconClass,
                          // }}
                        />
                        {renderIcon(icon.socialIconClass)}
                      </a>
                    </li>
                  )
                })}
              </ul>
            </div>

            </div>
            
            {footerInfo[0].frontmatter.footerField.map((field, index) => {
              return (
                <div className="column"> 
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


                </div>
                
              )
            })}
          </div>
          <div className="footer-bottom-area">
            <div className="footer-bottom-child">
              <p>
                Copyright @ 2024 <strong>RS</strong> All rights reserved
                <a href="/"> Envy Theme</a>
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
