import React, {useEffect, useState, Fragment} from "react"
import "./pricing.css"
import PricingCard from "./pricing-card"

function Pricing({data}) {
  const [info, setInfo] = useState([])
  const [pricingCardInfo, setPricingCardInfo] = useState([])
  useEffect(() => {
    let newInfo = []
    data.pricingInfo.edges.forEach(({ node }) => {
      if (node.frontmatter.pricingTitle != null) {
        newInfo.push(node)
      }
    })
    setInfo(newInfo)
  }, [])
  useEffect(() => {
    let newCardInfo = []
    data.pricingCardInfo.edges.forEach(({ node }) => {
      if (node.frontmatter.pricingCardtitle != null) {
        newCardInfo.push(node)
      }
    })
    setPricingCardInfo(newCardInfo)
  }, [])

  
  return (
    <div id="pricing-area">
      <div className="pricing-area-title">
       {info[0] != undefined && (
         <Fragment>
          <h2>{info[0].frontmatter.pricingTitle}</h2>
         <p>
          {info[0].frontmatter.pricingDescription}
         </p>
          </Fragment>
       )}
      </div>
      <div className="pricing-container-wrapper">
        <PricingCard/>
        <PricingCard/>
        <PricingCard/>
        <PricingCard/>
        
      </div>
    </div>
  )
}

export default Pricing
