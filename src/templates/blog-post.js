import React from 'react';
import Layout from '../components/layout';
import { GatsbyImage } from 'gatsby-plugin-image';
import { graphql } from 'gatsby'

function BlogPost(props) {

    const post = props.data.markdownRemark;
    const { title } = post.frontmatter;

    return (
      <Layout>
          <div id="main">
            <section id="one" className="blog-post">
              <a className="blog-nav" href="/">Go Back</a>
              <div className="hero-banner">
                <h1>{title}</h1>
                <GatsbyImage style={{height: "400px"}} fluid={post.frontmatter.image.childImageSharp.fluid} />
              </div>
              <div dangerouslySetInnerHTML={{ __html: post.html }} />
            </section>
          </div>
      </Layout>
    )
}
export default BlogPost

export const query = graphql`
 query PostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        description
        image {
          childImageSharp{
            gatsbyImageData(
              width: 600
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            ) 
          }
        }
      }
    }
  }`
