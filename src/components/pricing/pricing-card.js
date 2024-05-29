import React from "react"
import { IoCloseCircleSharp } from "react-icons/io5"
import { FaCheckCircle } from "react-icons/fa"

function PricingCard({
  buttonText,
  featureItems,
  pricingCardPrice,
  pricingCardSuffix,
  pricingCardTitle,
  pricingCardPrefix,
}) {
  return (
    <div className="pricing-container">
      <div className="pricing-header">
        <h3>{pricingCardTitle}</h3>
      </div>
      <div className="price">
        <sup>{pricingCardPrefix}</sup>
        {pricingCardPrice}
        <sub>{pricingCardSuffix}</sub>
      </div>
      <ul className="pricing-features">
        {featureItems.length > 0 &&
          featureItems.map(item => {
            return (
              <li>
                {item.featureType == "unavailable" && (
                  <IoCloseCircleSharp
                    style={{
                      color: "red",
                      position: "absolute",
                      right: "0",
                      top: "2px",
                    }}
                  />
                )}
                {item.featureType == "available" && (
                  <FaCheckCircle
                    style={{
                      color: "green",
                      position: "absolute",
                      right: "0",
                      top: "2px",
                    }}
                  />
                )}
                {item.pricingFeatureContent}
              </li>
            )
          })}
      </ul>
      <div className="btn-box">
        <a href="#">{buttonText}</a>
      </div>
    </div>
  )
}

export default PricingCard
