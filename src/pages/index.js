import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import { GatsbyImage } from 'gatsby-plugin-image'

const IndexPage = (props) => {
  const postList = props.data.allMarkdownRemark;

  return (
    <Layout>
        <div id="main">
            <section id="one">
                <header className="major">
                    <h2
                      data-sal="slide-up"
                      data-sal-delay="700"
                      data-sal-easing="ease"
                      data-sal-duration="1000"
                      className="main-title-intro">Design to improve the experience of others.</h2>
                   {/* <div className="bars"
                    data-sal="fade-in"
                    data-sal-delay="0"
                    data-sal-easing="ease"
                    data-sal-duration="1000"
                    ></div>*/}
                </header>
                <p 
                data-sal="slide-up"
                data-sal-delay="700"
                data-sal-easing="ease"
                data-sal-duration="1000"
                className="intro-line">Design is about a guided progression that empowers us and creates safety and sustainability. We cannot be afraid to take risks and take ownership of our faults in addtion to our strengths. I have found strength in my weaknesses and I have learned from my losses. Everyday is a new challenge and I accept it gladly.</p>
                <ul 
                data-sal="slide-up"
                data-sal-delay="700"
                data-sal-easing="ease"
                data-sal-duration="1000"
                className="actions">
                  <li><Link to="/about" className="button">Learn More</Link></li>
                </ul>
            </section>
            <section id="two">
                <h2>Recent Work</h2>
              <ul className="grid">
                {postList.edges.map(({ node }, i) => (
                  <li 
                    data-sal="slide-up"
                    data-sal-easing="ease"
                    data-sal-duration="800"
                  >
                    <Link to={node.fields.slug} className="link" >
                      <div className="post-list">
                        <GatsbyImage sizes={node.frontmatter.image.childImageSharp.sizes} />
                        <em>{node.frontmatter.date}</em>
                        <h3>{node.frontmatter.title}</h3>
                        <p>{node.frontmatter.description}</p>
                      </div>
                    </Link>
                  </li>
                ))}
                </ul>
                <ul className="actions">
                    <li><a href="/portfolio" className="button">View More</a></li>
                </ul>
            </section>

            <section id="three">
                <h2>Get In Touch</h2>
                <p>Want to work together on a project? Send me an email with a description of what it is you would like to work on. I will respond to all inquires within 24 hours.</p>
                <div className="row">
                    <div className="8u 12u$(small)">
                      <form method="POST" action="https://formspree.io/contact@willdossantos.com">
                          <div className="row uniform 50%">
                              <div className="6u 12u$(xsmall)"><input type="text" name="name" id="name" placeholder="Name" /></div>
                              <div className="6u 12u$(xsmall)"><input type="email" name="email" id="email" placeholder="Email" /></div>
                              <div className="12u"><textarea name="message" id="message" placeholder="Message" rows="4"></textarea></div>
                          </div>
                          <ul className="actions mt-1">
                            <li><input type="submit" value="Send Message" /></li>
                          </ul>
                        </form>
                    </div>
                    <div className="4u 12u$(small)">
                        <ul className="labeled-icons">
                            <li>
                                <h3 className="icon fa-envelope-o"><span className="label">Email</span></h3>
                                <a href="#">contact@willdossantos.com</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

        </div>

    </Layout>
  )
}
export default IndexPage;
export const listQuery = graphql`
  query ListQuery {
    allMarkdownRemark(
      limit: 6
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
                    maxWidth: 600
                    placeholder: BLURRED
                    formats: [AUTO, WEBP, AVIF]
                  ) 
                {
            }
            description
          }
        }
      }
    }
  }
  }
`
