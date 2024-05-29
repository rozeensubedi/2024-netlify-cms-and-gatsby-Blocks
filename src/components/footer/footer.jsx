import React from "react"
import "./footer.css"

function Footer() {
  return (
    <footer>
      <div className="footer-wrapper">
        <div className="footer-content-wrapper">
          <div className="single-footer-widget single-footer-widget-4">
            <a href="#">
              <img />
            </a>
            <p>
              Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
              suspendisse.
            </p>
            <ul className="social-link">
              <li>
                <a href="#">Facebook Icon</a>
              </li>
              <li>
                <a href="#">Twitter Icon</a>
              </li>
            </ul>
          </div>
          <div className="single-footer-widget single-footer-widget-2">
            <h3>Explore</h3>
            <ul className="footer-links-list">
              <li>
                <a href="#">Home</a>
              </li>
            </ul>
          </div>
          <div className="single-footer-widget single-footer-widget-2">
            <h3>Resources</h3>
            <ul className="footer-links-list">
              <li>
                <a href="#">Our Scientists</a>
              </li>
            </ul>
          </div>
          <div className="single-footer-widget single-footer-widget-4">
            <h3>Address</h3>
            <ul className="footer-contact-info">
              <li>
                Icon 175 5th Ave, New York, NY 10010,
                <br />
                United States
              </li>
            </ul>
          </div>
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
    </footer>
  )
}

export default Footer
