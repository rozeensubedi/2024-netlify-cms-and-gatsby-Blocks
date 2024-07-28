import React, { useEffect, useState } from "react";
import "./footer.css";
import { FaFacebookSquare, FaLinkedin, FaTwitter, FaReddit } from "react-icons/fa";
import { IoIosHome, IoSettings, IoPerson } from "react-icons/io5";

function Footer({ data }) {
  const [footerInfo, setFooterInfo] = useState([]);

  useEffect(() => {
    if (data && data.footerInfo && data.footerInfo.edges) {
      let newInfo = [];
      data.footerInfo.edges.forEach(({ node }) => {
        if (node.frontmatter.footerTitle != null) {
          newInfo.push(node);
        }
      });
      setFooterInfo(newInfo);
    }
  }, [data]);

  const renderIcon = (iconClass) => {
    switch (iconClass) {
      case 'FaTwitter':
        return <FaTwitter />;
      case 'FaFacebookSquare':
        return <FaFacebookSquare />;
      case 'FaLinkedin':
        return <FaLinkedin />;
      case 'FaReddit':
        return <FaReddit />;
      case 'IoIosHome':
        return <IoIosHome />;
      case 'IoPerson':
        return <IoPerson />;
      case 'IoSettings':
        return <IoSettings />;
      default:
        return null; 
    }
  };

  return (
    <footer>
      {footerInfo.length > 0 && (
        <div className="footer-wrapper">
          <div className="footer-content-wrapper">
            <div className="column">
              <div className="single-footer-widget single-footer-widget-4">
                <a href="/" aria-label="Go to homepage">
                  <img
                    src="/images/logo.png"
                    alt="Logo"
                    className="footer-logo"
                    width="100%"
                    height="auto"
                  />
                  {footerInfo[0].frontmatter.footerTitle}
                </a>
                <p>{footerInfo[0].frontmatter.footerContent}</p>
                <ul className="social-link">
                  {footerInfo[0].frontmatter.socialIcons.map((icon, index) => (
                    <li key={index}>
                      <a href={icon.socialLink} aria-label={icon.socialIconLabel}>
                        {renderIcon(icon.socialIconClass)}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {footerInfo[0].frontmatter.footerField.map((field, index) => (
              <div key={index} className="column"> 
                <div className="single-footer-widget single-footer-widget-2">
                  <h3>{field.fieldTitle}</h3>
                  <ul className="footer-links-list">
                    {field.footerField.map((item, idx) => (
                      <li key={idx}>
                        <a href={item.fieldItemLink}>{item.fieldItemName}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
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
                  <a href="/privacy-policy">Privacy Policy</a>
                </li>
                <li>
                  <a href="/terms-and-conditions">Terms & Conditions</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}

export default Footer;



