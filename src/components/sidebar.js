import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Sidebar = ({ siteTitle }) => (
  <div className="sidebar">
    <div className="sidebar__content">
      <h2>william g. dos santos</h2>
      <h4>Senior Designer & Creative Director</h4>
    </div>
    <footer
      style={{
        marginTop: `2rem`,
      }}
    >
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.com">Gatsby</a>
    </footer>
  </div>
)

Sidebar.propTypes = {
  siteTitle: PropTypes.string,
}

Sidebar.defaultProps = {
  siteTitle: ``,
}

export default Sidebar
