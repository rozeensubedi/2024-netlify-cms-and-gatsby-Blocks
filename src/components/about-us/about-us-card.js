import React from "react"
// import Card1 from '../../images/card-1.png';
import './about-us.css';

function AboutUsCard() {
  return (
    <div className="about-us-card">
      <div className="about-us-card-content">
        <span className="sub-title">DIGITAL MARKETING</span>
        <h2>Creative solutions, creative results</h2>
        <p>
          We believe brand interaction is key in communication. Real innovations
          and a positive customer experience are the heart of successful
          communication.
        </p>
        <span>Custom Components</span>
      </div>
      <div className="about-us-card-image">
            {/* <img src={Card1}/> */}
      </div>
    </div>
  )
}

export default AboutUsCard
