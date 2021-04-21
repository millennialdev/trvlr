import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Nav from '../components/nav';
import SEO from '../components/seo';
import './blog.css';

const BlogTemplate = (props) => {
    return (
        <Layout>
        <SEO title={props.data.contentfulBlog.seoTitle} description={props.data.contentfulBlog.seoDescription} keywords={props.data.contentfulBlog.seoKeywords} />
        <Nav />
        <div className='blog__header'>
            <div className='blog__hero' style={{backgroundImage:  `url(${props.data.contentfulBlog.featuredImage.fluid.src})`}}></div>
            <div className='blog__info'>
                <h1 className='blog__title'>{props.data.contentfulBlog.title}</h1>
            </div>
        </div>
        <div className='blog__wrapper'>
            <div className='blog__content'>
                <div dangerouslySetInnerHTML={
                    {__html: `${props.data.contentfulBlog.content.childMarkdownRemark.html}`}
                } />
            </div>
        </div>
        </Layout>
    )
}

export default BlogTemplate;


export const query = graphql`
 query BlogTemplate($id: String!) {
   contentfulBlog(id: {eq: $id}) {
     title
     id
     slug
     content {
       childMarkdownRemark {
         html
       }
     }
     seoTitle
     seoDescription
     seoAuthor
     seoKeywords
     seoImage {
       fluid(maxWidth: 1200, quality: 100) {
         ...GatsbyContentfulFluid
         src
       }
     }
     featuredImage {
       fluid(maxWidth: 1200, quality: 100) {
         ...GatsbyContentfulFluid
         src
       }
     }
   }
 }
`
