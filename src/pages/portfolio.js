import React from 'react';
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import { GatsbyImage } from 'gatsby-plugin-image'

const Portfolio = (props) => {
  const postList = props.data.allMarkdownRemark;
  return (
  <Layout style={{ color: `teal` }}>
    <div id="main" className="section--about">
      <a href="/">Go Back</a>
      <section id="one">
        <h1>A collection of work from then to now</h1>
        <ul className="grid">
          {postList.edges.map(({ node }, i) => (
            <li
            data-sal="slide-up"
            data-sal-easing="ease"
            data-sal-duration="1000"
            >
              <Link to={node.fields.slug} className="link" >
                <div className="post-list">
                  <GatsbyImage image={node.frontmatter.image} />
                  <em>{node.frontmatter.date}</em>
                  <h3>{node.frontmatter.title}</h3>
                  <p>{node.frontmatter.description}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  </Layout>
  )
}

export default Portfolio;

export const listQuery = graphql`
  query PortListQuery {
    allMarkdownRemark(
      limit: 20
      sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          fields{
            slug
          }
          excerpt(pruneLength: 80)
          frontmatter {
            date(formatString: "MMMM Do YYYY")
            title
            image {
              childImageSharp{
                gatsbyImageData(
                  width: 600
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
            description
          }
        }
      }
    }
  }
`