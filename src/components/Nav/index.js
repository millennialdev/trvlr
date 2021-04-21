import React from "react"
import { Link } from "gatsby"
import { window } from "browser-monads"
import logo from "../../images/compass-logo.svg"
import "./nav.css"

const Nav = () => (
  <nav>
    <div className="nav__items">
      <a className="nav__item--left" href="/">
        <img src={logo} alt="Traveler Pack Logo" className="nav__item--logo" />
      </a>
      <Link
        className={
          window.location.href.indexOf("contact") > 0
            ? "nav__item--link active"
            : "nav__item--link"
        }
        to="/contact"
      >
        Contact
      </Link>
      <Link
        className={
          window.location.href.indexOf("blog") > 0 ||
          window.location.href.indexOf("category") > 0
            ? "nav__item--link active"
            : "nav__item--link"
        }
        to="/blog"
      >
        Blog
      </Link>
    </div>
  </nav>
)

export default Nav
