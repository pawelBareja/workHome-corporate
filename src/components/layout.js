import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
// import "@fontsource/lato"
import "@fontsource/poppins/200.css"
import "@fontsource/poppins/400.css"
import "@fontsource/poppins/900.css"

import Nav from "../components/nav/Nav"
import BackToTopButton from "../components/backToTopButton/BackToTopButton"
import ProgressBar from "../components/progressBar/ProgressBar"
import "../colors.scss"
import "../main.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Nav />
      <main>{children}</main>
      <section id="contact">
        <footer className="footer">
          <h1>LOGO</h1>
          <p>Workhome sp z o o</p>
          <p>
            <span>Telefon:</span>+48 57 333 35
          </p>
          <p>
            <span>Email:</span>dfghjkjhgfddfgh
          </p>
          <div className="copyright">
            © {new Date().getFullYear()}{" "}
            <a href="https://www.barejastudio.pl">barejastudio.pl</a>
          </div>
        </footer>
      </section>

      <BackToTopButton />
      <ProgressBar />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
