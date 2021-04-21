import React from "react"
import Nav from "../components/Nav"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
import { graphql, navigate } from "gatsby"
import "../components/Featured/featured.css"
import "../components/Home/home.css"
import "./index.css"
import Footer from "../components/Footer"

const IndexPage = ({ data }) => {
  if (true) {
  }

  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <Nav />

      <header>
        {data.allContentfulBlog.edges.map(edge =>
          edge.node.featured == true ? (
            <div key={edge.node.id} className="header__section">
              <div
                className="header__hero"
                style={{
                  backgroundImage: `url(${edge.node.featuredImage.fluid.src})`,
                }}
              ></div>
              <div className="header__content">
                <div className="header__info">
                  <h1 className="header__title">{edge.node.title}</h1>
                  <p className="header__subtitle">
                    {edge.node.shortDescription}
                  </p>
                  <button
                    onClick={() => navigate(`/blog/${edge.node.slug}`)}
                    className="btn__med"
                  >
                    Read More
                  </button>
                </div>
              </div>
            </div>
          ) : (
            false
          )
        )}
      </header>

      <div className="feed">
        {data.allContentfulBlog.edges.map(edge =>
          edge.node.home == true ? (
            <div
              key={edge.node.id}
              className="card"
              style={{
                backgroundImage: `linear-gradient(
                    to bottom,
                    rgba(10,10,10,0) 0%,
                    rgba(10,10,10,0) 50%,
                    rgba(10,10,10,0.7) 100%),
                    url(${edge.node.featuredImage.fluid.src})`,
              }}
              onClick={() => navigate(`/blog/${edge.node.slug}`)}
            >
              {edge.node.category.map(cate => (
                <p className="card__category">{cate.title}</p>
              ))}
              <p className="card__title">{edge.node.title}</p>
            </div>
          ) : (
            false
          )
        )}
      </div>

      <Link to="/blog" className="viewmore">
        View More
      </Link>
      <Footer />
    </Layout>
  )
}

export const query = graphql`
  query TotalQuery {
    allContentfulBlog(
      limit: 20
      sort: { fields: createdAt, order: DESC }
      filter: { node_locale: { eq: "en-US" } }
    ) {
      edges {
        node {
          id
          slug
          title
          featured
          home
          category {
            id
            title
          }
          shortDescription
          featuredImage {
            fluid(maxWidth: 1200, quality: 85) {
              src
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`

export default IndexPage
