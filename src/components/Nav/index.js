import React from "react"
import { Link } from "gatsby"
import { window } from "browser-monads"
import logo from "../../images/earth-logo.svg"
import "./nav.css"

const Nav = () => {
  return (
    <nav>
      <div className="nav_items">
        <a className="nav_item--left" href="/">
          <img src={logo} alt="Traveler Pack Logo" className="nav_item--logo" />
        </a>
        <Link
          className={
            window.location.href.indexOf("contect") > 0
              ? "nav__item--link active"
              : "nav__item--link"
          }
        >
          Contact
        </Link>
        <Link
          to="/"
          className={
            window.location.href.indexOf("blog") > 0 ||
            window.location.href.indexOf("category") > 0
              ? "nav__item--link active"
              : "nav__item--link"
          }
        >
          Blog
        </Link>
      </div>
    </nav>
  )
}

export default Nav
