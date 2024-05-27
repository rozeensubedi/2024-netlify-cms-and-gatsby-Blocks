import React from "react"
import AboutUsCard from "./about-us-card"

function AboutUsWrapper() {
  return (
    <div id="about-us-wrapper">
      <span className="sub-title">ABOUT US</span>
      <h3>Amazing Business Solution Whatever Your Needs</h3>
      <p>
        Real innovations and a positive customer experience are the heart of
        successful communication. No fake products and services.
      </p>
      <AboutUsCard/>
    </div>
  )
}

export default AboutUsWrapper
