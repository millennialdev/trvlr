import * as React from "react"
import Nav from "../components/Nav"
import Layout from "../components/layout"
import SEO from "../components/seo"
import errorImage from "../images/general-header-image.jpg"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Nav />

    <header>
      <div className="header__section">
        <div
          className="header__hero"
          style={{
            backgroundImage: `url(${errorImage})`,
          }}
        ></div>
        <div className="header__content">
          <div className="header__info" style={{ margin: "5rem auto 0 auto" }}>
            <div style={{ marginBottom: "5rem" }}>
              <h1 className="header__title" style={{ marginBottom: "1rem" }}>
                404: Not Found
              </h1>
              <p className="header__subtitle">
                Looks like the page you tried navigating to doesn't exist!
              </p>
            </div>
            <a href="/">
              <button className="btn__med">Home</button>
            </a>
          </div>
        </div>
      </div>
    </header>
  </Layout>
)

export default NotFoundPage
