import React from "react"
import "./footer.css"

import footer from "../../images/general-footer-image.jpg"

const Footer = () => {
  return (
    <div
      className="footer__hero"
      style={{
        backgroundImage: `linear-gradient(
            to bottom, 
            rgba(10,10,10,1) 0%,
            rgba(10,10,10,0.6) 50%,
            rgba(10,10,10,1) 100%),
            url(${footer})`,
      }}
    ></div>
  )
}

export default Footer
