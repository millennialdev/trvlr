import React from "react"
import Nav from "../components/nav"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`]} />
    <Nav />
  </Layout>
)

export default IndexPage
