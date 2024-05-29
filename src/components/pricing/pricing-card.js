import React from "react"
import { IoCloseCircleSharp } from "react-icons/io5"
import { FaCheckCircle } from "react-icons/fa"

function PricingCard() {
  return (
    <div className="pricing-container">
      <div className="pricing-header">
        <h3>Weekly Plan</h3>
      </div>
      <div className="price">
        <sup>$</sup>
        120
        <sub>/ Per week</sub>
      </div>
      <ul className="pricing-features">
        <li>
          <IoCloseCircleSharp
            style={{
              color: "red",
              position: "absolute",
              right: "0",
              top: "2px",
            }}
          />
          SEO&Branding
        </li>
        <li>
          <FaCheckCircle
            style={{
              color: "green",
              position: "absolute",
              right: "0",
              top: "2px",
            }}
          />
          Digital Marketing
        </li>
        <li>
          <FaCheckCircle
            style={{
              color: "green",
              position: "absolute",
              right: "0",
              top: "2px",
            }}
          />
          Google Analytics
        </li>
      </ul>
      <div className="btn-box">
        <a href="#">Icon Select the Plan</a>
      </div>
    </div>
  )
}

export default PricingCard
