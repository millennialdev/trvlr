import React from "react"
import Nav from "../components/nav"
import Featured from "../components/featured"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Nav />
    <Featured />
  </Layout>
)

export default IndexPage
